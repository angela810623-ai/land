// Identical deterministic pin-board physics is used for scoring and replay.
export const binPoints=[10,30,20,50,20,30,10];
export const pins=Array.from({length:9},(_,row)=>Array.from({length:row%2?8:9},(_,col)=>({x:70+col*70+(row%2?35:0),y:150+row*53}))).flat();
export function seeded(seed:number){let s=seed>>>0;return()=>{s=(Math.imul(1664525,s)+1013904223)>>>0;return s/4294967296;};}
export type Ball={player:string;color:string;delay:number;path:number[][];bin:number;points:number;duration:number};
export function simulate(seed:number,players:{id:string;color:string;marbles:number}[],trace=true):Ball[]{
 const rand=seeded(seed),entries=players.flatMap(p=>Array.from({length:p.marbles},()=>p));
 for(let i=entries.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[entries[i],entries[j]]=[entries[j],entries[i]];}
 return entries.map((p,index)=>{
  let x=350+(rand()-.5)*90,y=30,vx=(rand()-.5)*65,vy=0,t=0;const path:number[][]=[];
  for(let f=0;f<1200&&y<687;f++){
   const dt=1/60;t+=dt;vy+=650*dt;x+=vx*dt;y+=vy*dt;
   if(x<39){x=39;vx=Math.abs(vx)*.65;}if(x>661){x=661;vx=-Math.abs(vx)*.65;}
   for(const pin of pins){let dx=x-pin.x,dy=y-pin.y;const d=Math.hypot(dx,dy),r=13;
    if(d<r){const nx=d>.001?dx/d:(rand()>.5?1:-1),ny=d>.001?dy/d:-1;x=pin.x+nx*r;y=pin.y+ny*r;const dot=vx*nx+vy*ny;
     if(dot<0){vx-=1.5*dot*nx;vy-=1.5*dot*ny;vx+=(rand()-.5)*20;}
    }
   }
   vx*=.998;if(trace&&f%2===0)path.push([x,y]);
  }
  // A rare settled ball is released vertically into its current bin at time limit.
  const bin=Math.min(6,Math.max(0,Math.floor((x-35)/90)));
  if(trace)path.push([x,710]);
  return {player:p.id,color:p.color,delay:index*.065,path,bin,points:binPoints[bin],duration:t};
 });
}
