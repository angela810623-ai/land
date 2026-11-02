import {questions,terrains,colors} from './questions';
import {simulate} from './marbles';
export type Stage='lobby'|'tutorial'|'sculpt'|'quiz'|'race'|'results';
export type Player={id:string;token:string;name:string;color:string;done:string[];answers:Record<string,number>;assisted:string[]};
export type Room={code:string;hostToken:string;stage:Stage;created:number;started:number;quizStart:number;raceStart:number;seed:number;players:Player[];demo:boolean};
export type Store={load:(code:string)=>Promise<{state:string;revision:number}|null>;insert:(room:Room)=>Promise<void>;cas:(code:string,rev:number,state:string)=>Promise<boolean>};
export class GameError extends Error{constructor(message:string,public status=400){super(message);}}
const fail=(s:string,status=400):never=>{throw new GameError(s,status);};
const uid=()=>crypto.randomUUID();
export function marbles(p:Player){return (p.done.length===5?5:0)+Object.entries(p.answers).reduce((s,[i,a])=>s+(questions[+i]?.answer===a?2:0),0);}
export function quizClock(room:Room,now=Date.now()){
 const elapsed=Math.max(0,now-room.quizStart),index=Math.min(5,Math.floor(elapsed/25000));
 return {index,reveal:elapsed>=150000||elapsed%25000>=18000,remaining:Math.max(0,Math.ceil((25000-elapsed%25000)/1000)),finished:elapsed>=150000};
}
export function snapshot(r:Room,playerId?:string,host=false,now=Date.now()){
 const q=quizClock(r,now),active=questions[q.index];
 const showResults=r.stage==='results'||r.stage==='race'&&now-r.raceStart>30000;
 // Demo answers unfold with the question clock; formal games only use saved player answers.
 if(r.demo&&r.stage==='quiz'){r=structuredClone(r);r.players.forEach((p,i)=>{p.answers={};questions.forEach((question,j)=>{if(now-r.quizStart>=j*25000+3000)p.answers[j]=(i+j)%4===0?(question.answer+1)%4:question.answer;});});}
 const balls=showResults?simulate(r.seed,r.players.map(p=>({...p,marbles:marbles(p)})),false):[];
 const totals=Object.fromEntries(r.players.map(p=>[p.id,balls.filter(b=>b.player===p.id).reduce((s,b)=>s+b.points,0)]));
 const ranked=[...r.players].sort((a,b)=>(totals[b.id]||0)-(totals[a.id]||0));
 return {code:r.code,stage:r.stage,started:r.started,quizStart:r.quizStart,raceStart:r.raceStart,seed:r.seed,demo:r.demo,serverNow:now,
  players:r.players.map(p=>({id:p.id,name:p.name,color:p.color,done:p.done,assisted:p.assisted,marbles:marbles(p),answered:Object.keys(p.answers).length,
   currentAnswered:p.answers[q.index]!==undefined, ...(p.id===playerId?{answers:p.answers}:{}),
   ...(showResults?{score:totals[p.id]||0,rank:1+ranked.filter(x=>(totals[x.id]||0)>(totals[p.id]||0)).length}:{})})),
  question:r.stage==='quiz'?{text:active.q,options:active.options,shape:active.shape,...q,...(q.reveal?{answer:active.answer,why:active.why}:{})}:null,
  sculptRemaining:r.stage==='sculpt'?Math.max(0,Math.ceil((r.started+7*60000-now)/1000)):0,
  resultsReady:showResults,host};
}
export async function createRoom(store:Store,demo=false){
 for(let i=0;i<8;i++){
 const code=String(100000+crypto.getRandomValues(new Uint32Array(1))[0]%900000);
 if(await store.load(code))continue;
 const room:Room={code,hostToken:uid(),stage:'lobby',created:Date.now(),started:0,quizStart:0,raceStart:0,seed:crypto.getRandomValues(new Uint32Array(1))[0],players:[],demo};
 if(demo)room.players=colors.map((color,i)=>({id:uid(),token:uid(),name:['橘子探險家','薄荷小隊長','紫薯造山師','莓果觀察員','藍天旅行家'][i],color,done:[],answers:{},assisted:[]}));
 await store.insert(room);return {room:snapshot(room,undefined,true),hostToken:room.hostToken};
 }return fail('暫時無法建立場次，請再試一次。',503);
}
export async function readRoom(store:Store,code:string,token?:string){
 const row=await store.load(code);if(!row)return fail('找不到這個房號，請確認六位數字。',404);
 const room:Room=JSON.parse(row.state);return snapshot(room,room.players.find(p=>p.token===token)?.id,room.hostToken===token);
}
export async function act(store:Store,code:string,body:any){
 for(let retry=0;retry<10;retry++){
 const row=await store.load(code);if(!row)return fail('這個場次不存在。',404);
 const r:Room=JSON.parse(row.state),now=Date.now();const host=body.token===r.hostToken;
 let p=r.players.find(p=>p.token===body.token),issued:string|undefined;
 if(body.action==='join'){
  if(r.stage!=='lobby')return fail('這場已經開始，請等下一梯次。');
  if(r.players.length>=5)return fail('本場五個位置已滿，請等下一梯次。');
  const name=String(body.name||'').trim().slice(0,12);if(!name)return fail('請輸入 1–12 字的暱稱。');
  if(r.players.some(p=>p.name===name))return fail('這個暱稱有人用了，換一個吧！');
  p={id:uid(),token:uid(),name,color:colors[r.players.length],done:[],answers:{},assisted:[]};r.players.push(p);issued=p.token;
 }else if(['tutorial','sculpt','quiz','race','results','next','assist','demo-fill','demo-race'].includes(body.action)){
  if(!host)return fail('只有主持人可以操作這個按鈕。',403);
  if(body.action==='tutorial'){if(r.stage!=='lobby')return fail('目前不能開始教學。');if(!r.players.length)return fail('至少一位玩家加入後才能開始。');r.stage='tutorial';}
  if(body.action==='sculpt'){if(!['lobby','tutorial'].includes(r.stage))return fail('目前不能開始捏塑。');if(!r.players.length)return fail('請先讓玩家加入。');r.stage='sculpt';r.started=now;}
  if(body.action==='assist'){
   if(r.stage!=='sculpt')return fail('僅能在捏塑關卡使用輔助。');
   if(now-r.started<7*60000)return fail('七分鐘結束後才會開啟全員輔助。');
   for(const player of r.players){player.assisted=terrains.filter(t=>!player.done.includes(t.id)).map(t=>t.id);player.done=terrains.map(t=>t.id);}
  }
  if(body.action==='demo-race'){if(!r.demo)return fail('僅供演示場次使用。');r.players.forEach((player,i)=>{player.done=terrains.map(t=>t.id);questions.forEach((q,j)=>{player.answers[j]=(i+j)%4===0?(q.answer+1)%4:q.answer;});});r.stage='race';r.raceStart=now;}
  if(body.action==='demo-fill'){
   if(!r.demo||r.stage!=='sculpt')return fail('僅供演示場次使用。');
   r.players.forEach(player=>{player.done=terrains.map(t=>t.id);});
  }
  if(body.action==='quiz'){if(r.stage!=='sculpt')return fail('請先完成捏塑關卡。');if(r.players.some(p=>p.done.length<5))return fail('還有人未完成五種地形，時間到可使用輔助。');r.stage='quiz';r.quizStart=now;}
  if(body.action==='next'){if(r.stage!=='quiz')return fail('目前不在答題關卡。');const q=quizClock(r,now);if(q.finished)return fail('六題都已完成。');if(!q.reveal)return fail('答案揭曉後才能跳到下一題。');r.quizStart=now-(q.index+1)*25000;}
  if(body.action==='race'){if(r.stage!=='quiz'||!quizClock(r,now).finished)return fail('等六題結束後才能開始決賽。');if(r.demo)r.players.forEach((p,i)=>questions.forEach((q,j)=>p.answers[j]=(i+j)%4===0?(q.answer+1)%4:q.answer));r.stage='race';r.raceStart=now;}
  if(body.action==='results'){if(r.stage!=='race'||now-r.raceStart<30000)return fail('彈珠還在落下，請稍等。');r.stage='results';}
 }else{
  if(!p)return fail('連線身分無效，請重新加入。',403);
  if(body.action==='terrain'){
   if(r.stage!=='sculpt')return fail('目前不是捏塑時間。');
   if(!terrains.some(t=>t.id===body.terrain))return fail('無效的地形。');
   if(!p.done.includes(body.terrain))p.done.push(body.terrain);
  }else if(body.action==='answer'){
   const q=quizClock(r,now);if(r.stage!=='quiz'||q.finished||q.reveal||body.index!==q.index)return fail('這題的作答時間已結束。');
   if(p.answers[q.index]!==undefined)return fail('這題已經作答囉。');
   if(!Number.isInteger(body.answer)||body.answer<0||body.answer>3)return fail('請選擇一個選項。');
   p.answers[q.index]=body.answer;
  }else return fail('不支援的操作。');
 }
 if(await store.cas(code,row.revision,JSON.stringify(r)))return {room:snapshot(r,p?.id,host),...(issued?{token:issued,playerId:p!.id}:{})};
 }return fail('大家同時操作，請再按一次。',409);
}
