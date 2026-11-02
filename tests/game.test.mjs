import assert from 'node:assert/strict';
import {act,createRoom,readRoom,marbles,quizClock,snapshot} from '../.sites-runtime/game-test.mjs';
class MemoryStore{
 rows=new Map();
 async load(c){const x=this.rows.get(c);return x?{...x}:null;}
 async insert(r){if(this.rows.has(r.code))throw Error('duplicate');this.rows.set(r.code,{state:JSON.stringify(r),revision:0});}
 async cas(c,rev,state){const x=this.rows.get(c);if(x.revision!==rev)return false;this.rows.set(c,{state,revision:rev+1});return true;}
 change(c,fn){const x=this.rows.get(c),r=JSON.parse(x.state);fn(r);x.state=JSON.stringify(r);x.revision++;}
}
const s=new MemoryStore(),created=await createRoom(s),code=created.room.code,host=created.hostToken;
const players=await Promise.all(Array.from({length:5},(_,i)=>act(s,code,{action:'join',name:'玩家'+i})));
assert.equal((await readRoom(s,code)).players.length,5,'simultaneous joins keep all five players');
assert.equal(new Set(players.map(p=>p.token)).size,5);
await assert.rejects(()=>act(s,code,{action:'join',name:'第六位'}),/已滿/);
await assert.rejects(()=>act(s,code,{action:'sculpt',token:players[0].token}),/主持人/);
await act(s,code,{action:'tutorial',token:host});await act(s,code,{action:'sculpt',token:host});
await assert.rejects(()=>act(s,code,{action:'quiz',token:host}),/未完成/);
await assert.rejects(()=>act(s,code,{action:'assist',token:host}),/七分鐘/);
await assert.rejects(()=>act(s,code,{action:'demo-race',token:host}),/演示/);
const ids=['plain','hills','mountain','tableland','basin'];
for(const id of ids)await Promise.all(players.map(p=>act(s,code,{action:'terrain',token:p.token,terrain:id})));
await act(s,code,{action:'terrain',token:players[0].token,terrain:'plain'});
assert.equal((await readRoom(s,code)).players[0].done.length,5,'duplicate stamp never adds balls');
await act(s,code,{action:'quiz',token:host});
let snap=await readRoom(s,code,players[0].token);assert.equal(snap.question.answer,undefined,'unrevealed correct answer stays private');
await Promise.all(players.map(p=>act(s,code,{action:'answer',token:p.token,index:0,answer:1})));
await assert.rejects(()=>act(s,code,{action:'answer',token:players[0].token,index:0,answer:0}),/已經作答/);
snap=await readRoom(s,code,players[0].token);assert.equal(snap.players[0].marbles,7);assert.equal(snap.players[1].answers,undefined);
s.change(code,r=>r.quizStart=Date.now()-19000);snap=await readRoom(s,code);assert.equal(snap.question.answer,1);
await assert.rejects(()=>act(s,code,{action:'answer',token:players[1].token,index:0,answer:1}),/結束/);
await act(s,code,{action:'next',token:host});assert.equal((await readRoom(s,code)).question.index,1);
await assert.rejects(()=>act(s,code,{action:'race',token:host}),/六題/);
s.change(code,r=>r.quizStart=Date.now()-150001);await act(s,code,{action:'race',token:host});
snap=await readRoom(s,code);assert.equal(snap.players[0].score,undefined,'final score is not exposed before race ends');
s.change(code,r=>r.raceStart=Date.now()-31000);const a=await readRoom(s,code),b=await readRoom(s,code);
assert.deepEqual(a.players.map(p=>p.score),b.players.map(p=>p.score),'reconnect and separate clients agree');
assert.ok(a.players.every(p=>Number.isFinite(p.score)&&p.rank>=1&&p.rank<=5));
const r=JSON.parse(s.rows.get(code).state);assert.equal(marbles(r.players[0]),7);r.players.forEach(p=>p.answers={0:1,1:2,2:0,3:3,4:1,5:2});assert.equal(marbles(r.players[0]),17);
const began=Date.now();for(let i=0;i<10;i++){r.seed=i;snapshot(r,undefined,false,Date.now()+40000);}console.log('Scoring 10 seeds:',Date.now()-began,'ms');
const assist=await createRoom(s);await act(s,assist.room.code,{action:'join',name:'新手'});await act(s,assist.room.code,{action:'sculpt',token:assist.hostToken});s.change(assist.room.code,r=>r.started=Date.now()-420001);await act(s,assist.room.code,{action:'assist',token:assist.hostToken});const helped=await readRoom(s,assist.room.code);assert.equal(helped.players[0].done.length,5);assert.equal(helped.players[0].assisted.length,5);
const demo=await createRoom(s,true);assert.equal(demo.room.players.length,5);await act(s,demo.room.code,{action:'demo-race',token:demo.hostToken});
console.log('PASS: five concurrent players, capacity, host authorization, stage gates, stamps, answer locks, timing, scoring, reconnection, assistance and demo.');
