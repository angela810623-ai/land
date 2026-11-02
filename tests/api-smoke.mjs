import assert from 'node:assert/strict';
const origin=process.env.GAME_ORIGIN||'http://127.0.0.1:5173';
async function call(body){const r=await fetch(origin+'/api/game',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});return {status:r.status,data:await r.json()};}
const made=await call({action:'create'});assert.equal(made.status,200);const {code}=made.data.room,host=made.data.hostToken;
const players=await Promise.all(Array.from({length:5},(_,i)=>call({action:'join',code,name:'連線測試'+i})));
assert.ok(players.every(x=>x.status===200));
const full=await call({action:'join',code,name:'第六人'});assert.equal(full.status,400);
let r=await fetch(origin+'/api/game?code='+code);const publicState=await r.json();assert.equal(publicState.players.length,5);assert.ok(publicState.players.every(p=>!p.token));assert.equal(publicState.hostToken,undefined);
assert.equal((await call({action:'tutorial',code,token:players[0].data.token})).status,403);
assert.equal((await call({action:'tutorial',code,token:host})).status,200);
assert.equal((await call({action:'sculpt',code,token:host})).status,200);
for(const terrain of ['plain','hills','mountain','tableland','basin']){
 const saves=await Promise.all(players.map(p=>call({action:'terrain',code,token:p.data.token,terrain})));assert.ok(saves.every(x=>x.status===200));
}
assert.equal((await call({action:'quiz',code,token:host})).status,200);
const answers=await Promise.all(players.map(p=>call({action:'answer',code,token:p.data.token,index:0,answer:1})));assert.ok(answers.every(x=>x.status===200));
const final=await (await fetch(origin+'/api/game?code='+code)).json();assert.equal(final.players.filter(p=>p.marbles===7).length,5);
console.log('PASS actual HTTP + D1: five simultaneous joins, sixth rejected, host protected, all stamps and five simultaneous answers saved.');
