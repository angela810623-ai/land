import {env} from 'cloudflare:workers';
import {act,createRoom,readRoom,GameError,type Store} from '../../../lib/game';
export const dynamic='force-dynamic';
function store():Store{
 const db=env.DB;if(!db)throw new Error('場次資料庫尚未連線');
 return {load:async(code)=>await db.prepare('SELECT state, revision FROM game_rooms WHERE code = ?').bind(code).first() as any,
 insert:async(r)=>{await db.prepare('INSERT INTO game_rooms (code,state,revision,created_at) VALUES (?,?,0,?)').bind(r.code,JSON.stringify(r),r.created).run();},
 cas:async(code,rev,state)=>{const result=await db.prepare('UPDATE game_rooms SET state = ?, revision = revision + 1 WHERE code = ? AND revision = ?').bind(state,code,rev).run();return result.meta.changes===1;}};
}
const json=(data:any,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
export async function GET(req:Request){try{const u=new URL(req.url);return json(await readRoom(store(),u.searchParams.get('code')||'',req.headers.get('X-Game-Token')||''));}catch(e){return error(e);}}
export async function POST(req:Request){try{const b=await req.json() as any;if(b.action==='create')return json(await createRoom(store(),!!b.demo));if(!/^\d{6}$/.test(b.code||''))return json({error:'請輸入六位數房號。'},400);return json(await act(store(),b.code,b));}catch(e){return error(e);}}
function error(e:unknown){if(e instanceof GameError)return json({error:e.message},e.status);console.error(e);return json({error:'連線暫時中斷，請稍後再試；你的進度會保留。'},503);}
