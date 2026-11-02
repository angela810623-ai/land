var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=class{ctx=null;voice=null;muted=!1;unlock(){try{this.ctx??=new AudioContext,this.ctx.resume()}catch{this.ctx=null}if(`speechSynthesis`in window){let e=()=>{let e=speechSynthesis.getVoices();this.voice=e.find(e=>e.lang===`zh-TW`)??e.find(e=>e.lang.startsWith(`zh`))??null};e(),speechSynthesis.addEventListener(`voiceschanged`,e);let t=new SpeechSynthesisUtterance(` `);t.volume=0,speechSynthesis.speak(t)}}play(e){if(this.muted||!this.ctx)return;let t={grab:[[440,.07],[660,.09]],drop:[[220,.12]],empty:[[300,.12],[200,.16]],pass:[[523,.12],[659,.12],[784,.12],[1046,.25]],fail:[[392,.15],[330,.25]],click:[[880,.04]]},n=this.ctx.currentTime;for(let[r,i]of t[e])this.tone(r,n,i,e===`drop`?`sine`:`triangle`),n+=i*.9}beep(e,t){!this.muted&&this.ctx&&this.tone(e,this.ctx.currentTime,t,`square`)}speak(e){if(this.muted||!(`speechSynthesis`in window))return;speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e);t.lang=`zh-TW`,this.voice&&(t.voice=this.voice),t.rate=1,speechSynthesis.speak(t)}tone(e,t,n,r){let i=this.ctx,a=i.createOscillator(),o=i.createGain();a.type=r,a.frequency.value=e,o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.25,t+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(o).connect(i.destination),a.start(t),a.stop(t+n+.02)}},u=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),d=(e,t=document)=>t.querySelector(e),f=(e,t=5)=>`★`.repeat(Math.max(0,e))+`☆`.repeat(Math.max(0,t-e)),p=0;function m(e,t=3e3){let n=document.getElementById(`toast`);n&&(n.textContent=e,n.classList.add(`show`),clearTimeout(p),p=window.setTimeout(()=>n.classList.remove(`show`),t))}var h=null;function g(e,t,n=[{label:`知道了`,primary:!0,value:`ok`}]){let r=document.getElementById(`modal`);return h?.settle(`cancel`),r.innerHTML=`<h2>${u(e)}</h2>${t}<div class="dialog-actions">${n.map(e=>`<button type="button" class="${e.primary?`primary`:`secondary`}${e.danger?` danger`:``}" data-value="${u(e.value)}">${u(e.label)}</button>`).join(``)}</div>`,new Promise(e=>{let t={settle:a=>{h===t&&(h=null,r.removeEventListener(`click`,n),r.removeEventListener(`close`,i),e(a))}},n=e=>{let n=e.target.closest(`button[data-value]`);if(!n)return;let i=n.dataset.value??`cancel`;t.settle(i),r.open&&r.close(i)},i=()=>{r.open||t.settle(r.returnValue||`cancel`)};h=t,r.addEventListener(`click`,n),r.addEventListener(`close`,i),r.returnValue=``,r.open||r.showModal()})}function _(){let e=document.getElementById(`modal`);h?.settle(`cancel`),e.open&&e.close(`cancel`)}function v(){return document.getElementById(`modal`).open}var y={mountain:`M2 19 10 5l6 9 4-6 7 11Z M7 10l3 3 3-3`,book:`M3 4h7l2 2 2-2h7v16h-7l-2 2-2-2H3Z M12 6v16`,trophy:`M7 3h10v6a5 5 0 0 1-10 0Z M7 5H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4M12 14v6m-4 1h8`,grid:`M3 3h7v7H3Zm11 0h7v7h-7ZM3 14h7v7H3Zm11 0h7v7h-7Z`,help:`M9 8a3 3 0 1 1 4 3c-1 1-1 1-1 3m0 3v.1 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0`,arrow:`M4 12h16m-6-6 6 6-6 6`,check:`m5 12 4 4L19 6`,target:`M21 12a9 9 0 1 1-9-9m0 4a5 5 0 1 0 5 5M12 12l9-9m-5 0h5v5`,bulb:`M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0l-1 3H9Z`,plus:`M12 4v16M4 12h16`,up:`M12 21V3m-6 6 6-6 6 6`,flat:`M4 18h16M12 3v10m-5-5 5 5 5-5`,smooth:`M3 8c4-7 7 7 11 0s7 0 7 0M3 16c4-7 7 7 11 0s7 0 7 0`,rotate:`M20 8a9 9 0 1 0 1 7M20 2v6h-6`,undo:`M9 14 4 9l5-5M4 9h11a5 5 0 0 1 0 10h-3`,hand:`M8 12V5a2 2 0 0 1 4 0v6-8a2 2 0 0 1 4 0v8-5a2 2 0 0 1 4 0v9c0 7-9 10-13 4l-4-5c-2-3 1-5 3-2l2 2`,camera:`M3 6h5l2-3h4l2 3h5v15H3ZM17 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0`,leaf:`M20 3C8 2 2 7 5 15s17 6 15-12ZM6 19 16 8`,clock:`M12 7v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0`,users:`M16 21v-3c0-5-12-5-12 0v3m16 0v-3c0-2-1-3-3-4M14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0m3-3a4 4 0 0 1 0 7`,lock:`M5 10h14v11H5ZM8 10V6a4 4 0 0 1 8 0v4m-4 5v2`,download:`M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5`,sound:`M3 9h4l5-5v16l-5-5H3ZM16 8c3 2 3 6 0 8m3-11c5 4 5 10 0 14`,close:`M6 6l12 12M6 18 18 6`,logout:`M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10`};function b(e,t=``){return`<svg class="${t}" viewBox="0 0 ${e===`mountain`?29:24} 24" aria-hidden="true"><path d="${y[e]??y.mountain}"/></svg>`}var x={plain:`M2 19h28M3 16h26`,tableland:`M2 21l7-14h15l7 14`,hills:`M1 20c4-1 3-12 8-12s5 10 9 8 5-8 8-7 4 11 7 11`,mountain:`M1 21 12 3l7 12 5-7 9 13`,basin:`M1 7l8 13h14L33 7`,profile:`M1 21l8-4 5-12 7 9 6 2 6 5`};function S(e){return`<svg class="terrain-icon" viewBox="0 0 35 25" aria-hidden="true"><path d="${x[e]??x.plain}"/><path d="M3 24h29" opacity=".3"/></svg>`}var C=class{video;facing=`environment`;stream=null;constructor(e){this.video=e}get active(){return!!this.stream&&this.video.readyState>=2&&this.video.videoWidth>0}get mirrored(){return this.facing===`user`}async start(e){if(!window.isSecureContext)throw Error(`insecure`);if(!navigator.mediaDevices?.getUserMedia)throw Error(`unsupported`);this.stop(),this.facing=e,this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{ideal:e},width:{ideal:640},height:{ideal:480}}}),this.video.srcObject=this.stream,this.video.classList.toggle(`mirrored`,this.mirrored),this.video.classList.remove(`hidden`),await this.video.play()}stop(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.video.srcObject=null}toScreen(e,t,n,r){let i=this.video.videoWidth||640,a=this.video.videoHeight||480,o=Math.max(n/i,r/a),s=i*o,c=a*o,l=this.mirrored?1-e:e;return{x:(n-s)/2+l*s,y:(r-c)/2+t*c}}};function w(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function T(e,t,n,r,i,a){let o=i*3,s=Math.max(0,Math.floor((n-o)*(t-1))),c=Math.min(t-1,Math.ceil((n+o)*(t-1))),l=Math.max(0,Math.floor((r-o)*(t-1))),u=Math.min(t-1,Math.ceil((r+o)*(t-1))),d=1/(2*i*i);for(let i=l;i<=u;i++){let o=i/(t-1)-r;for(let r=s;r<=c;r++){let s=r/(t-1)-n;e[i*t+r]+=a*Math.exp(-(s*s+o*o)*d)}}}function E(e,t){for(let n=0;n<t;n++)for(let r=0;r<t;r++){let i=Math.min(r,n,t-1-r,t-1-n),a=n*t+r;if(i<2)e[a]=0;else if(i<8){let t=(i-2)/6;e[a]*=t*t*(3-2*t)}}}function D(e,t,n){let r=new Float32Array(t*t),i=(e.height??0)/n,a=e.radius??.25,o=w(e.seed??1);switch(e.type){case`flat`:break;case`bumps`:{let n=e.count??6;for(let e=0;e<n;e++)T(r,t,.18+o()*.64,.18+o()*.64,a/2,i*(.6+o()*.4));break}case`mound`:case`plateau`:{let n=e.type===`plateau`?6:e.power??2;for(let e=0;e<t;e++)for(let o=0;o<t;o++){let s=Math.hypot(o/(t-1)-.5,e/(t-1)-.5);r[e*t+o]=i*Math.exp(-((s/a)**+n))}if(e.type===`plateau`)for(let e=0;e<4;e++){let e=o()*Math.PI*2,n=o()*a*.55;T(r,t,.5+Math.cos(e)*n,.5+Math.sin(e)*n,.035,i*(.25+o()*.15))}break}}for(let e=0;e<r.length;e++)r[e]=Math.min(1,Math.max(0,r[e]));return E(r,t),r}var O=2,k=20,A=class{n;h;budget=0;budgetMax=0;conserve=!1;mask;version=0;undoStack=[];pending=!1;tmp;constructor(e=128){this.n=e,this.h=new Float32Array(e*e),this.tmp=new Float32Array(e*e),this.mask=new Uint8Array(e*e)}reset(e,t){this.h=D(e.start,this.n,t),this.budget=this.budgetMax=e.budget,this.conserve=e.conserveVolume,this.undoStack=[],this.pending=!1,this.clearMask(),this.version++}clearMask(){this.mask.fill(0),this.version++}get canUndo(){return this.undoStack.length>0}apply(e){if(e.kind===`commit`)return this.pending=!1,!1;if(e.kind===`drop`&&this.budget<=1e-6)return!1;switch(this.beginEdit(),e.kind){case`raise`:this.raise(e.u,e.v,e.radius,e.amount);break;case`press`:this.press(e.u,e.v,e.radius,e.amount);break;case`smooth`:this.smooth(e.u,e.v,e.radius,e.strength);break;case`drop`:this.drop(e.u,e.v,e.radius,e.volume),this.pending=!1}return this.mask.some(e=>e)&&this.mask.fill(0),this.version++,!0}undo(){let e=this.undoStack.pop();return e?(this.h=e.h,this.budget=e.budget,this.pending=!1,this.mask.fill(0),this.version++,!0):!1}heightAt(e,t){let n=this.n,r=Math.min(n-1,Math.max(0,e*(n-1))),i=Math.min(n-1,Math.max(0,t*(n-1))),a=Math.floor(r),o=Math.floor(i),s=Math.min(n-1,a+1),c=Math.min(n-1,o+1),l=r-a,u=i-o,d=this.h,f=d[o*n+a]*(1-l)+d[o*n+s]*l,p=d[c*n+a]*(1-l)+d[c*n+s]*l;return f*(1-u)+p*u}volume(){let e=0;for(let t=0;t<this.h.length;t++)e+=this.h[t];return e/this.h.length}beginEdit(){this.pending||=(this.undoStack.push({h:this.h.slice(),budget:this.budget}),this.undoStack.length>k&&this.undoStack.shift(),!0)}each(e,t,n,r,i){let a=this.n,o=Math.max(O,Math.floor((e-r)*(a-1))),s=Math.min(a-1-O,Math.ceil((e+r)*(a-1))),c=Math.max(O,Math.floor((t-r)*(a-1))),l=Math.min(a-1-O,Math.ceil((t+r)*(a-1))),u=n/2,d=1/(2*u*u);for(let n=c;n<=l;n++){let c=n/(a-1)-t;for(let t=o;t<=s;t++){let o=t/(a-1)-e,s=o*o+c*c;s>r*r||i(n*a+t,Math.exp(-s*d),Math.sqrt(s))}}}raise(e,t,n,r){let i=0,a=this.h;this.each(e,t,n,n*1.5,(e,t)=>{let n=a[e];a[e]=Math.min(1,n+r*t),i+=a[e]-n}),this.conserve&&this.moveRing(e,t,n,-i)}press(e,t,n,r){let i=this.h,a=0;this.each(e,t,n,n,(e,t)=>{t>.3&&i[e]>a&&(a=i[e])});let o=Math.max(0,a-r),s=0;this.each(e,t,n,n*1.5,(e,t)=>{if(i[e]>o){let n=(i[e]-o)*Math.min(1,t*1.4);i[e]-=n,s+=n}}),this.conserve&&this.moveRing(e,t,n,s)}smooth(e,t,n,r){let i=this.n,a=this.h,o=this.tmp,s=[],c=[];this.each(e,t,n,n*1.5,(e,t)=>{s.push(e),c.push(t)});for(let e=0;e<2;e++){for(let e=0;e<s.length;e++){let t=s[e],n=(a[t-1]+a[t+1]+a[t-i]+a[t+i]+a[t-i-1]+a[t-i+1]+a[t+i-1]+a[t+i+1])/8;o[t]=a[t]+Math.min(1,r*c[e])*(n-a[t])}for(let e of s)a[e]=o[e]}}drop(e,t,n,r){let i=Math.min(r,this.budget),a=this.h,o=[],s=[];this.each(e,t,n,n*1.6,(e,t)=>{o.push(e),s.push(t)});let c=s.reduce((e,t)=>e+t,0);if(!c)return;let l=i*a.length/c,u=0;for(let e=0;e<o.length;e++){let t=o[e],n=a[t];a[t]=Math.min(1,n+l*s[e]),u+=a[t]-n}this.budget=Math.max(0,this.budget-u/a.length),this.budget<1e-6&&(this.budget=0)}moveRing(e,t,n,r){if(Math.abs(r)<1e-9)return;let i=this.h,a=[];if(this.each(e,t,n,n*1.6,(e,t,r)=>{r>n&&a.push(e)}),!a.length)return;let o=r/a.length;for(let e of a)i[e]=Math.min(1,Math.max(0,i[e]+o))}},ee=.8,j=.5,te=class{minCutoff;beta;dCutoff;x=null;dx=0;t=0;constructor(e=1.2,t=.02,n=1){this.minCutoff=e,this.beta=t,this.dCutoff=n}alpha(e,t){return 1/(1+1/(2*Math.PI*e)/t)}filter(e,t){if(this.x===null)return this.x=e,this.t=t,e;let n=Math.max(.001,t-this.t);this.t=t;let r=(e-this.x)/n;this.dx+=this.alpha(this.dCutoff,n)*(r-this.dx);let i=this.minCutoff+this.beta*Math.abs(this.dx);return this.x+=this.alpha(i,n)*(e-this.x),this.x}reset(){this.x=null,this.dx=0}},M={dwell:.15,pinchOn:.33,pinchOff:.5,fistOn:1.15,fistOff:1.3,openOn:1.5,openOff:1.4,stillSpeed:.12,rubSpeed:.35,stillTime:.35,lostTime:.3,pinchRadius:.055,pinchHoldRate:.04,pinchPullGain:.45,touchRaiseRate:.05,palmRadius:.1,pressRate:.28,smoothRadius:.11,smoothStrength:.6,dropRadius:.09,dropVolume:.0016},N=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y),ne=e=>({x:e.reduce((e,t)=>e+t.x,0)/e.length,y:e.reduce((e,t)=>e+t.y,0)/e.length}),re=class{hands=new Map;get views(){return[...this.hands.values()].map(e=>e.view)}get anyHolding(){return[...this.hands.values()].some(e=>e.mode===`hold`)}update(e,t,n){let r=[],i=[];for(let a of e){let e=this.hands.get(a.key);e||(e=this.newState(a.key,t),this.hands.set(a.key,e)),e.lastSeen=t;let o=Math.min(.1,Math.max(.001,t-e.lastT));e.lastT=t;let s=a.points.map((n,r)=>({x:e.filters[r*2].filter(n.x,t),y:e.filters[r*2+1].filter(n.y,t)}));this.step(e,s,t,o,n,r,i)}for(let[e,n]of this.hands)t-n.lastSeen<M.lostTime||(n.mode===`hold`?i.push(`cancel`):n.mode!==`idle`&&r.push({kind:`commit`}),this.hands.delete(e));return{commands:r,events:i}}newState(e,t){return{filters:Array.from({length:42},()=>new te),rawPose:`other`,rawSince:t,pose:`other`,mode:`idle`,hist:[],stillSince:null,anchorV:0,prevY:0,fistUsed:!1,lastSeen:t,lastT:t,view:{key:e,points:[],pose:`other`,mode:`idle`,cursor:{x:0,y:0}}}}classify(e,t){let n=N(e[0],e[9]);if(n<8)return`other`;let r=t=>N(e[t],e[0])/n,i=(r(8)+r(12)+r(16)+r(20))/4,a=N(e[4],e[8])/n;return i<(t===`fist`?M.fistOff:M.fistOn)?`fist`:a<(t===`pinch`?M.pinchOff:M.pinchOn)?`pinch`:i>(t===`open`?M.openOff:M.openOn)&&a>.45?`open`:`other`}step(e,t,n,r,i,a,o){let s=this.classify(t,e.rawPose);s!==e.rawPose&&(e.rawPose=s,e.rawSince=n),n-e.rawSince>=M.dwell&&(e.pose=e.rawPose),e.pose!==`fist`&&(e.fistUsed=!1);let c=ne([t[0],t[5],t[9],t[13],t[17]]),l=ne([t[4],t[8]]);for(e.hist.push({t:n,p:c});e.hist.length>2&&n-e.hist[0].t>.2;)e.hist.shift();let u=e.hist[0],d=n>u.t?N(u.p,c)/(n-u.t)/i.screenH:0;d<M.stillSpeed?e.stillSince??=n:e.stillSince=null;let f=e.stillSince===null?0:n-e.stillSince,p=()=>{a.push({kind:`commit`}),e.mode=`idle`};switch(e.mode){case`hold`:if(e.pose===`open`){let t=i.toUV(c);t?(a.push({kind:`drop`,u:t.u,v:t.v,radius:M.dropRadius,volume:M.dropVolume}),o.push(`drop`)):o.push(`cancel`),e.mode=`idle`}break;case`pinch`:{if(e.pose!==`pinch`&&e.rawPose!==`pinch`){p();break}let t=i.toUV(l)?.u;if(t===void 0)break;let n=Math.max(0,e.prevY-l.y)/i.screenH;e.prevY=l.y,a.push({kind:`raise`,u:t,v:e.anchorV,radius:M.pinchRadius,amount:M.pinchHoldRate*r+n*M.pinchPullGain});break}case`press`:case`smooth`:{let t=e.pose===`open`?i.toUV(c):null;if(!t){p();break}d>M.rubSpeed?e.mode=`smooth`:f>=M.stillTime&&(e.mode=`press`),e.mode===`smooth`&&d>M.stillSpeed?a.push({kind:`smooth`,u:t.u,v:t.v,radius:M.smoothRadius,strength:M.smoothStrength}):e.mode===`press`&&f>0&&a.push({kind:`press`,u:t.u,v:t.v,radius:M.palmRadius,amount:M.pressRate*r});break}case`idle`:if(e.pose===`fist`&&!e.fistUsed&&i.jarAt(c))e.fistUsed=!0,i.hasClay()?(e.mode=`hold`,o.push(`grab`)):o.push(`empty`);else if(e.pose===`pinch`){let t=i.toUV(l);t&&(e.mode=`pinch`,e.anchorV=t.v,e.prevY=l.y)}else e.pose===`open`&&i.toUV(c)&&(d>M.rubSpeed?e.mode=`smooth`:f>=M.stillTime&&(e.mode=`press`))}e.view={key:e.view.key,points:t,pose:e.pose,mode:e.mode,cursor:e.mode===`pinch`||e.pose===`pinch`?l:c}}},P=300,F=6,ie=class{el;env;view;tool=`drop`;pos=null;carrying=!1;mode=`none`;pointers=new Map;mainId=null;queue=[];events=[];vel={az:0,tilt:0};lastMove=0;constructor(e,t,n){this.el=e,this.env=t,this.view=n,e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.view.zoomBy(Math.exp(-e.deltaY*.0015))},{passive:!1}),e.addEventListener(`pointerdown`,e=>this.down(e)),e.addEventListener(`pointermove`,e=>this.move(e)),e.addEventListener(`pointerup`,e=>this.up(e,!1)),e.addEventListener(`pointercancel`,e=>this.up(e,!0))}local(e){let t=this.el.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}cancel(){this.finish(!0),this.pointers.clear(),this.mode=`none`,this.vel={az:0,tilt:0}}get active(){return this.pointers.size>0}get degPerPx(){return 300/Math.max(300,this.el.clientHeight)}down(e){e.isPrimary&&(this.finish(!0),this.pointers.clear());try{this.el.setPointerCapture(e.pointerId)}catch{}let t=this.local(e);if(this.pointers.set(e.pointerId,t),this.vel={az:0,tilt:0},this.lastMove=performance.now(),this.pointers.size>=2){this.finish(!0),this.mode=`multi`;return}if(this.mainId=e.pointerId,e.button===2||this.tool===`rotate`){this.mode=`orbit`;return}if(this.env.jarAt(t)){this.env.hasClay()?(this.mode=`carry`,this.carrying=!0,this.pos=t,this.events.push(`grab`)):(this.mode=`none`,this.events.push(`empty`));return}let n=this.env.toUV(t);if(!n){this.mode=`orbit`;return}if(this.tool===`drop`){if(this.mode=`none`,!this.env.hasClay()){this.events.push(`empty`);return}this.queue.push({kind:`drop`,u:n.u,v:n.v,radius:M.dropRadius,volume:M.dropVolume}),this.events.push(`drop`);return}this.mode=`sculpt`,this.pos=t}move(e){let t=this.pointers.get(e.pointerId);if(!t)return;let n=this.local(e),r=n.x-t.x,i=n.y-t.y,a=this.degPerPx;if(this.mode===`multi`&&this.pointers.size>=2){let o=[...this.pointers.entries()].find(([t])=>t!==e.pointerId)[1],s=Math.hypot(t.x-o.x,t.y-o.y),c=Math.hypot(n.x-o.x,n.y-o.y);this.orbit(r/2*a,i/2*a),s>20&&this.view.zoomBy(c/s)}else this.mode===`orbit`&&e.pointerId===this.mainId?this.orbit(r*a,i*a):(this.mode===`sculpt`||this.mode===`carry`)&&e.pointerId===this.mainId&&(this.pos=n);this.pointers.set(e.pointerId,n)}orbit(e,t){let n=performance.now(),r=Math.max(8,n-this.lastMove)/1e3;this.lastMove=n,this.view.rotateBy(-e,t,!0);let i=e=>Math.max(-300,Math.min(P,e));this.vel.az=i(this.vel.az*.6+-e/r*.4),this.vel.tilt=i(this.vel.tilt*.6+t/r*.4)}up(e,t){if(this.pointers.delete(e.pointerId)){if(e.pointerId===this.mainId){if(this.mode===`carry`&&!t){let t=this.env.toUV(this.local(e));t?(this.queue.push({kind:`drop`,u:t.u,v:t.v,radius:M.dropRadius,volume:M.dropVolume}),this.events.push(`drop`)):this.events.push(`cancel`)}this.mode===`orbit`&&performance.now()-this.lastMove>80&&(this.vel={az:0,tilt:0}),this.finish(!1)}this.pointers.size===0&&(this.mode===`multi`&&(this.vel={az:0,tilt:0}),this.mode=`none`)}}finish(e){this.mode===`sculpt`&&this.queue.push({kind:`commit`}),this.mode===`carry`&&e&&this.events.push(`cancel`),this.mainId=null,this.pos=null,this.carrying=!1,this.mode!==`orbit`&&(this.mode=`none`)}update(e){let t=this.queue,n=this.events;if(this.queue=[],this.events=[],this.mode===`sculpt`&&this.pos){let n=this.env.toUV(this.pos);n&&(this.tool===`raise`?t.push({kind:`raise`,u:n.u,v:n.v,radius:.06,amount:M.touchRaiseRate*e}):this.tool===`press`?t.push({kind:`press`,u:n.u,v:n.v,radius:M.palmRadius,amount:M.pressRate*e}):this.tool===`smooth`&&t.push({kind:`smooth`,u:n.u,v:n.v,radius:M.smoothRadius,strength:M.smoothStrength}))}if(this.pointers.size===0&&(Math.abs(this.vel.az)>1||Math.abs(this.vel.tilt)>1)){this.view.rotateBy(this.vel.az*e,this.vel.tilt*e,!0);let t=Math.exp(-e*F);this.vel.az*=t,this.vel.tilt*=t}return{commands:t,events:n}}};function ae(e,t){let n=e%t,r=e/t|0;return n>=2&&r>=2&&n<t-2&&r<t-2}function I(e,t){let n=new Float32Array(t*t),r=1/(t-1);for(let i=1;i<t-1;i++)for(let a=1;a<t-1;a++){let o=i*t+a,s=(e[o+1]-e[o-1])*j/(2*r),c=(e[o+t]-e[o-t])*j/(2*r);n[o]=Math.atan(Math.hypot(s,c))*180/Math.PI}return n}function oe(e,t){if(!e.length)return 0;let n=[...e].sort((e,t)=>e-t);return n[Math.min(n.length-1,Math.max(0,Math.round(t/100*(n.length-1))))]}function se(e){return e.length?e.reduce((e,t)=>e+t,0)/e.length:0}function ce(e,t,n,r,i){let a=[];for(let o=2;o<t-2;o++)for(let s=2;s<t-2;s++){let c=o*t+s,l=e[c];if(l<r)continue;let u=!0,d=l;for(let r=-n;r<=n&&u;r++){let i=o+r;if(!(i<0||i>=t))for(let a=-n;a<=n;a++){let n=s+a;if(n<0||n>=t||a===0&&r===0)continue;let o=e[i*t+n];if(o>l||o===l&&i*t+n<c){u=!1;break}o<d&&(d=o)}}u&&l-d>=i&&a.push(c)}return a}var le=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},ue=50,L={rays:36,wall:120,depthOk:150,floorBand:100};function de(e,t,n,r){let i=new Float32Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]*r.maxElevation;let a=[];for(let n=0;n<e.length;n++)ae(n,t)&&a.push(n);let o=a.filter(e=>i[e]>ue),s={h:e,n:t,cfg:r,m:i,slope:I(e,t),interior:a,land:o,features:{}};s.features.peak=o.length?Math.max(...o.map(e=>i[e])):0,s.features.landFrac=o.length/a.length;let c=fe[n](s),l=c.reduce((e,t)=>e+t.weight,0),u=Math.round(100*c.reduce((e,t)=>e+t.weight*t.score,0)/l),d=u>=70&&c.every(e=>!e.required||e.score>=.999),f=d?u:Math.min(u,69),p=c.filter(e=>e.score<.999).sort((e,t)=>e.score-t.score||Number(t.required)-Number(e.required)||t.weight-e.weight),m=new Uint8Array(e.length);return d||p[0]?.mask?.(m),{target:n,score:f,passed:d,stars:d?u>=95?3:u>=85?2:1:0,hints:d?[]:p.slice(0,2).map(e=>e.hint),conditions:c.map(({mask:e,...t})=>t),problemMask:m,features:s.features}}var R=(e,t)=>n=>{for(let r of e)t(r)&&(n[r]=1)},fe={plain(e){let t=e.cfg.thresholds.plain,n=e.interior.filter(n=>e.m[n]<t).length/e.interior.length,r=oe(e.interior.map(t=>e.slope[t]),90);return Object.assign(e.features,{fracLow:n,slopeP90:r}),[{key:`low`,score:le(.85,.98,n),weight:.6,required:!0,hint:`還有地方超過 ${t} 公尺，再壓平一點`,mask:R(e.interior,n=>e.m[n]>=t)},{key:`flat`,score:1-le(6,15,r),weight:.4,required:!1,hint:`表面還凹凸不平，用手掌來回抹一抹`,mask:R(e.interior,t=>e.slope[t]>15)}]},tableland(e){let{hillsMax:t}=e.cfg.thresholds,n=oe(e.land.map(t=>e.m[t]),99),r=e.land.filter(t=>e.m[t]>=.8*n),i=e.land.length?r.length/e.land.length:0,a=r.length?r.filter(t=>e.slope[t]<12).length/r.length:0,o=e.land.filter(t=>e.m[t]>.2*n&&e.m[t]<.8*n),s=se(o.map(t=>e.slope[t]));Object.assign(e.features,{tablePeak:n,topRatio:i,topFlat:a,edgeSlope:s});let c=n>=t;return[{key:`height`,score:c?0:le(40,120,n),weight:.2,required:!0,hint:c?`台地不會那麼高，不要超過 ${t} 公尺`:`台地要比周圍的平原高一些`,mask:R(e.land,n=>e.m[n]>=t)},{key:`topWide`,score:le(.15,.35,i),weight:.25,required:!1,hint:`台地的頂部要又寬又平，把凸起來的地方壓下去`,mask:R(r,()=>!0)},{key:`topFlat`,score:le(.45,.8,a),weight:.35,required:!1,hint:`頂端還不夠平，用手掌抹平或壓平`,mask:R(r,t=>e.slope[t]>=12)},{key:`edge`,score:le(12,28,s),weight:.2,required:!1,hint:`邊邊要陡一點，像被切下去一樣`,mask:R(o,t=>e.slope[t]<20)}]},hills(e){let{hillsMax:t,plain:n}=e.cfg.thresholds,r=e.features.peak,i=ce(e.m,e.n,6,n,60).length,a=se(e.land.map(t=>e.slope[t])),o=e.features.landFrac;Object.assign(e.features,{peaks:i,slopeMean:a});let s=r>=t;return[{key:`range`,score:s?0:r<n?.5*le(0,n,r):1,weight:.35,required:!0,hint:s?`太高了！超過 ${t} 公尺就變成山地了，把山頭壓低一點`:`丘陵要比平原高，要超過 ${n} 公尺`,mask:R(e.land,n=>e.m[n]>=t)},{key:`peaks`,score:Math.min(1,i/3),weight:.3,required:!1,hint:`丘陵有好幾個小山頭，再多做幾個`},{key:`gentle`,score:1-le(32,48,a),weight:.15,required:!1,hint:`坡太陡了，用手掌把山頭抹圓一點`,mask:R(e.land,t=>e.slope[t]>45)},{key:`area`,score:le(.02,.08,o),weight:.2,required:!1,hint:`丘陵要連成一大片，多放一些黏土`}]},mountain(e){let{mountainMin:t}=e.cfg.thresholds,n=e.features.peak,r=oe(e.land.map(t=>e.slope[t]),90);return Object.assign(e.features,{slopeP90:r}),[{key:`height`,score:n>=t?1:.7*le(200,t,n),weight:.5,required:!0,hint:`山還不夠高，要超過 ${t} 公尺的紅線！`,mask:R(e.land,t=>e.m[t]>=.85*n)},{key:`steep`,score:le(15,30,r),weight:.25,required:!1,hint:`山坡要陡一點，用手指捏住往上拉`},{key:`mass`,score:le(.01,.04,e.features.landFrac),weight:.25,required:!1,hint:`山要大一點，多放幾團黏土`}]},basin(e){let{n:t,m:n}=e,r=L,i=(e,i)=>{let a=0,o=0;for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++)a+=n[(i+r)*t+e+s],o++;a/=o;let s=[];for(let o=0;o<r.rays;o++){let c=o/r.rays*Math.PI*2,l=[],u=0,d=0,f=-1;for(let o=1;;o++){let s=Math.round(e+Math.cos(c)*o),p=Math.round(i+Math.sin(c)*o);if(s<2||p<2||s>=t-2||p>=t-2)break;let m=p*t+s;l.push(m);let h=n[m]-a;f<0&&h>=r.floorBand&&(f=o),h>u&&(u=h,d=l.length-1)}s.push({rise:u,wallAt:d,floorR:f<0?l.length:f,cells:l})}let c=s.filter(e=>e.rise>=r.wall).length/r.rays,l=oe(s.map(e=>e.rise),50);return{cx:e,cy:i,floor:a,rays:s,closure:c,depth:l}},a=null,o=-1;for(let e=6;e<t-2-4;e+=4)for(let n=6;n<t-2-4;n+=4){let t=i(n,e),s=Math.min(1,t.closure/.9)*4+Math.min(t.depth,3e3)/r.depthOk;s>o&&(o=s,a=t)}let s=a,c=1/(t-1),l=oe(s.rays.map(e=>e.floorR),50)*c,u=s.rays.filter(e=>e.rise<r.wall),d=s.rays.filter(e=>e.rise<r.depthOk),f=s.floor<=e.cfg.thresholds.plain*1.5;Object.assign(e.features,{basinDepth:s.depth,closure:s.closure,floorM:s.floor,floorRadius:l,centerU:s.cx/(t-1),centerV:s.cy/(t-1)});let p=e=>{let n=Math.max(4,Math.round(l/c));for(let r=-n;r<=n;r++)for(let i=-n;i<=n;i++)if(i*i+r*r<=n*n){let n=s.cy+r,a=s.cx+i;a>=0&&n>=0&&a<t&&n<t&&(e[n*t+a]=1)}};return[{key:`depth`,score:le(50,r.depthOk,s.depth),weight:.45,required:!0,hint:f?`四周的山要再高一點，要比盆地底部高 ${r.depthOk} 公尺以上`:`中間要比四周低很多，把中間再壓低一點`,mask:f?e=>{for(let t of d)e[t.cells[t.wallAt]]=1;for(let t of d)for(let n of t.cells.slice(Math.max(0,t.wallAt-3),t.wallAt+4))e[n]=1}:p},{key:`closure`,score:le(.65,.9,s.closure),weight:.35,required:!0,hint:`四周要圍起來，缺口太大了（閃紅色的地方）`,mask:e=>{for(let t of u)for(let n of t.cells.slice(Math.floor(t.cells.length*.3)))e[n]=1}},{key:`area`,score:le(.03,.07,l),weight:.2,required:!1,hint:`盆地的底部要寬一點`,mask:p}]},profile(e){let{n:t,m:n}=e,{plain:r,hillsMax:i,mountainMin:a}=e.cfg.thresholds,o=e=>e%t/(t-1),s=e.interior.filter(e=>o(e)<.36),c=e.interior.filter(e=>o(e)>=.36&&o(e)<.62),l=e.interior.filter(e=>o(e)>=.62),u=s.filter(e=>n[e]<r).length/s.length,d=Math.max(0,...c.map(e=>n[e])),f=c.filter(e=>n[e]>=r).length/c.length,p=Math.max(0,...l.map(e=>n[e]));Object.assign(e.features,{westLow:u,midPeak:d,midLand:f,eastPeak:p});let m=d>=i;return[{key:`west`,score:le(.75,.92,u),weight:.3,required:!0,hint:`西邊（左邊）要是平原，低於 ${r} 公尺`,mask:R(s,e=>n[e]>=r)},{key:`mid`,score:m||d<r?0:le(.03,.12,f),weight:.35,required:!0,hint:m?`中間的丘陵太高了，不要超過 ${i} 公尺`:`中間要做丘陵（${r}～${i} 公尺的小山頭）`,mask:R(c,e=>!m||n[e]>=i)},{key:`east`,score:p>=a?1:.7*le(200,a,p),weight:.35,required:!0,hint:`東邊（右邊）要有超過 ${a} 公尺的高山`}]}},z=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]],pe={idle:{color:`rgba(255,255,255,0.9)`,label:``},pinch:{color:`#ff9800`,label:`捏高`},press:{color:`#2196f3`,label:`壓平`},smooth:{color:`#43a047`,label:`抹平`},hold:{color:`#7cb342`,label:`拿著黏土`}},B={raise:pe.pinch,press:pe.press,smooth:pe.smooth,drop:{color:`#7cb342`,label:``},rotate:{color:`#8e24aa`,label:``}},V=class{canvas;ctx;constructor(e){this.canvas=e,this.ctx=e.getContext(`2d`)}resize(e,t){let n=Math.min(2,window.devicePixelRatio);this.canvas.width=e*n,this.canvas.height=t*n,this.ctx.setTransform(n,0,0,n,0,0)}draw(e,t,n){let r=this.ctx;r.clearRect(0,0,this.canvas.width,this.canvas.height);for(let t of e){if(!t.points.length)continue;let e=pe[t.mode];r.lineWidth=3,r.strokeStyle=n?`rgba(255,255,255,0.75)`:`rgba(255,255,255,0.4)`,r.beginPath();for(let[e,n]of z)r.moveTo(t.points[e].x,t.points[e].y),r.lineTo(t.points[n].x,t.points[n].y);if(r.stroke(),n){r.fillStyle=`#fff`;for(let e of t.points)r.beginPath(),r.arc(e.x,e.y,3,0,Math.PI*2),r.fill()}t.mode===`hold`?this.clayBall(t.cursor):this.ring(t.cursor,e.color,t.mode===`idle`?14:22),e.label&&this.label(t.cursor,e.label,e.color),n&&this.label({x:t.cursor.x,y:t.cursor.y+58},`${t.pose}/${t.mode}`,`#333`)}if(t.pos&&t.carrying)this.clayBall({x:t.pos.x,y:t.pos.y-40});else if(t.pos){let e=B[t.tool];this.ring(t.pos,e.color,30),e.label&&this.label(t.pos,e.label,e.color)}}ring(e,t,n){let r=this.ctx;r.lineWidth=5,r.strokeStyle=t,r.beginPath(),r.arc(e.x,e.y,n,0,Math.PI*2),r.stroke()}clayBall(e){let t=this.ctx,n=t.createRadialGradient(e.x-8,e.y-8,4,e.x,e.y,28);n.addColorStop(0,`#dcedc8`),n.addColorStop(1,`#689f38`),t.fillStyle=n,t.beginPath(),t.arc(e.x,e.y,26,0,Math.PI*2),t.fill()}label(e,t,n){let r=this.ctx;r.font=`bold 20px system-ui, sans-serif`;let i=r.measureText(t).width+20,a=e.x-i/2,o=e.y-64;r.fillStyle=n,r.beginPath(),r.roundRect(a,o,i,32,16),r.fill(),r.fillStyle=`#fff`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(t,e.x,o+16)}},me=1e3,he=1001,ge=1002,_e=1003,ve=1004,ye=1005,be=1006,xe=1007,Se=1008,Ce=1009,we=1010,Te=1011,Ee=1012,De=1013,Oe=1014,ke=1015,Ae=1016,je=1017,Me=1018,Ne=1020,Pe=35902,Fe=1021,Ie=1022,Le=1023,Re=1024,ze=1025,Be=1026,Ve=1027,He=1028,Ue=1029,We=1030,Ge=1031,Ke=1033,qe=33776,Je=33777,Ye=33778,Xe=33779,Ze=35840,Qe=35841,$e=35842,et=35843,tt=36196,nt=37492,rt=37496,it=37808,at=37809,ot=37810,st=37811,ct=37812,lt=37813,ut=37814,dt=37815,ft=37816,pt=37817,mt=37818,ht=37819,gt=37820,_t=37821,vt=36492,yt=36494,bt=36495,xt=36283,St=36284,Ct=36285,wt=36286,Tt=2300,Et=2301,Dt=2302,Ot=2400,kt=2401,At=2402,jt=3200,Mt=3201,Nt=`srgb`,Pt=`srgb-linear`,Ft=`display-p3`,It=`display-p3-linear`,Lt=`linear`,Rt=`srgb`,zt=`rec709`,Bt=7680,Vt=35044,Ht=2e3,Ut=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},Wt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Gt=1234567,Kt=Math.PI/180,qt=180/Math.PI;function Jt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wt[e&255]+Wt[e>>8&255]+Wt[e>>16&255]+Wt[e>>24&255]+`-`+Wt[t&255]+Wt[t>>8&255]+`-`+Wt[t>>16&15|64]+Wt[t>>24&255]+`-`+Wt[n&63|128]+Wt[n>>8&255]+`-`+Wt[n>>16&255]+Wt[n>>24&255]+Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]).toLowerCase()}function Yt(e,t,n){return Math.max(t,Math.min(n,e))}function Xt(e,t){return(e%t+t)%t}function Zt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Qt(e,t,n){return e===t?0:(n-e)/(t-e)}function $t(e,t,n){return(1-n)*e+n*t}function en(e,t,n,r){return $t(e,t,1-Math.exp(-n*r))}function tn(e,t=1){return t-Math.abs(Xt(e,t*2)-t)}function nn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function rn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function an(e,t){return e+Math.floor(Math.random()*(t-e+1))}function on(e,t){return e+Math.random()*(t-e)}function sn(e){return e*(.5-Math.random())}function cn(e){e!==void 0&&(Gt=e);let t=Gt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ln(e){return e*Kt}function un(e){return e*qt}function dn(e){return!(e&e-1)&&e!==0}function fn(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function pn(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function mn(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function hn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function gn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var _n={DEG2RAD:Kt,RAD2DEG:qt,generateUUID:Jt,clamp:Yt,euclideanModulo:Xt,mapLinear:Zt,inverseLerp:Qt,lerp:$t,damp:en,pingpong:tn,smoothstep:nn,smootherstep:rn,randInt:an,randFloat:on,randFloatSpread:sn,seededRandom:cn,degToRad:ln,radToDeg:un,isPowerOfTwo:dn,ceilPowerOfTwo:fn,floorPowerOfTwo:pn,setQuaternionFromProperEuler:mn,normalize:gn,denormalize:hn},vn=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},H=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yn.makeScale(e,t)),this}rotate(e){return this.premultiply(yn.makeRotation(-e)),this}translate(e,t){return this.premultiply(yn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yn=new H;function bn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xn(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Sn(){let e=xn(`canvas`);return e.style.display=`block`,e}var Cn={};function wn(e){e in Cn||(Cn[e]=!0,console.warn(e))}function Tn(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function En(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dn(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var On=new H().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kn=new H().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),An={[Pt]:{transfer:Lt,primaries:zt,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[Nt]:{transfer:Rt,primaries:zt,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[It]:{transfer:Lt,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(kn),fromReference:e=>e.applyMatrix3(On)},[Ft]:{transfer:Rt,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(kn),fromReference:e=>e.applyMatrix3(On).convertLinearToSRGB()}},jn=new Set([Pt,It]),Mn={enabled:!0,_workingColorSpace:Pt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!jn.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=An[t].toReference,i=An[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return An[e].primaries},getTransfer:function(e){return e===``?Lt:An[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(An[t].luminanceCoefficients)}};function Nn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Pn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Fn,In=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fn===void 0&&(Fn=xn(`canvas`)),Fn.width=e.width,Fn.height=e.height;let n=Fn.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fn}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=xn(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Nn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Nn(t[e]/255)*255):t[e]=Nn(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ln=0,Rn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ln++}),this.uuid=Jt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(zn(r[t].image)):e.push(zn(r[t]))}else e=zn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function zn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?In.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Bn=0,Vn=class e extends Ut{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=he,i=he,a=be,o=Se,s=Le,c=Ce,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bn++}),this.uuid=Jt(),this.name=``,this.source=new Rn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new vn(0,0),this.repeat=new vn(1,1),this.center=new vn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case me:e.x-=Math.floor(e.x);break;case he:e.x=e.x<0?0:1;break;case ge:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case me:e.y-=Math.floor(e.y);break;case he:e.y=e.y<0?0:1;break;case ge:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vn.DEFAULT_IMAGE=null,Vn.DEFAULT_MAPPING=300,Vn.DEFAULT_ANISOTROPY=1;var Hn=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Un=class extends Ut{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Hn(0,0,e,t),this.scissorTest=!1,this.viewport=new Hn(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Rn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Wn=class extends Un{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gn=class extends Vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_e,this.minFilter=_e,this.wrapR=he,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Kn=class extends Vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_e,this.minFilter=_e,this.wrapR=he,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jn.copy(this).projectOnVector(e),this.sub(Jn)}reflect(e){return this.sub(Jn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jn=new U,Yn=new qn,Xn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Qn):Qn.fromBufferAttribute(r,t),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),$n.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),$n.copy(e.boundingBox)),$n.applyMatrix4(e.matrixWorld),this.union($n)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),sr.subVectors(this.max,or),er.subVectors(e.a,or),tr.subVectors(e.b,or),nr.subVectors(e.c,or),rr.subVectors(tr,er),ir.subVectors(nr,tr),ar.subVectors(er,nr);let t=[0,-rr.z,rr.y,0,-ir.z,ir.y,0,-ar.z,ar.y,rr.z,0,-rr.x,ir.z,0,-ir.x,ar.z,0,-ar.x,-rr.y,rr.x,0,-ir.y,ir.x,0,-ar.y,ar.x,0];return!ur(t,er,tr,nr,sr)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,er,tr,nr,sr))?!1:(cr.crossVectors(rr,ir),t=[cr.x,cr.y,cr.z],ur(t,er,tr,nr,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Zn=[new U,new U,new U,new U,new U,new U,new U,new U],Qn=new U,$n=new Xn,er=new U,tr=new U,nr=new U,rr=new U,ir=new U,ar=new U,or=new U,sr=new U,cr=new U,lr=new U;function ur(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){lr.fromArray(e,a);let o=i.x*Math.abs(lr.x)+i.y*Math.abs(lr.y)+i.z*Math.abs(lr.z),s=t.dot(lr),c=n.dot(lr),l=r.dot(lr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var dr=new Xn,fr=new U,pr=new U,mr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?dr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);let t=fr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(fr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(pr)),this.expandByPoint(fr.copy(e.center).sub(pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hr=new U,gr=new U,_r=new U,vr=new U,yr=new U,br=new U,xr=new U,Sr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,t),hr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gr.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(gr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(_r),o=vr.dot(this.direction),s=-vr.dot(_r),c=vr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gr).addScaledVector(_r,d),f}intersectSphere(e,t){hr.subVectors(e.center,this.origin);let n=hr.dot(this.direction),r=hr.dot(hr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,n,r,i){yr.subVectors(t,e),br.subVectors(n,e),xr.crossVectors(yr,br);let a=this.direction.dot(xr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vr.subVectors(this.origin,e);let s=o*this.direction.dot(br.crossVectors(vr,br));if(s<0)return null;let c=o*this.direction.dot(yr.cross(vr));if(c<0||s+c>a)return null;let l=-o*vr.dot(xr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cr=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/wr.setFromMatrixColumn(e,0).length(),i=1/wr.setFromMatrixColumn(e,1).length(),a=1/wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Er,e,Dr)}lookAt(e,t,n){let r=this.elements;return Ar.subVectors(e,t),Ar.lengthSq()===0&&(Ar.z=1),Ar.normalize(),Or.crossVectors(n,Ar),Or.lengthSq()===0&&(Math.abs(n.z)===1?Ar.x+=1e-4:Ar.z+=1e-4,Ar.normalize(),Or.crossVectors(n,Ar)),Or.normalize(),kr.crossVectors(Ar,Or),r[0]=Or.x,r[4]=kr.x,r[8]=Ar.x,r[1]=Or.y,r[5]=kr.y,r[9]=Ar.y,r[2]=Or.z,r[6]=kr.z,r[10]=Ar.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],N=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*N,i[12]=a*w+o*O+s*j+c*ne,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*N,i[13]=l*w+u*O+d*j+f*ne,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*N,i[14]=p*w+m*O+h*j+g*ne,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*N,i[15]=_*w+v*O+y*j+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=wr.set(r[0],r[1],r[2]).length(),a=wr.set(r[4],r[5],r[6]).length(),o=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Tr.copy(this);let s=1/i,c=1/a,l=1/o;return Tr.elements[0]*=s,Tr.elements[1]*=s,Tr.elements[2]*=s,Tr.elements[4]*=c,Tr.elements[5]*=c,Tr.elements[6]*=c,Tr.elements[8]*=l,Tr.elements[9]*=l,Tr.elements[10]*=l,t.setFromRotationMatrix(Tr),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Ht){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ht){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wr=new U,Tr=new Cr,Er=new U(0,0,0),Dr=new U(1,1,1),Or=new U,kr=new U,Ar=new U,jr=new Cr,Mr=new qn,Nr=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Yt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mr.setFromEuler(this),this.setFromQuaternion(Mr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nr.DEFAULT_ORDER=`XYZ`;var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Fr=0,Ir=new U,Lr=new qn,Rr=new Cr,zr=new U,Br=new U,Vr=new U,Hr=new qn,Ur=new U(1,0,0),Wr=new U(0,1,0),Gr=new U(0,0,1),Kr={type:`added`},qr={type:`removed`},Jr={type:`childadded`,child:null},Yr={type:`childremoved`,child:null},Xr=class e extends Ut{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fr++}),this.uuid=Jt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new Nr,r=new qn,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Cr},normalMatrix:{value:new H}}),this.matrix=new Cr,this.matrixWorld=new Cr,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Ur,e)}rotateY(e){return this.rotateOnAxis(Wr,e)}rotateZ(e){return this.rotateOnAxis(Gr,e)}translateOnAxis(e,t){return Ir.copy(e).applyQuaternion(this.quaternion),this.position.add(Ir.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ur,e)}translateY(e){return this.translateOnAxis(Wr,e)}translateZ(e){return this.translateOnAxis(Gr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zr.copy(e):zr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rr.lookAt(Br,zr,this.up):Rr.lookAt(zr,Br,this.up),this.quaternion.setFromRotationMatrix(Rr),r&&(Rr.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(Rr),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kr),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qr),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kr),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,Vr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Hr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Xr.DEFAULT_UP=new U(0,1,0),Xr.DEFAULT_MATRIX_AUTO_UPDATE=!0,Xr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zr=new U,Qr=new U,$r=new U,ei=new U,ti=new U,ni=new U,ri=new U,ii=new U,ai=new U,oi=new U,si=new Hn,ci=new Hn,li=new Hn,ui=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zr.subVectors(e,t),r.cross(Zr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Zr.subVectors(r,t),Qr.subVectors(n,t),$r.subVectors(e,t);let a=Zr.dot(Zr),o=Zr.dot(Qr),s=Zr.dot($r),c=Qr.dot(Qr),l=Qr.dot($r),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ei)!==null&&ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ei)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ei.x),s.addScaledVector(a,ei.y),s.addScaledVector(o,ei.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return si.setScalar(0),ci.setScalar(0),li.setScalar(0),si.fromBufferAttribute(e,t),ci.fromBufferAttribute(e,n),li.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(si,i.x),a.addScaledVector(ci,i.y),a.addScaledVector(li,i.z),a}static isFrontFacing(e,t,n,r){return Zr.subVectors(n,t),Qr.subVectors(e,t),Zr.cross(Qr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zr.subVectors(this.c,this.b),Qr.subVectors(this.a,this.b),Zr.cross(Qr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ti.subVectors(r,n),ni.subVectors(i,n),ii.subVectors(e,n);let s=ti.dot(ii),c=ni.dot(ii);if(s<=0&&c<=0)return t.copy(n);ai.subVectors(e,r);let l=ti.dot(ai),u=ni.dot(ai);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(ti,a);oi.subVectors(e,i);let f=ti.dot(oi),p=ni.dot(oi);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ni,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ri.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ri,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ti,a).addScaledVector(ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},di={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},pi={h:0,s:0,l:0};function mi(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Mn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Mn.workingColorSpace){if(e=Xt(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=mi(i,r,e+1/3),this.g=mi(i,r,e),this.b=mi(i,r,e-1/3)}return Mn.toWorkingColorSpace(this,r),this}setStyle(e,t=Nt){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=di[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Mn.fromWorkingColorSpace(hi.copy(this),e),Math.round(Yt(hi.r*255,0,255))*65536+Math.round(Yt(hi.g*255,0,255))*256+Math.round(Yt(hi.b*255,0,255))}getHexString(e=Nt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mn.workingColorSpace){Mn.fromWorkingColorSpace(hi.copy(this),t);let n=hi.r,r=hi.g,i=hi.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Mn.workingColorSpace){return Mn.fromWorkingColorSpace(hi.copy(this),t),e.r=hi.r,e.g=hi.g,e.b=hi.b,e}getStyle(e=Nt){Mn.fromWorkingColorSpace(hi.copy(this),e);let t=hi.r,n=hi.g,r=hi.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(pi);let n=$t(fi.h,pi.h,t),r=$t(fi.s,pi.s,t),i=$t(fi.l,pi.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hi=new W;W.NAMES=di;var gi=0,_i=class extends Ut{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gi++}),this.uuid=Jt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bt,this.stencilZFail=Bt,this.stencilZPass=Bt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},vi=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yi=new U,bi=new vn,xi=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Vt,this.updateRanges=[],this.gpuType=ke,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bi.fromBufferAttribute(this,t),bi.applyMatrix3(e),this.setXY(t,bi.x,bi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yi.fromBufferAttribute(this,t),yi.applyMatrix3(e),this.setXYZ(t,yi.x,yi.y,yi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yi.fromBufferAttribute(this,t),yi.applyMatrix4(e),this.setXYZ(t,yi.x,yi.y,yi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yi.fromBufferAttribute(this,t),yi.applyNormalMatrix(e),this.setXYZ(t,yi.x,yi.y,yi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yi.fromBufferAttribute(this,t),yi.transformDirection(e),this.setXYZ(t,yi.x,yi.y,yi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),r=gn(r,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Si=class extends xi{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ci=class extends xi{constructor(e,t,n){super(new Uint32Array(e),t,n)}},wi=class extends xi{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ti=0,Ei=new Cr,Di=new Xr,Oi=new U,ki=new Xn,Ai=new Xn,ji=new U,Mi=class e extends Ut{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ti++}),this.uuid=Jt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(bn(e)?Ci:Si)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,n){return Ei.makeTranslation(e,t,n),this.applyMatrix4(Ei),this}scale(e,t,n){return Ei.makeScale(e,t,n),this.applyMatrix4(Ei),this}lookAt(e){return Di.lookAt(e),Di.updateMatrix(),this.applyMatrix4(Di.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new wi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ki.setFromBufferAttribute(n),this.morphTargetsRelative?(ji.addVectors(this.boundingBox.min,ki.min),this.boundingBox.expandByPoint(ji),ji.addVectors(this.boundingBox.max,ki.max),this.boundingBox.expandByPoint(ji)):(this.boundingBox.expandByPoint(ki.min),this.boundingBox.expandByPoint(ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(ki.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ai.setFromBufferAttribute(n),this.morphTargetsRelative?(ji.addVectors(ki.min,Ai.min),ki.expandByPoint(ji),ji.addVectors(ki.max,Ai.max),ki.expandByPoint(ji)):(ki.expandByPoint(Ai.min),ki.expandByPoint(Ai.max))}ki.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ji.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ji));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ji.fromBufferAttribute(a,t),o&&(Oi.fromBufferAttribute(e,t),ji.add(Oi)),r=Math.max(r,n.distanceToSquared(ji))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new xi(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new vn,f=new vn,p=new vn,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new xi(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ji.fromBufferAttribute(e,t),ji.normalize(),e.setXYZ(t,ji.x,ji.y,ji.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new xi(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ni=new Cr,Pi=new Sr,Fi=new mr,Ii=new U,Li=new U,Ri=new U,zi=new U,Bi=new U,Vi=new U,Hi=new U,Ui=new U,Wi=class extends Xr{constructor(e=new Mi,t=new vi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Vi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Bi.fromBufferAttribute(s,e),a?Vi.addScaledVector(Bi,r):Vi.addScaledVector(Bi.sub(t),r))}t.add(Vi)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(i),Pi.copy(e.ray).recast(e.near),!(Fi.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Fi,Ii)===null||Pi.origin.distanceToSquared(Ii)>(e.far-e.near)**2))&&(Ni.copy(i).invert(),Pi.copy(e.ray).applyMatrix4(Ni),(n.boundingBox===null||Pi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ki(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ki(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ki(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ki(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Gi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ui.copy(s),Ui.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ui);return l<n.near||l>n.far?null:{distance:l,point:Ui.clone(),object:e}}function Ki(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Li),e.getVertexPosition(c,Ri),e.getVertexPosition(l,zi);let u=Gi(e,t,n,r,Li,Ri,zi,Hi);if(u){let e=new U;ui.getBarycoord(Hi,Li,Ri,zi,e),i&&(u.uv=ui.getInterpolatedAttribute(i,s,c,l,e,new vn)),a&&(u.uv1=ui.getInterpolatedAttribute(a,s,c,l,e,new vn)),o&&(u.normal=ui.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};ui.getNormal(Li,Ri,zi,t.normal),u.face=t,u.barycoord=e}return u}var qi=class e extends Mi{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new wi(c,3)),this.setAttribute(`normal`,new wi(l,3)),this.setAttribute(`uv`,new wi(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ji(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Yi(e){let t={};for(let n=0;n<e.length;n++){let r=Ji(e[n]);for(let e in r)t[e]=r[e]}return t}function Xi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Zi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Mn.workingColorSpace}var Qi={clone:Ji,merge:Yi},$i=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ea=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ta=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$i,this.fragmentShader=ea,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Xi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},na=class extends Xr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Cr,this.projectionMatrix=new Cr,this.projectionMatrixInverse=new Cr,this.coordinateSystem=Ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ra=new U,ia=new vn,aa=new vn,oa=class extends na{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qt*2*Math.atan(Math.tan(Kt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ra.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ra.x,ra.y).multiplyScalar(-e/ra.z),ra.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ra.x,ra.y).multiplyScalar(-e/ra.z)}getViewSize(e,t){return this.getViewBounds(e,ia,aa),t.subVectors(aa,ia)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sa=-90,ca=1,la=class extends Xr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new oa(sa,ca,e,t);r.layers=this.layers,this.add(r);let i=new oa(sa,ca,e,t);i.layers=this.layers,this.add(i);let a=new oa(sa,ca,e,t);a.layers=this.layers,this.add(a);let o=new oa(sa,ca,e,t);o.layers=this.layers,this.add(o);let s=new oa(sa,ca,e,t);s.layers=this.layers,this.add(s);let c=new oa(sa,ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ua=class extends Vn{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},da=class extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ua(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?be:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qi(5,5,5),i=new ta({name:`CubemapFromEquirect`,uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Wi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=be),new la(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},fa=new U,pa=new U,ma=new H,ha=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fa.subVectors(n,t).cross(pa.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ma.getNormalMatrix(e),r=this.coplanarPoint(fa).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ga=new mr,_a=new U,va=class{constructor(e=new ha,t=new ha,n=new ha,r=new ha,i=new ha,a=new ha){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ht){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ga.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ga.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ga)}intersectsSprite(e){return ga.center.set(0,0,0),ga.radius=.7071067811865476,ga.applyMatrix4(e.matrixWorld),this.intersectsSphere(ga)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ya(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ba(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var xa=class e extends Mi{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new wi(p,3)),this.setAttribute(`normal`,new wi(m,3)),this.setAttribute(`uv`,new wi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},G={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new vn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new vn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Sa={basic:{uniforms:Yi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:Yi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:Yi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:Yi([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:Yi([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:Yi([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:Yi([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:Yi([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:Yi([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:Yi([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:Yi([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distanceRGBA:{uniforms:Yi([K.common,K.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distanceRGBA_vert,fragmentShader:G.distanceRGBA_frag},shadow:{uniforms:Yi([K.lights,K.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};Sa.physical={uniforms:Yi([Sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new vn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new vn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new vn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var Ca={r:0,b:0,g:0},wa=new Nr,Ta=new Cr;function Ea(e,t,n,r,i,a,o){let s=new W(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new Wi(new qi(1,1,1),new ta({name:`BackgroundCubeMaterial`,uniforms:Ji(Sa.backgroundCube.uniforms),vertexShader:Sa.backgroundCube.vertexShader,fragmentShader:Sa.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),wa.copy(n.backgroundRotation),wa.x*=-1,wa.y*=-1,wa.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(wa.y*=-1,wa.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ta.makeRotationFromEuler(wa)),u.material.toneMapped=Mn.getTransfer(r.colorSpace)!==Rt,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new Wi(new xa(2,2),new ta({name:`BackgroundMaterial`,uniforms:Ji(Sa.background.uniforms),vertexShader:Sa.background.vertexShader,fragmentShader:Sa.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=Mn.getTransfer(r.colorSpace)!==Rt,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Ca,Zi(e)),r.buffers.color.setClear(Ca.r,Ca.g,Ca.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function Da(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Oa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e];for(let e=0;e<s.length;e++)n.update(t,r,s[e])}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function ka(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`);if(f===!0){let e=t.get(`EXT_clip_control`);e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT)}let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Aa(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ha,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function ja(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new da(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Ma=class extends na{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Na=4,Pa=[.125,.215,.35,.446,.526,.582],Fa=20,Ia=new Ma,La=new W,Ra=null,za=0,Ba=0,Va=!1,Ha=(1+Math.sqrt(5))/2,Ua=1/Ha,Wa=[new U(-Ha,Ua,0),new U(Ha,Ua,0),new U(-Ua,0,Ha),new U(Ua,0,Ha),new U(0,Ha,-Ua),new U(0,Ha,Ua),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Ga=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ra=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,za,Ba),this._renderer.xr.enabled=Va,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:be,minFilter:be,generateMipmaps:!1,type:Ae,format:Le,colorSpace:Pt,depthBuffer:!1},r=qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ka(r)),this._blurMaterial=Ya(r,e,t)}return r}_compileMaterial(e){let t=new Wi(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,r){let i=new oa(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(La),s.toneMapping=0,s.autoClear=!1;let u=new vi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new Wi(new qi,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(La),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Ja(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xa());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Wi(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ja(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ia)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Wa[(r-t-1)%Wa.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Wi(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Fa;m>Fa&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fa}`);let h=[],g=0;for(let e=0;e<Fa;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ja(t,3*v*(r>_-Na?r-_+Na:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ia)}};function Ka(e){let t=[],n=[],r=[],i=e,a=e-Na+1+Pa.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Na?s=Pa[o-e+Na-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Mi;h.setAttribute(`position`,new xi(f,3)),h.setAttribute(`uv`,new xi(p,2)),h.setAttribute(`faceIndex`,new xi(m,1)),t.push(h),i>Na&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function qa(e,t,n){let r=new Wn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ja(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ya(e,t,n){let r=new Float32Array(Fa),i=new U(0,1,0);return new ta({name:`SphericalGaussianBlur`,defines:{n:Fa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xa(){return new ta({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Za(){return new ta({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $a(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Ga(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Ga(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function eo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&wn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function to(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(bn(n)?Ci:Si)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function no(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e];for(let e=0;e<c.length;e++)n.update(t,r,c[e])}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ro(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function io(e,t,n){let r=new WeakMap,i=new Hn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Gn(h,p,m,u);g.type=ke,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new vn(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ao(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var oo=class extends Vn{constructor(e,t,n,r,i,a,o,s,c,l=Be){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===1026&&(n=Oe),n===void 0&&l===1027&&(n=Ne),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?_e:o,this.minFilter=s===void 0?_e:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},so=new Vn,co=new oo(1,1),lo=new Gn,uo=new Kn,fo=new ua,po=[],mo=[],ho=new Float32Array(16),go=new Float32Array(9),_o=new Float32Array(4);function vo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=po[i];if(a===void 0&&(a=new Float32Array(i),po[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function yo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function bo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function xo(e,t){let n=mo[t];n===void 0&&(n=new Int32Array(t),mo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function So(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Co(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yo(n,t))return;e.uniform2fv(this.addr,t),bo(n,t)}}function wo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(yo(n,t))return;e.uniform3fv(this.addr,t),bo(n,t)}}function To(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yo(n,t))return;e.uniform4fv(this.addr,t),bo(n,t)}}function Eo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(yo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),bo(n,t)}else{if(yo(n,r))return;_o.set(r),e.uniformMatrix2fv(this.addr,!1,_o),bo(n,r)}}function Do(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(yo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),bo(n,t)}else{if(yo(n,r))return;go.set(r),e.uniformMatrix3fv(this.addr,!1,go),bo(n,r)}}function Oo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(yo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),bo(n,t)}else{if(yo(n,r))return;ho.set(r),e.uniformMatrix4fv(this.addr,!1,ho),bo(n,r)}}function ko(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ao(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yo(n,t))return;e.uniform2iv(this.addr,t),bo(n,t)}}function jo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yo(n,t))return;e.uniform3iv(this.addr,t),bo(n,t)}}function Mo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yo(n,t))return;e.uniform4iv(this.addr,t),bo(n,t)}}function No(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Po(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yo(n,t))return;e.uniform2uiv(this.addr,t),bo(n,t)}}function Fo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yo(n,t))return;e.uniform3uiv(this.addr,t),bo(n,t)}}function Io(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yo(n,t))return;e.uniform4uiv(this.addr,t),bo(n,t)}}function Lo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(co.compareFunction=515,a=co):a=so,n.setTexture2D(t||a,i)}function Ro(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||uo,i)}function zo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||fo,i)}function Bo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||lo,i)}function Vo(e){switch(e){case 5126:return So;case 35664:return Co;case 35665:return wo;case 35666:return To;case 35674:return Eo;case 35675:return Do;case 35676:return Oo;case 5124:case 35670:return ko;case 35667:case 35671:return Ao;case 35668:case 35672:return jo;case 35669:case 35673:return Mo;case 5125:return No;case 36294:return Po;case 36295:return Fo;case 36296:return Io;case 35678:case 36198:case 36298:case 36306:case 35682:return Lo;case 35679:case 36299:case 36307:return Ro;case 35680:case 36300:case 36308:case 36293:return zo;case 36289:case 36303:case 36311:case 36292:return Bo}}function Ho(e,t){e.uniform1fv(this.addr,t)}function Uo(e,t){let n=vo(t,this.size,2);e.uniform2fv(this.addr,n)}function Wo(e,t){let n=vo(t,this.size,3);e.uniform3fv(this.addr,n)}function Go(e,t){let n=vo(t,this.size,4);e.uniform4fv(this.addr,n)}function Ko(e,t){let n=vo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function qo(e,t){let n=vo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Jo(e,t){let n=vo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Yo(e,t){e.uniform1iv(this.addr,t)}function Xo(e,t){e.uniform2iv(this.addr,t)}function Zo(e,t){e.uniform3iv(this.addr,t)}function Qo(e,t){e.uniform4iv(this.addr,t)}function $o(e,t){e.uniform1uiv(this.addr,t)}function es(e,t){e.uniform2uiv(this.addr,t)}function ts(e,t){e.uniform3uiv(this.addr,t)}function ns(e,t){e.uniform4uiv(this.addr,t)}function rs(e,t,n){let r=this.cache,i=t.length,a=xo(n,i);yo(r,a)||(e.uniform1iv(this.addr,a),bo(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||so,a[e])}function is(e,t,n){let r=this.cache,i=t.length,a=xo(n,i);yo(r,a)||(e.uniform1iv(this.addr,a),bo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||uo,a[e])}function as(e,t,n){let r=this.cache,i=t.length,a=xo(n,i);yo(r,a)||(e.uniform1iv(this.addr,a),bo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||fo,a[e])}function os(e,t,n){let r=this.cache,i=t.length,a=xo(n,i);yo(r,a)||(e.uniform1iv(this.addr,a),bo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||lo,a[e])}function ss(e){switch(e){case 5126:return Ho;case 35664:return Uo;case 35665:return Wo;case 35666:return Go;case 35674:return Ko;case 35675:return qo;case 35676:return Jo;case 5124:case 35670:return Yo;case 35667:case 35671:return Xo;case 35668:case 35672:return Zo;case 35669:case 35673:return Qo;case 5125:return $o;case 36294:return es;case 36295:return ts;case 36296:return ns;case 35678:case 36198:case 36298:case 36306:case 35682:return rs;case 35679:case 36299:case 36307:return is;case 35680:case 36300:case 36308:case 36293:return as;case 36289:case 36303:case 36311:case 36292:return os}}var cs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vo(t.type)}},ls=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ss(t.type)}},us=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ds=/(\w+)(\])?(\[|\.)?/g;function fs(e,t){e.seq.push(t),e.map[t.id]=t}function ps(e,t,n){let r=e.name,i=r.length;for(ds.lastIndex=0;;){let a=ds.exec(r),o=ds.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){fs(n,l===void 0?new cs(s,e,t):new ls(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new us(s),fs(n,e)),n=e}}}var ms=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ps(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function hs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var gs=37297,_s=0;function vs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function ys(e){let t=Mn.getPrimaries(Mn.workingColorSpace),n=Mn.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case Pt:case It:return[r,`LinearTransferOETF`];case Nt:case Ft:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function bs(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+vs(e.getShaderSource(t),r)}return i}function xs(e,t){let n=ys(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Ss(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Cs=new U;function ws(){return Mn.getLuminanceCoefficients(Cs),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Cs.x.toFixed(4)}, ${Cs.y.toFixed(4)}, ${Cs.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ts(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Os).join(`
`)}function Es(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ds(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Os(e){return e!==``}function ks(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function As(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var js=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ms(e){return e.replace(js,Ps)}var Ns=new Map;function Ps(e,t){let n=G[t];if(n===void 0){let e=Ns.get(t);if(e!==void 0)n=G[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Ms(n)}var Fs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Is(e){return e.replace(Fs,Ls)}function Ls(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Rs(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function zs(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Bs(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Vs(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function Hs(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Us(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ws(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=zs(n),l=Bs(n),u=Vs(n),d=Hs(n),f=Us(n),p=Ts(n),m=Es(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Os).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Os).join(`
`),_.length>0&&(_+=`
`)):(g=[Rs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Os).join(`
`),_=[Rs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:Ss(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,xs(`linearToOutputTexel`,n.outputColorSpace),ws(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Os).join(`
`)),o=Ms(o),o=ks(o,n),o=As(o,n),s=Ms(s),s=ks(s,n),s=As(s,n),o=Is(o),s=Is(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=hs(i,i.VERTEX_SHADER,y),S=hs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=bs(i,x,`vertex`),r=bs(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ms(i,h),T=Ds(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,gs)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_s++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Gs=0,Ks=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qs(e),t.set(e,n)),n}},qs=class{constructor(e){this.id=Gs++,this.code=e,this.usedTimes=0}};function Js(e,t,n,r,i,a,o){let s=new Pr,c=new Ks,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures,m=i.precision,h={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(e){return l.add(e),e===0?`uv`:`uv${e}`}function _(a,s,u,_,v){let y=_.fog,b=v.geometry,x=a.isMeshStandardMaterial?_.environment:null,S=(a.isMeshStandardMaterial?n:t).get(a.envMap||x),C=S&&S.mapping===306?S.image.height:null,w=h[a.type];a.precision!==null&&(m=i.getMaxPrecision(a.precision),m!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,m,`instead.`));let T=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,E=T===void 0?0:T.length,D=0;b.morphAttributes.position!==void 0&&(D=1),b.morphAttributes.normal!==void 0&&(D=2),b.morphAttributes.color!==void 0&&(D=3);let O,k,A,ee;if(w){let e=Sa[w];O=e.vertexShader,k=e.fragmentShader}else O=a.vertexShader,k=a.fragmentShader,c.update(a),A=c.getVertexShaderID(a),ee=c.getFragmentShaderID(a);let j=e.getRenderTarget(),te=v.isInstancedMesh===!0,M=v.isBatchedMesh===!0,N=!!a.map,ne=!!a.matcap,re=!!S,P=!!a.aoMap,F=!!a.lightMap,ie=!!a.bumpMap,ae=!!a.normalMap,I=!!a.displacementMap,oe=!!a.emissiveMap,se=!!a.metalnessMap,ce=!!a.roughnessMap,le=a.anisotropy>0,ue=a.clearcoat>0,L=a.dispersion>0,de=a.iridescence>0,R=a.sheen>0,fe=a.transmission>0,z=le&&!!a.anisotropyMap,pe=ue&&!!a.clearcoatMap,B=ue&&!!a.clearcoatNormalMap,V=ue&&!!a.clearcoatRoughnessMap,me=de&&!!a.iridescenceMap,he=de&&!!a.iridescenceThicknessMap,ge=R&&!!a.sheenColorMap,_e=R&&!!a.sheenRoughnessMap,ve=!!a.specularMap,ye=!!a.specularColorMap,be=!!a.specularIntensityMap,xe=fe&&!!a.transmissionMap,Se=fe&&!!a.thicknessMap,Ce=!!a.gradientMap,we=!!a.alphaMap,Te=a.alphaTest>0,Ee=!!a.alphaHash,De=!!a.extensions,Oe=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Oe=e.toneMapping);let ke={shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:k,defines:a.defines,customVertexShaderID:A,customFragmentShaderID:ee,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:m,batching:M,batchingColor:M&&v._colorsTexture!==null,instancing:te,instancingColor:te&&v.instanceColor!==null,instancingMorph:te&&v.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Pt,alphaToCoverage:!!a.alphaToCoverage,map:N,matcap:ne,envMap:re,envMapMode:re&&S.mapping,envMapCubeUVHeight:C,aoMap:P,lightMap:F,bumpMap:ie,normalMap:ae,displacementMap:p&&I,emissiveMap:oe,normalMapObjectSpace:ae&&a.normalMapType===1,normalMapTangentSpace:ae&&a.normalMapType===0,metalnessMap:se,roughnessMap:ce,anisotropy:le,anisotropyMap:z,clearcoat:ue,clearcoatMap:pe,clearcoatNormalMap:B,clearcoatRoughnessMap:V,dispersion:L,iridescence:de,iridescenceMap:me,iridescenceThicknessMap:he,sheen:R,sheenColorMap:ge,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:ye,specularIntensityMap:be,transmission:fe,transmissionMap:xe,thicknessMap:Se,gradientMap:Ce,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:Ee,combine:a.combine,mapUv:N&&g(a.map.channel),aoMapUv:P&&g(a.aoMap.channel),lightMapUv:F&&g(a.lightMap.channel),bumpMapUv:ie&&g(a.bumpMap.channel),normalMapUv:ae&&g(a.normalMap.channel),displacementMapUv:I&&g(a.displacementMap.channel),emissiveMapUv:oe&&g(a.emissiveMap.channel),metalnessMapUv:se&&g(a.metalnessMap.channel),roughnessMapUv:ce&&g(a.roughnessMap.channel),anisotropyMapUv:z&&g(a.anisotropyMap.channel),clearcoatMapUv:pe&&g(a.clearcoatMap.channel),clearcoatNormalMapUv:B&&g(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&g(a.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(a.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(a.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&g(a.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(a.sheenRoughnessMap.channel),specularMapUv:ve&&g(a.specularMap.channel),specularColorMapUv:ye&&g(a.specularColorMap.channel),specularIntensityMapUv:be&&g(a.specularIntensityMap.channel),transmissionMapUv:xe&&g(a.transmissionMap.channel),thicknessMapUv:Se&&g(a.thicknessMap.channel),alphaMapUv:we&&g(a.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(ae||le),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!b.attributes.uv&&(N||we),fog:!!y,useFog:a.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:v.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:N&&a.map.isVideoTexture===!0&&Mn.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:De&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(De&&a.extensions.multiDraw===!0||M)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function v(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.alphaToCoverage&&s.enable(20),e.push(s.mask)}function x(e){let t=h[e.type],n;if(t){let e=Sa[t];n=Qi.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Ws(e,n,t,a),u.push(r)),r}function C(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:T}}function Ys(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Xs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Zs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Qs(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Xs),r.length>1&&r.sort(t||Zs),i.length>1&&i.sort(t||Zs)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function $s(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Qs,e.set(t,[i])):n>=r.length?(i=new Qs,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ec(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new U,color:new W};break;case`SpotLight`:n={position:new U,direction:new U,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function tc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vn};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vn};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vn,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var nc=0;function rc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ic(e){let t=new ec,n=tc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new Cr,o=new Cr;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(rc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=nc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ac(e){let t=new ic(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function oc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ac(e),t.set(n,[a])):r>=i.length?(a=new ac(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var sc=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=jt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cc=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dc(e,t,n){let r=new va,i=new vn,a=new vn,o=new Hn,s=new sc({depthPacking:Mt}),c=new cc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vn},radius:{value:4}},vertexShader:lc,fragmentShader:uc}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Mi;m.setAttribute(`position`,new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Wi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:_e,magFilter:_e};d.map!==null&&d.map.dispose(),d.map=new Wn(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Wn(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var fc={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function pc(e){function t(){let t=!1,n=new Hn,r=null,i=new Hn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function n(){let t=!1,n=!1,r=null,i=null,a=null;return{setReversed:function(e){n=e},setTest:function(t){t?I(e.DEPTH_TEST):oe(e.DEPTH_TEST)},setMask:function(n){r!==n&&!t&&(e.depthMask(n),r=n)},setFunc:function(t){if(n&&(t=fc[t]),i!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}i=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,r=null,i=null,a=null}}}function r(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):oe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let i=new t,a=new n,o=new r,s=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new W(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,j=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ee=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(te)[1]),ee=j>=1);let M=null,N={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),P=new Hn().fromArray(ne),F=new Hn().fromArray(re);function ie(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),I(e.DEPTH_TEST),a.setFunc(3),fe(!1),z(1),I(e.CULL_FACE),de(0);function I(t){l[t]!==!0&&(e.enable(t),l[t]=!0)}function oe(t){l[t]!==!1&&(e.disable(t),l[t]=!1)}function se(t,n){return u[t]!==n&&(e.bindFramebuffer(t,n),u[t]=n,t===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=f,i=!1;if(t){r=d.get(n),r===void 0&&(r=[],d.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return p!==t&&(e.useProgram(t),p=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let L={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0){m===!0&&(oe(e.BLEND),m=!1);return}if(m===!1&&(I(e.BLEND),m=!0),t!==5){if(t!==h||u!==w){if((g!==100||y!==100)&&(e.blendEquation(e.FUNC_ADD),g=100,y=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}_=null,v=null,b=null,x=null,S.set(0,0,0),C=0,h=t,w=u}return}a||=n,o||=r,s||=i,(n!==g||a!==y)&&(e.blendEquationSeparate(ue[n],ue[a]),g=n,y=a),(r!==_||i!==v||o!==b||s!==x)&&(e.blendFuncSeparate(L[r],L[i],L[o],L[s]),_=r,v=i,b=o,x=s),(c.equals(S)===!1||l!==C)&&(e.blendColor(c.r,c.g,c.b,l),S.copy(c),C=l),h=t,w=!1}function R(t,n){t.side===2?oe(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),a.setFunc(t.depthFunc),a.setTest(t.depthTest),a.setMask(t.depthWrite),i.setMask(t.colorWrite);let s=t.stencilWrite;o.setTest(s),s&&(o.setMask(t.stencilWriteMask),o.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),o.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),B(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):oe(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){T!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),T=t)}function z(t){t===0?oe(e.CULL_FACE):(I(e.CULL_FACE),t!==E&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),E=t}function pe(t){t!==D&&(ee&&e.lineWidth(t),D=t)}function B(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(O!==n||k!==r)&&(e.polygonOffset(n,r),O=n,k=r)):oe(e.POLYGON_OFFSET_FILL)}function V(t){t?I(e.SCISSOR_TEST):oe(e.SCISSOR_TEST)}function me(t){t===void 0&&(t=e.TEXTURE0+A-1),M!==t&&(e.activeTexture(t),M=t)}function he(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+A-1:M);let i=N[r];i===void 0&&(i={type:void 0,texture:void 0},N[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function ge(){let t=N[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function _e(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(t){P.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),P.copy(t))}function Oe(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function ke(t,n){let r=c.get(n);r===void 0&&(r=new WeakMap,c.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ae(t,n){let r=c.get(n).get(t);s.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),s.set(n,r))}function je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),l={},M=null,N={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new W(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,P.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:I,disable:oe,bindFramebuffer:se,drawBuffers:ce,useProgram:le,setBlending:de,setMaterial:R,setFlipSided:fe,setCullFace:z,setLineWidth:pe,setPolygonOffset:B,setScissorTest:V,activeTexture:me,bindTexture:he,unbindTexture:ge,compressedTexImage2D:_e,compressedTexImage3D:ve,texImage2D:Te,texImage3D:Ee,updateUBOMapping:ke,uniformBlockBinding:Ae,texStorage2D:Ce,texStorage3D:we,texSubImage2D:ye,texSubImage3D:be,compressedTexSubImage2D:xe,compressedTexSubImage3D:Se,scissor:De,viewport:Oe,reset:je}}function mc(e,t,n,r){let i=hc(r);switch(n){case Fe:return e*t;case Re:return e*t;case ze:return e*t*2;case He:return e*t/i.components*i.byteLength;case Ue:return e*t/i.components*i.byteLength;case We:return e*t*2/i.components*i.byteLength;case Ge:return e*t*2/i.components*i.byteLength;case Ie:return e*t*3/i.components*i.byteLength;case Le:return e*t*4/i.components*i.byteLength;case Ke:return e*t*4/i.components*i.byteLength;case qe:case Je:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ye:case Xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qe:case et:return Math.max(e,16)*Math.max(t,8)/4;case Ze:case $e:return Math.max(e,8)*Math.max(t,8)/2;case tt:case nt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case rt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case it:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case at:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ot:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case st:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ct:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case lt:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ut:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case dt:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ft:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case pt:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case mt:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ht:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case gt:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case _t:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case vt:case yt:case bt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case xt:case St:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ct:case wt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function hc(e){switch(e){case Ce:case we:return{byteLength:1,components:1};case Ee:case Te:case Ae:return{byteLength:2,components:1};case je:case Me:return{byteLength:2,components:4};case Oe:case De:case ke:return{byteLength:4,components:1};case Pe:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function gc(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vn,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):xn(`canvas`)}function h(e,t,n){let r=1,i=V(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function g(e){return e.generateMipmaps&&e.minFilter!==1003&&e.minFilter!==1006}function _(t){e.generateMipmap(t)}function v(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?Lt:Mn.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function y(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function b(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function x(e){let t=e.target;t.removeEventListener(`dispose`,x),C(t),t.isVideoTexture&&u.delete(t)}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),T(t)}function C(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&w(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function w(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function T(t){let n=r.get(t);if(t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let E=0;function D(){E=0}function O(){let e=E;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),E+=1,e}function k(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function A(t,i){let a=r.get(t);if(t.isVideoTexture&&pe(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{F(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ee(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){F(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function j(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){F(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){ie(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let M={[me]:e.REPEAT,[he]:e.CLAMP_TO_EDGE,[ge]:e.MIRRORED_REPEAT},N={[_e]:e.NEAREST,[ve]:e.NEAREST_MIPMAP_NEAREST,[ye]:e.NEAREST_MIPMAP_LINEAR,[be]:e.LINEAR,[xe]:e.LINEAR_MIPMAP_NEAREST,[Se]:e.LINEAR_MIPMAP_LINEAR},ne={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function re(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,M[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,M[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,M[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,N[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,N[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ne[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function P(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,x));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=k(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&w(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function F(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=P(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=Mn.getPrimaries(Mn.workingColorSpace),r=o.colorSpace===``?null:Mn.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=B(o,p);let m=a.convert(o.format,o.colorSpace),x=a.convert(o.type),S=v(o.internalFormat,m,x,o.colorSpace,o.isVideoTexture);re(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=b(o,p);if(o.isDepthTexture)S=y(o.format===Ve,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,x,null));else if(o.isDataTexture){if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,x,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,x,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,p.width,p.height,m,x,p.data)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,x,p.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==1023){if(m!==null){if(T){if(D){if(o.layerUpdates.size>0){let r=mc(C.width,C.height,o.format,o.type);for(let i of o.layerUpdates){let a=C.data.subarray(i*r/C.data.BYTES_PER_ELEMENT,(i+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,C.width,C.height,1,m,a,0,0)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data,0,0)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,x,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,x,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,x,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,x,C.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}}else if(o.isDataArrayTexture){if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D){if(o.layerUpdates.size>0){let t=mc(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,x,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,x,p.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,x,p.data)}else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,x,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,x,p.data);else if(o.isFramebufferTexture){if(E){if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,x,null),t>>=1,r>>=1}}}else if(w.length>0){if(T&&E){let t=V(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,x,C):n.texImage2D(e.TEXTURE_2D,t,S,m,x,C);o.generateMipmaps=!1}else if(T){if(E){let t=V(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,x,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,x,p);g(o)&&_(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ie(t,o,s){if(o.image.length!==6)return;let c=P(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Mn.getPrimaries(Mn.workingColorSpace),r=o.colorSpace===``?null:Mn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=B(o,m[e]);let y=m[0],x=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=v(o.internalFormat,x,S,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=b(o,y);re(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,y.width,y.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,x,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,x,S,i.data):x===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,x,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=V(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,x,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,x,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,x,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,x,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,x,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,x,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,x,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,x,S,i.image[t])}}}g(o)&&_(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ae(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=v(o.internalFormat,d,f,o.colorSpace);if(!r.get(i).__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,r.get(o).__webglTexture,0,fe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,r.get(o).__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function I(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=y(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=fe(n);z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=v(o.internalFormat,c,l,o.colorSpace),d=fe(n);r&&z(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function oe(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!r.get(i.depthTexture).__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),A(i.depthTexture,0);let a=r.get(i.depthTexture).__webglTexture,o=fe(i);if(i.depthTexture.format===1026)z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0);else if(i.depthTexture.format===1027)z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0);else throw Error(`Unknown depthTexture format`)}function se(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);oe(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),I(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),I(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ce(t,n,i){let a=r.get(t);n!==void 0&&ae(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&se(t)}function le(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,S);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&z(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=v(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=fe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),I(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),re(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ae(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a);n.bindTexture(e.TEXTURE_2D,o.__webglTexture),re(e.TEXTURE_2D,a),ae(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),g(a)&&_(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),re(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ae(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&_(r),n.unbindTexture()}t.depthBuffer&&se(t)}function ue(t){let i=t.textures;for(let a=0,o=i.length;a<o;a++){let o=i[a];if(g(o)){let i=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,a=r.get(o).__webglTexture;n.bindTexture(i,a),_(i),n.unbindTexture()}}}let L=[],de=[];function R(t){if(t.samples>0){if(z(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(L.length=0,de.length=0,L.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(L.push(l),de.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,de)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function fe(e){return Math.min(i.maxSamples,e.samples)}function z(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function pe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function B(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Mn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function V(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=A,this.setTexture2DArray=ee,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=ce,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=z}function _c(e,t){function n(n,r=``){let i,a=Mn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var vc=class extends oa{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},yc=class extends Xr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},bc={type:`move`},xc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bc)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Vn,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ta({vertexShader:Sc,fragmentShader:Cc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wi(new xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tc=class extends Ut{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=new wc,h=t.getContextAttributes(),g=null,_=null,v=[],y=[],b=new vn,x=null,S=new oa;S.layers.enable(1),S.viewport=new Hn;let C=new oa;C.layers.enable(2),C.viewport=new Hn;let w=[S,C],T=new vc;T.layers.enable(1),T.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return t===void 0&&(t=new xc,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return t===void 0&&(t=new xc,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return t===void 0&&(t=new xc,v[e]=t),t.getHandSpace()};function O(e){let t=y.indexOf(e.inputSource);if(t===-1)return;let n=v[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function k(){r.removeEventListener(`select`,O),r.removeEventListener(`selectstart`,O),r.removeEventListener(`selectend`,O),r.removeEventListener(`squeeze`,O),r.removeEventListener(`squeezestart`,O),r.removeEventListener(`squeezeend`,O),r.removeEventListener(`end`,k),r.removeEventListener(`inputsourceschange`,A);for(let e=0;e<v.length;e++){let t=y[e];t!==null&&(y[e]=null,v[e].disconnect(t))}E=null,D=null,m.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,_=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(g=e.getRenderTarget(),r.addEventListener(`select`,O),r.addEventListener(`selectstart`,O),r.addEventListener(`selectend`,O),r.addEventListener(`squeeze`,O),r.addEventListener(`squeezestart`,O),r.addEventListener(`squeezeend`,O),r.addEventListener(`end`,k),r.addEventListener(`inputsourceschange`,A),h.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){let n={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Wn(f.framebufferWidth,f.framebufferHeight,{format:Le,type:Ce,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let n=null,a=null,o=null;h.depth&&(o=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=h.stencil?Ve:Be,a=h.stencil?Ne:Oe);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Wn(d.textureWidth,d.textureHeight,{format:Le,type:Ce,depthTexture:new oo(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function A(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=y.indexOf(n);r>=0&&(y[r]=null,v[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=y.indexOf(n);if(r===-1){for(let e=0;e<v.length;e++)if(e>=y.length){y.push(n),r=e;break}else if(y[e]===null){y[e]=n,r=e;break}if(r===-1)break}let i=v[r];i&&i.connect(n)}}let ee=new U,j=new U;function te(e,t,n){ee.setFromMatrixPosition(t.matrixWorld),j.setFromMatrixPosition(n.matrixWorld);let r=ee.distanceTo(j),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function M(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;m.texture!==null&&(m.depthNear>0&&(t=m.depthNear),m.depthFar>0&&(n=m.depthFar)),T.near=C.near=S.near=t,T.far=C.far=S.far=n,(E!==T.near||D!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,D=T.far);let i=e.parent,a=T.cameras;M(T,i);for(let e=0;e<a.length;e++)M(a[e],i);a.length===2?te(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),N(e,T,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=qt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)};let ne=null;function re(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let n=!1;t.length!==T.cameras.length&&(T.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(_,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(_))}let o=w[r];o===void 0&&(o=new oa,o.layers.enable(r),o.viewport=new Hn,w[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(T.matrix.copy(o.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),n===!0&&T.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&m.init(e,n,r.renderState)}}for(let e=0;e<v.length;e++){let t=y[e],n=v[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let P=new ya;P.setAnimationLoop(re),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},Ec=new Nr,Dc=new Cr;function Oc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Zi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Ec.copy(o),Ec.x*=-1,Ec.y*=-1,Ec.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Ec.y*=-1,Ec.z*=-1),e.envMapRotation.value.setFromMatrix4(Dc.makeRotationFromEuler(Ec)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function kc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Ac=class{constructor(e={}){let{canvas:t=Sn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),p=new Int32Array(4),m=null,h=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=0,this.toneMappingExposure=1;let v=this,y=!1,b=0,x=0,S=null,C=-1,w=null,T=new Hn,E=new Hn,D=null,O=new W(0),k=0,A=t.width,ee=t.height,j=1,te=null,M=null,N=new Hn(0,0,A,ee),ne=new Hn(0,0,A,ee),re=!1,P=new va,F=!1,ie=!1,ae=new Cr,I=new Cr,oe=new U,se=new Hn,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function ue(){return S===null?j:1}let L=n;function de(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r169`),t.addEventListener(`webglcontextlost`,Le,!1),t.addEventListener(`webglcontextrestored`,Re,!1),t.addEventListener(`webglcontextcreationerror`,ze,!1),L===null){let t=`webgl2`;if(L=de(t,e),L===null)throw de(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let R,fe,z,pe,B,V,me,he,ge,_e,ve,ye,be,xe,we,Te,Ee,De,Oe,ke,je,Me,Ne,Pe;function Fe(){R=new eo(L),R.init(),Me=new _c(L,R),fe=new ka(L,R,e,Me),z=new pc(L),fe.reverseDepthBuffer&&z.buffers.depth.setReversed(!0),pe=new ro(L),B=new Ys,V=new gc(L,R,z,B,fe,Me,pe),me=new ja(v),he=new $a(v),ge=new ba(L),Ne=new Da(L,ge),_e=new to(L,ge,pe,Ne),ve=new ao(L,_e,ge,pe),Oe=new io(L,fe,V),Te=new Aa(B),ye=new Js(v,me,he,R,fe,Ne,Te),be=new Oc(v,B),xe=new $s,we=new oc(R),De=new Ea(v,me,he,z,ve,d,s),Ee=new dc(v,ve,fe),Pe=new kc(L,pe,fe,z),ke=new Oa(L,R,pe),je=new no(L,R,pe),pe.programs=ye.programs,v.capabilities=fe,v.extensions=R,v.properties=B,v.renderLists=xe,v.shadowMap=Ee,v.state=z,v.info=pe}Fe();let Ie=new Tc(v,L);this.xr=Ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=R.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=R.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(e){e!==void 0&&(j=e,this.setSize(A,ee,!1))},this.getSize=function(e){return e.set(A,ee)},this.setSize=function(e,n,r=!0){if(Ie.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}A=e,ee=n,t.width=Math.floor(e*j),t.height=Math.floor(n*j),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(A*j,ee*j).floor()},this.setDrawingBufferSize=function(e,n,r){A=e,ee=n,j=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(T)},this.getViewport=function(e){return e.copy(N)},this.setViewport=function(e,t,n,r){e.isVector4?N.set(e.x,e.y,e.z,e.w):N.set(e,t,n,r),z.viewport(T.copy(N).multiplyScalar(j).round())},this.getScissor=function(e){return e.copy(ne)},this.setScissor=function(e,t,n,r){e.isVector4?ne.set(e.x,e.y,e.z,e.w):ne.set(e,t,n,r),z.scissor(E.copy(ne).multiplyScalar(j).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(e){z.setScissorTest(re=e)},this.setOpaqueSort=function(e){te=e},this.setTransparentSort=function(e){M=e},this.getClearColor=function(e){return e.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(S!==null){let t=S.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=S.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=De.getClearColor(),r=De.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(f[0]=i,f[1]=a,f[2]=o,f[3]=r,L.clearBufferuiv(L.COLOR,0,f)):(p[0]=i,p[1]=a,p[2]=o,p[3]=r,L.clearBufferiv(L.COLOR,0,p))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,L.clearDepth(+!this.capabilities.reverseDepthBuffer)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Re,!1),t.removeEventListener(`webglcontextcreationerror`,ze,!1),xe.dispose(),we.dispose(),B.dispose(),me.dispose(),he.dispose(),ve.dispose(),Ne.dispose(),Pe.dispose(),ye.dispose(),Ie.dispose(),Ie.removeEventListener(`sessionstart`,Ke),Ie.removeEventListener(`sessionend`,qe),Je.stop()};function Le(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),y=!0}function Re(){console.log(`THREE.WebGLRenderer: Context Restored.`),y=!1;let e=pe.autoReset,t=Ee.enabled,n=Ee.autoUpdate,r=Ee.needsUpdate,i=Ee.type;Fe(),pe.autoReset=e,Ee.enabled=t,Ee.autoUpdate=n,Ee.needsUpdate=r,Ee.type=i}function ze(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Be(e){let t=e.target;t.removeEventListener(`dispose`,Be),Ve(t)}function Ve(e){He(e),B.remove(e)}function He(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){ye.releaseProgram(e)}),e.isShaderMaterial&&ye.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ce);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=rt(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=_e.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ne.setup(i,r,s,n,c);let h,g=ke;if(c!==null&&(h=ge.get(c),g=je,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*ue()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*ue()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(R.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ge.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ue(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,et(e,t,n),e.side=0,e.needsUpdate=!0,et(e,t,n),e.side=2):et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),h=we.get(n),h.init(t),_.push(h),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),h.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ue(a,n,e),r.add(a)}else Ue(t,n,e),r.add(t)}}),_.pop(),h=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){B.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}R.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let We=null;function Ge(e){We&&We(e)}function Ke(){Je.stop()}function qe(){Je.start()}let Je=new ya;Je.setAnimationLoop(Ge),typeof self<`u`&&Je.setContext(self),this.setAnimationLoop=function(e){We=e,Ie.setAnimationLoop(e),e===null?Je.stop():Je.start()},Ie.addEventListener(`sessionstart`,Ke),Ie.addEventListener(`sessionend`,qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(y===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(t),t=Ie.getCamera()),e.isScene===!0&&e.onBeforeRender(v,e,t,S),h=we.get(e,_.length),h.init(t),_.push(h),I.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),P.setFromProjectionMatrix(I),ie=this.localClippingEnabled,F=Te.init(this.clippingPlanes,ie),m=xe.get(e,g.length),m.init(),g.push(m),Ie.enabled===!0&&Ie.isPresenting===!0){let e=v.xr.getDepthSensingMesh();e!==null&&Ye(e,t,-1/0,v.sortObjects)}Ye(e,t,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(te,M),le=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,le&&De.addToRenderList(m,e),this.info.render.frame++,F===!0&&Te.beginShadows();let n=h.state.shadowsArray;Ee.render(n,e,t),F===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=m.opaque,i=m.transmissive;if(h.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];Ze(r,i,e,a)}le&&De.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Xe(m,e,r,r.viewport)}}else i.length>0&&Ze(r,i,e,t),le&&De.render(e),Xe(m,e,t);S!==null&&(V.updateMultisampleRenderTarget(S),V.updateRenderTargetMipmap(S)),e.isScene===!0&&e.onAfterRender(v,e,t),Ne.resetDefaultState(),C=-1,w=null,_.pop(),_.length>0?(h=_[_.length-1],F===!0&&Te.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,g.pop(),m=g.length>0?g[g.length-1]:null};function Ye(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)h.pushLight(e),e.castShadow&&h.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||P.intersectsSprite(e)){r&&se.setFromMatrixPosition(e.matrixWorld).applyMatrix4(I);let t=ve.update(e),i=e.material;i.visible&&m.push(e,t,i,n,se.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||P.intersectsObject(e))){let t=ve.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),se.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),se.copy(e.boundingSphere.center)),se.applyMatrix4(e.matrixWorld).applyMatrix4(I)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&m.push(e,t,s,n,se.z,o)}}else i.visible&&m.push(e,t,i,n,se.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ye(i[e],t,n,r)}function Xe(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;h.setupLightsView(n),F===!0&&Te.setGlobalState(v.clippingPlanes,n),r&&z.viewport(T.copy(r)),i.length>0&&Qe(i,t,n),a.length>0&&Qe(a,t,n),o.length>0&&Qe(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Ze(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[r.id]===void 0&&(h.state.transmissionRenderTarget[r.id]=new Wn(1,1,{generateMipmaps:!0,type:R.has(`EXT_color_buffer_half_float`)||R.has(`EXT_color_buffer_float`)?Ae:Ce,minFilter:Se,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mn.workingColorSpace}));let a=h.state.transmissionRenderTarget[r.id],o=r.viewport||T;a.setSize(o.z,o.w);let s=v.getRenderTarget();v.setRenderTarget(a),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),le&&De.render(n);let c=v.toneMapping;v.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),h.setupLightsView(r),F===!0&&Te.setGlobalState(v.clippingPlanes,r),Qe(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),R.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,$e(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}v.setRenderTarget(s),v.setClearColor(O,k),l!==void 0&&(r.viewport=l),v.toneMapping=c}function Qe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&$e(o,t,n,s,c,l)}}function $e(e,t,n,r,i,a){e.onBeforeRender(v,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(v,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=2):v.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(v,t,n,r,i,a)}function et(e,t,n){t.isScene!==!0&&(t=ce);let r=B.get(e),i=h.state.lights,a=h.state.shadowsArray,o=i.state.version,s=ye.getParameters(e,i.state,a,t,n),c=ye.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?he:me).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Be),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return nt(e,s),u}else s.uniforms=ye.getUniforms(e),e.onBeforeCompile(s,v),u=ye.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Te.uniform),nt(e,s),r.needsLights=at(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ms.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function nt(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function rt(e,t,n,r,i){t.isScene!==!0&&(t=ce),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Pt,c=(r.isMeshStandardMaterial?he:me).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(m=v.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,y=B.get(r),b=h.state.lights;if(F===!0&&(ie===!0||e!==w)){let t=e===w&&r.id===C;Te.setState(r,e,t)}let x=!1;r.version===y.__version?y.needsLights&&y.lightsStateVersion!==b.state.version?x=!0:y.outputColorSpace===s?i.isBatchedMesh&&y.batching===!1||!i.isBatchedMesh&&y.batching===!0||i.isBatchedMesh&&y.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&y.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&y.instancing===!1||!i.isInstancedMesh&&y.instancing===!0||i.isSkinnedMesh&&y.skinning===!1||!i.isSkinnedMesh&&y.skinning===!0||i.isInstancedMesh&&y.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&y.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&y.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&y.instancingMorph===!1&&i.morphTexture!==null?x=!0:y.envMap===c?r.fog===!0&&y.fog!==a||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==Te.numPlanes||y.numIntersection!==Te.numIntersection)?x=!0:y.vertexAlphas===l&&y.vertexTangents===u&&y.morphTargets===d&&y.morphNormals===f&&y.morphColors===p&&y.toneMapping===m?y.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,y.__version=r.version);let T=y.currentProgram;x===!0&&(T=et(r,t,i));let E=!1,D=!1,O=!1,k=T.getUniforms(),A=y.uniforms;if(z.useProgram(T.program)&&(E=!0,D=!0,O=!0),r.id!==C&&(C=r.id,D=!0),E||w!==e){fe.reverseDepthBuffer?(ae.copy(e.projectionMatrix),En(ae),Dn(ae),k.setValue(L,`projectionMatrix`,ae)):k.setValue(L,`projectionMatrix`,e.projectionMatrix),k.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(L,oe.setFromMatrixPosition(e.matrixWorld)),fe.logarithmicDepthBuffer&&k.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),w!==e&&(w=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(L,i,`bindMatrix`),k.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(L,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(k.setOptional(L,i,`batchingTexture`),k.setValue(L,`batchingTexture`,i._matricesTexture,V),k.setOptional(L,i,`batchingIdTexture`),k.setValue(L,`batchingIdTexture`,i._indirectTexture,V),k.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(L,`batchingColorTexture`,i._colorsTexture,V));let te=n.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0)&&Oe.update(i,n,T),(D||y.receiveShadow!==i.receiveShadow)&&(y.receiveShadow=i.receiveShadow,k.setValue(L,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),D&&(k.setValue(L,`toneMappingExposure`,v.toneMappingExposure),y.needsLights&&it(A,O),a&&r.fog===!0&&be.refreshFogUniforms(A,a),be.refreshMaterialUniforms(A,r,j,ee,h.state.transmissionRenderTarget[e.id]),ms.upload(L,tt(y),A,V)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ms.upload(L,tt(y),A,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(L,`center`,i.center),k.setValue(L,`modelViewMatrix`,i.modelViewMatrix),k.setValue(L,`normalMatrix`,i.normalMatrix),k.setValue(L,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Pe.update(n,T),Pe.bind(n,T)}}return T}function it(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function at(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(e,t,n){B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=n;let r=B.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||R.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){S=e,b=t,x=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=B.get(e);if(s.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(L.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(s.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,T.copy(e.viewport),E.copy(e.scissor),D=e.scissorTest}else T.copy(N).multiplyScalar(j).floor(),E.copy(ne).multiplyScalar(j).floor(),D=re;if(z.bindFramebuffer(L.FRAMEBUFFER,i)&&r&&z.drawBuffers(e,i),z.viewport(T),z.scissor(E),z.setScissorTest(D),a){let r=B.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=B.get(e.texture),i=t||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}C=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){z.bindFramebuffer(L.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!fe.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!fe.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,Me.convert(s),Me.convert(c),a)}finally{let e=S===null?null:B.get(S).__webglFramebuffer;z.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!fe.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!fe.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(L.FRAMEBUFFER,s);let e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,e),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,Me.convert(c),Me.convert(l),0);let o=S===null?null:B.get(S).__webglFramebuffer;z.bindFramebuffer(L.FRAMEBUFFER,o);let u=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Tn(L,u,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.deleteBuffer(e),L.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(wn(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(wn(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u;n===null?(a=e.image.width,o=e.image.height,s=0,c=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.min.x,c=n.min.y),r===null?(l=0,u=0):(l=r.x,u=r.y);let d=Me.convert(t.format),f=Me.convert(t.type);V.setTexture2D(t,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let p=L.getParameter(L.UNPACK_ROW_LENGTH),m=L.getParameter(L.UNPACK_IMAGE_HEIGHT),h=L.getParameter(L.UNPACK_SKIP_PIXELS),g=L.getParameter(L.UNPACK_SKIP_ROWS),_=L.getParameter(L.UNPACK_SKIP_IMAGES),v=e.isCompressedTexture?e.mipmaps[i]:e.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,v.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,v.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,s),L.pixelStorei(L.UNPACK_SKIP_ROWS,c),e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,i,l,u,a,o,d,f,v.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,i,l,u,v.width,v.height,d,v.data):L.texSubImage2D(L.TEXTURE_2D,i,l,u,a,o,d,f,v),L.pixelStorei(L.UNPACK_ROW_LENGTH,p),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,m),L.pixelStorei(L.UNPACK_SKIP_PIXELS,h),L.pixelStorei(L.UNPACK_SKIP_ROWS,g),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_),i===0&&t.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(wn(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.max.z-n.min.z,c=n.min.x,l=n.min.y,u=n.min.z),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Me.convert(t.format),g=Me.convert(t.type),_;if(t.isData3DTexture)V.setTexture3D(t,0),_=L.TEXTURE_3D;else if(t.isDataArrayTexture||t.isCompressedArrayTexture)V.setTexture2DArray(t,0),_=L.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let v=L.getParameter(L.UNPACK_ROW_LENGTH),y=L.getParameter(L.UNPACK_IMAGE_HEIGHT),b=L.getParameter(L.UNPACK_SKIP_PIXELS),x=L.getParameter(L.UNPACK_SKIP_ROWS),S=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,m.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,m.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,c),L.pixelStorei(L.UNPACK_SKIP_ROWS,l),L.pixelStorei(L.UNPACK_SKIP_IMAGES,u),e.isDataTexture||e.isData3DTexture?L.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):L.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m),L.pixelStorei(L.UNPACK_ROW_LENGTH,v),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,y),L.pixelStorei(L.UNPACK_SKIP_PIXELS,b),L.pixelStorei(L.UNPACK_SKIP_ROWS,x),L.pixelStorei(L.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&L.generateMipmap(_),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){b=0,x=0,S=null,z.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ht}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=Mn.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}},jc=class extends Xr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nr,this.environmentIntensity=1,this.environmentRotation=new Nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mc=class e extends Mi{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new vn;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new wi(a,3)),this.setAttribute(`normal`,new wi(o,3)),this.setAttribute(`uv`,new wi(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Nc=class e extends Mi{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new wi(u,3)),this.setAttribute(`normal`,new wi(d,3)),this.setAttribute(`uv`,new wi(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let i=m[r][n],a=m[r+1][n],o=m[r+1][n+1],s=m[r][n+1];e>0&&(l.push(i,a,s),v+=3),t>0&&(l.push(a,o,s),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new vn,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pc=class e extends Mi{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new U,u=new U,d=new U;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new wi(o,3)),this.setAttribute(`normal`,new wi(s,3)),this.setAttribute(`uv`,new wi(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Fc=class extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new vn(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ic(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Lc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Rc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},zc=class extends Rc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ot,endingEnd:Ot}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case kt:i=e,o=2*t-n;break;case At:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case kt:a=e,s=2*n-t;break;case At:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Bc=class extends Rc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Vc=class extends Rc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ic(t,this.TimeBufferType),this.values=Ic(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ic(e.times,Array),values:Ic(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tt:t=this.InterpolantFactoryMethodDiscrete;break;case Et:t=this.InterpolantFactoryMethodLinear;break;case Dt:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tt;case this.InterpolantFactoryMethodLinear:return Et;case this.InterpolantFactoryMethodSmooth:return Dt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Lc(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Dt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Hc.prototype.TimeBufferType=Float32Array,Hc.prototype.ValueBufferType=Float32Array,Hc.prototype.DefaultInterpolation=Et;var Uc=class extends Hc{constructor(e,t,n){super(e,t,n)}};Uc.prototype.ValueTypeName=`bool`,Uc.prototype.ValueBufferType=Array,Uc.prototype.DefaultInterpolation=Tt,Uc.prototype.InterpolantFactoryMethodLinear=void 0,Uc.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends Hc{};Wc.prototype.ValueTypeName=`color`;var Gc=class extends Hc{};Gc.prototype.ValueTypeName=`number`;var Kc=class extends Rc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)qn.slerpFlat(i,0,a,c-o,a,c,s);return i}},qc=class extends Hc{InterpolantFactoryMethodLinear(e){return new Kc(this.times,this.values,this.getValueSize(),e)}};qc.prototype.ValueTypeName=`quaternion`,qc.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends Hc{constructor(e,t,n){super(e,t,n)}};Jc.prototype.ValueTypeName=`string`,Jc.prototype.ValueBufferType=Array,Jc.prototype.DefaultInterpolation=Tt,Jc.prototype.InterpolantFactoryMethodLinear=void 0,Jc.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends Hc{};Yc.prototype.ValueTypeName=`vector`;var Xc=class extends Xr{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Zc=class extends Xc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Xr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Qc=new Cr,$c=new U,el=new U,tl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vn(512,512),this.map=null,this.mapPass=null,this.matrix=new Cr,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new vn(1,1),this._viewportCount=1,this._viewports=[new Hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;$c.setFromMatrixPosition(e.matrixWorld),t.position.copy($c),el.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(el),t.updateMatrixWorld(),Qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nl=class extends tl{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rl=class extends Xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Xr.DEFAULT_UP),this.updateMatrix(),this.target=new Xr,this.shadow=new nl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},il=`\\[\\]\\.:\\/`,al=RegExp(`[\\[\\]\\.:\\/]`,`g`),ol=`[^\\[\\]\\.:\\/]`,sl=`[^`+il.replace(`\\.`,``)+`]`,cl=`((?:WC+[\\/:])*)`.replace(`WC`,ol),ll=`(WCOD+)?`.replace(`WCOD`,sl),ul=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ol),dl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ol),fl=RegExp(`^`+cl+ll+ul+dl+`$`),pl=[`material`,`materials`,`bones`,`map`],ml=class{constructor(e,t,n){let r=n||hl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},hl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(al,``)}static parseTrackName(e){let t=fl.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);pl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};hl.Composite=ml,hl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},hl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},hl.prototype.GetterByBindingType=[hl.prototype._getValue_direct,hl.prototype._getValue_array,hl.prototype._getValue_arrayElement,hl.prototype._getValue_toArray],hl.prototype.SetterByBindingTypeAndVersioning=[[hl.prototype._setValue_direct,hl.prototype._setValue_direct_setNeedsUpdate,hl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[hl.prototype._setValue_array,hl.prototype._setValue_array_setNeedsUpdate,hl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[hl.prototype._setValue_arrayElement,hl.prototype._setValue_arrayElement_setNeedsUpdate,hl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[hl.prototype._setValue_fromArray,hl.prototype._setValue_fromArray_setNeedsUpdate,hl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gl=new Cr,_l=class{constructor(e,t,n=0,r=1/0){this.ray=new Sr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return gl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gl),this}intersectObject(e,t=!0,n=[]){return yl(e,this,n,t),n.sort(vl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)yl(e[r],this,n,t);return n.sort(vl),n}};function vl(e,t){return e.distance-t.distance}function yl(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)yl(r[e],t,n,!0)}}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`169`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`169`);var bl=8,xl=50,Sl=2,Cl=89.9,wl=.35,Tl=2.2,El={left:new U(-.74,0,.12),right:new U(.74,0,.12)},Dl=.095,Ol=new U(0,1,0),kl=.13,Al=`
attribute float aMask;
uniform float uVert;
varying float vH;
varying vec3 vN;
varying float vMask;
void main() {
  vH = position.y / uVert;
  vN = normal;
  vMask = aMask;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,jl=`
uniform float uMaxM;
uniform int uCount;
uniform float uStopM[${bl}];
uniform vec3 uStopC[${bl}];
uniform float uMinor;
uniform float uMajor;
uniform float uHi;
uniform vec3 uHiColor;
uniform float uContours;
uniform float uTime;
uniform vec3 uLight;
varying float vH;
varying vec3 vN;
varying float vMask;

vec3 ramp(float m) {
  vec3 c = uStopC[0];
  for (int i = 1; i < ${bl}; i++) {
    if (i >= uCount) break;
    float a = uStopM[i - 1];
    float b = uStopM[i];
    if (m >= a) c = mix(uStopC[i - 1], uStopC[i], clamp((m - a) / (b - a), 0.0, 1.0));
  }
  return c;
}

// 回傳 0–1：離最近的等高線多近（px = 線寬，以螢幕像素計）
float contour(float m, float stepM, float px) {
  float fw = max(fwidth(m), 1e-3);
  float f = abs(fract(m / stepM + 0.5) - 0.5) * stepM;
  return 1.0 - smoothstep(0.0, px * fw, f);
}

void main() {
  float m = vH * uMaxM;
  vec3 c = ramp(m);
  float diff = max(dot(normalize(vN), uLight), 0.0);
  c *= 0.55 + 0.6 * diff;
  if (m > uMinor * 0.5) {
    c = mix(c, c * 0.55, contour(m, uMinor, 1.0) * 0.8 * uContours);
    c = mix(c, c * 0.35, contour(m, uMajor, 1.8) * uContours);
  }
  // 1000 m 線即使關掉等高線也保留，因為它是分辨山地與丘陵的關鍵
  float fw = max(fwidth(m), 1e-3);
  float hi = 1.0 - smoothstep(0.0, 2.6 * fw, abs(m - uHi));
  c = mix(c, uHiColor, hi);
  float pulse = 0.35 + 0.3 * sin(uTime * 7.0);
  c = mix(c, vec3(1.0, 0.05, 0.08), vMask * pulse);
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`,Ml=class{renderer;camera;scene=new jc;board;maskAttr;jarClay={};jars={};seenVersion=-1;raycaster=new _l;baseDist=2;view={az:0,tilt:xl,zoom:1};viewTarget={az:0,tilt:xl,zoom:1};lastTime=0;constructor(e,t,n){this.renderer=new Ac({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),this.renderer.setClearColor(0,0),this.camera=new oa(40,1,.05,20),this.scene.add(new Zc(16777215,8939076,1.2));let r=new rl(16777215,1.4);r.position.set(-1,2,1),this.scene.add(r);let i=new xa(1,1,t-1,t-1);i.rotateX(-Math.PI/2),this.maskAttr=new xi(new Float32Array(t*t),1),i.setAttribute(`aMask`,this.maskAttr);let a=n.ramp.slice(0,bl),o=Array(bl).fill(1e9),s=Array(bl).fill(0).map(()=>new W(1,1,1));a.forEach((e,t)=>{o[t]=e.m,s[t]=new W(e.color)});let c=new ta({vertexShader:Al,fragmentShader:jl,uniforms:{uVert:{value:ee},uMaxM:{value:n.maxElevation},uCount:{value:a.length},uStopM:{value:o},uStopC:{value:s},uMinor:{value:n.contour.minor},uMajor:{value:n.contour.major},uHi:{value:n.contour.highlight},uHiColor:{value:new W(n.highlightColor??`#b54535`)},uContours:{value:1},uTime:{value:0},uLight:{value:new U(-.5,1,.6).normalize()}}});this.board=new Wi(i,c),this.scene.add(this.board);let l=new Fc({color:12693149,roughness:.85}),u=new Fc({color:15065536,roughness:.8}),d=new Wi(new qi(1.1,.06,1.1),[l,l,u,l,l,l]);d.position.y=-.031,this.scene.add(d);for(let e of[`left`,`right`]){let t=new yc;t.position.copy(El[e]),this.jars[e]=t;let n=new Wi(new Nc(Dl,Dl*.85,kl,40,1,!0),new Fc({color:11701110,roughness:.8,side:2}));n.position.y=kl/2;let r=new Wi(new Mc(Dl*.85,40).rotateX(-Math.PI/2),new Fc({color:9062963}));r.position.y=.002;let i=new Wi(new Pc(Dl,.008,8,48).rotateX(Math.PI/2),new Fc({color:11107185}));i.position.y=kl;let a=new Wi(new Nc(Dl*.92,Dl*.84,1,40),new Fc({color:9949838,roughness:.7}));this.jarClay[e]=a,t.add(n,r,i,a),this.scene.add(t)}}resize(e,t,n={top:0,right:0,bottom:0,left:0}){this.renderer.setSize(e,t,!1);let r=this.camera;r.aspect=e/t;let i=Math.max(120,e-n.left-n.right),a=Math.max(120,t-n.top-n.bottom),o=Math.tan(_n.degToRad(r.fov/2)),s=a/t*o,c=o*r.aspect*(i/e);this.baseDist=Math.max(.62/s,1/c),r.setViewOffset(e,t,(n.right-n.left)/2,(n.bottom-n.top)/2,e,t),r.updateProjectionMatrix(),this.applyView()}rotateBy(e,t,n=!1){this.viewTarget.az+=e,this.viewTarget.tilt=_n.clamp(this.viewTarget.tilt+t,Sl,Cl),n&&(this.view.az=this.viewTarget.az,this.view.tilt=this.viewTarget.tilt,this.applyView())}zoomBy(e){this.viewTarget.zoom=_n.clamp(this.viewTarget.zoom/e,wl,Tl)}dispose(){this.scene.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material;Array.isArray(n)?n.forEach(e=>e.dispose()):n?.dispose()}),this.renderer.dispose(),this.renderer.forceContextLoss()}setContours(e){this.board.material.uniforms.uContours.value=+!!e}setTilt(e){this.viewTarget.tilt=_n.clamp(e,Sl,Cl)}resetView(){let e=this.view.az-Math.round(this.view.az/360)*360;this.view.az=e,this.viewTarget={az:0,tilt:xl,zoom:1}}applyView(){let{az:e,tilt:t,zoom:n}=this.view,r=_n.degToRad(t),i=_n.degToRad(e),a=this.baseDist*n,o=new U(0,.04,0);this.camera.position.set(Math.sin(i)*Math.cos(r)*a,Math.sin(r)*a,Math.cos(i)*Math.cos(r)*a).add(o),this.camera.up.set(-Math.sin(i)*Math.sin(r),Math.cos(r),-Math.cos(i)*Math.sin(r)),this.camera.lookAt(o),this.camera.updateMatrixWorld();for(let e of[`left`,`right`])this.jars[e]?.position.copy(El[e]).applyAxisAngle(Ol,i)}update(e,t,n){let r=Math.min(.1,Math.max(0,t-this.lastTime));this.lastTime=t;let i=Math.min(1,r*10),a=this.view,o=this.viewTarget;Math.abs(o.az-a.az)+Math.abs(o.tilt-a.tilt)+Math.abs(o.zoom-a.zoom)>.001&&(a.az+=(o.az-a.az)*i,a.tilt+=(o.tilt-a.tilt)*i,a.zoom+=(o.zoom-a.zoom)*i,this.applyView()),this.board.material.uniforms.uTime.value=t;for(let e of[`left`,`right`]){let t=Math.max(.02,n),r=this.jarClay[e];r.scale.y=kl*.95*t,r.position.y=kl*.95*t/2}if(e.version===this.seenVersion)return;this.seenVersion=e.version;let s=this.board.geometry.attributes.position,c=e.h;for(let e=0;e<c.length;e++)s.setY(e,c[e]*ee);s.needsUpdate=!0,this.board.geometry.computeVertexNormals();let l=this.maskAttr.array;for(let t=0;t<c.length;t++)l[t]=e.mask[t];this.maskAttr.needsUpdate=!0}render(){this.renderer.render(this.scene,this.camera)}screenToUV(e,t){let n=this.renderer.domElement,r=new vn(e.x/n.clientWidth*2-1,-(e.y/n.clientHeight)*2+1);this.raycaster.setFromCamera(r,this.camera);let i=this.raycaster.ray,a=new ha(new U(0,1,0),-ee),o=new ha(new U(0,1,0),0),s=i.intersectPlane(a,new U),c=i.intersectPlane(o,new U);if(!s||!c)return null;let l=new U;for(let e=0;e<=96;e++){l.lerpVectors(s,c,e/96);let n=l.x+.5,r=l.z+.5;if(!(n<0||n>1||r<0||r>1)&&l.y<=t.heightAt(n,r)*.8)return{u:n,v:r}}let u=c.x+.5,d=c.z+.5;return u>=0&&u<=1&&d>=0&&d<=1?{u,v:d}:null}project(e){let t=this.renderer.domElement,n=e.clone().project(this.camera);return{x:(n.x+1)/2*t.clientWidth,y:(1-n.y)/2*t.clientHeight}}boardPoint(e,t,n){return this.project(new U(e-.5,n.heightAt(e,t)*ee,t-.5))}jarAt(e){for(let t of[`left`,`right`]){let n=this.jars[t].position,r=this.project(n.clone().setY(kl*.6)),i=this.project(n.clone().setY(kl*.6).add(new U(Dl,0,0).applyAxisAngle(Ol,_n.degToRad(this.view.az)))),a=Math.hypot(i.x-r.x,i.y-r.y)*1.9;if(Math.hypot(e.x-r.x,e.y-r.y)<a)return t}return null}jarLabelPoint(e){let t=new U(0,0,Dl*1.3).applyAxisAngle(Ol,_n.degToRad(this.view.az));return this.project(this.jars[e].position.clone().setY(-.01).add(t))}},Nl=`modulepreload`,Pl=function(e){return`./`+e},Fl={},Il=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Pl(t,n),t=s(t),t in Fl)return;Fl[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Nl,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ll=typeof self<`u`?self:{};function Rl(e,t){t:{for(var n=[`CLOSURE_FLAGS`],r=Ll,i=0;i<n.length;i++)if((r=r[n[i]])==null){n=null;break t}n=r}return(e=n&&n[e])??t}function zl(){throw Error(`Invalid UTF8`)}function Bl(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var Vl,Hl,Ul=typeof TextDecoder<`u`,Wl,Gl=typeof TextEncoder<`u`;function Kl(e){if(Gl)e=(Wl||=new TextEncoder).encode(e);else{let n=0,r=new Uint8Array(3*e.length);for(let i=0;i<e.length;i++){var t=e.charCodeAt(i);if(t<128)r[n++]=t;else{if(t<2048)r[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&i<e.length){let a=e.charCodeAt(++i);if(a>=56320&&a<=57343){t=1024*(t-55296)+a-56320+65536,r[n++]=t>>18|240,r[n++]=t>>12&63|128,r[n++]=t>>6&63|128,r[n++]=63&t|128;continue}i--}t=65533}r[n++]=t>>12|224,r[n++]=t>>6&63|128}r[n++]=63&t|128}}e=n===r.length?r:r.subarray(0,n)}return e}function ql(e){Ll.setTimeout((()=>{throw e}),0)}var Jl,Yl=Rl(610401301,!1),Xl=Rl(748402147,!0);function Zl(){var e=Ll.navigator;return(e&&=e.userAgent)?e:``}var Ql=Ll.navigator;function $l(e){return $l[` `](e),e}Jl=Ql&&Ql.userAgentData||null,$l[` `]=function(){};var eu={},tu=null;function nu(e){let t=e.length,n=3*t/4;n%3?n=Math.floor(n):`=.`.indexOf(e[t-1])!=-1&&(n=`=.`.indexOf(e[t-2])==-1?n-1:n-2);let r=new Uint8Array(n),i=0;return function(e,t){function n(t){for(;r<e.length;){let t=e.charAt(r++),n=tu[t];if(n!=null)return n;if(!/^[\s\xa0]*$/.test(t))throw Error(`Unknown base64 encoding at char: `+t)}return t}ru();let r=0;for(;;){let e=n(-1),r=n(0),i=n(64),a=n(64);if(a===64&&e===-1)break;t(e<<2|r>>4),i!=64&&(t(r<<4&240|i>>2),a!=64&&t(i<<6&192|a))}}(e,(function(e){r[i++]=e})),i===n?r:r.subarray(0,i)}function ru(){if(!tu){tu={};var e=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split(``),t=[`+/=`,`+/`,`-_=`,`-_.`,`-_`];for(let n=0;n<5;n++){let r=e.concat(t[n].split(``));eu[n]=r;for(let e=0;e<r.length;e++){let t=r[e];tu[t]===void 0&&(tu[t]=e)}}}}var iu=typeof Uint8Array<`u`,au=(!!(Yl&&Jl&&Jl.brands.length>0)||Zl().indexOf(`Trident`)==-1&&Zl().indexOf(`MSIE`)==-1)&&typeof btoa==`function`,ou=/[-_.]/g,su={"-":`+`,_:`/`,".":`=`};function cu(e){return su[e]||``}function lu(e){if(!au)return nu(e);e=ou.test(e)?e.replace(ou,cu):e,e=atob(e);let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function uu(e){return iu&&e!=null&&e instanceof Uint8Array}var du={};function fu(){return hu||=new mu(null,du)}function pu(e){_u(du);var t=e.g;return(t=t==null||uu(t)?t:typeof t==`string`?lu(t):null)==null?t:e.g=t}var mu=class{h(){return new Uint8Array(pu(this)||0)}constructor(e,t){if(_u(t),this.g=e,e!=null&&e.length===0)throw Error(`ByteString should be constructed with non-empty values`)}},hu,gu;function _u(e){if(e!==du)throw Error(`illegal external caller`)}function vu(e,t){e.__closure__error__context__984382||={},e.__closure__error__context__984382.severity=t}function yu(e){return vu(e=Error(e),`warning`),e}function bu(e,t){if(e!=null){var n=gu??={},r=n[e]||0;r>=t||(n[e]=r+1,vu(e=Error(),`incident`),ql(e))}}function xu(){return typeof BigInt==`function`}var Su=typeof Symbol==`function`&&typeof Symbol()==`symbol`;function Cu(e,t,n=!1){return typeof Symbol==`function`&&typeof Symbol()==`symbol`?n&&Symbol.for&&e?Symbol.for(e):e==null?Symbol():Symbol(e):t}var wu=Cu(`jas`,void 0,!0),Tu=Cu(void 0,`0di`),Eu=Cu(void 0,`1oa`),Du=Cu(void 0,Symbol()),Ou=Cu(void 0,`0ub`),ku=Cu(void 0,`0ubs`),Au=Cu(void 0,`0ubsb`),ju=Cu(void 0,`0actk`),Mu=Cu(`m_m`,`Pa`,!0),Nu=Cu(),Pu={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Fu=Object.defineProperties,q=Su?wu:`Ga`,Iu,Lu=[];function Ru(e,t){Su||q in e||Fu(e,Pu),e[q]|=t}function zu(e,t){Su||q in e||Fu(e,Pu),e[q]=t}function Bu(e){return Ru(e,34),e}function Vu(e){return Ru(e,8192),e}zu(Lu,7),Iu=Object.freeze(Lu);var Hu={};function Uu(e,t){return t===void 0?e.h!==Wu&&!!(2&(0|e.v[q])):!!(2&t)&&e.h!==Wu}var Wu={};function Gu(e,t){if(e!=null){if(typeof e==`string`)e=e?new mu(e,du):fu();else if(e.constructor!==mu){if(uu(e))e=e.length?new mu(new Uint8Array(e),du):fu();else{if(!t)throw Error();e=void 0}}}return e}var Ku=class{constructor(e,t,n){this.g=e,this.h=t,this.l=n}next(){let e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}},qu=Object.freeze({});function Ju(e,t,n){let r=128&t?0:-1,i=e.length;var a;(a=!!i)&&(a=(a=e[i-1])!=null&&typeof a==`object`&&a.constructor===Object);let o=i+(a?-1:0);for(t=128&t?1:0;t<o;t++)n(t-r,e[t]);if(a){e=e[i-1];for(let t in e)!isNaN(t)&&n(+t,e[t])}}var Yu={};function Xu(e){return 128&e?Yu:void 0}function Zu(e){return e.Na=!0,e}var Qu=Zu((e=>typeof e==`number`)),$u=Zu((e=>typeof e==`string`)),ed=Zu((e=>typeof e==`boolean`)),td=typeof Ll.BigInt==`function`&&typeof Ll.BigInt(0)==`bigint`;function nd(e){var t=e;if($u(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(Qu(t)&&!Number.isSafeInteger(t))throw Error(String(t));return td?BigInt(e):e=ed(e)?e?`1`:`0`:$u(e)?e.trim()||`0`:String(e)}var rd=Zu((e=>td?e>=ad&&e<=sd:e[0]===`-`?cd(e,id):cd(e,od))),id=(-(2**53-1)).toString(),ad=td?BigInt(-(2**53-1)):void 0,od=(2**53-1).toString(),sd=td?BigInt(2**53-1):void 0;function cd(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r>i)return!1;if(r<i)return!0}}var ld=typeof Uint8Array.prototype.slice==`function`,ud,dd=0,fd=0;function pd(e){let t=e>>>0;dd=t,fd=(e-t)/4294967296>>>0}function md(e){if(e<0){pd(-e);let[t,n]=Cd(dd,fd);dd=t>>>0,fd=n>>>0}else pd(e)}function hd(e){let t=ud||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+e,!0),fd=0,dd=t.getUint32(0,!0)}function gd(e,t){let n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:yd(e,t)}function _d(e,t){return nd(xu()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):yd(e,t))}function vd(e,t){return xu()?nd(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):nd(xd(e,t))}function yd(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=``+(4294967296*t+e);else xu()?n=``+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+bd(n)+bd(e));return n}function bd(e){return e=String(e),`0000000`.slice(e.length)+e}function xd(e,t){if(2147483648&t){if(xu())e=``+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[n,r]=Cd(e,t);e=`-`+yd(n,r)}}else e=yd(e,t);return e}function Sd(e){if(e.length<16)md(Number(e));else if(xu())e=BigInt(e),dd=Number(e&BigInt(4294967295))>>>0,fd=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]===`-`);fd=dd=0;let n=e.length;for(let r=t,i=(n-t)%6+t;i<=n;r=i,i+=6){let t=Number(e.slice(r,i));fd*=1e6,dd=1e6*dd+t,dd>=4294967296&&(fd+=Math.trunc(dd/4294967296),fd>>>=0,dd>>>=0)}if(t){let[e,t]=Cd(dd,fd);dd=e,fd=t}}}function Cd(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function wd(e){return Array.prototype.slice.call(e)}var Td=typeof BigInt==`function`?BigInt.asIntN:void 0,Ed=typeof BigInt==`function`?BigInt.asUintN:void 0,Dd=Number.isSafeInteger,Od=Number.isFinite,kd=Math.trunc,Ad=nd(0);function jd(e){if(e!=null&&typeof e!=`number`)throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function Md(e){return e==null||typeof e==`number`?e:e===`NaN`||e===`Infinity`||e===`-Infinity`?Number(e):void 0}function Nd(e){if(e!=null&&typeof e!=`boolean`){var t=typeof e;throw Error(`Expected boolean but got ${t==`object`?e?Array.isArray(e)?`array`:t:`null`:t}: ${e}`)}return e}function Pd(e){return e==null||typeof e==`boolean`?e:typeof e==`number`?!!e:void 0}var Fd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Id(e){switch(typeof e){case`bigint`:return!0;case`number`:return Od(e);case`string`:return Fd.test(e);default:return!1}}function Ld(e){if(e==null)return e;if(typeof e==`string`&&e)e=+e;else if(typeof e!=`number`)return;return Od(e)?0|e:void 0}function Rd(e){if(e==null)return e;if(typeof e==`string`&&e)e=+e;else if(typeof e!=`number`)return;return Od(e)?e>>>0:void 0}function zd(e){let t=e.length;return(e[0]===`-`?t<20||t===20&&e<=`-9223372036854775808`:t<19||t===19&&e<=`9223372036854775807`)?e:(Sd(e),xd(dd,fd))}function Bd(e){if(e=kd(e),!Dd(e)){md(e);var t=dd,n=fd;(e=2147483648&n)&&(n=~n>>>0,(t=1+~t>>>0)==0&&(n=n+1>>>0)),e=typeof(t=gd(t,n))==`number`?e?-t:t:e?`-`+t:t}return e}function Vd(e){var t=kd(Number(e));return Dd(t)?String(t):((t=e.indexOf(`.`))!==-1&&(e=e.substring(0,t)),zd(e))}function Hd(e){var t=kd(Number(e));return Dd(t)?nd(t):((t=e.indexOf(`.`))!==-1&&(e=e.substring(0,t)),xu()?nd(Td(64,BigInt(e))):nd(zd(e)))}function Ud(e){return Dd(e)?e=nd(Bd(e)):(e=kd(e),Dd(e)?e=String(e):(md(e),e=xd(dd,fd)),e=nd(e)),e}function Wd(e){let t=typeof e;return e==null?e:t===`bigint`?nd(Td(64,e)):Id(e)?t===`string`?Hd(e):Ud(e):void 0}function Gd(e){if(typeof e!=`string`)throw Error();return e}function Kd(e){if(e!=null&&typeof e!=`string`)throw Error();return e}function qd(e){return e==null||typeof e==`string`?e:void 0}function Jd(e,t,n,r){return e!=null&&e[Mu]===Hu?e:Array.isArray(e)?((r=(n=0|e[q])|32&r|2&r)!==n&&zu(e,r),new t(e)):(n?2&r?((e=t[Tu])||(Bu((e=new t).v),e=t[Tu]=e),t=e):t=new t:t=void 0,t)}function Yd(e,t,n){if(t)t:{if(!Id(t=e))throw yu(`int64`);switch(typeof t){case`string`:t=Hd(t);break t;case`bigint`:t=nd(Td(64,t));break t;default:t=Ud(t)}}else t=Wd(e);return(e=t)??(n?Ad:void 0)}var Xd={},Zd=function(){try{return $l(new class extends Map{constructor(){super()}}),!1}catch{return!0}}(),Qd=class{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,t){return this.g.set(e,t),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,t){return this.g.forEach(e,t)}[Symbol.iterator](){return this.entries()}},$d=Zd?(Object.setPrototypeOf(Qd.prototype,Map.prototype),Object.defineProperties(Qd.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Qd):class extends Map{constructor(){super()}};function ef(e){return e}function tf(e){if(2&e.J)throw Error(`Cannot mutate an immutable Map`)}var nf=class extends $d{constructor(e,t,n=ef,r=ef){super(),this.J=0|e[q],this.K=t,this.S=n,this.fa=this.K?rf:r;for(let i=0;i<e.length;i++){let a=e[i],o=n(a[0],!1,!0),s=a[1];t?s===void 0&&(s=null):s=r(a[1],!1,!0,void 0,void 0,this.J),super.set(o,s)}}V(e){return Vu(Array.from(super.entries(),e))}clear(){tf(this),super.clear()}delete(e){return tf(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new Ku(e,af,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new Ku(e,nf.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach(((n,r,i)=>{e.call(t,i.get(r),r,i)})):super.forEach(e,t)}set(e,t){return tf(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){let t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);let t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function rf(e,t,n,r,i,a){return e=Jd(e,r,n,a),i&&(e=Ef(e)),e}function af(e){return[e,this.get(e)]}var of;function sf(){return of||=new nf(Bu([]),void 0,void 0,void 0,Xd)}function cf(e){return Du?e[Du]:void 0}function lf(e,t){for(let n in e)!isNaN(n)&&t(e,+n,e[n])}nf.prototype.toJSON=void 0;var uf=class{},df={Ka:!0};function ff(e,t){t<100||bu(ku,1)}function pf(e,t,n,r){let i=r!==void 0;r=!!r;var a,o=Du;!i&&Su&&o&&(a=e[o])&&lf(a,ff),o=[];var s=e.length;let c;a=4294967295;let l=!1,u=!!(64&t),d=u?128&t?0:-1:void 0;1&t||(c=s&&e[s-1],typeof c==`object`&&c&&c.constructor===Object?a=--s:c=void 0,!u||128&t||i||(l=!0,a=a-d+d)),t=void 0;for(var f=0;f<s;f++){let i=e[f];if(i!=null&&(i=n(i,r))!=null){if(u&&f>=a){let e=f-d;(t??={})[e]=i}else o[f]=i}}if(c)for(let e in c){if((s=c[e])==null||(s=n(s,r))==null)continue;let i;f=+e,u&&!Number.isNaN(f)&&(i=f+d)<a?o[i]=s:(t??={})[e]=s}return t&&(l?o.push(t):o[a]=t),i&&Du&&(e=cf(e))&&e instanceof uf&&(o[Du]=function(e){let t=new uf;return lf(e,((e,n,r)=>{t[n]=wd(r)})),t.da=e.da,t}(e)),o}function mf(e){return e[0]=hf(e[0]),e[1]=hf(e[1]),e}function hf(e){switch(typeof e){case`number`:return Number.isFinite(e)?e:``+e;case`bigint`:return rd(e)?Number(e):``+e;case`boolean`:return+!!e;case`object`:if(Array.isArray(e)){var t=0|e[q];return e.length===0&&1&t?void 0:pf(e,t,hf)}if(e!=null&&e[Mu]===Hu)return vf(e);if(e instanceof mu){if((t=e.g)==null)e=``;else if(typeof t==`string`)e=t;else{if(au){for(var n=``,r=0,i=t.length-10240;r<i;)n+=String.fromCharCode.apply(null,t.subarray(r,r+=10240));n+=String.fromCharCode.apply(null,r?t.subarray(r):t),t=btoa(n)}else{n===void 0&&(n=0),ru(),n=eu[n],r=Array(Math.floor(t.length/3)),i=n[64]||``;let e=0,l=0;for(;e<t.length-2;e+=3){var a=t[e],o=t[e+1],s=t[e+2],c=n[a>>2];a=n[(3&a)<<4|o>>4],o=n[(15&o)<<2|s>>6],s=n[63&s],r[l++]=c+a+o+s}switch(c=0,s=i,t.length-e){case 2:s=n[(15&(c=t[e+1]))<<2]||i;case 1:t=t[e],r[l]=n[t>>2]+n[(3&t)<<4|c>>4]+s+i}t=r.join(``)}e=e.g=t}return e}return e instanceof nf?e=e.size===0?void 0:e.V(mf):void 0}return e}var gf,_f;function vf(e){return pf(e=e.v,0|e[q],hf)}function yf(e,t){return bf(e,t[0],t[1])}function bf(e,t,n,r=0){if(e==null){var i=32;n?(e=[n],i|=128):e=[],t&&(i=-16760833&i|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error(`narr`);if(i=0|e[q],Xl&&1&i)throw Error(`rfarr`);if(2048&i&&!(2&i)&&function(){if(Xl)throw Error(`carr`);bu(ju,5)}(),256&i)throw Error(`farr`);if(64&i)return(i|r)!==i&&zu(e,i|r),e;if(n&&(i|=128,n!==e[0]))throw Error(`mid`);t:{i|=64;var a=(n=e).length;if(a){var o=a-1;let e=n[o];if(typeof e==`object`&&e&&e.constructor===Object){if((o-=t=128&i?0:-1)>=1024)throw Error(`pvtlmt`);for(var s in e)(a=+s)<o&&(n[a+t]=e[s],delete e[s]);i=-16760833&i|(1023&o)<<14;break t}}if(t){if((s=Math.max(t,a-(128&i?0:-1)))>1024)throw Error(`spvt`);i=-16760833&i|(1023&s)<<14}}}return zu(e,64|i|r),e}function xf(e,t){if(typeof e!=`object`)return e;if(Array.isArray(e)){var n=0|e[q];return e.length===0&&1&n?void 0:Sf(e,n,t)}if(e!=null&&e[Mu]===Hu)return wf(e);if(e instanceof nf){if(2&(t=e.J))return e;if(!e.size)return;if(n=Bu(e.V()),e.K)for(e=0;e<n.length;e++){let r=n[e],i=r[1];i=typeof i!=`object`||!i?void 0:i!=null&&i[Mu]===Hu?wf(i):Array.isArray(i)?Sf(i,0|i[q],!!(32&t)):void 0,r[1]=i}return n}return e instanceof mu?e:void 0}function Sf(e,t,n){return 2&t||(!n||4096&t||16&t?e=Tf(e,t,!1,n&&!(16&t)):(Ru(e,34),4&t&&Object.freeze(e))),e}function Cf(e,t,n){return e=new e.constructor(t),n&&(e.h=Wu),e.m=Wu,e}function wf(e){let t=e.v,n=0|t[q];return Uu(e,n)?e:Af(e,t,n)?Cf(e,t):Tf(t,n)}function Tf(e,t,n,r){return r??=!!(34&t),e=pf(e,t,xf,r),r=32,n&&(r|=2),zu(e,t=16769217&t|r),e}function Ef(e){let t=e.v,n=0|t[q];return Uu(e,n)?Af(e,t,n)?Cf(e,t,!0):new e.constructor(Tf(t,n,!1)):e}function Df(e){if(e.h!==Wu)return!1;var t=e.v;return Ru(t=Tf(t,0|t[q]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function Of(e){if(!Df(e)&&Uu(e,0|e.v[q]))throw Error()}function kf(e,t){t===void 0&&(t=0|e[q]),32&t&&!(4096&t)&&zu(e,4096|t)}function Af(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(zu(t,2|n),e.h=Wu,!0)}var jf=nd(0),Mf={};function Nf(e,t,n,r,i){if((t=Pf(e.v,t,n,i))!==null||r&&e.m!==Wu)return t}function Pf(e,t,n,r){if(t===-1)return null;let i=t+(n?0:-1),a=e.length-1,o,s;if(!(a<1+(n?0:-1))){if(i>=a){if(o=e[a],typeof o==`object`&&o&&o.constructor===Object)n=o[t],s=!0;else{if(i!==a)return;n=o}}else n=e[i];if(r&&n!=null){if((r=r(n))==null)return r;if(!Object.is(r,n))return s?o[t]=r:e[i]=r,r}return n}}function Ff(e,t,n,r){Of(e),If(e=e.v,0|e[q],t,n,r)}function If(e,t,n,r,i){let a=n+(i?0:-1);var o=e.length-1;if(o>=1+(i?0:-1)&&a>=o){let i=e[o];if(typeof i==`object`&&i&&i.constructor===Object)return i[n]=r,t}return a<=o?(e[a]=r,t):(r!==void 0&&(n>=(o=(t??=0|e[q])>>14&1023||536870912)?r!=null&&(e[o+(i?0:-1)]={[n]:r}):e[a]=r),t)}function Lf(){return qu===void 0?2:4}function Rf(e,t,n,r,i){let a=e.v,o=0|a[q];r=Uu(e,o)?1:r,i=!!i||r===3,r===2&&Df(e)&&(a=e.v,o=0|a[q]);let s=(e=Bf(a,t))===Iu?7:0|e[q],c=Vf(s,o);var l=!(4&c);if(l){4&c&&(e=wd(e),s=0,c=ip(c,o),o=If(a,o,t,e));let r=0,i=0;for(;r<e.length;r++){let t=n(e[r]);t!=null&&(e[i++]=t)}i<r&&(e.length=i),n=-513&(4|c),c=n&=-1025,c&=-4097}return c!==s&&(zu(e,c),2&c&&Object.freeze(e)),zf(e,c,a,o,t,r,l,i)}function zf(e,t,n,r,i,a,o,s){let c=t;return a===1||a===4&&(2&t||!(16&t)&&32&r)?Hf(t)||((t|=!e.length||o&&!(4096&t)||32&r&&!(4096&t||16&t)?2:256)!==c&&zu(e,t),Object.freeze(e)):(a===2&&Hf(t)&&(e=wd(e),c=0,t=ip(t,r),r=If(n,r,i,e)),Hf(t)||(s||(t|=16),t!==c&&zu(e,t))),2&t||!(4096&t||16&t)||kf(n,r),e}function Bf(e,t,n){return e=Pf(e,t,n),Array.isArray(e)?e:Iu}function Vf(e,t){return 2&t&&(e|=2),1|e}function Hf(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function Uf(e){return Gu(e,!0)}function Wf(e){e=wd(e);for(let t=0;t<e.length;t++){let n=e[t]=wd(e[t]);Array.isArray(n[1])&&(n[1]=Bu(n[1]))}return Vu(e)}function Gf(e,t,n,r){Of(e),If(e=e.v,0|e[q],t,(r===`0`?Number(n)===0:n===r)?void 0:n)}function Kf(e,t,n){if(2&t)throw Error();let r=Xu(t),i=Bf(e,n,r),a=i===Iu?7:0|i[q],o=Vf(a,t);return(2&o||Hf(o)||16&o)&&(o===a||Hf(o)||zu(i,o),i=wd(i),a=0,o=ip(o,t),If(e,t,n,i,r)),o&=-13,o!==a&&zu(i,o),i}function qf(e,t){var n=fg;return Xf(Jf(e=e.v),e,void 0,n)===t?t:-1}function Jf(e){if(Su)return e[Eu]??(e[Eu]=new Map);if(Eu in e)return e[Eu];let t=new Map;return Object.defineProperty(e,Eu,{value:t}),t}function Yf(e,t,n,r,i){let a=Jf(e),o=Xf(a,e,t,n,i);return o!==r&&(o&&(t=If(e,t,o,void 0,i)),a.set(n,r)),t}function Xf(e,t,n,r,i){let a=e.get(r);if(a!=null)return a;a=0;for(let e=0;e<r.length;e++){let o=r[e];Pf(t,o,i)!=null&&(a!==0&&(n=If(t,n,a,void 0,i)),a=o)}return e.set(r,a),a}function Zf(e,t,n){let r=0|e[q],i=Xu(r),a=Pf(e,n,i),o;if(a!=null&&a[Mu]===Hu){if(!Uu(a))return Df(a),a.v;o=a.v}else Array.isArray(a)&&(o=a);if(o){let e=0|o[q];2&e&&(o=Tf(o,e))}return o=yf(o,t),o!==a&&If(e,r,n,o,i),o}function Qf(e,t,n,r,i){let a=!1;if((r=Pf(e,r,i,(e=>{let r=Jd(e,n,!1,t);return a=r!==e&&r!=null,r})))!=null)return a&&!Uu(r)&&kf(e,t),r}function $f(e,t,n,r){let i=e.v,a=0|i[q];if((t=Qf(i,a,t,n,r))==null)return t;if(a=0|i[q],!Uu(e,a)){let o=Ef(t);o!==t&&(Df(e)&&(i=e.v,a=0|i[q]),a=If(i,a,n,t=o,r),kf(i,a))}return t}function ep(e,t,n,r,i,a,o,s){var c=Uu(e,n);a=c?1:a,o=!!o||a===3,c=s&&!c,(a===2||c)&&Df(e)&&(n=0|(t=e.v)[q]);var l=(e=Bf(t,i))===Iu?7:0|e[q],u=Vf(l,n);if(s=!(4&u)){var d=e,f=n;let t=!!(2&u);t&&(f|=2);let i=!t,a=!0,o=0,s=0;for(;o<d.length;o++){let e=Jd(d[o],r,!1,f);if(e instanceof r){if(!t){let t=Uu(e);i&&=!t,a&&=t}d[s++]=e}}s<o&&(d.length=s),u|=4,u=a?-4097&u:4096|u,u=i?8|u:-9&u}if(u!==l&&(zu(e,u),2&u&&Object.freeze(e)),c&&!(8&u||!e.length&&(a===1||a===4&&(2&u||!(16&u)&&32&n)))){for(Hf(u)&&(e=wd(e),u=ip(u,n),n=If(t,n,i,e)),r=e,c=u,l=0;l<r.length;l++)(d=r[l])!==(u=Ef(d))&&(r[l]=u);c|=8,zu(e,u=c=r.length?4096|c:-4097&c)}return zf(e,u,t,n,i,a,s,o)}function tp(e,t,n){let r=e.v;return ep(e,r,0|r[q],t,n,Lf(),!1,!0)}function np(e){return e??=void 0,e}function J(e,t,n,r,i){return Ff(e,n,r=np(r),i),r&&!Uu(r)&&kf(e.v),e}function rp(e,t,n,r){t:{var i=r=np(r);Of(e);let a=e.v,o=0|a[q];if(i==null){let e=Jf(a);if(Xf(e,a,o,n)!==t)break t;e.set(n,0)}else o=Yf(a,o,n,t);If(a,o,t,i)}r&&!Uu(r)&&kf(e.v)}function ip(e,t){return-273&(2&t?2|e:-3&e)}function ap(e,t,n,r){var i=r;Of(e),e=ep(e,r=e.v,0|r[q],n,t,2,!0),i??=new n,e.push(i),t=n=e===Iu?7:0|e[q],(i=Uu(i))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&zu(e,n),i||kf(r)}function op(e,t,n){return Ld(Nf(e,t,void 0,n))}function sp(e,t){return Nf(e,t,void 0,void 0,Md)??0}function cp(e,t,n){if(n!=null){if(typeof n!=`number`||!Od(n))throw yu(`int32`);n|=0}Ff(e,t,n)}function Y(e,t,n){Ff(e,t,jd(n))}function lp(e,t,n){Gf(e,t,Kd(n),``)}function up(e,t,n){{Of(e);let o=e.v,s=0|o[q];if(n==null)If(o,s,t);else{var r=e=n===Iu?7:0|n[q],i=Hf(e),a=i||Object.isFrozen(n);for(i||(e=0),a||=(n=wd(n),r=0,e=ip(e,s),!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,i=0;i<n.length;i++){let t=n[i],o=Gd(t);Object.is(t,o)||(a&&=(n=wd(n),r=0,e=ip(e,s),!1),n[i]=o)}e!==r&&(a&&(n=wd(n),e=ip(e,s)),zu(n,e)),If(o,s,t,n)}}}function dp(e,t,n){Of(e),Rf(e,t,qd,2,!0).push(Gd(n))}var fp=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function pp(e,t){if(typeof e==`string`)return new fp(lu(e),t);if(Array.isArray(e))return new fp(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new fp(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new fp(e,!1);if(e.constructor===mu)return t=pu(e)||new Uint8Array,new fp(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new fp(e,!1);throw Error()}function mp(e,t){let n,r=0,i=0,a=0,o=e.h,s=e.g;do n=o[s++],r|=(127&n)<<a,a+=7;while(a<32&&128&n);if(a>32)for(i|=(127&n)>>4,a=3;a<32&&128&n;a+=7)n=o[s++],i|=(127&n)<<a;if(bp(e,s),!(128&n))return t(r>>>0,i>>>0);throw Error()}function hp(e){let t=0,n=e.g,r=n+10,i=e.h;for(;n<r;){let r=i[n++];if(t|=r,!(128&r))return bp(e,n),!!(127&t)}throw Error()}function gp(e){let t=e.h,n=e.g,r=t[n++],i=127&r;if(128&r&&(r=t[n++],i|=(127&r)<<7,128&r&&(r=t[n++],i|=(127&r)<<14,128&r&&(r=t[n++],i|=(127&r)<<21,128&r&&(r=t[n++],i|=r<<28,128&r&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return bp(e,n),i}function _p(e){return gp(e)>>>0}function vp(e){var t=e.h;let n=e.g;var r=t[n],i=t[n+1];let a=t[n+2];return t=t[n+3],bp(e,e.g+4),e=2*((i=(r<<0|i<<8|a<<16|t<<24)>>>0)>>31)+1,r=i>>>23&255,i&=8388607,r==255?i?NaN:1/0*e:r==0?1401298464324817e-60*e*i:e*2**(r-150)*(i+8388608)}function yp(e){return gp(e)}function bp(e,t){if(e.g=t,t>e.l)throw Error()}function xp(e,t){if(t<0)throw Error();let n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function Sp(e,t){if(t==0)return fu();var n=xp(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array:ld?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?fu():new mu(n,du)}var Cp=[];function wp(e,t,n,r){if(Np.length){let i=Np.pop();return i.o(r),i.g.init(e,t,n,r),i}return new Mp(e,t,n,r)}function Tp(e){e.g.clear(),e.l=-1,e.h=-1,Np.length<100&&Np.push(e)}function Ep(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=_p(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function Dp(e){switch(e.h){case 0:e.h==0?hp(e.g):Dp(e);break;case 1:bp(e=e.g,e.g+8);break;case 2:if(e.h!=2)Dp(e);else{var t=_p(e.g);bp(e=e.g,e.g+t)}break;case 5:bp(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!Ep(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}Dp(e)}break;default:throw Error()}}function Op(e,t,n){let r=e.g.l;var i=_p(e.g);let a=(i=e.g.g+i)-r;if(a<=0&&(e.g.l=i,n(t,e,void 0,void 0,void 0),a=i-e.g.g),a)throw Error();return e.g.g=i,e.g.l=r,t}function kp(e){var t=_p(e.g),n=xp(e=e.g,t);if(e=e.h,Ul){var r,i=e;(r=Hl)||(r=Hl=new TextDecoder(`utf-8`,{fatal:!0})),t=n+t,i=n===0&&t===i.length?i:i.subarray(n,t);try{var a=r.decode(i)}catch(e){if(Vl===void 0){try{r.decode(new Uint8Array([128]))}catch{}try{r.decode(new Uint8Array([97])),Vl=!0}catch{Vl=!1}}throw!Vl&&(Hl=void 0),e}}else{t=(a=n)+t,n=[];let s,c=null;for(;a<t;){var o=e[a++];o<128?n.push(o):o<224?a>=t?zl():(s=e[a++],o<194||(192&s)!=128?(a--,zl()):n.push((31&o)<<6|63&s)):o<240?a>=t-1?zl():(s=e[a++],(192&s)!=128||o===224&&s<160||o===237&&s>=160||(192&(r=e[a++]))!=128?(a--,zl()):n.push((15&o)<<12|(63&s)<<6|63&r)):o<=244?a>=t-2?zl():(s=e[a++],(192&s)!=128||s-144+(o<<28)>>30||(192&(r=e[a++]))!=128||(192&(i=e[a++]))!=128?(a--,zl()):(o=(7&o)<<18|(63&s)<<12|(63&r)<<6|63&i,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):zl(),n.length>=8192&&(c=Bl(c,n),n.length=0)}a=Bl(c,n)}return a}function Ap(e){let t=_p(e.g);return Sp(e.g,t)}function jp(e,t,n){var r=_p(e.g);for(r=e.g.g+r;e.g.g<r;)n.push(t(e.g))}var Mp=class{constructor(e,t,n,r){if(Cp.length){let i=Cp.pop();i.init(e,t,n,r),e=i}else e=new class{constructor(e,t,n,r){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(e,t,n,r)}init(e,t,n,{Y:r=!1,ea:i=!1}={}){this.Y=r,this.ea=i,e&&(e=pp(e,this.ea),this.h=e.buffer,this.j=e.g,this.m=t||0,this.l=n===void 0?this.h.length:this.m+n,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,r);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(r)}o({ha:e=!1}={}){this.ha=e}},Np=[];function Pp(e){return e?/^\d+$/.test(e)?(Sd(e),new Fp(dd,fd)):null:Ip||=new Fp(0,0)}var Fp=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},Ip;function Lp(e){return e?/^-?\d+$/.test(e)?(Sd(e),new Rp(dd,fd)):null:zp||=new Rp(0,0)}var Rp=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},zp;function Bp(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function Vp(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Hp(e,t){if(t>=0)Vp(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function Up(e){var t=dd;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Wp(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Gp(e,t,n){Vp(e.g,8*t+n)}function Kp(e,t){return Gp(e,t,2),t=e.g.end(),Wp(e,t),t.push(e.h),t}function qp(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Jp(e,t,n){Gp(e,t,2),Vp(e.g,n.length),Wp(e,e.g.end()),Wp(e,n)}function Yp(e,t,n,r){n!=null&&(t=Kp(e,t),r(n,e),qp(e,t))}function Xp(){let e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Zp=Xp(),Qp=Xp(),$p=Xp(),em=Xp(),tm=Xp(),nm=Xp(),rm=Xp(),im=Xp(),am=Xp(),om=Xp();function sm(e,t,n){var r=e.v;Du&&Du in r&&(r=r[Du])&&delete r[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var X=class{constructor(e,t){this.v=bf(e,t,void 0,2048)}toJSON(){return vf(this)}j(){var e=i_,t=this.v,n=e.g,r=Du;if(Su&&r&&t[r]?.[n]!=null&&bu(Ou,3),t=e.g,Nu&&Du&&Nu===void 0&&(r=(n=this.v)[Du])&&(r=r.da))try{r(n,t,df)}catch(e){ql(e)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){let e=this.v,t=0|e[q];return Af(this,e,t)?Cf(this,e,!0):new this.constructor(Tf(e,t,!1))}};X.prototype[Mu]=Hu,X.prototype.toString=function(){return this.v.toString()};var cm=class{constructor(e,t,n){this.g=e,this.h=t,e=Zp,this.l=!!e&&n===e||!1}};function lm(e,t){return new cm(e,t,Zp)}function um(e,t,n,r,i){Yp(e,n,Sm(t,r),i)}var dm=lm((function(e,t,n,r,i){return e.h===2&&(Op(e,Zf(t,r,n),i),!0)}),um),fm=lm((function(e,t,n,r,i){return e.h===2&&(Op(e,Zf(t,r,n),i),!0)}),um),pm=Symbol(),mm=Symbol(),hm=Symbol(),gm=Symbol(),_m=Symbol(),vm,ym;function bm(e,t,n,r){var i=r[e];if(i)return i;(i={}).qa=r,i.T=function(e){switch(typeof e){case`boolean`:return gf||=[0,void 0,!0];case`number`:return e>0?void 0:e===0?_f||=[0,void 0]:[-e,void 0];case`string`:return[0,e];case`object`:return e}}(r[0]);var a=r[1];let o=1;a&&a.constructor===Object&&(i.ba=a,typeof(a=r[++o])==`function`&&(i.ma=!0,vm??=a,ym??=r[o+1],a=r[o+=2]));let s={};for(;a&&Array.isArray(a)&&a.length&&typeof a[0]==`number`&&a[0]>0;){for(var c=0;c<a.length;c++)s[a[c]]=a;a=r[++o]}for(c=1;a!==void 0;){let e;typeof a==`number`&&(c+=a,a=r[++o]);var l=void 0;if(a instanceof cm?e=a:(e=dm,o--),e?.l){a=r[++o],l=r;var u=o;typeof a==`function`&&(a=a(),l[u]=a),l=a}for(u=c+1,typeof(a=r[++o])==`number`&&a<0&&(u-=a,a=r[++o]);c<u;c++){let r=s[c];l?n(i,c,e,l,r):t(i,c,e,r)}}return r[e]=i}function xm(e){return Array.isArray(e)?e[0]instanceof cm?e:[fm,e]:[e,void 0]}function Sm(e,t){return e instanceof X?e.v:Array.isArray(e)?yf(e,t):void 0}function Cm(e,t,n,r){let i=n.g;e[t]=r?(e,t,n)=>i(e,t,n,r):i}function wm(e,t,n,r,i){let a=n.g,o,s;e[t]=(e,t,n)=>a(e,t,n,s||=bm(mm,Cm,wm,r).T,o||=Tm(r),i)}function Tm(e){let t=e[hm];if(t!=null)return t;let n=bm(mm,Cm,wm,e);return t=n.ma?(e,t)=>vm(e,t,n):(e,t)=>{for(;Ep(t)&&t.h!=4;){var r=t.l,i=n[r];if(i==null){var a=n.ba;(a&&=a[r])&&(a=Dm(a))!=null&&(i=n[r]=a)}if(i==null||!i(t,e,r)){if(i=(a=t).m,Dp(a),a.ha)var o=void 0;else o=a.g.g-i,a.g.g=i,o=Sp(a.g,o);i=void 0,a=e,o&&((i=a[Du]??(a[Du]=new uf))[r]??(i[r]=[])).push(o)}}return(e=cf(e))&&(e.da=n.qa[_m]),!0},e[hm]=t,e[_m]=Em.bind(e),t}function Em(e,t,n,r){var i=this[mm];let a=this[hm],o=yf(void 0,i.T),s=cf(e);if(s){var c=!1,l=i.ba;if(l){if(i=(t,n,i)=>{if(i.length!==0){if(l[n])for(let e of i){t=wp(e);try{c=!0,a(o,t)}finally{Tp(t)}}else r?.(e,n,i)}},t==null)lf(s,i);else if(s!=null){let e=s[t];e&&i(s,t,e)}if(c){let r=0|e[q];if(2&r&&2048&r&&!n?.Ka)throw Error();let i=Xu(r),a=(t,a)=>{if(Pf(e,t,i)!=null){if(n?.Qa===1)return;throw Error()}a!=null&&(r=If(e,r,t,a,i)),delete s[t]};t==null?Ju(o,0|o[q],((e,t)=>{a(e,t)})):a(t,Pf(o,t,i))}}}}function Dm(e){let t=(e=xm(e))[0].g;if(e=e[1]){let n=Tm(e),r=bm(mm,Cm,wm,e).T;return(e,i,a)=>t(e,i,a,r,n)}return t}function Om(e,t,n){e[t]=n.h}function km(e,t,n,r){let i,a,o=n.h;e[t]=(e,t,n)=>o(e,t,n,a||=bm(pm,Om,km,r).T,i||=Am(r))}function Am(e){let t=e[gm];if(!t){let n=bm(pm,Om,km,e);t=(e,t)=>jm(e,t,n),e[gm]=t}return t}function jm(e,t,n){Ju(e,0|e[q],((e,r)=>{if(r!=null){var i=function(e,t){var n=e[t];if(n)return n;if((n=e.ba)&&(n=n[t])){var r=(n=xm(n))[0].h;if(n=n[1]){let t=Am(n),i=bm(pm,Om,km,n).T;n=e.ma?ym(i,t):(e,n,a)=>r(e,n,a,i,t)}else n=r;return e[t]=n}}(n,e);i?i(t,r,e):e<500||bu(Au,3)}})),(e=cf(e))&&lf(e,((e,n,r)=>{for(Wp(t,t.g.end()),e=0;e<r.length;e++)Wp(t,pu(r[e])||new Uint8Array)}))}var Mm=nd(0);function Nm(e,t){if(Array.isArray(t)){var n=0|t[q];if(4&n)return t;for(var r=0,i=0;r<t.length;r++){let n=e(t[r]);n!=null&&(t[i++]=n)}return i<r&&(t.length=i),(e=-1537&(5|n))!==n&&zu(t,e),2&e&&Object.freeze(t),t}}function Pm(e,t,n){return new cm(e,t,n)}function Fm(e,t,n){return new cm(e,t,n)}function Im(e,t,n){If(e,0|e[q],t,n,Xu(0|e[q]))}var Lm=lm((function(e,t,n,r,i){if(e.h!==2)return!1;if(e=wd(e=Op(e,yf([void 0,void 0],r),i)),i=Xu(r=0|t[q]),2&r)throw Error();let a=Pf(t,n,i);if(a instanceof nf)2&a.J?(a=a.V(),a.push(e),If(t,r,n,a,i)):a.Ma(e);else if(Array.isArray(a)){var o=0|a[q];8192&o||zu(a,o|=8192),2&o&&(a=Wf(a),If(t,r,n,a,i)),a.push(e)}else If(t,r,n,Vu([e]),i);return!0}),(function(e,t,n,r,i){if(t instanceof nf)t.forEach(((t,a)=>{Yp(e,n,yf([a,t],r),i)}));else if(Array.isArray(t)){for(let a=0;a<t.length;a++){let o=t[a];Array.isArray(o)&&Yp(e,n,yf(o,r),i)}Vu(t)}}));function Rm(e,t,n){(t=Md(t))!=null&&(Gp(e,n,5),e=e.g,hd(t),Up(e))}function zm(e,t,n){if(t=function(e){if(e==null)return e;let t=typeof e;if(t===`bigint`)return String(Td(64,e));if(Id(e)){if(t===`string`)return Vd(e);if(t===`number`)return Bd(e)}}(t),t!=null&&(typeof t==`string`&&Lp(t),t!=null))switch(Gp(e,n,0),typeof t){case`number`:e=e.g,md(t),Bp(e,dd,fd);break;case`bigint`:n=BigInt.asUintN(64,t),n=new Rp(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Bp(e.g,n.h,n.g);break;default:n=Lp(t),Bp(e.g,n.h,n.g)}}function Bm(e,t,n){(t=Ld(t))!=null&&t!=null&&(Gp(e,n,0),Hp(e.g,t))}function Vm(e,t,n){(t=Pd(t))!=null&&(Gp(e,n,0),e.g.g.push(+!!t))}function Hm(e,t,n){(t=qd(t))!=null&&Jp(e,n,Kl(t))}function Um(e,t,n,r,i){Yp(e,n,Sm(t,r),i)}function Wm(e,t,n){(t=t==null||typeof t==`string`||t instanceof mu?t:void 0)!=null&&Jp(e,n,pp(t,!0).buffer)}function Gm(e,t,n){(t=Rd(t))!=null&&t!=null&&(Gp(e,n,0),Vp(e.g,t))}function Km(e,t,n){return(e.h===5||e.h===2)&&(t=Kf(t,0|t[q],n),e.h==2?jp(e,vp,t):t.push(vp(e.g)),!0)}var qm=Pm((function(e,t,n){return e.h===5&&(Im(t,n,vp(e.g)),!0)}),Rm,im),Jm=Fm(Km,(function(e,t,n){if((t=Nm(Md,t))!=null)for(let o=0;o<t.length;o++){var r=e,i=n,a=t[o];a!=null&&(Gp(r,i,5),r=r.g,hd(a),Up(r))}}),im),Ym=Fm(Km,(function(e,t,n){if((t=Nm(Md,t))!=null&&t.length){Gp(e,n,2),Vp(e.g,4*t.length);for(let r=0;r<t.length;r++)n=e.g,hd(t[r]),Up(n)}}),im),Xm=Pm((function(e,t,n){return e.h===5&&(Im(t,n,(e=vp(e.g))===0?void 0:e),!0)}),Rm,im),Zm=Pm((function(e,t,n){return e.h===0?(Im(t,n,mp(e.g,vd)),e=!0):e=!1,e}),zm,nm),Qm=Pm((function(e,t,n){return e.h===0?(Im(t,n,(e=mp(e.g,vd))===Mm?void 0:e),t=!0):t=!1,t}),zm,nm),$m=Pm((function(e,t,n){return e.h===0?(Im(t,n,mp(e.g,_d)),e=!0):e=!1,e}),(function(e,t,n){if(t=function(e){if(e==null)return e;var t=typeof e;if(t===`bigint`)return String(Ed(64,e));if(Id(e)){if(t===`string`)return t=kd(Number(e)),Dd(t)&&t>=0?e=String(t):((t=e.indexOf(`.`))!==-1&&(e=e.substring(0,t)),(t=e[0]!==`-`&&((t=e.length)<20||t===20&&e<=`18446744073709551615`))||(Sd(e),e=yd(dd,fd))),e;if(t===`number`)return(e=kd(e))>=0&&Dd(e)||(md(e),e=gd(dd,fd)),e}}(t),t!=null&&(typeof t==`string`&&Pp(t),t!=null))switch(Gp(e,n,0),typeof t){case`number`:e=e.g,md(t),Bp(e,dd,fd);break;case`bigint`:n=BigInt.asUintN(64,t),n=new Fp(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Bp(e.g,n.h,n.g);break;default:n=Pp(t),Bp(e.g,n.h,n.g)}}),rm),eh=Pm((function(e,t,n){return e.h===0&&(Im(t,n,gp(e.g)),!0)}),Bm,em),th=Fm((function(e,t,n){return(e.h===0||e.h===2)&&(t=Kf(t,0|t[q],n),e.h==2?jp(e,gp,t):t.push(gp(e.g)),!0)}),(function(e,t,n){if((t=Nm(Ld,t))!=null&&t.length){n=Kp(e,n);for(let n=0;n<t.length;n++)Hp(e.g,t[n]);qp(e,n)}}),em),nh=Pm((function(e,t,n){return e.h===0&&(Im(t,n,(e=gp(e.g))===0?void 0:e),!0)}),Bm,em),rh=Pm((function(e,t,n){return e.h===0&&(Im(t,n,hp(e.g)),!0)}),Vm,Qp),ih=Pm((function(e,t,n){return e.h===0&&(Im(t,n,!1===(e=hp(e.g))?void 0:e),!0)}),Vm,Qp),ah=Fm((function(e,t,n){return e.h===2&&(e=kp(e),Kf(t,0|t[q],n).push(e),!0)}),(function(e,t,n){if((t=Nm(qd,t))!=null)for(let o=0;o<t.length;o++){var r=e,i=n,a=t[o];a!=null&&Jp(r,i,Kl(a))}}),$p),oh=Pm((function(e,t,n){return e.h===2&&(Im(t,n,(e=kp(e))===``?void 0:e),!0)}),Hm,$p),sh=Pm((function(e,t,n){return e.h===2&&(Im(t,n,kp(e)),!0)}),Hm,$p),ch=function(e,t,n=Zp){return new cm(e,t,n)}((function(e,t,n,r,i){return e.h===2&&(r=yf(void 0,r),Kf(t,0|t[q],n).push(r),Op(e,r,i),!0)}),(function(e,t,n,r,i){if(Array.isArray(t)){for(let a=0;a<t.length;a++)Um(e,t[a],n,r,i);1&(e=0|t[q])||zu(t,1|e)}})),lh=lm((function(e,t,n,r,i,a){if(e.h!==2)return!1;let o=0|t[q];return Yf(t,o,a,n,Xu(o)),Op(e,t=Zf(t,r,n),i),!0}),Um),uh=Pm((function(e,t,n){return e.h===2&&(Im(t,n,Ap(e)),!0)}),Wm,am),dh=Fm((function(e,t,n){return(e.h===0||e.h===2)&&(t=Kf(t,0|t[q],n),e.h==2?jp(e,_p,t):t.push(_p(e.g)),!0)}),(function(e,t,n){if((t=Nm(Rd,t))!=null)for(let o=0;o<t.length;o++){var r=e,i=n,a=t[o];a!=null&&(Gp(r,i,0),Vp(r.g,a))}}),tm),fh=Pm((function(e,t,n){return e.h===0&&(Im(t,n,(e=_p(e.g))===0?void 0:e),!0)}),Gm,tm),ph=Pm((function(e,t,n){return e.h===0&&(Im(t,n,gp(e.g)),!0)}),(function(e,t,n){(t=Ld(t))!=null&&(t=parseInt(t,10),Gp(e,n,0),Hp(e.g,t))}),om),mh=class{constructor(e,t){var n=Mh;this.g=e,this.h=t,this.m=$f,this.j=J,this.defaultValue=void 0,this.l=n.Oa==null?void 0:Yu}register(){$l(this)}};function hh(e,t){return new mh(e,t)}function gh(e,t){return(n,r)=>{{let a={ea:!0};r&&Object.assign(a,r),n=wp(n,void 0,void 0,a);try{let r=new e,a=r.v;Tm(t)(a,n);var i=r}finally{Tp(n)}}return i}}function _h(e){return function(){let t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){let e=this.g;return this.g=[],e}}}};jm(this.v,t,bm(pm,Om,km,e)),Wp(t,t.g.end());let n=new Uint8Array(t.h),r=t.l,i=r.length,a=0;for(let e=0;e<i;e++){let t=r[e];n.set(t,a),a+=t.length}return t.l=[n],n}}var vh=class extends X{constructor(e){super(e)}},yh=[0,oh,Pm((function(e,t,n){return e.h===2&&(Im(t,n,(e=Ap(e))===fu()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof X){let r=t.Ra;r?(t=r(t),t!=null&&Jp(e,n,pp(t,!0).buffer)):bu(Au,3);return}if(Array.isArray(t))return void bu(Au,3)}Wm(e,t,n)}),am)],bh,xh=globalThis.trustedTypes;function Sh(e){var t;return bh===void 0&&(bh=function(){let e=null;if(!xh)return e;try{let t=e=>e;e=xh.createPolicy(`goog#html`,{createHTML:t,createScript:t,createScriptURL:t})}catch{}return e}()),e=(t=bh)?t.createScriptURL(e):e,new class{constructor(e){this.g=e}toString(){return this.g+``}}(e)}function Ch(e,...t){if(t.length===0)return Sh(e[0]);let n=e[0];for(let r=0;r<t.length;r++)n+=encodeURIComponent(t[r])+e[r+1];return Sh(n)}var wh=[0,eh,ph,rh,-1,th,ph,-1,rh],Th=class extends X{constructor(e){super(e)}},Eh=[0,rh,sh,rh,ph,-1,Fm((function(e,t,n){return(e.h===0||e.h===2)&&(t=Kf(t,0|t[q],n),e.h==2?jp(e,yp,t):t.push(gp(e.g)),!0)}),(function(e,t,n){if((t=Nm(Ld,t))!=null&&t.length){n=Kp(e,n);for(let n=0;n<t.length;n++)Hp(e.g,t[n]);qp(e,n)}}),om),sh,-1,[0,rh,-1],ph,rh,-1],Dh=[0,3,rh,-1,2,[0,[2],eh,lh,[0,Pm((function(e,t,n){return e.h===0&&(Im(t,n,_p(e.g)),!0)}),Gm,tm)]],[0,ph,rh,ph,rh,ph,rh,sh,-1],[0,[3,4],sh,-1,lh,[0,eh],lh,[0,ph]],[0]],Oh=[0,sh,-2],kh=class extends X{constructor(e){super(e)}},Ah=[0],jh=[0,eh,rh,1,rh,-4],Mh=class extends X{constructor(e){super(e,2)}},Nh={};Nh[336783863]=[0,sh,rh,-1,eh,[0,[1,2,3,4,5,6,7,8,9],lh,Ah,lh,Eh,lh,Oh,lh,jh,lh,wh,lh,[0,sh,-2],lh,[0,sh,ph],lh,Dh,lh,[0,ph,-1,rh]],[0,sh],rh,[0,[1,3],[2,4],lh,[0,th],-1,lh,[0,ah],-1,ch,[0,sh,-1]],sh];var Ph=[0,Qm,-1,ih,-3,Qm,th,oh,nh,Qm,-1,ih,nh,ih,-2,oh];function Fh(e,t){dp(e,3,t)}function Z(e,t){dp(e,4,t)}var Ih=class extends X{constructor(e){super(e,500)}o(e){return J(this,0,7,e)}},Lh=[-1,{}],Rh=[0,sh,1,Lh],zh=[0,sh,ah,Lh];function Bh(e,t){ap(e,1,Ih,t)}function Vh(e,t){dp(e,10,t)}function Hh(e,t){dp(e,15,t)}var Uh=class extends X{constructor(e){super(e,500)}o(e){return J(this,0,1001,e)}},Wh=[-500,ch,[-500,oh,-1,ah,-3,[-2,Nh,rh],ch,yh,nh,-1,Rh,zh,ch,[0,oh,ih],oh,Ph,nh,ah,987,ah],4,ch,[-500,sh,-1,[-1,{}],998,sh],ch,[-500,sh,ah,-1,[-2,{},rh],997,ah,-1],nh,ch,[-500,sh,ah,Lh,998,ah],ah,nh,Rh,zh,ch,[0,oh,-1,Lh],ah,-2,Ph,oh,-1,ih,[0,ih,fh],978,Lh,ch,yh];Uh.prototype.g=_h(Wh);var Gh=gh(Uh,Wh),Kh=class extends X{constructor(e){super(e)}},qh=class extends X{constructor(e){super(e)}g(){return tp(this,Kh,1)}},Jh=[0,ch,[0,eh,qm,sh,-1]],Yh=gh(qh,Jh),Xh=class extends X{constructor(e){super(e)}},Zh=class extends X{constructor(e){super(e)}},Qh=class extends X{constructor(e){super(e)}l(){return $f(this,Xh,2)}g(){return tp(this,Zh,5)}},$h=gh(class extends X{constructor(e){super(e)}},[0,ah,th,Ym,[0,ph,[0,eh,-3],[0,qm,-3],[0,eh,-1,[0,ch,[0,eh,-2]]],ch,[0,qm,-1,sh,qm]],sh,-1,Zm,ch,[0,eh,qm],ah,Zm]),eg=class extends X{constructor(e){super(e)}},tg=gh(class extends X{constructor(e){super(e)}},[0,ch,[0,qm,-4]]),ng=class extends X{constructor(e){super(e)}},rg=gh(class extends X{constructor(e){super(e)}},[0,ch,[0,qm,-4]]),ig=class extends X{constructor(e){super(e)}},ag=[0,eh,-1,Ym,ph],og=class extends X{constructor(e){super(e)}};og.prototype.g=_h([0,qm,-4,Zm]);var sg=class extends X{constructor(e){super(e)}},cg=gh(class extends X{constructor(e){super(e)}},[0,ch,[0,1,eh,sh,Jh],Zm]),lg=class extends X{constructor(e){super(e)}},ug=class extends X{constructor(e){super(e)}na(){return Nf(this,1,void 0,void 0,Uf)??fu()}},dg=class extends X{constructor(e){super(e)}},fg=[1,2],pg=gh(class extends X{constructor(e){super(e)}},[0,ch,[0,fg,lh,[0,Ym],lh,[0,uh],eh,sh],Zm]),mg=class extends X{constructor(e){super(e)}},hg=[0,sh,eh,qm,ah,-1],gg=class extends X{constructor(e){super(e)}},_g=[0,rh,-1],vg=class extends X{constructor(e){super(e)}},yg=[1,2,3,4,5,6],bg=class extends X{constructor(e){super(e)}g(){return Nf(this,1,void 0,void 0,Uf)!=null}l(){return qd(Nf(this,2))!=null}},xg=class extends X{constructor(e){super(e)}g(){return Pd(Nf(this,2))??!1}},Sg=[0,uh,sh,[0,eh,Zm,-1],[0,$m,Zm]],Cg=[0,Sg,rh,[0,yg,lh,jh,lh,Eh,lh,wh,lh,Ah,lh,Oh,lh,Dh],ph],wg=class extends X{constructor(e){super(e)}},Tg=[0,Cg,qm,-1,eh],Eg=hh(502141897,wg);Nh[502141897]=Tg;var Dg=gh(class extends X{constructor(e){super(e)}},[0,[0,ph,-1,Jm,dh],ag]),Og=class extends X{constructor(e){super(e)}},kg=class extends X{constructor(e){super(e)}},Ag=[0,Cg,qm,[0,Cg],rh],jg=hh(508968150,kg);Nh[508968150]=[0,Cg,Tg,Ag,qm,[0,[0,Sg]]],Nh[508968149]=Ag;var Mg=class extends X{constructor(e){super(e)}l(){return $f(this,mg,2)}g(){Ff(this,2)}},Ng=[0,Cg,hg];Nh[478825465]=Ng;var Pg=class extends X{constructor(e){super(e)}},Fg=class extends X{constructor(e){super(e)}},Ig=class extends X{constructor(e){super(e)}},Lg=class extends X{constructor(e){super(e)}},Rg=class extends X{constructor(e){super(e)}},zg=[0,Cg,[0,Cg],Ng,-1],Bg=[0,Cg,qm,eh],Vg=[0,Cg,qm],Hg=[0,Cg,Bg,Vg,qm],Ug=hh(479097054,Rg);Nh[479097054]=[0,Cg,Hg,zg],Nh[463370452]=zg,Nh[464864288]=Bg;var Wg=hh(462713202,Lg);Nh[462713202]=Hg,Nh[474472470]=Vg;var Gg=class extends X{constructor(e){super(e)}},Kg=class extends X{constructor(e){super(e)}},qg=class extends X{constructor(e){super(e)}},Jg=class extends X{constructor(e){super(e)}},Yg=[0,Cg,qm,-1,eh],Xg=[0,Cg,qm,rh];Jg.prototype.g=_h([0,Cg,Vg,[0,Cg],Tg,Ag,Yg,Xg]);var Zg=class extends X{constructor(e){super(e)}},Qg=hh(456383383,Zg);Nh[456383383]=[0,Cg,hg];var $g=class extends X{constructor(e){super(e)}},e_=hh(476348187,$g);Nh[476348187]=[0,Cg,_g];var t_=class extends X{constructor(e){super(e)}},n_=class extends X{constructor(e){super(e)}},r_=[0,ph,-1],i_=hh(458105876,class extends X{constructor(e){super(e)}g(){let e;var t=this.v;let n=0|t[q];return e=Uu(this,n),t=function(e,t,n,r){var i=n_;!r&&Df(e)&&(n=0|(t=e.v)[q]);var a=Pf(t,2);if(e=!1,a==null){if(r)return sf();a=[]}else if(a.constructor===nf){if(!(2&a.J)||r)return a;a=a.V()}else Array.isArray(a)?e=!!(2&(0|a[q])):a=[];if(r){if(!a.length)return sf();e||(e=!0,Bu(a))}else e&&(e=!1,Vu(a),a=Wf(a));return!e&&32&n&&Ru(a,32),n=If(t,n,2,r=new nf(a,i,Yd,void 0)),e||kf(t,n),r}(this,t,n,e),!e&&n_&&(t.ra=!0),t}});Nh[458105876]=[0,r_,Lm,[!0,Zm,[0,sh,-1,ah]],[0,th,rh,ph]];var a_=class extends X{constructor(e){super(e)}},o_=hh(458105758,a_);Nh[458105758]=[0,Cg,sh,r_];var s_=class extends X{constructor(e){super(e)}},c_=[0,Xm,-1,ih],l_=class extends X{constructor(e){super(e)}},u_=class extends X{constructor(e){super(e)}},d_=[1,2];u_.prototype.g=_h([0,d_,lh,c_,lh,[0,ch,c_]]);var f_=class extends X{constructor(e){super(e)}},p_=hh(443442058,f_);Nh[443442058]=[0,Cg,sh,eh,qm,ah,-1,rh,qm],Nh[514774813]=Yg;var m_=class extends X{constructor(e){super(e)}},h_=hh(516587230,m_);function g_(e,t){return t=t?t.clone():new mg,e.displayNamesLocale===void 0?e.displayNamesLocale===void 0&&Ff(t,1):Ff(t,1,Kd(e.displayNamesLocale)),e.maxResults===void 0?`maxResults`in e&&Ff(t,2):cp(t,2,e.maxResults),e.scoreThreshold===void 0?`scoreThreshold`in e&&Ff(t,3):Y(t,3,e.scoreThreshold),e.categoryAllowlist===void 0?`categoryAllowlist`in e&&Ff(t,4):up(t,4,e.categoryAllowlist),e.categoryDenylist===void 0?`categoryDenylist`in e&&Ff(t,5):up(t,5,e.categoryDenylist),t}function __(e){let t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function v_(e,t=-1,n=``){return{categories:e.map((e=>({index:op(e,1)??0??-1,score:sp(e,2)??0,categoryName:qd(Nf(e,3))??``??``,displayName:qd(Nf(e,4))??``??``}))),headIndex:t,headName:n}}function y_(e){let t={classifications:tp(e,sg,1).map((e=>v_($f(e,qh,4)?.g()??[],op(e,2)??0,qd(Nf(e,3))??``)))};return function(e){return e==null?e:typeof e==`bigint`?(rd(e)?e=Number(e):(e=Td(64,e),e=rd(e)?Number(e):String(e)),e):Id(e)?typeof e==`number`?Bd(e):Vd(e):void 0}(Nf(e,2,void 0,void 0,Wd))!=null&&(t.timestampMs=__(Nf(e,2,void 0,void 0,Wd)??jf)),t}function b_(e){var t=Rf(e,3,Md,Lf()),n=Rf(e,2,Ld,Lf()),r=Rf(e,1,qd,Lf()),i=Rf(e,9,qd,Lf());let a={categories:[],keypoints:[]};for(let e=0;e<t.length;e++)a.categories.push({score:t[e],index:n[e]??-1,categoryName:r[e]??``,displayName:i[e]??``});if((t=$f(e,Qh,4)?.l())&&(a.boundingBox={originX:op(t,1,Mf)??0,originY:op(t,2,Mf)??0,width:op(t,3,Mf)??0,height:op(t,4,Mf)??0,angle:0}),$f(e,Qh,4)?.g().length)for(let t of $f(e,Qh,4).g())a.keypoints.push({x:Nf(t,1,void 0,Mf,Md)??0,y:Nf(t,2,void 0,Mf,Md)??0,score:Nf(t,4,void 0,Mf,Md)??0,label:qd(Nf(t,3,void 0,Mf))??``});return a}function x_(e){let t=[];for(let n of tp(e,ng,1))t.push({x:sp(n,1)??0,y:sp(n,2)??0,z:sp(n,3)??0,visibility:sp(n,4)??0});return t}function S_(e){let t=[];for(let n of tp(e,eg,1))t.push({x:sp(n,1)??0,y:sp(n,2)??0,z:sp(n,3)??0,visibility:sp(n,4)??0});return t}function C_(e){return Array.from(e,(e=>e>127?e-256:e))}function w_(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,r=0,i=0;for(let a=0;a<e.length;a++)n+=e[a]*t[a],r+=e[a]*e[a],i+=t[a]*t[a];if(r<=0||i<=0)throw Error(`Cannot compute cosine similarity on embedding with 0 norm.`);return n/Math.sqrt(r*i)}var T_;Nh[516587230]=[0,Cg,Yg,Xg,qm],Nh[518928384]=Xg;var E_=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function D_(e){if(e)return!0;if(T_===void 0)try{await WebAssembly.instantiate(E_),T_=!0}catch{T_=!1}return T_}async function O_(e,t,n){return{wasmLoaderPath:`${t}/${e}_${n=`wasm${n?`_module`:``}${await D_(n)?``:`_nosimd`}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var k_=class{};function A_(){var e=navigator;return typeof OffscreenCanvas<`u`&&(!function(e=navigator){return(e=e.userAgent).includes(`Safari`)&&!e.includes(`Chrome`)}(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function j_(e){if(typeof importScripts!=`function`){let t=document.createElement(`script`);return t.src=e.toString(),t.crossOrigin=`anonymous`,new Promise(((e,n)=>{t.addEventListener(`load`,(()=>{e()}),!1),t.addEventListener(`error`,(e=>{n(e)}),!1),document.body.appendChild(t)}))}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{let t=self.import;t?await t(e.toString()):await Il(()=>import(e.toString()),[])}}}function M_(e){return e.videoWidth===void 0?e.naturalWidth===void 0?e.displayWidth===void 0?[e.width,e.height]:[e.displayWidth,e.displayHeight]:[e.naturalWidth,e.naturalHeight]:[e.videoWidth,e.videoHeight]}function Q(e,t,n){e.m||console.error(`No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target`),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function N_(e,t,n){if(!e.i.canvas)throw Error(`No OpenGL canvas configured.`);if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext(`webgl2`)||e.i.canvas.getContext(`webgl`)))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);let[r,i]=M_(t);return!e.l||r===e.i.canvas.width&&i===e.i.canvas.height||(e.i.canvas.width=r,e.i.canvas.height=i),[r,i]}function P_(e,t,n){e.m||console.error(`No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target`);let r=new Uint32Array(t.length);for(let n=0;n<t.length;n++)r[n]=e.i.stringToNewUTF8(t[n]);t=e.i._malloc(4*r.length),e.i.HEAPU32.set(r,t>>2),n(t);for(let t of r)e.i._free(t);e.i._free(t)}function F_(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function I_(e,t,n){let r=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(e,t,i)=>{t?(n(r,i),r=[]):r.push(e)}}k_.forVisionTasks=function(e,t=!1){return O_(`vision`,e??Ch``,t)},k_.forTextTasks=function(e,t=!1){return O_(`text`,e??Ch``,t)},k_.forGenAiTasks=function(e,t=!1){return O_(`genai`,e??Ch``,t)},k_.forAudioTasks=function(e,t=!1){return O_(`audio`,e??Ch``,t)},k_.isSimdSupported=function(e=!1){return D_(e)};async function L_(e,t,n,r){return e=await(async(e,t,n,r,i)=>{if(t&&await j_(t),!self.ModuleFactory||n&&(await j_(n),!self.ModuleFactory))throw Error(`ModuleFactory not set.`);return self.Module&&i&&((t=self.Module).locateFile=i.locateFile,i.mainScriptUrlOrBlob&&(t.mainScriptUrlOrBlob=i.mainScriptUrlOrBlob)),i=await self.ModuleFactory(self.Module||i),self.ModuleFactory=self.Module=void 0,new e(i,r)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:e=>e.endsWith(`.wasm`)?n.wasmBinaryPath.toString():n.assetBinaryPath&&e.endsWith(`.data`)?n.assetBinaryPath.toString():e}),await e.o(r),e}function R_(e,t){let n=$f(e.baseOptions,bg,1)||new bg;typeof t==`string`?(Ff(n,2,Kd(t)),Ff(n,1)):t instanceof Uint8Array&&(Ff(n,1,Gu(t,!1)),Ff(n,2)),J(e.baseOptions,0,1,n)}function z_(e){try{let t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error(`Encountered multiple errors: `+e.H.map((e=>e.message)).join(`, `))}finally{e.H=[]}}function $(e,t){e.C=Math.max(e.C,t)}function B_(e,t){e.B=new Ih,lp(e.B,2,`PassThroughCalculator`),Fh(e.B,`free_memory`),Z(e.B,`free_memory_unused_out`),Vh(t,`free_memory`),Bh(t,e.B)}function V_(e,t){Fh(e.B,t),Z(e.B,t+`_unused_out`)}function H_(e){e.g.addBoolToStream(!0,`free_memory`,e.C)}var U_=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){if(t){let t=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error(`Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer`);if(!($f(this.baseOptions,bg,1)?.g()||$f(this.baseOptions,bg,1)?.l()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error(`Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set`);if(function(e,t){let n=$f(e.baseOptions,vg,3);if(!n){var r=n=new vg,i=new kh;rp(r,4,yg,i)}`delegate`in t&&(t.delegate===`GPU`?(t=n,r=new Th,rp(t,2,yg,r)):(t=n,r=new kh,rp(t,4,yg,r))),J(e.baseOptions,0,3,n)}(this,t),t.modelAssetPath)return fetch(t.modelAssetPath.toString()).then((e=>{if(e.ok)return e.arrayBuffer();throw Error(`Failed to fetch model: ${t.modelAssetPath} (${e.status})`)})).then((e=>{try{this.g.i.FS_unlink(`/model.dat`)}catch{}this.g.i.FS_createDataFile(`/`,`model.dat`,new Uint8Array(e),!0,!1,!1),R_(this,`/model.dat`),this.m(),this.L()}));if(t.modelAssetBuffer instanceof Uint8Array)R_(this,t.modelAssetBuffer);else if(t.modelAssetBuffer)return async function(e){let t=[];for(var n=0;;){let{done:r,value:i}=await e.read();if(r)break;t.push(i),n+=i.length}if(t.length===0)return new Uint8Array;if(t.length===1)return t[0];e=new Uint8Array(n),n=0;for(let r of t)e.set(r,n),n+=r.length;return e}(t.modelAssetBuffer).then((e=>{R_(this,e),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca((t=>{e=Gh(t)})),!e)throw Error(`Failed to retrieve CalculatorGraphConfig`);return e}setGraph(e,t){this.g.attachErrorListener(((e,t)=>{this.H.push(Error(t))})),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,z_(this)}finishProcessing(){this.g.finishProcessing(),z_(this)}close(){this.B=void 0,this.g.closeGraph()}};function W_(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}U_.prototype.close=U_.prototype.close;var G_=class{constructor(e,t,n,r){this.g=e,this.h=t,this.m=n,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}};function K_(e,t,n){let r=e.g;if(n=W_(r.createShader(n),`Failed to create WebGL shader`),r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);return r.attachShader(e.h,n),n}function q_(e,t){let n=e.g,r=W_(n.createVertexArray(),`Failed to create vertex array`);n.bindVertexArray(r);let i=W_(n.createBuffer(),`Failed to create buffer`);n.bindBuffer(n.ARRAY_BUFFER,i),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);let a=W_(n.createBuffer(),`Failed to create buffer`);return n.bindBuffer(n.ARRAY_BUFFER,a),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new G_(n,r,i,a)}function J_(e,t){if(e.g){if(t!==e.g)throw Error(`Cannot change GL context once initialized`)}else e.g=t}function Y_(e,t,n,r){return J_(e,t),e.h||(e.m(),e.D()),n?(e.u||(e.u=q_(e,!0)),n=e.u):(e.A||(e.A=q_(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=r(),n.g.bindVertexArray(null),e}function X_(e,t,n){return J_(e,t),e=W_(t.createTexture(),`Failed to create texture`),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Z_(e,t,n){J_(e,t),e.B||=W_(t.createFramebuffer(),`Failed to create framebuffe.`),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function Q_(e){e.g?.bindFramebuffer(e.g.FRAMEBUFFER,null)}var $_=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){let e=this.g;if(this.h=W_(e.createProgram(),`Failed to create WebGL program`),this.X=K_(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=K_(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,`aVertex`),this.L=e.getAttribLocation(this.h,`aTex`)}D(){}l(){}close(){if(this.h){let e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}},ev=class extends $_{H(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}D(){let e=this.g;e.activeTexture(e.TEXTURE1),this.C=X_(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.j=X_(this,e,e.NEAREST)}m(){super.m();let e=this.g;this.P=W_(e.getUniformLocation(this.h,`backgroundTexture`),`Uniform location`),this.U=W_(e.getUniformLocation(this.h,`colorMappingTexture`),`Uniform location`),this.M=W_(e.getUniformLocation(this.h,`maskTexture`),`Uniform location`)}l(){super.l();let e=this.g;e.uniform1i(this.M,0),e.uniform1i(this.P,1),e.uniform1i(this.U,2)}close(){this.C&&this.g.deleteTexture(this.C),this.j&&this.g.deleteTexture(this.j),super.close()}},tv=class extends $_{H(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}D(){let e=this.g;e.activeTexture(e.TEXTURE1),this.j=X_(this,e),e.activeTexture(e.TEXTURE2),this.C=X_(this,e)}m(){super.m();let e=this.g;this.M=W_(e.getUniformLocation(this.h,`defaultTexture`),`Uniform location`),this.P=W_(e.getUniformLocation(this.h,`overlayTexture`),`Uniform location`),this.I=W_(e.getUniformLocation(this.h,`maskTexture`),`Uniform location`)}l(){super.l();let e=this.g;e.uniform1i(this.I,0),e.uniform1i(this.M,1),e.uniform1i(this.P,2)}close(){this.j&&this.g.deleteTexture(this.j),this.C&&this.g.deleteTexture(this.C),super.close()}};function nv(e,t){switch(t){case 0:return e.g.find((e=>e instanceof Uint8Array));case 1:return e.g.find((e=>e instanceof Float32Array));case 2:return e.g.find((e=>typeof WebGLTexture<`u`&&e instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function rv(e){var t=nv(e,1);if(!t){if(t=nv(e,0))t=new Float32Array(t).map((e=>e/255));else{t=new Float32Array(e.width*e.height);let r=av(e);var n=sv(e);if(Z_(n,r,iv(e)),`iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod`.split(`;`).includes(navigator.platform)||navigator.userAgent.includes(`Mac`)&&`document`in self&&`ontouchend`in self.document){n=new Float32Array(e.width*e.height*4),r.readPixels(0,0,e.width,e.height,r.RGBA,r.FLOAT,n);for(let e=0,r=0;e<t.length;++e,r+=4)t[e]=n[r]}else r.readPixels(0,0,e.width,e.height,r.RED,r.FLOAT,t)}e.g.push(t)}return t}function iv(e){let t=nv(e,2);if(!t){let n=av(e);t=cv(e);let r=rv(e),i=ov(e);n.texImage2D(n.TEXTURE_2D,0,i,e.width,e.height,0,n.RED,n.FLOAT,r),lv(e)}return t}function av(e){if(!e.canvas)throw Error(`Conversion to different image formats require that a canvas is passed when initializing the image.`);return e.h||=W_(e.canvas.getContext(`webgl2`),`You cannot use a canvas that is already bound to a different type of rendering context.`),e.h}function ov(e){if(e=av(e),!uv){if(e.getExtension(`EXT_color_buffer_float`)&&e.getExtension(`OES_texture_float_linear`)&&e.getExtension(`EXT_float_blend`))uv=e.R32F;else{if(!e.getExtension(`EXT_color_buffer_half_float`))throw Error(`GPU does not fully support 4-channel float32 or float16 formats`);uv=e.R16F}}return uv}function sv(e){return e.l||=new $_,e.l}function cv(e){let t=av(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=nv(e,2);return n||(n=X_(sv(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function lv(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var uv,dv=class{constructor(e,t,n,r,i,a,o){this.g=e,this.m=t,this.j=n,this.canvas=r,this.l=i,this.width=a,this.height=o,this.j&&--fv===0&&console.error(`You seem to be creating MPMask instances without invoking .close(). This leaks resources.`)}Fa(){return!!nv(this,0)}ka(){return!!nv(this,1)}R(){return!!nv(this,2)}ja(){return(t=nv(e=this,0))||(t=rv(e),t=new Uint8Array(t.map((e=>Math.round(255*e)))),e.g.push(t)),t;var e,t}ia(){return rv(this)}N(){return iv(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let e=av(this),t=sv(this);e.activeTexture(e.TEXTURE1),n=X_(t,e,this.m?e.LINEAR:e.NEAREST),e.bindTexture(e.TEXTURE_2D,n);let r=ov(this);e.texImage2D(e.TEXTURE_2D,0,r,this.width,this.height,0,e.RED,e.FLOAT,null),e.bindTexture(e.TEXTURE_2D,null),Z_(t,e,n),Y_(t,e,!1,(()=>{cv(this),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),lv(this)})),Q_(t),lv(this)}}e.push(n)}return new dv(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&av(this).deleteTexture(nv(this,2)),fv=-1}};dv.prototype.close=dv.prototype.close,dv.prototype.clone=dv.prototype.clone,dv.prototype.getAsWebGLTexture=dv.prototype.N,dv.prototype.getAsFloat32Array=dv.prototype.ia,dv.prototype.getAsUint8Array=dv.prototype.ja,dv.prototype.hasWebGLTexture=dv.prototype.R,dv.prototype.hasFloat32Array=dv.prototype.ka,dv.prototype.hasUint8Array=dv.prototype.Fa;var fv=250,pv={color:`white`,lineWidth:4,radius:6};function mv(e){return{...pv,fillColor:(e||={}).color,...e}}function hv(e,t){return e instanceof Function?e(t):e}function gv(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function _v(e){if(!e.l)throw Error(`CPU rendering requested but CanvasRenderingContext2D not provided.`);return e.l}function vv(e){if(!e.j)throw Error(`GPU rendering requested but WebGL2RenderingContext not provided.`);return e.j}function yv(e,t,n){if(t.R())n(t.N());else{let r=t.ka()?t.ia():t.ja();e.m=e.m??new $_;let i=vv(e);n((e=new dv([r],t.m,!1,i.canvas,e.m,t.width,t.height)).N()),e.close()}}function bv(e,t,n,r){let i=function(e){return e.g||=new ev,e.g}(e),a=vv(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;Y_(i,a,!0,(()=>{(function(e,t,n,r){let i=e.g;if(i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,e.C),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,n),e.I&&function(e,t){if(e!==t)return!1;e=e.entries(),t=t.entries();for(let[n,r]of e){e=n;let i=r,a=t.next();if(a.done)return!1;let[o,s]=a.value;if(e!==o||i[0]!==s[0]||i[1]!==s[1]||i[2]!==s[2]||i[3]!==s[3])return!1}return!!t.next().done}(e.I,r))i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D,e.j);else{e.I=r;let t=Array(1024).fill(0);r.forEach(((e,n)=>{if(e.length!==4)throw Error(`Color at index ${n} is not a four-channel value.`);t[4*n]=e[0],t[4*n+1]=e[1],t[4*n+2]=e[2],t[4*n+3]=e[3]})),i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D,e.j),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,256,1,0,i.RGBA,i.UNSIGNED_BYTE,new Uint8Array(t))}})(i,t,o,r),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.TRIANGLE_FAN,0,4);let e=i.g;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,null)}))}function xv(e,t,n,r){let i=vv(e),a=function(e){return e.h||=new tv,e.h}(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,s=Array.isArray(r)?new ImageData(new Uint8ClampedArray(r),1,1):r;Y_(a,i,!0,(()=>{var e=a.g;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,a.j),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,o),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,a.C),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,s),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),i.bindTexture(i.TEXTURE_2D,null),(e=a.g).activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,null)}))}var Sv=class{constructor(e,t){typeof CanvasRenderingContext2D<`u`&&e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.j=t):this.j=e}ya(e,t){if(e){var n=_v(this);t=mv(t),n.save();var r=n.canvas,i=0;for(let a of e)n.fillStyle=hv(t.fillColor,{index:i,from:a}),n.strokeStyle=hv(t.color,{index:i,from:a}),n.lineWidth=hv(t.lineWidth,{index:i,from:a}),(e=new Path2D).arc(a.x*r.width,a.y*r.height,hv(t.radius,{index:i,from:a}),0,2*Math.PI),n.fill(e),n.stroke(e),++i;n.restore()}}xa(e,t,n){if(e&&t){var r=_v(this);n=mv(n),r.save();var i=r.canvas,a=0;for(let o of t){r.beginPath(),t=e[o.start];let s=e[o.end];t&&s&&(r.strokeStyle=hv(n.color,{index:a,from:t,to:s}),r.lineWidth=hv(n.lineWidth,{index:a,from:t,to:s}),r.moveTo(t.x*i.width,t.y*i.height),r.lineTo(s.x*i.width,s.y*i.height)),++a,r.stroke()}r.restore()}}ua(e,t){let n=_v(this);t=mv(t),n.save(),n.beginPath(),n.lineWidth=hv(t.lineWidth,{}),n.strokeStyle=hv(t.color,{}),n.fillStyle=hv(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}va(e,t,n=[0,0,0,255]){this.l?function(e,t,n,r){let i=vv(e);yv(e,t,(t=>{bv(e,t,n,r),(t=_v(e)).drawImage(i.canvas,0,0,t.canvas.width,t.canvas.height)}))}(this,e,n,t):bv(this,e.N(),n,t)}wa(e,t,n){this.l?function(e,t,n,r){let i=vv(e);yv(e,t,(t=>{xv(e,t,n,r),(t=_v(e)).drawImage(i.canvas,0,0,t.canvas.width,t.canvas.height)}))}(this,e,t,n):xv(this,e.N(),t,n)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function Cv(e,t){switch(t){case 0:return e.g.find((e=>e instanceof ImageData));case 1:return e.g.find((e=>typeof ImageBitmap<`u`&&e instanceof ImageBitmap));case 2:return e.g.find((e=>typeof WebGLTexture<`u`&&e instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function wv(e){var t=Cv(e,0);if(!t){t=Ev(e);let n=Dv(e),r=new Uint8Array(e.width*e.height*4);Z_(n,t,Tv(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,r),Q_(n),t=new ImageData(new Uint8ClampedArray(r.buffer),e.width,e.height),e.g.push(t)}return t}function Tv(e){let t=Cv(e,2);if(!t){let n=Ev(e);t=Ov(e);let r=Cv(e,1)||wv(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r),kv(e)}return t}function Ev(e){if(!e.canvas)throw Error(`Conversion to different image formats require that a canvas is passed when initializing the image.`);return e.h||=W_(e.canvas.getContext(`webgl2`),`You cannot use a canvas that is already bound to a different type of rendering context.`),e.h}function Dv(e){return e.l||=new $_,e.l}function Ov(e){let t=Ev(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Cv(e,2);return n||(n=X_(Dv(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function kv(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function Av(e){let t=Ev(e);return Y_(Dv(e),t,!0,(()=>function(e,t){let n=e.canvas;if(n.width===e.width&&n.height===e.height)return t();let r=n.width,i=n.height;return n.width=e.width,n.height=e.height,e=t(),n.width=r,n.height=i,e}(e,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error(`Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas`);return e.canvas.transferToImageBitmap()}))))}Sv.prototype.close=Sv.prototype.close,Sv.prototype.drawConfidenceMask=Sv.prototype.wa,Sv.prototype.drawCategoryMask=Sv.prototype.va,Sv.prototype.drawBoundingBox=Sv.prototype.ua,Sv.prototype.drawConnectors=Sv.prototype.xa,Sv.prototype.drawLandmarks=Sv.prototype.ya,Sv.lerp=function(e,t,n,r,i){return gv(r*(1-(e-t)/(n-t))+i*(1-(n-e)/(n-t)),r,i)},Sv.clamp=gv;var jv=class{constructor(e,t,n,r,i,a,o){this.g=e,this.j=t,this.m=n,this.canvas=r,this.l=i,this.width=a,this.height=o,(this.j||this.m)&&--Mv===0&&console.error(`You seem to be creating MPImage instances without invoking .close(). This leaks resources.`)}Ea(){return!!Cv(this,0)}la(){return!!Cv(this,1)}R(){return!!Cv(this,2)}Ca(){return wv(this)}Ba(){var e=Cv(this,1);return e||(Tv(this),Ov(this),e=Av(this),kv(this),this.g.push(e),this.j=!0),e}N(){return Tv(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let e=Ev(this),t=Dv(this);e.activeTexture(e.TEXTURE1),n=X_(t,e),e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.width,this.height,0,e.RGBA,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,null),Z_(t,e,n),Y_(t,e,!1,(()=>{Ov(this),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),kv(this)})),Q_(t),kv(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Tv(this),Ov(this),n=Av(this),kv(this)}e.push(n)}return new jv(e,this.la(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Cv(this,1).close(),this.m&&Ev(this).deleteTexture(Cv(this,2)),Mv=-1}};jv.prototype.close=jv.prototype.close,jv.prototype.clone=jv.prototype.clone,jv.prototype.getAsWebGLTexture=jv.prototype.N,jv.prototype.getAsImageBitmap=jv.prototype.Ba,jv.prototype.getAsImageData=jv.prototype.Ca,jv.prototype.hasWebGLTexture=jv.prototype.R,jv.prototype.hasImageBitmap=jv.prototype.la,jv.prototype.hasImageData=jv.prototype.Ea;var Mv=250;function Nv(...e){return e.map((([e,t])=>({start:e,end:t})))}var Pv=function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}}((Fv=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream==`function`,t===void 0?A_()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn(`OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas.`),this.i.canvas=document.createElement(`canvas`)):this.i.canvas=t}async initializeGraph(e){let t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(`.pbtxt`)||e.endsWith(`.textproto`)),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){let n=e.length,r=this.i._malloc(n);this.i.HEAPU8.set(e,r),t?this.i._changeBinaryGraph(n,r):this.i._changeTextGraph(n,r),this.i._free(r)}configureAudio(e,t,n,r,i){this.i._configureAudio||console.warn(`Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?`),Q(this,r||`input_audio`,(r=>{Q(this,i||=`audio_header`,(i=>{this.i._configureAudio(r,i,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){F_(this,`__graph_config__`,(t=>{e(t)})),Q(this,`__graph_config__`,(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,r,i){let a=4*e.length;this.h!==a&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(a),this.h=a),this.i.HEAPF32.set(e,this.g/4),Q(this,r,(e=>{this.i._addAudioToInputStream(this.g,t,n,e,i)}))}addGpuBufferToStream(e,t,n){Q(this,t,(t=>{let[r,i]=N_(this,e,t);this.i._addBoundTextureToStream(t,r,i,n)}))}addBoolToStream(e,t,n){Q(this,t,(t=>{this.i._addBoolToInputStream(e,t,n)}))}addDoubleToStream(e,t,n){Q(this,t,(t=>{this.i._addDoubleToInputStream(e,t,n)}))}addFloatToStream(e,t,n){Q(this,t,(t=>{this.i._addFloatToInputStream(e,t,n)}))}addIntToStream(e,t,n){Q(this,t,(t=>{this.i._addIntToInputStream(e,t,n)}))}addUintToStream(e,t,n){Q(this,t,(t=>{this.i._addUintToInputStream(e,t,n)}))}addStringToStream(e,t,n){Q(this,t,(t=>{Q(this,e,(e=>{this.i._addStringToInputStream(e,t,n)}))}))}addStringRecordToStream(e,t,n){Q(this,t,(t=>{P_(this,Object.keys(e),(r=>{P_(this,Object.values(e),(i=>{this.i._addFlatHashMapToInputStream(r,i,Object.keys(e).length,t,n)}))}))}))}addProtoToStream(e,t,n,r){Q(this,n,(n=>{Q(this,t,(t=>{let i=this.i._malloc(e.length);this.i.HEAPU8.set(e,i),this.i._addProtoToInputStream(i,e.length,t,n,r),this.i._free(i)}))}))}addEmptyPacketToStream(e,t){Q(this,e,(e=>{this.i._addEmptyPacketToInputStream(e,t)}))}addBoolVectorToStream(e,t,n){Q(this,t,(t=>{let r=this.i._allocateBoolVector(e.length);if(!r)throw Error(`Unable to allocate new bool vector on heap.`);for(let t of e)this.i._addBoolVectorEntry(r,t);this.i._addBoolVectorToInputStream(r,t,n)}))}addDoubleVectorToStream(e,t,n){Q(this,t,(t=>{let r=this.i._allocateDoubleVector(e.length);if(!r)throw Error(`Unable to allocate new double vector on heap.`);for(let t of e)this.i._addDoubleVectorEntry(r,t);this.i._addDoubleVectorToInputStream(r,t,n)}))}addFloatVectorToStream(e,t,n){Q(this,t,(t=>{let r=this.i._allocateFloatVector(e.length);if(!r)throw Error(`Unable to allocate new float vector on heap.`);for(let t of e)this.i._addFloatVectorEntry(r,t);this.i._addFloatVectorToInputStream(r,t,n)}))}addIntVectorToStream(e,t,n){Q(this,t,(t=>{let r=this.i._allocateIntVector(e.length);if(!r)throw Error(`Unable to allocate new int vector on heap.`);for(let t of e)this.i._addIntVectorEntry(r,t);this.i._addIntVectorToInputStream(r,t,n)}))}addUintVectorToStream(e,t,n){Q(this,t,(t=>{let r=this.i._allocateUintVector(e.length);if(!r)throw Error(`Unable to allocate new unsigned int vector on heap.`);for(let t of e)this.i._addUintVectorEntry(r,t);this.i._addUintVectorToInputStream(r,t,n)}))}addStringVectorToStream(e,t,n){Q(this,t,(t=>{let r=this.i._allocateStringVector(e.length);if(!r)throw Error(`Unable to allocate new string vector on heap.`);for(let t of e)Q(this,t,(e=>{this.i._addStringVectorEntry(r,e)}));this.i._addStringVectorToInputStream(r,t,n)}))}addBoolToInputSidePacket(e,t){Q(this,t,(t=>{this.i._addBoolToInputSidePacket(e,t)}))}addDoubleToInputSidePacket(e,t){Q(this,t,(t=>{this.i._addDoubleToInputSidePacket(e,t)}))}addFloatToInputSidePacket(e,t){Q(this,t,(t=>{this.i._addFloatToInputSidePacket(e,t)}))}addIntToInputSidePacket(e,t){Q(this,t,(t=>{this.i._addIntToInputSidePacket(e,t)}))}addUintToInputSidePacket(e,t){Q(this,t,(t=>{this.i._addUintToInputSidePacket(e,t)}))}addStringToInputSidePacket(e,t){Q(this,t,(t=>{Q(this,e,(e=>{this.i._addStringToInputSidePacket(e,t)}))}))}addProtoToInputSidePacket(e,t,n){Q(this,n,(n=>{Q(this,t,(t=>{let r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,t,n),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(e,t){Q(this,t,(t=>{let n=this.i._allocateBoolVector(e.length);if(!n)throw Error(`Unable to allocate new bool vector on heap.`);for(let t of e)this.i._addBoolVectorEntry(n,t);this.i._addBoolVectorToInputSidePacket(n,t)}))}addDoubleVectorToInputSidePacket(e,t){Q(this,t,(t=>{let n=this.i._allocateDoubleVector(e.length);if(!n)throw Error(`Unable to allocate new double vector on heap.`);for(let t of e)this.i._addDoubleVectorEntry(n,t);this.i._addDoubleVectorToInputSidePacket(n,t)}))}addFloatVectorToInputSidePacket(e,t){Q(this,t,(t=>{let n=this.i._allocateFloatVector(e.length);if(!n)throw Error(`Unable to allocate new float vector on heap.`);for(let t of e)this.i._addFloatVectorEntry(n,t);this.i._addFloatVectorToInputSidePacket(n,t)}))}addIntVectorToInputSidePacket(e,t){Q(this,t,(t=>{let n=this.i._allocateIntVector(e.length);if(!n)throw Error(`Unable to allocate new int vector on heap.`);for(let t of e)this.i._addIntVectorEntry(n,t);this.i._addIntVectorToInputSidePacket(n,t)}))}addUintVectorToInputSidePacket(e,t){Q(this,t,(t=>{let n=this.i._allocateUintVector(e.length);if(!n)throw Error(`Unable to allocate new unsigned int vector on heap.`);for(let t of e)this.i._addUintVectorEntry(n,t);this.i._addUintVectorToInputSidePacket(n,t)}))}addStringVectorToInputSidePacket(e,t){Q(this,t,(t=>{let n=this.i._allocateStringVector(e.length);if(!n)throw Error(`Unable to allocate new string vector on heap.`);for(let t of e)Q(this,t,(e=>{this.i._addStringVectorEntry(n,e)}));this.i._addStringVectorToInputSidePacket(n,t)}))}attachBoolListener(e,t){F_(this,e,t),Q(this,e,(e=>{this.i._attachBoolListener(e)}))}attachBoolVectorListener(e,t){I_(this,e,t),Q(this,e,(e=>{this.i._attachBoolVectorListener(e)}))}attachIntListener(e,t){F_(this,e,t),Q(this,e,(e=>{this.i._attachIntListener(e)}))}attachIntVectorListener(e,t){I_(this,e,t),Q(this,e,(e=>{this.i._attachIntVectorListener(e)}))}attachUintListener(e,t){F_(this,e,t),Q(this,e,(e=>{this.i._attachUintListener(e)}))}attachUintVectorListener(e,t){I_(this,e,t),Q(this,e,(e=>{this.i._attachUintVectorListener(e)}))}attachDoubleListener(e,t){F_(this,e,t),Q(this,e,(e=>{this.i._attachDoubleListener(e)}))}attachDoubleVectorListener(e,t){I_(this,e,t),Q(this,e,(e=>{this.i._attachDoubleVectorListener(e)}))}attachFloatListener(e,t){F_(this,e,t),Q(this,e,(e=>{this.i._attachFloatListener(e)}))}attachFloatVectorListener(e,t){I_(this,e,t),Q(this,e,(e=>{this.i._attachFloatVectorListener(e)}))}attachStringListener(e,t){F_(this,e,t),Q(this,e,(e=>{this.i._attachStringListener(e)}))}attachStringVectorListener(e,t){I_(this,e,t),Q(this,e,(e=>{this.i._attachStringVectorListener(e)}))}attachProtoListener(e,t,n){F_(this,e,t),Q(this,e,(e=>{this.i._attachProtoListener(e,n||!1)}))}attachProtoVectorListener(e,t,n){I_(this,e,t),Q(this,e,(e=>{this.i._attachProtoVectorListener(e,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn(`Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?`),F_(this,e,((e,n)=>{e=new Float32Array(e.buffer,e.byteOffset,e.length/4),t(e,n)})),Q(this,e,(e=>{this.i._attachAudioListener(e,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Fv{get ga(){return this.i}pa(e,t,n){Q(this,t,(t=>{let[r,i]=N_(this,e,t);this.ga._addBoundTextureAsImageToStream(t,r,i,n)}))}Z(e,t){F_(this,e,t),Q(this,e,(e=>{this.ga._attachImageListener(e)}))}aa(e,t){I_(this,e,t),Q(this,e,(e=>{this.ga._attachImageVectorListener(e)}))}})),Fv,Iv=class extends Pv{};async function Lv(e,t,n){return async function(e,t,n,r){return L_(e,t,n,r)}(e,n.canvas??(A_()?void 0:document.createElement(`canvas`)),t,n)}function Rv(e,t,n,r){if(e.U){let a=new og;if(n?.regionOfInterest){if(!e.oa)throw Error(`This task doesn't support region-of-interest.`);var i=n.regionOfInterest;if(i.left>=i.right||i.top>=i.bottom)throw Error(`Expected RectF with left < right and top < bottom.`);if(i.left<0||i.top<0||i.right>1||i.bottom>1)throw Error(`Expected RectF values to be in [0,1].`);Y(a,1,(i.left+i.right)/2),Y(a,2,(i.top+i.bottom)/2),Y(a,4,i.right-i.left),Y(a,3,i.bottom-i.top)}else Y(a,1,.5),Y(a,2,.5),Y(a,4,1),Y(a,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error(`Expected rotation to be a multiple of 90°.`);if(Y(a,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[e,r]=M_(t);n=sp(a,3)*r/e,i=sp(a,4)*e/r,Y(a,4,n),Y(a,3,i)}}e.g.addProtoToStream(a.g(),`mediapipe.NormalizedRect`,e.U,r)}e.g.pa(t,e.X,r??performance.now()),e.finishProcessing()}function zv(e,t,n){if(e.baseOptions?.g())throw Error(`Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.`);Rv(e,t,n,e.C+1)}function Bv(e,t,n,r){if(!e.baseOptions?.g())throw Error(`Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.`);Rv(e,t,n,r)}function Vv(e,t,n,r){var i=t.data;let a=t.width,o=a*(t=t.height);if((i instanceof Uint8Array||i instanceof Float32Array)&&i.length!==o)throw Error(`Unsupported channel count: `+i.length/o);return e=new dv([i],n,!1,e.g.i.canvas,e.P,a,t),r?e.clone():e}var Hv=class extends U_{constructor(e,t,n,r){super(e),this.g=e,this.X=t,this.U=n,this.oa=r,this.P=new $_}l(e,t=!0){if(`runningMode`in e&&Ff(this.baseOptions,2,Nd(!!e.runningMode&&e.runningMode!==`IMAGE`)),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error(`You must create a new task to reset the canvas.`);return super.l(e,t)}close(){this.P.close(),super.close()}};Hv.prototype.close=Hv.prototype.close;var Uv=class extends Hv{constructor(e,t){super(new Iv(e,t),`image_in`,`norm_rect_in`,!1),this.j={detections:[]},J(e=this.h=new wg,0,1,t=new xg),Y(this.h,2,.5),Y(this.h,3,.3)}get baseOptions(){return $f(this.h,xg,1)}set baseOptions(e){J(this.h,0,1,e)}o(e){return`minDetectionConfidence`in e&&Y(this.h,2,e.minDetectionConfidence??.5),`minSuppressionThreshold`in e&&Y(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},zv(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Bv(this,e,n,t),this.j}m(){var e=new Uh;Vh(e,`image_in`),Vh(e,`norm_rect_in`),Hh(e,`detections`);let t=new Mh;sm(t,Eg,this.h);let n=new Ih;lp(n,2,`mediapipe.tasks.vision.face_detector.FaceDetectorGraph`),Fh(n,`IMAGE:image_in`),Fh(n,`NORM_RECT:norm_rect_in`),Z(n,`DETECTIONS:detections`),n.o(t),Bh(e,n),this.g.attachProtoVectorListener(`detections`,((e,t)=>{for(let t of e)e=$h(t),this.j.detections.push(b_(e));$(this,t)})),this.g.attachEmptyPacketListener(`detections`,(e=>{$(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Uv.prototype.detectForVideo=Uv.prototype.G,Uv.prototype.detect=Uv.prototype.F,Uv.prototype.setOptions=Uv.prototype.o,Uv.createFromModelPath=async function(e,t){return Lv(Uv,e,{baseOptions:{modelAssetPath:t}})},Uv.createFromModelBuffer=function(e,t){return Lv(Uv,e,{baseOptions:{modelAssetBuffer:t}})},Uv.createFromOptions=function(e,t){return Lv(Uv,e,t)};var Wv=Nv([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Gv=Nv([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Kv=Nv([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),qv=Nv([474,475],[475,476],[476,477],[477,474]),Jv=Nv([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Yv=Nv([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Xv=Nv([469,470],[470,471],[471,472],[472,469]),Zv=Nv([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Qv=[...Wv,...Gv,...Kv,...Jv,...Yv,...Zv],$v=Nv([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function ey(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var ty=class extends Hv{constructor(e,t){super(new Iv(e,t),`image_in`,`norm_rect`,!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,J(e=this.h=new kg,0,1,t=new xg),this.A=new Og,J(this.h,0,3,this.A),this.u=new wg,J(this.h,0,2,this.u),cp(this.u,4,1),Y(this.u,2,.5),Y(this.A,2,.5),Y(this.h,4,.5)}get baseOptions(){return $f(this.h,xg,1)}set baseOptions(e){J(this.h,0,1,e)}o(e){return`numFaces`in e&&cp(this.u,4,e.numFaces??1),`minFaceDetectionConfidence`in e&&Y(this.u,2,e.minFaceDetectionConfidence??.5),`minTrackingConfidence`in e&&Y(this.h,4,e.minTrackingConfidence??.5),`minFacePresenceConfidence`in e&&Y(this.A,2,e.minFacePresenceConfidence??.5),`outputFaceBlendshapes`in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),`outputFacialTransformationMatrixes`in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return ey(this),zv(this,e,t),this.j}G(e,t,n){return ey(this),Bv(this,e,n,t),this.j}m(){var e=new Uh;Vh(e,`image_in`),Vh(e,`norm_rect`),Hh(e,`face_landmarks`);let t=new Mh;sm(t,jg,this.h);let n=new Ih;lp(n,2,`mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph`),Fh(n,`IMAGE:image_in`),Fh(n,`NORM_RECT:norm_rect`),Z(n,`NORM_LANDMARKS:face_landmarks`),n.o(t),Bh(e,n),this.g.attachProtoVectorListener(`face_landmarks`,((e,t)=>{for(let t of e)e=rg(t),this.j.faceLandmarks.push(x_(e));$(this,t)})),this.g.attachEmptyPacketListener(`face_landmarks`,(e=>{$(this,e)})),this.outputFaceBlendshapes&&(Hh(e,`blendshapes`),Z(n,`BLENDSHAPES:blendshapes`),this.g.attachProtoVectorListener(`blendshapes`,((e,t)=>{if(this.outputFaceBlendshapes)for(let t of e)e=Yh(t),this.j.faceBlendshapes.push(v_(e.g()??[]));$(this,t)})),this.g.attachEmptyPacketListener(`blendshapes`,(e=>{$(this,e)}))),this.outputFacialTransformationMatrixes&&(Hh(e,`face_geometry`),Z(n,`FACE_GEOMETRY:face_geometry`),this.g.attachProtoVectorListener(`face_geometry`,((e,t)=>{if(this.outputFacialTransformationMatrixes)for(let t of e)(e=$f(e=Dg(t),ig,2))&&this.j.facialTransformationMatrixes.push({rows:op(e,1)??0??0,columns:op(e,2)??0??0,data:Rf(e,3,Md,Lf()).slice()??[]});$(this,t)})),this.g.attachEmptyPacketListener(`face_geometry`,(e=>{$(this,e)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ty.prototype.detectForVideo=ty.prototype.G,ty.prototype.detect=ty.prototype.F,ty.prototype.setOptions=ty.prototype.o,ty.createFromModelPath=function(e,t){return Lv(ty,e,{baseOptions:{modelAssetPath:t}})},ty.createFromModelBuffer=function(e,t){return Lv(ty,e,{baseOptions:{modelAssetBuffer:t}})},ty.createFromOptions=function(e,t){return Lv(ty,e,t)},ty.FACE_LANDMARKS_LIPS=Wv,ty.FACE_LANDMARKS_LEFT_EYE=Gv,ty.FACE_LANDMARKS_LEFT_EYEBROW=Kv,ty.FACE_LANDMARKS_LEFT_IRIS=qv,ty.FACE_LANDMARKS_RIGHT_EYE=Jv,ty.FACE_LANDMARKS_RIGHT_EYEBROW=Yv,ty.FACE_LANDMARKS_RIGHT_IRIS=Xv,ty.FACE_LANDMARKS_FACE_OVAL=Zv,ty.FACE_LANDMARKS_CONTOURS=Qv,ty.FACE_LANDMARKS_TESSELATION=$v;var ny=Nv([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function ry(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function iy(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function ay(e,t=!0){let n=[];for(let i of e){var r=Yh(i);e=[];for(let n of r.g())r=t&&op(n,1)!=null?op(n,1)??0:-1,e.push({score:sp(n,2)??0,index:r,categoryName:qd(Nf(n,3))??``??``,displayName:qd(Nf(n,4))??``??``});n.push(e)}return n}var oy=class extends Hv{constructor(e,t){super(new Iv(e,t),`image_in`,`norm_rect`,!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],J(e=this.j=new Rg,0,1,t=new xg),this.u=new Lg,J(this.j,0,2,this.u),this.D=new Ig,J(this.u,0,3,this.D),this.A=new Fg,J(this.u,0,2,this.A),this.h=new Pg,J(this.j,0,3,this.h),Y(this.A,2,.5),Y(this.u,4,.5),Y(this.D,2,.5)}get baseOptions(){return $f(this.j,xg,1)}set baseOptions(e){J(this.j,0,1,e)}o(e){if(cp(this.A,3,e.numHands??1),`minHandDetectionConfidence`in e&&Y(this.A,2,e.minHandDetectionConfidence??.5),`minTrackingConfidence`in e&&Y(this.u,4,e.minTrackingConfidence??.5),`minHandPresenceConfidence`in e&&Y(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Mg,n=t,r=g_(e.cannedGesturesClassifierOptions,$f(this.h,Mg,3)?.l());J(n,0,2,r),J(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&$f(this.h,Mg,3)?.g();return e.customGesturesClassifierOptions?(J(n=t=new Mg,0,2,r=g_(e.customGesturesClassifierOptions,$f(this.h,Mg,4)?.l())),J(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&$f(this.h,Mg,4)?.g(),this.l(e)}Ha(e,t){return ry(this),zv(this,e,t),iy(this)}Ia(e,t,n){return ry(this),Bv(this,e,n,t),iy(this)}m(){var e=new Uh;Vh(e,`image_in`),Vh(e,`norm_rect`),Hh(e,`hand_gestures`),Hh(e,`hand_landmarks`),Hh(e,`world_hand_landmarks`),Hh(e,`handedness`);let t=new Mh;sm(t,Ug,this.j);let n=new Ih;lp(n,2,`mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph`),Fh(n,`IMAGE:image_in`),Fh(n,`NORM_RECT:norm_rect`),Z(n,`HAND_GESTURES:hand_gestures`),Z(n,`LANDMARKS:hand_landmarks`),Z(n,`WORLD_LANDMARKS:world_hand_landmarks`),Z(n,`HANDEDNESS:handedness`),n.o(t),Bh(e,n),this.g.attachProtoVectorListener(`hand_landmarks`,((e,t)=>{for(let t of e){e=rg(t);let n=[];for(let t of tp(e,ng,1))n.push({x:sp(t,1)??0,y:sp(t,2)??0,z:sp(t,3)??0,visibility:sp(t,4)??0});this.landmarks.push(n)}$(this,t)})),this.g.attachEmptyPacketListener(`hand_landmarks`,(e=>{$(this,e)})),this.g.attachProtoVectorListener(`world_hand_landmarks`,((e,t)=>{for(let t of e){e=tg(t);let n=[];for(let t of tp(e,eg,1))n.push({x:sp(t,1)??0,y:sp(t,2)??0,z:sp(t,3)??0,visibility:sp(t,4)??0});this.worldLandmarks.push(n)}$(this,t)})),this.g.attachEmptyPacketListener(`world_hand_landmarks`,(e=>{$(this,e)})),this.g.attachProtoVectorListener(`hand_gestures`,((e,t)=>{this.gestures.push(...ay(e,!1)),$(this,t)})),this.g.attachEmptyPacketListener(`hand_gestures`,(e=>{$(this,e)})),this.g.attachProtoVectorListener(`handedness`,((e,t)=>{this.handedness.push(...ay(e)),$(this,t)})),this.g.attachEmptyPacketListener(`handedness`,(e=>{$(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function sy(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}oy.prototype.recognizeForVideo=oy.prototype.Ia,oy.prototype.recognize=oy.prototype.Ha,oy.prototype.setOptions=oy.prototype.o,oy.createFromModelPath=function(e,t){return Lv(oy,e,{baseOptions:{modelAssetPath:t}})},oy.createFromModelBuffer=function(e,t){return Lv(oy,e,{baseOptions:{modelAssetBuffer:t}})},oy.createFromOptions=function(e,t){return Lv(oy,e,t)},oy.HAND_CONNECTIONS=ny;var cy=class extends Hv{constructor(e,t){super(new Iv(e,t),`image_in`,`norm_rect`,!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],J(e=this.h=new Lg,0,1,t=new xg),this.u=new Ig,J(this.h,0,3,this.u),this.j=new Fg,J(this.h,0,2,this.j),cp(this.j,3,1),Y(this.j,2,.5),Y(this.u,2,.5),Y(this.h,4,.5)}get baseOptions(){return $f(this.h,xg,1)}set baseOptions(e){J(this.h,0,1,e)}o(e){return`numHands`in e&&cp(this.j,3,e.numHands??1),`minHandDetectionConfidence`in e&&Y(this.j,2,e.minHandDetectionConfidence??.5),`minTrackingConfidence`in e&&Y(this.h,4,e.minTrackingConfidence??.5),`minHandPresenceConfidence`in e&&Y(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],zv(this,e,t),sy(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Bv(this,e,n,t),sy(this)}m(){var e=new Uh;Vh(e,`image_in`),Vh(e,`norm_rect`),Hh(e,`hand_landmarks`),Hh(e,`world_hand_landmarks`),Hh(e,`handedness`);let t=new Mh;sm(t,Wg,this.h);let n=new Ih;lp(n,2,`mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph`),Fh(n,`IMAGE:image_in`),Fh(n,`NORM_RECT:norm_rect`),Z(n,`LANDMARKS:hand_landmarks`),Z(n,`WORLD_LANDMARKS:world_hand_landmarks`),Z(n,`HANDEDNESS:handedness`),n.o(t),Bh(e,n),this.g.attachProtoVectorListener(`hand_landmarks`,((e,t)=>{for(let t of e)e=rg(t),this.landmarks.push(x_(e));$(this,t)})),this.g.attachEmptyPacketListener(`hand_landmarks`,(e=>{$(this,e)})),this.g.attachProtoVectorListener(`world_hand_landmarks`,((e,t)=>{for(let t of e)e=tg(t),this.worldLandmarks.push(S_(e));$(this,t)})),this.g.attachEmptyPacketListener(`world_hand_landmarks`,(e=>{$(this,e)})),this.g.attachProtoVectorListener(`handedness`,((e,t)=>{var n=this.handedness,r=n.push;let i=[];for(let t of e){e=Yh(t);let n=[];for(let t of e.g())n.push({score:sp(t,2)??0,index:op(t,1)??0??-1,categoryName:qd(Nf(t,3))??``??``,displayName:qd(Nf(t,4))??``??``});i.push(n)}r.call(n,...i),$(this,t)})),this.g.attachEmptyPacketListener(`handedness`,(e=>{$(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};cy.prototype.detectForVideo=cy.prototype.G,cy.prototype.detect=cy.prototype.F,cy.prototype.setOptions=cy.prototype.o,cy.createFromModelPath=function(e,t){return Lv(cy,e,{baseOptions:{modelAssetPath:t}})},cy.createFromModelBuffer=function(e,t){return Lv(cy,e,{baseOptions:{modelAssetBuffer:t}})},cy.createFromOptions=function(e,t){return Lv(cy,e,t)},cy.HAND_CONNECTIONS=ny;var ly=Nv([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function uy(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function dy(e){try{if(!e.D)return e.h;e.D(e.h)}finally{H_(e)}}function fy(e,t){e=rg(e),t.push(x_(e))}var py=class extends Hv{constructor(e,t){super(new Iv(e,t),`input_frames_image`,null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,J(e=this.j=new Jg,0,1,t=new xg),this.I=new Ig,J(this.j,0,2,this.I),this.W=new Gg,J(this.j,0,3,this.W),this.u=new wg,J(this.j,0,4,this.u),this.O=new Og,J(this.j,0,5,this.O),this.A=new Kg,J(this.j,0,6,this.A),this.M=new qg,J(this.j,0,7,this.M),Y(this.u,2,.5),Y(this.u,3,.3),Y(this.O,2,.5),Y(this.A,2,.5),Y(this.A,3,.3),Y(this.M,2,.5),Y(this.I,2,.5)}get baseOptions(){return $f(this.j,xg,1)}set baseOptions(e){J(this.j,0,1,e)}o(e){return`minFaceDetectionConfidence`in e&&Y(this.u,2,e.minFaceDetectionConfidence??.5),`minFaceSuppressionThreshold`in e&&Y(this.u,3,e.minFaceSuppressionThreshold??.3),`minFacePresenceConfidence`in e&&Y(this.O,2,e.minFacePresenceConfidence??.5),`outputFaceBlendshapes`in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),`minPoseDetectionConfidence`in e&&Y(this.A,2,e.minPoseDetectionConfidence??.5),`minPoseSuppressionThreshold`in e&&Y(this.A,3,e.minPoseSuppressionThreshold??.3),`minPosePresenceConfidence`in e&&Y(this.M,2,e.minPosePresenceConfidence??.5),`outputPoseSegmentationMasks`in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),`minHandLandmarksConfidence`in e&&Y(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){let r=typeof t==`function`?{}:t;return this.D=typeof t==`function`?t:n,uy(this),zv(this,e,r),dy(this)}G(e,t,n,r){let i=typeof n==`function`?{}:n;return this.D=typeof n==`function`?n:r,uy(this),Bv(this,e,i,t),dy(this)}m(){var e=new Uh;Vh(e,`input_frames_image`),Hh(e,`pose_landmarks`),Hh(e,`pose_world_landmarks`),Hh(e,`face_landmarks`),Hh(e,`left_hand_landmarks`),Hh(e,`left_hand_world_landmarks`),Hh(e,`right_hand_landmarks`),Hh(e,`right_hand_world_landmarks`);let t=new Mh,n=new vh;lp(n,1,`type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions`),function(e,t){if(t!=null){if(Array.isArray(t))Ff(e,2,pf(t,0,hf));else{if(!(typeof t==`string`||t instanceof mu||uu(t)))throw Error(`invalid value in Any.value field: `+t+` expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array`);Gf(e,2,Gu(t,!1),fu())}}}(n,this.j.g());let r=new Ih;lp(r,2,`mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph`),ap(r,8,vh,n),Fh(r,`IMAGE:input_frames_image`),Z(r,`POSE_LANDMARKS:pose_landmarks`),Z(r,`POSE_WORLD_LANDMARKS:pose_world_landmarks`),Z(r,`FACE_LANDMARKS:face_landmarks`),Z(r,`LEFT_HAND_LANDMARKS:left_hand_landmarks`),Z(r,`LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks`),Z(r,`RIGHT_HAND_LANDMARKS:right_hand_landmarks`),Z(r,`RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks`),r.o(t),Bh(e,r),B_(this,e),this.g.attachProtoListener(`pose_landmarks`,((e,t)=>{fy(e,this.h.poseLandmarks),$(this,t)})),this.g.attachEmptyPacketListener(`pose_landmarks`,(e=>{$(this,e)})),this.g.attachProtoListener(`pose_world_landmarks`,((e,t)=>{var n=this.h.poseWorldLandmarks;e=tg(e),n.push(S_(e)),$(this,t)})),this.g.attachEmptyPacketListener(`pose_world_landmarks`,(e=>{$(this,e)})),this.outputPoseSegmentationMasks&&(Z(r,`POSE_SEGMENTATION_MASK:pose_segmentation_mask`),V_(this,`pose_segmentation_mask`),this.g.Z(`pose_segmentation_mask`,((e,t)=>{this.h.poseSegmentationMasks=[Vv(this,e,!0,!this.D)],$(this,t)})),this.g.attachEmptyPacketListener(`pose_segmentation_mask`,(e=>{this.h.poseSegmentationMasks=[],$(this,e)}))),this.g.attachProtoListener(`face_landmarks`,((e,t)=>{fy(e,this.h.faceLandmarks),$(this,t)})),this.g.attachEmptyPacketListener(`face_landmarks`,(e=>{$(this,e)})),this.outputFaceBlendshapes&&(Hh(e,`extra_blendshapes`),Z(r,`FACE_BLENDSHAPES:extra_blendshapes`),this.g.attachProtoListener(`extra_blendshapes`,((e,t)=>{var n=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(e=Yh(e),n.push(v_(e.g()??[]))),$(this,t)})),this.g.attachEmptyPacketListener(`extra_blendshapes`,(e=>{$(this,e)}))),this.g.attachProtoListener(`left_hand_landmarks`,((e,t)=>{fy(e,this.h.leftHandLandmarks),$(this,t)})),this.g.attachEmptyPacketListener(`left_hand_landmarks`,(e=>{$(this,e)})),this.g.attachProtoListener(`left_hand_world_landmarks`,((e,t)=>{var n=this.h.leftHandWorldLandmarks;e=tg(e),n.push(S_(e)),$(this,t)})),this.g.attachEmptyPacketListener(`left_hand_world_landmarks`,(e=>{$(this,e)})),this.g.attachProtoListener(`right_hand_landmarks`,((e,t)=>{fy(e,this.h.rightHandLandmarks),$(this,t)})),this.g.attachEmptyPacketListener(`right_hand_landmarks`,(e=>{$(this,e)})),this.g.attachProtoListener(`right_hand_world_landmarks`,((e,t)=>{var n=this.h.rightHandWorldLandmarks;e=tg(e),n.push(S_(e)),$(this,t)})),this.g.attachEmptyPacketListener(`right_hand_world_landmarks`,(e=>{$(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};py.prototype.detectForVideo=py.prototype.G,py.prototype.detect=py.prototype.F,py.prototype.setOptions=py.prototype.o,py.createFromModelPath=function(e,t){return Lv(py,e,{baseOptions:{modelAssetPath:t}})},py.createFromModelBuffer=function(e,t){return Lv(py,e,{baseOptions:{modelAssetBuffer:t}})},py.createFromOptions=function(e,t){return Lv(py,e,t)},py.HAND_CONNECTIONS=ny,py.POSE_CONNECTIONS=ly,py.FACE_LANDMARKS_LIPS=Wv,py.FACE_LANDMARKS_LEFT_EYE=Gv,py.FACE_LANDMARKS_LEFT_EYEBROW=Kv,py.FACE_LANDMARKS_LEFT_IRIS=qv,py.FACE_LANDMARKS_RIGHT_EYE=Jv,py.FACE_LANDMARKS_RIGHT_EYEBROW=Yv,py.FACE_LANDMARKS_RIGHT_IRIS=Xv,py.FACE_LANDMARKS_FACE_OVAL=Zv,py.FACE_LANDMARKS_CONTOURS=Qv,py.FACE_LANDMARKS_TESSELATION=$v;var my=class extends Hv{constructor(e,t){super(new Iv(e,t),`input_image`,`norm_rect`,!0),this.j={classifications:[]},J(e=this.h=new Zg,0,1,t=new xg)}get baseOptions(){return $f(this.h,xg,1)}set baseOptions(e){J(this.h,0,1,e)}o(e){return J(this.h,0,2,g_(e,$f(this.h,mg,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},zv(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},Bv(this,e,n,t),this.j}m(){var e=new Uh;Vh(e,`input_image`),Vh(e,`norm_rect`),Hh(e,`classifications`);let t=new Mh;sm(t,Qg,this.h);let n=new Ih;lp(n,2,`mediapipe.tasks.vision.image_classifier.ImageClassifierGraph`),Fh(n,`IMAGE:input_image`),Fh(n,`NORM_RECT:norm_rect`),Z(n,`CLASSIFICATIONS:classifications`),n.o(t),Bh(e,n),this.g.attachProtoListener(`classifications`,((e,t)=>{this.j=y_(cg(e)),$(this,t)})),this.g.attachEmptyPacketListener(`classifications`,(e=>{$(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};my.prototype.classifyForVideo=my.prototype.ta,my.prototype.classify=my.prototype.sa,my.prototype.setOptions=my.prototype.o,my.createFromModelPath=function(e,t){return Lv(my,e,{baseOptions:{modelAssetPath:t}})},my.createFromModelBuffer=function(e,t){return Lv(my,e,{baseOptions:{modelAssetBuffer:t}})},my.createFromOptions=function(e,t){return Lv(my,e,t)};var hy=class extends Hv{constructor(e,t){super(new Iv(e,t),`image_in`,`norm_rect`,!0),this.h=new $g,this.embeddings={embeddings:[]},J(e=this.h,0,1,t=new xg)}get baseOptions(){return $f(this.h,xg,1)}set baseOptions(e){J(this.h,0,1,e)}o(e){var t=this.h,n=$f(this.h,gg,2);return n=n?n.clone():new gg,e.l2Normalize===void 0?`l2Normalize`in e&&Ff(n,1):Ff(n,1,Nd(e.l2Normalize)),e.quantize===void 0?`quantize`in e&&Ff(n,2):Ff(n,2,Nd(e.quantize)),J(t,0,2,n),this.l(e)}za(e,t){return zv(this,e,t),this.embeddings}Aa(e,t,n){return Bv(this,e,n,t),this.embeddings}m(){var e=new Uh;Vh(e,`image_in`),Vh(e,`norm_rect`),Hh(e,`embeddings_out`);let t=new Mh;sm(t,e_,this.h);let n=new Ih;lp(n,2,`mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph`),Fh(n,`IMAGE:image_in`),Fh(n,`NORM_RECT:norm_rect`),Z(n,`EMBEDDINGS:embeddings_out`),n.o(t),Bh(e,n),this.g.attachProtoListener(`embeddings_out`,((e,t)=>{e=pg(e),this.embeddings=function(e){return{embeddings:tp(e,dg,1).map((e=>{let t={headIndex:op(e,3)??0??-1,headName:qd(Nf(e,4))??``??``};var n=e.v;return Qf(n,0|n[q],lg,qf(e,1))===void 0?(n=new Uint8Array,t.quantizedEmbedding=$f(e,ug,qf(e,2),void 0)?.na()?.h()??n):(e=Rf(e=$f(e,lg,qf(e,1),void 0),1,Md,Lf()),t.floatEmbedding=e.slice()),t})),timestampMs:__(Nf(e,2,void 0,void 0,Wd)??jf)}}(e),$(this,t)})),this.g.attachEmptyPacketListener(`embeddings_out`,(e=>{$(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};hy.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=w_(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error(`Cannot compute cosine similarity between quantized and float embeddings.`);e=w_(C_(e.quantizedEmbedding),C_(t.quantizedEmbedding))}return e},hy.prototype.embedForVideo=hy.prototype.Aa,hy.prototype.embed=hy.prototype.za,hy.prototype.setOptions=hy.prototype.o,hy.createFromModelPath=function(e,t){return Lv(hy,e,{baseOptions:{modelAssetPath:t}})},hy.createFromModelBuffer=function(e,t){return Lv(hy,e,{baseOptions:{modelAssetBuffer:t}})},hy.createFromOptions=function(e,t){return Lv(hy,e,t)};var gy=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};function _y(e){let t=function(e){return tp(e,Ih,1)}(e.ca()).filter((e=>(qd(Nf(e,1))??``).includes(`mediapipe.tasks.TensorsToSegmentationCalculator`)));if(e.u=[],t.length>1)throw Error(`The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.`);t.length===1&&($f(t[0],Mh,7)?.j()?.g()??new Map).forEach(((t,n)=>{e.u[Number(n)]=qd(Nf(t,1))??``}))}function vy(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function yy(e){try{let t=new gy(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{H_(e)}}gy.prototype.close=gy.prototype.close;var by=class extends Hv{constructor(e,t){super(new Iv(e,t),`image_in`,`norm_rect`,!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new a_,this.A=new t_,J(this.h,0,3,this.A),J(e=this.h,0,1,t=new xg)}get baseOptions(){return $f(this.h,xg,1)}set baseOptions(e){J(this.h,0,1,e)}o(e){return e.displayNamesLocale===void 0?`displayNamesLocale`in e&&Ff(this.h,2):Ff(this.h,2,Kd(e.displayNamesLocale)),`outputCategoryMask`in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),`outputConfidenceMasks`in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){_y(this)}segment(e,t,n){let r=typeof t==`function`?{}:t;return this.j=typeof t==`function`?t:n,vy(this),zv(this,e,r),yy(this)}La(e,t,n,r){let i=typeof n==`function`?{}:n;return this.j=typeof n==`function`?n:r,vy(this),Bv(this,e,i,t),yy(this)}Da(){return this.u}m(){var e=new Uh;Vh(e,`image_in`),Vh(e,`norm_rect`);let t=new Mh;sm(t,o_,this.h);let n=new Ih;lp(n,2,`mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph`),Fh(n,`IMAGE:image_in`),Fh(n,`NORM_RECT:norm_rect`),n.o(t),Bh(e,n),B_(this,e),this.outputConfidenceMasks&&(Hh(e,`confidence_masks`),Z(n,`CONFIDENCE_MASKS:confidence_masks`),V_(this,`confidence_masks`),this.g.aa(`confidence_masks`,((e,t)=>{this.confidenceMasks=e.map((e=>Vv(this,e,!0,!this.j))),$(this,t)})),this.g.attachEmptyPacketListener(`confidence_masks`,(e=>{this.confidenceMasks=[],$(this,e)}))),this.outputCategoryMask&&(Hh(e,`category_mask`),Z(n,`CATEGORY_MASK:category_mask`),V_(this,`category_mask`),this.g.Z(`category_mask`,((e,t)=>{this.categoryMask=Vv(this,e,!1,!this.j),$(this,t)})),this.g.attachEmptyPacketListener(`category_mask`,(e=>{this.categoryMask=void 0,$(this,e)}))),Hh(e,`quality_scores`),Z(n,`QUALITY_SCORES:quality_scores`),this.g.attachFloatVectorListener(`quality_scores`,((e,t)=>{this.qualityScores=e,$(this,t)})),this.g.attachEmptyPacketListener(`quality_scores`,(e=>{this.categoryMask=void 0,$(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};by.prototype.getLabels=by.prototype.Da,by.prototype.segmentForVideo=by.prototype.La,by.prototype.segment=by.prototype.segment,by.prototype.setOptions=by.prototype.o,by.createFromModelPath=function(e,t){return Lv(by,e,{baseOptions:{modelAssetPath:t}})},by.createFromModelBuffer=function(e,t){return Lv(by,e,{baseOptions:{modelAssetBuffer:t}})},by.createFromOptions=function(e,t){return Lv(by,e,t)};var xy=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};xy.prototype.close=xy.prototype.close;var Sy=class extends Hv{constructor(e,t){super(new Iv(e,t),`image_in`,`norm_rect_in`,!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new a_,this.u=new t_,J(this.h,0,3,this.u),J(e=this.h,0,1,t=new xg)}get baseOptions(){return $f(this.h,xg,1)}set baseOptions(e){J(this.h,0,1,e)}o(e){return`outputCategoryMask`in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),`outputConfidenceMasks`in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,r){let i=typeof n==`function`?{}:n;if(this.j=typeof n==`function`?n:r,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,r=new u_,t.keypoint&&t.scribble)throw Error(`Cannot provide both keypoint and scribble.`);if(t.keypoint){var a=new s_;Gf(a,3,Nd(!0),!1),Gf(a,1,jd(t.keypoint.x),0),Gf(a,2,jd(t.keypoint.y),0),rp(r,1,d_,a)}else{if(!t.scribble)throw Error(`Must provide either a keypoint or a scribble.`);{let e=new l_;for(a of t.scribble)Gf(t=new s_,3,Nd(!0),!1),Gf(t,1,jd(a.x),0),Gf(t,2,jd(a.y),0),ap(e,1,s_,t);rp(r,2,d_,e)}}this.g.addProtoToStream(r.g(),`mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest`,`roi_in`,n),zv(this,e,i);t:{try{let e=new xy(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=e;break t}this.j(e)}finally{H_(this)}o=void 0}return o}m(){var e=new Uh;Vh(e,`image_in`),Vh(e,`roi_in`),Vh(e,`norm_rect_in`);let t=new Mh;sm(t,o_,this.h);let n=new Ih;lp(n,2,`mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2`),Fh(n,`IMAGE:image_in`),Fh(n,`ROI:roi_in`),Fh(n,`NORM_RECT:norm_rect_in`),n.o(t),Bh(e,n),B_(this,e),this.outputConfidenceMasks&&(Hh(e,`confidence_masks`),Z(n,`CONFIDENCE_MASKS:confidence_masks`),V_(this,`confidence_masks`),this.g.aa(`confidence_masks`,((e,t)=>{this.confidenceMasks=e.map((e=>Vv(this,e,!0,!this.j))),$(this,t)})),this.g.attachEmptyPacketListener(`confidence_masks`,(e=>{this.confidenceMasks=[],$(this,e)}))),this.outputCategoryMask&&(Hh(e,`category_mask`),Z(n,`CATEGORY_MASK:category_mask`),V_(this,`category_mask`),this.g.Z(`category_mask`,((e,t)=>{this.categoryMask=Vv(this,e,!1,!this.j),$(this,t)})),this.g.attachEmptyPacketListener(`category_mask`,(e=>{this.categoryMask=void 0,$(this,e)}))),Hh(e,`quality_scores`),Z(n,`QUALITY_SCORES:quality_scores`),this.g.attachFloatVectorListener(`quality_scores`,((e,t)=>{this.qualityScores=e,$(this,t)})),this.g.attachEmptyPacketListener(`quality_scores`,(e=>{this.categoryMask=void 0,$(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Sy.prototype.segment=Sy.prototype.segment,Sy.prototype.setOptions=Sy.prototype.o,Sy.createFromModelPath=function(e,t){return Lv(Sy,e,{baseOptions:{modelAssetPath:t}})},Sy.createFromModelBuffer=function(e,t){return Lv(Sy,e,{baseOptions:{modelAssetBuffer:t}})},Sy.createFromOptions=function(e,t){return Lv(Sy,e,t)};var Cy=class extends Hv{constructor(e,t){super(new Iv(e,t),`input_frame_gpu`,`norm_rect`,!1),this.j={detections:[]},J(e=this.h=new f_,0,1,t=new xg)}get baseOptions(){return $f(this.h,xg,1)}set baseOptions(e){J(this.h,0,1,e)}o(e){return e.displayNamesLocale===void 0?`displayNamesLocale`in e&&Ff(this.h,2):Ff(this.h,2,Kd(e.displayNamesLocale)),e.maxResults===void 0?`maxResults`in e&&Ff(this.h,3):cp(this.h,3,e.maxResults),e.scoreThreshold===void 0?`scoreThreshold`in e&&Ff(this.h,4):Y(this.h,4,e.scoreThreshold),e.categoryAllowlist===void 0?`categoryAllowlist`in e&&Ff(this.h,5):up(this.h,5,e.categoryAllowlist),e.categoryDenylist===void 0?`categoryDenylist`in e&&Ff(this.h,6):up(this.h,6,e.categoryDenylist),this.l(e)}F(e,t){return this.j={detections:[]},zv(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Bv(this,e,n,t),this.j}m(){var e=new Uh;Vh(e,`input_frame_gpu`),Vh(e,`norm_rect`),Hh(e,`detections`);let t=new Mh;sm(t,p_,this.h);let n=new Ih;lp(n,2,`mediapipe.tasks.vision.ObjectDetectorGraph`),Fh(n,`IMAGE:input_frame_gpu`),Fh(n,`NORM_RECT:norm_rect`),Z(n,`DETECTIONS:detections`),n.o(t),Bh(e,n),this.g.attachProtoVectorListener(`detections`,((e,t)=>{for(let t of e)e=$h(t),this.j.detections.push(b_(e));$(this,t)})),this.g.attachEmptyPacketListener(`detections`,(e=>{$(this,e)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Cy.prototype.detectForVideo=Cy.prototype.G,Cy.prototype.detect=Cy.prototype.F,Cy.prototype.setOptions=Cy.prototype.o,Cy.createFromModelPath=async function(e,t){return Lv(Cy,e,{baseOptions:{modelAssetPath:t}})},Cy.createFromModelBuffer=function(e,t){return Lv(Cy,e,{baseOptions:{modelAssetBuffer:t}})},Cy.createFromOptions=function(e,t){return Lv(Cy,e,t)};var wy=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((e=>{e.close()}))}};function Ty(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Ey(e){try{let t=new wy(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{H_(e)}}wy.prototype.close=wy.prototype.close;var Dy=class extends Hv{constructor(e,t){super(new Iv(e,t),`image_in`,`norm_rect`,!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,J(e=this.h=new m_,0,1,t=new xg),this.A=new qg,J(this.h,0,3,this.A),this.j=new Kg,J(this.h,0,2,this.j),cp(this.j,4,1),Y(this.j,2,.5),Y(this.A,2,.5),Y(this.h,4,.5)}get baseOptions(){return $f(this.h,xg,1)}set baseOptions(e){J(this.h,0,1,e)}o(e){return`numPoses`in e&&cp(this.j,4,e.numPoses??1),`minPoseDetectionConfidence`in e&&Y(this.j,2,e.minPoseDetectionConfidence??.5),`minTrackingConfidence`in e&&Y(this.h,4,e.minTrackingConfidence??.5),`minPosePresenceConfidence`in e&&Y(this.A,2,e.minPosePresenceConfidence??.5),`outputSegmentationMasks`in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){let r=typeof t==`function`?{}:t;return this.u=typeof t==`function`?t:n,Ty(this),zv(this,e,r),Ey(this)}G(e,t,n,r){let i=typeof n==`function`?{}:n;return this.u=typeof n==`function`?n:r,Ty(this),Bv(this,e,i,t),Ey(this)}m(){var e=new Uh;Vh(e,`image_in`),Vh(e,`norm_rect`),Hh(e,`normalized_landmarks`),Hh(e,`world_landmarks`),Hh(e,`segmentation_masks`);let t=new Mh;sm(t,h_,this.h);let n=new Ih;lp(n,2,`mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph`),Fh(n,`IMAGE:image_in`),Fh(n,`NORM_RECT:norm_rect`),Z(n,`NORM_LANDMARKS:normalized_landmarks`),Z(n,`WORLD_LANDMARKS:world_landmarks`),n.o(t),Bh(e,n),B_(this,e),this.g.attachProtoVectorListener(`normalized_landmarks`,((e,t)=>{this.landmarks=[];for(let t of e)e=rg(t),this.landmarks.push(x_(e));$(this,t)})),this.g.attachEmptyPacketListener(`normalized_landmarks`,(e=>{this.landmarks=[],$(this,e)})),this.g.attachProtoVectorListener(`world_landmarks`,((e,t)=>{this.worldLandmarks=[];for(let t of e)e=tg(t),this.worldLandmarks.push(S_(e));$(this,t)})),this.g.attachEmptyPacketListener(`world_landmarks`,(e=>{this.worldLandmarks=[],$(this,e)})),this.outputSegmentationMasks&&(Z(n,`SEGMENTATION_MASK:segmentation_masks`),V_(this,`segmentation_masks`),this.g.aa(`segmentation_masks`,((e,t)=>{this.segmentationMasks=e.map((e=>Vv(this,e,!0,!this.u))),$(this,t)})),this.g.attachEmptyPacketListener(`segmentation_masks`,(e=>{this.segmentationMasks=[],$(this,e)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Dy.prototype.detectForVideo=Dy.prototype.G,Dy.prototype.detect=Dy.prototype.F,Dy.prototype.setOptions=Dy.prototype.o,Dy.createFromModelPath=function(e,t){return Lv(Dy,e,{baseOptions:{modelAssetPath:t}})},Dy.createFromModelBuffer=function(e,t){return Lv(Dy,e,{baseOptions:{modelAssetBuffer:t}})},Dy.createFromOptions=function(e,t){return Lv(Dy,e,t)},Dy.POSE_CONNECTIONS=ly;var Oy=class{landmarker=null;lastTs=0;delegate=`GPU`;lastMs=0;get ready(){return!!this.landmarker}async init(){let e=`./mediapipe/`,t=await k_.forVisionTasks(e+`wasm`),n=n=>cy.createFromOptions(t,{baseOptions:{modelAssetPath:e+`hand_landmarker.task`,delegate:n},runningMode:`VIDEO`,numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});try{this.landmarker=await n(`GPU`),this.delegate=`GPU`}catch(e){console.warn(`GPU delegate 失敗，改用 CPU`,e),this.landmarker=await n(`CPU`),this.delegate=`CPU`}}detect(e){if(!this.landmarker)return[];let t=Math.max(performance.now(),this.lastTs+1);this.lastTs=t;let n=performance.now(),r=this.landmarker.detectForVideo(e,t);this.lastMs=performance.now()-n;let i=r.handedness??[];return r.landmarks.map((e,t)=>({side:i[t]?.[0]?.categoryName??`H${t}`,score:i[t]?.[0]?.score??0,points:e}))}},ky=30,Ay=class{host;cfg;audio;clay=new A(128);renderer;overlay;touch;recognizer=new re;tracker=null;camera=null;env;layers=[];jarLabels=[];tag1000;handStatus;video;observer;raf=0;lastT=performance.now()/1e3;lastTrack=0;lastHandSeen=0;frame=0;gesturesOn=!1;lastNote=``;locked=!1;onNote=null;constructor(e,t,n){this.host=e,this.cfg=t,this.audio=n;let r=document.createElement(`canvas`);r.className=`terrain-canvas board-gl`;let i=document.createElement(`canvas`);i.className=`terrain-canvas board-overlay`,i.setAttribute(`aria-label`,`土盤：在黏土上用工具捏，在土盤外拖曳旋轉，兩指縮放`),this.tag1000=this.el(`div`,`tag1000 hidden`,`1000m`),this.handStatus=this.el(`div`,`hand-status hidden`,``),this.video=document.createElement(`video`),this.video.className=`board-video hidden`,this.video.playsInline=!0,this.video.muted=!0,this.video.autoplay=!0;for(let e=0;e<2;e++)this.jarLabels.push(this.el(`div`,`jar-label`,`黏土 100%`));let a=e.querySelector(`.surface-texture`)?.nextSibling??e.firstChild;for(let t of[r,i,this.tag1000,...this.jarLabels,this.handStatus,this.video])e.insertBefore(t,a),this.layers.push(t);this.renderer=new Ml(r,128,t),this.overlay=new V(i),this.env={toUV:e=>this.renderer.screenToUV(e,this.clay),jarAt:e=>this.renderer.jarAt(e),hasClay:()=>this.clay.budget>1e-5,screenH:1},Object.defineProperty(this.env,"screenH",{get:()=>this.host.clientHeight||1}),this.touch=new ie(i,this.env,this.renderer),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize(),requestAnimationFrame(()=>this.resize()),this.raf=requestAnimationFrame(e=>this.loop(e))}el(e,t,n){let r=document.createElement(e);return r.className=t,r.textContent=n,r}resize(){let e=this.host.clientWidth,t=this.host.clientHeight;e&&t&&(this.renderer.resize(e,t,this.insets()),this.overlay.resize(e,t))}insets(){let e=this.host.getBoundingClientRect(),t=e=>this.host.querySelector(e)?.getBoundingClientRect()??null,n=t(`.tools`),r=t(`.altitude`),i=n?n.width>n.height:!1;return{top:28,bottom:i&&n?e.bottom-n.top+10:t(`.scene-bottom`)?e.bottom-t(`.scene-bottom`).top:10,left:!i&&n?n.right-e.left+10:10,right:r?e.right-r.left+10:10}}load(e){this.touch.cancel(),this.clay.reset(e,this.cfg.maxElevation),this.renderer.resetView()}setTool(e){this.touch.tool=e}setView(e){e===`orbit`?this.renderer.resetView():e===`top`?this.renderer.setTilt(89.9):this.renderer.setTilt(14)}setContours(e){this.renderer.setContours(e)}undo(){return this.clay.undo()}check(e){let t=de(this.clay.h,this.clay.n,e,this.cfg);return this.clay.mask.set(t.problemMask),this.clay.version++,t}clearMask(){this.clay.clearMask()}heights(){return this.clay.h.slice()}async enableGestures(){if(!this.gesturesOn&&(this.camera??=new C(this.video),await this.camera.start(`user`),this.video.classList.remove(`hidden`),this.gesturesOn=!0,!this.tracker)){this.tracker=new Oy,this.status(`手部追蹤載入中…`);try{await this.tracker.init(),this.status(``),m(`準備好了！把手舉到前鏡頭前面`)}catch(e){console.error(e),this.tracker=null,this.disableGestures(),m(`手部追蹤載入失敗，請用手指操作`)}}}disableGestures(){this.gesturesOn=!1,this.camera?.stop(),this.video.classList.add(`hidden`),this.status(``)}get gesturesEnabled(){return this.gesturesOn}status(e){this.handStatus.textContent=e,this.handStatus.classList.toggle(`hidden`,!e)}destroy(){cancelAnimationFrame(this.raf),this.observer.disconnect(),this.disableGestures(),this.touch.cancel(),this.renderer.dispose();for(let e of this.layers)e.remove()}apply(e,t){if(!this.locked){for(let t of e)this.clay.apply(t);for(let e of t)e===`grab`?this.audio.play(`grab`):e===`drop`?this.audio.play(`drop`):e===`cancel`?m(`把黏土拖到土盤上再放開`):e===`empty`&&(this.audio.play(`empty`),m(`黏土罐空了！可以按「復原」拿回來`))}}loop(e){this.raf=requestAnimationFrame(e=>this.loop(e));let t=e/1e3,n=Math.min(.1,t-this.lastT);if(this.lastT=t,this.frame++,this.locked&&this.touch.cancel(),this.gesturesOn&&this.tracker?.ready&&this.camera?.active&&e-this.lastTrack>=ky){this.lastTrack=e;let n=this.tracker.detect(this.camera.video),r=new Map,i=this.host.clientWidth,a=this.host.clientHeight,o=n.map(e=>{let t=r.get(e.side)??0;return r.set(e.side,t+1),{key:t?`${e.side}${t}`:e.side,points:e.points.map(e=>this.camera.toScreen(e.x,e.y,i,a))}});o.length&&(this.lastHandSeen=t);let s=this.recognizer.update(o,t,this.env);this.apply(s.commands,s.events),t-this.lastHandSeen>4&&!this.touch.active?this.status(`把手舉到前鏡頭前面，看角落的小畫面`):this.handStatus.textContent!==`手部追蹤載入中…`&&this.status(``)}let r=this.touch.update(n);this.apply(r.commands,r.events);let i=this.clay.budgetMax?this.clay.budget/this.clay.budgetMax:0;this.renderer.update(this.clay,t,i),this.renderer.render(),this.overlay.draw(this.gesturesOn?this.recognizer.views:[],{pos:this.touch.pos,tool:this.touch.tool,carrying:this.touch.carrying},!1),this.frame%6==0&&this.updateLabels(i)}updateLabels(e){let t=Math.round(e*100);if([`left`,`right`].forEach((e,n)=>{let r=this.jarLabels[n],i=this.renderer.jarLabelPoint(e);r.style.left=`${i.x}px`,r.style.top=`${i.y}px`,r.textContent=`黏土 ${t}%`}),this.onNote&&this.touch.pos){let e=this.env.toUV(this.touch.pos),t=e?`目前高度約 ${Math.round(this.clay.heightAt(e.u,e.v)*this.cfg.maxElevation/10)*10} m`:``;t&&t!==this.lastNote&&(this.lastNote=t,this.onNote(t))}let{n,h:r}=this.clay,i=this.cfg.contour.highlight/this.cfg.maxElevation,a=40/this.cfg.maxElevation,o=-1,s=-1/0;for(let e=2;e<n-2;e+=2)for(let t=2;t<n-2;t+=2){let c=e*n+t;if(Math.abs(r[c]-i)>=a)continue;let l=this.renderer.boardPoint(t/(n-1),e/(n-1),this.clay);l.y>s&&(s=l.y,o=c)}if(o<0){this.tag1000.classList.add(`hidden`);return}let c=this.renderer.boardPoint(o%n/(n-1),Math.floor(o/n)/(n-1),this.clay);this.tag1000.style.left=`${c.x}px`,this.tag1000.style.top=`${c.y}px`,this.tag1000.classList.remove(`hidden`)}},jy=[[`drop`,`plus`,`放黏土`],[`raise`,`up`,`拉高`],[`press`,`flat`,`壓平`],[`smooth`,`smooth`,`抹平`],[`rotate`,`rotate`,`轉動`]],My={plain:`press`,tableland:`smooth`,hills:`drop`,mountain:`drop`,basin:`press`,profile:`drop`};function Ny(e,t){return`<div class="mission brief">
    <div class="mission-label">${b(`target`)}${t?`你的測驗任務`:`今天的小任務`}</div>
    <p>${u(e.intro)}</p>
    <div class="rule-line"></div>
    <span class="target-label">觀察這兩個特徵</span>
    <div class="target-list">${e.targets.map(e=>`<div class="target-item">${b(`check`)}<span>${u(e)}</span></div>`).join(``)}</div>
    <div class="tip">${b(`bulb`)}<span>${u(e.tip)}</span></div>
  </div>`}function Py(e,t){return g(`捏出「${e.title}」`,Ny(e,t),[{label:t?`開始捏（倒數已經開始）`:`開始捏！`,primary:!0,value:`ok`}])}function Fy(e,t,n){let r=[...t.ramp].reverse(),i=t.ramp.map((e,n)=>`${e.color} ${Math.round(n/(t.ramp.length-1)*100)}%`).join(`,`);return`<div class="task-bar">
    <div class="task-bar-main"><span class="task-bar-label">${b(`target`)}${n.exam?`測驗任務`:`小任務`}</span><strong>捏出「${u(e.title)}」</strong><span class="task-bar-targets">${e.targets.map(e=>`<span>${b(`check`)}${u(e)}</span>`).join(``)}</span></div>
    <div class="task-bar-actions"><button class="secondary" data-act="brief">${b(`book`)}任務說明</button>${n.actionsHtml}</div>
  </div>
<div class="workspace solo">
  <section class="playground" aria-label="可操作地形土盤">
    <div class="surface-texture"></div>
    <div class="scene-top"><span class="scene-label">你的地形工作臺</span><label class="toggle-label"><input type="checkbox" checked data-act="contours">顯示等高線</label></div>
    <div class="tools" role="toolbar" aria-label="黏土工具">${jy.map(([e,t,n])=>`<button class="tool" data-tool="${e}" aria-pressed="false" title="${n}">${b(t)}${n}</button>`).join(``)}</div>
    <div class="altitude" aria-label="海拔圖例"><div class="altitude-labels">${r.map(e=>`<span class="${e.m===t.contour.highlight?`hi`:``}">${e.m} m</span>`).join(``)}</div><div class="altitude-bar" style="background:linear-gradient(to top,${i})"></div></div>
    <span class="canvas-note" data-role="note">${n.exam?`開始捏出你的地形`:`從黏土罐拖一團黏土到土盤上試試`}</span>
    <div class="scene-bottom"><div class="view-buttons">${[[`top`,`俯視`],[`side`,`側看`],[`orbit`,`還原`]].map(([e,t])=>`<button data-view="${e}" class="${e===`orbit`?`active`:``}">${t}</button>`).join(``)}</div><span class="scene-hint">${b(`hand`)}土盤外拖曳旋轉 · 雙指縮放</span><div class="scene-actions"><button class="secondary icon-btn" data-act="undo" title="復原" aria-label="復原上一步">${b(`undo`)}</button><button class="secondary icon-btn" data-act="reset" title="重新捏塑" aria-label="重新捏塑">${b(`rotate`)}</button></div></div>
  </section>
</div>`}var Iy=class{root;board;idleNote;constructor(e,t,n,r,i=!1,a=!0){this.root=e;let o=e.querySelector(`.playground`);this.board=new Ay(o,t,n);let s=e.querySelector(`[data-role=note]`);this.idleNote=s.textContent??``,this.board.onNote=e=>s.textContent=e,e.querySelectorAll(`[data-tool]`).forEach(e=>e.addEventListener(`click`,()=>{this.setTool(e.dataset.tool),n.play(`click`)})),e.querySelectorAll(`[data-view]`).forEach(t=>t.addEventListener(`click`,()=>{this.board.setView(t.dataset.view),e.querySelectorAll(`[data-view]`).forEach(e=>e.classList.toggle(`active`,e===t))})),e.querySelector(`[data-act=contours]`).addEventListener(`change`,e=>this.board.setContours(e.target.checked)),e.querySelector(`[data-act=undo]`).addEventListener(`click`,()=>{this.board.undo()?m(`已復原上一步`):m(`沒有可以復原的步驟`)}),e.querySelector(`[data-act=reset]`).addEventListener(`click`,async()=>{await g(`重新開始捏塑？`,`<p>土盤會恢復到這一關一開始的樣子，黏土罐也會裝滿。</p>`,[{label:`保留地形`,value:`keep`},{label:`重新開始`,primary:!0,value:`reset`}])===`reset`&&(this.load(this.level),m(`重新開始這一關`))}),this.level=r,this.load(r),e.querySelector(`[data-act=brief]`).addEventListener(`click`,()=>void Py(this.level,i)),a&&Py(r,i)}level;load(e){this.level=e,this.board.load(e),this.setTool(My[e.id]??`drop`);let t=this.root.querySelector(`[data-role=note]`);t&&(t.textContent=this.idleNote)}setTool(e){this.board.setTool(e),this.root.querySelectorAll(`[data-tool]`).forEach(t=>{let n=t.dataset.tool===e;t.classList.toggle(`active`,n),t.setAttribute(`aria-pressed`,String(n))})}destroy(){this.board.destroy()}},Ly=`clay-terrain-progress`;function Ry(){try{return JSON.parse(localStorage.getItem(Ly)??`{}`)}catch{return{}}}function zy(e){try{localStorage.setItem(Ly,JSON.stringify(e))}catch{}}var By=class{ctx;wb=null;index;progress=Ry();root;constructor(e){this.ctx=e;let t=Number(e.params.get(`level`));this.index=t>=1&&t<=e.levels.length?t-1:0}get level(){return this.ctx.levels[this.index]}mount(e){this.root=e,e.innerHTML=`<div class="title-row"><div><div class="eyebrow">LET’S GET OUR HANDS DIRTY</div><h1>把地形，捏在手心裡。</h1><p>一點黏土、一點想像，認識臺灣的每一種地形。</p></div><span class="badge">${b(`leaf`)}自由練習 · 不限時間</span></div>
<nav class="levels" aria-label="選擇地形">${this.ctx.levels.map((e,t)=>`<button class="level" data-level="${t}">${S(e.target)}<span><span class="num">0${t+1}</span><strong>${u(e.title)}</strong></span><span class="done" data-done="${u(e.id)}"></span></button>`).join(``)}</nav>
<div data-role="bench"></div>
<div class="underbar"><span>${b(`leaf`)}每一次揉捏，都是一個新發現。</span><button data-act="gesture">${b(`camera`)}<span>試試手勢操作</span></button></div>
<div class="learn-strip"><div class="learn-icon">${b(`book`)}</div><div><h3>地圖上的線條，藏著什麼祕密？</h3><p>等高線越密，坡度越陡；不同顏色，標示不同高度。</p></div><button data-act="contour-help">認識等高線${b(`arrow`)}</button></div>
<footer class="page-footer"><span>用雙手探索，讓知識成形。</span><span>臺灣的地形 · 社會學習工作室</span></footer>`,e.querySelectorAll(`[data-level]`).forEach(e=>e.addEventListener(`click`,()=>this.setLevel(Number(e.dataset.level)))),e.querySelector(`[data-act=gesture]`).addEventListener(`click`,()=>this.toggleGestures()),e.querySelector(`[data-act=contour-help]`).addEventListener(`click`,()=>Vy()),this.renderBench()}renderBench(){this.wb?.destroy();let e=this.root.querySelector(`[data-role=bench]`);e.innerHTML=Fy(this.level,this.ctx.cfg,{exam:!1,actionsHtml:`<button class="primary" data-act="check">${b(`check`)}檢查我的地形</button>`}),this.wb=new Iy(e,this.ctx.cfg,this.ctx.audio,this.level,!1,!1),e.querySelector(`[data-act=check]`).addEventListener(`click`,()=>this.check()),this.root.querySelectorAll(`[data-level]`).forEach(e=>{let t=Number(e.dataset.level)===this.index;e.classList.toggle(`active`,t),e.setAttribute(`aria-pressed`,String(t))}),this.root.querySelectorAll(`[data-done]`).forEach(e=>{let t=this.progress[e.dataset.done]??0;e.textContent=t?`★`.repeat(t):``,e.title=t?`最佳 ${t} 顆星`:``}),this.syncGestureButton()}setLevel(e){if(e===this.index)return;let t=this.wb?.board.gesturesEnabled;this.index=e,this.ctx.audio.play(`click`),this.renderBench(),t&&this.wb.board.enableGestures()}async check(){let e=this.wb,t=this.level,n=e.board.check(t.target);if(this.ctx.audio.play(n.passed?`pass`:`fail`),n.passed){this.progress[t.id]=Math.max(this.progress[t.id]??0,n.stars),zy(this.progress),this.renderDone(),this.ctx.audio.speak(`太棒了！你捏出了${t.title}`);let e=(this.index+1)%this.ctx.levels.length;await g(`捏得很棒！認識真正的${t.title}`,`<div class="stars result-stars">${f(n.stars,3)}</div><p><strong>臺灣的例子：${u(t.reveal.name)}</strong><br>${u(t.reveal.fact)}</p><p class="small-note">分數 ${n.score}</p>`,[{label:`繼續練習`,value:`stay`},{label:`挑戰下一種地形 →`,primary:!0,value:`next`}])===`next`&&this.setLevel(e)}else this.ctx.audio.speak(n.hints[0]??`再試試看`),await g(`再捏一下，就更接近了`,`<ul class="hint-list">${n.hints.map(e=>`<li>${u(e)}</li>`).join(``)}</ul><p class="small-note">分數 ${n.score} · 土盤上閃紅色的地方需要再調整</p>`)}renderDone(){this.root.querySelectorAll(`[data-done]`).forEach(e=>{let t=this.progress[e.dataset.done]??0;e.textContent=t?`★`.repeat(t):``})}async toggleGestures(){let e=this.wb.board;if(e.gesturesEnabled){e.disableGestures(),this.syncGestureButton();return}if(await g(`用手勢捏地形`,`<p>會開啟 iPad 的前鏡頭，鏡頭畫面只顯示在土盤角落的小預覽，不會存檔也不會上傳。</p><p>✊ 在黏土罐上握拳抓黏土，移到土盤上張開手放下<br>🤏 拇指和食指捏住往上拉，可以拉高<br>✋ 張開手掌停住是壓平，來回抹是抹平</p>`,[{label:`先不要`,value:`no`},{label:`開啟前鏡頭`,primary:!0,value:`yes`}])===`yes`){this.ctx.audio.unlock();try{await e.enableGestures()}catch(e){let t=e;m(t.message===`insecure`?`要用 https 網址開啟才能使用鏡頭`:t.name===`NotAllowedError`?`鏡頭被拒絕了，可以到「設定 → Safari → 相機」改成允許`:`打不開鏡頭，先用手指操作吧`,4e3)}this.syncGestureButton()}}syncGestureButton(){let e=this.root.querySelector(`[data-act=gesture] span`);e&&(e.textContent=this.wb?.board.gesturesEnabled?`關閉手勢操作`:`試試手勢操作`)}unmount(){this.wb?.destroy(),this.wb=null}};function Vy(){g(`讀懂等高線`,`<p>等高線把高度相同的地方連在一起。線條越密，坡度越陡；越疏，坡度越和緩。</p><p>每 100 公尺一條細線，每 500 公尺一條粗線。1000 公尺用紅線標示，幫助你分辨丘陵和山地：超過紅線就是山地。</p>`)}var Hy=new URLSearchParams(location.search||location.hash.slice(1)),Uy=[`localhost`,`127.0.0.1`].includes(location.hostname)?`http://localhost:3000`:`https://hspssso-portal.vercel.app`,Wy=null;function Gy(){return Wy??=(async()=>{let e=await Il(()=>import(`${Uy}/sso-client.js`),[]);return await e.ready,e})(),Wy}async function Ky(){return(await Gy()).getProfile()}async function qy(e=location.href){(await Gy()).login(e)}async function Jy(){await(await Gy()).logout()}async function Yy(){let e=(await Gy()).getUser();if(!e)throw Error(`not_logged_in`);return e.getIdToken()}async function Xy(){let e=(await Gy()).getCallbackResult();return e&&!e.ok?e.error??`login_failed`:null}var Zy=`https://topography-api.tyctc128.workers.dev`,Qy=class extends Error{status;code;constructor(e,t){super(t),this.status=e,this.code=t}};async function $y(e,t,n){let r;try{r=await fetch(Zy+t,{method:e,headers:{Authorization:`Bearer ${await Yy()}`,...n===void 0?{}:{"Content-Type":`application/json`}},body:n===void 0?void 0:JSON.stringify(n)})}catch(e){throw e.message===`not_logged_in`?new Qy(401,`not_logged_in`):new Qy(0,`network`)}if(!r.ok){let e=await r.json().catch(()=>({}));throw new Qy(r.status,e.error??`http_${r.status}`)}return r}var eb={get:async e=>(await $y(`GET`,e)).json(),post:async(e,t={})=>(await $y(`POST`,e,t)).json(),put:async(e,t)=>(await $y(`PUT`,e,t)).json(),del:async e=>(await $y(`DELETE`,e)).json(),blob:async e=>(await $y(`GET`,e)).blob()};function tb(e){let t=e instanceof Qy?e.code:`network`;return{network:`連不上伺服器，請檢查網路後再試一次`,not_logged_in:`請先用學校帳號登入`,invalid_token:`登入已過期，請重新登入`,not_in_roster:`老師還沒把你加入這個班級`,quiz_not_open:`這份測驗目前沒有開放`,quiz_closed:`老師已經關閉這份測驗了`,time_up:`這一題的時間已經到了`,no_checks_left:`這一題的檢查已經用過了`,too_much_clay:`黏土的量不對，請重新捏一次`,teacher_only:`只有老師帳號可以使用`,close_first:`請先關閉測驗，再進行結算`,need_questions:`題庫至少要有 2 題選擇題才能發布`,bad_roster:`名單格式不對：每一列要有座號、帳號、姓名`,duplicate_roster:`名單裡有重複的座號或帳號`,bad_questions:`題目格式不對：每題要有題目、4 個選項和正確答案`,no_previous_teams:`找不到上一次的分組`,already_settled:`這份測驗已經結算，分組不能再改`}[t]??`發生錯誤（${t}），請再試一次`}async function nb(e,t){let n=new Blob([e]).stream().pipeThrough(t);return new Uint8Array(await new Response(n).arrayBuffer())}function rb(e){let t=``;for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t)}function ib(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}async function ab(e){let t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=Math.round(Math.min(1,Math.max(0,e[n]))*65535);return rb(await nb(new Uint8Array(t.buffer),new CompressionStream(`gzip`)))}function ob(e,t){let n=ib(e),r=new Uint8Array(t);for(let e=0;e<t;e++)r[e]=n[e>>3]>>(e&7)&1;return r}var sb=e=>e?new Date(e).toLocaleDateString(`zh-TW`,{year:`numeric`,month:`2-digit`,day:`2-digit`}):``,cb=class{ctx;main;me=null;attempt=null;item=null;wb=null;timer=0;deadline=0;lastSecond=-1;busy=!1;starting=!1;selected=null;alive=!0;constructor(e){this.ctx=e}mount(e){this.main=e,this.boot()}unmount(){this.alive=!1,this.stopTimer(),this.wb?.destroy(),this.wb=null}async canLeave(){return!this.attempt||!this.item||await g(`離開這次挑戰？`,`<p>離開後這次作答會直接結算，還沒作答的題目算錯。之後可以再挑戰一次，成績取最高分。</p>`,[{label:`繼續作答`,value:`stay`},{label:`離開測驗`,primary:!0,value:`leave`}])===`leave`&&(this.stopTimer(),await eb.post(`/api/attempts/${this.attempt.attemptId}/finish`).catch(()=>void 0),this.attempt=null,this.item=null,!0)}header(e,t,n,r=``){return`<div class="title-row"><div><div class="eyebrow">${e}</div><h1>${t}</h1><p>${n}</p></div>${r}</div>`}async boot(){this.main.innerHTML=`${this.header(`A LITTLE CHALLENGE, A BIG DISCOVERY`,`和全班一起，挑戰地形！`,`每一次挑戰，都是一次進步。`)}<section class="card login-card"><div class="login-icon">${b(`lock`)}</div><h2>正在確認學校身分…</h2></section>`;let e=null,t=null;try{e=await Xy(),t=await Ky()}catch{e=`sso_unavailable`}if(this.alive){if(!t)return this.renderLogin(e);try{this.me=await eb.get(`/api/me`)}catch(e){return this.renderError(e)}if(this.ctx.setUser({name:this.me.name,detail:this.me.no?`${String(this.me.no).padStart(2,`0`)} 號`:void 0}),!this.me.inRoster&&this.me.role!==`admin`)return this.renderNoRoster();await this.loadList()}}renderLogin(e){this.main.innerHTML=`${this.header(`A LITTLE CHALLENGE, A BIG DISCOVERY`,`和全班一起，挑戰地形！`,`每一次挑戰，都是一次進步。`)}
<section class="card login-card"><div class="login-icon">${b(`trophy`)}</div><h2>準備好收集星星了嗎？</h2><p>用學校帳號登入，就能看到老師發布的測驗。<br>5 道小挑戰，最高可以得到 5 顆星！</p><div class="stars" style="font-size:27px;margin:23px 0">☆ ☆ ☆ ☆ ☆</div>
${e?`<p class="form-error">${e===`sso_unavailable`?`學校登入系統暫時連不上，請稍後再試。`:`登入沒有成功，請再試一次。`}</p>`:``}
<button class="primary" data-act="login">${b(`lock`)}用學校帳號登入</button><p style="font-size:12px">只會用到你的學號、姓名和座號。</p><button class="secondary" data-act="practice">先去自由練習</button></section>`,this.main.querySelector(`[data-act=login]`).addEventListener(`click`,()=>{let e=new URL(location.href);e.searchParams.set(`view`,`quiz`),qy(e.toString())}),this.main.querySelector(`[data-act=practice]`).addEventListener(`click`,()=>this.ctx.nav(`practice`))}renderNoRoster(){this.main.innerHTML=`${this.header(`ALMOST THERE`,`老師還沒把你加入這個班級`,`請告訴老師你的學號，老師加入名單後就能作答。`)}
<section class="card login-card"><div class="login-icon">${b(`users`)}</div><h2>${u(this.me.name)}（${u(this.me.uid)}）</h2><p>你已經登入，但不在這個班級的名單上。</p><button class="primary" data-act="practice">先去自由練習</button><button class="secondary" data-act="relogin">換一個帳號登入</button></section>`,this.main.querySelector(`[data-act=practice]`).addEventListener(`click`,()=>this.ctx.nav(`practice`)),this.main.querySelector(`[data-act=relogin]`).addEventListener(`click`,()=>this.relogin())}async relogin(){await Jy();let e=new URL(location.href);e.searchParams.set(`view`,`quiz`),await qy(e.toString())}renderError(e){let t=e instanceof Qy&&e.status===401;this.main.innerHTML=`${this.header(`OOPS`,`暫時連不上測驗`,u(tb(e)))}<section class="card login-card"><div class="login-icon">${b(`clock`)}</div><h2>${u(tb(e))}</h2><button class="primary" data-act="retry">${t?`重新登入`:`再試一次`}</button><button class="secondary" data-act="practice">先去自由練習</button></section>`,this.main.querySelector(`[data-act=retry]`).addEventListener(`click`,()=>t?void this.relogin():void this.boot()),this.main.querySelector(`[data-act=practice]`).addEventListener(`click`,()=>this.ctx.nav(`practice`))}async loadList(){this.attempt=null,this.item=null,this.wb?.destroy(),this.wb=null;let e;try{e=await eb.get(`/api/quizzes`)}catch(e){return this.renderError(e)}if(!this.alive)return;let t=this.me,n=t.name.slice(-2)||t.uid,r=e.filter(e=>e.isNew).length;this.main.innerHTML=`${this.header(`YOUR NEXT ADVENTURE`,`${u(n)}，來挑戰看看吧！`,`${t.no?`${String(t.no).padStart(2,`0`)} 號 · `:``}取最高星數，每次挑戰都算數。`,`<button class="badge" data-act="logout">${b(`logout`)}登出</button>`)}
${r?`<div class="new-banner">${b(`trophy`)}<span>老師發布了 <strong>${r}</strong> 份新測驗！</span></div>`:``}
${e.length?`<div class="cards-grid">${e.map(e=>this.cardHtml(e)).join(``)}</div>`:`<section class="card empty"><div class="login-icon">${b(`leaf`)}</div><h2>老師還沒發布新測驗</h2><p>先去練習捏地形吧！</p><button class="primary" data-act="practice">去自由練習</button></section>`}`,this.main.querySelector(`[data-act=logout]`).addEventListener(`click`,async()=>{await Jy(),this.ctx.setUser(null),this.renderLogin(null)}),this.main.querySelector(`[data-act=practice]`)?.addEventListener(`click`,()=>this.ctx.nav(`practice`)),this.main.querySelectorAll(`[data-start]`).forEach(e=>e.addEventListener(`click`,()=>void this.start(e.dataset.start)))}cardHtml(e){let t=e.status===`published`,n=t?e.activeAttempt?`<span class="pill gold">作答中</span>`:e.isNew?`<span class="pill gold">新測驗</span>`:`<span class="pill">進行中</span>`:`<span class="pill gray">${e.status===`settled`?`已關閉 · 已結算`:`已關閉`}</span>`,r=e.activeAttempt?`繼續作答`:e.attempts?`再挑戰一次`:`開始挑戰`;return`<section class="card"><div class="card-row">${n}<span class="card-date">${sb(e.publishedAt??e.createdAt)}</span></div>
<h2>${u(e.title)}</h2><p>捏地形 3 題 ＋ 概念題 2 題<br>地形每題 60 秒 · 概念每題 30 秒</p><div class="rule-line"></div>
<div class="card-row"><span class="card-meta">${t?`目前最佳紀錄`:`最終成績`}${e.attempts?` · 已挑戰 ${e.attempts} 次`:``}</span><strong class="stars">${f(e.best)}</strong></div>
${t?`<button class="primary" data-start="${u(e.id)}">${r} ${b(`arrow`)}</button>`:`<button class="secondary" disabled>測驗已關閉 ${b(`lock`)}</button>`}</section>`}async start(e){if(!this.starting){this.starting=!0,this.main.querySelectorAll(`[data-start]`).forEach(e=>e.disabled=!0),this.ctx.audio.unlock();try{try{this.attempt=await eb.post(`/api/quizzes/${e}/attempts`)}catch(e){m(tb(e),4e3),await this.loadList();return}await this.nextItem()}finally{this.starting=!1}}}async nextItem(){let e=this.attempt;if(e.next>=e.total)return this.finish();let t;try{t=await eb.post(`/api/attempts/${e.attemptId}/items/${e.next}/open`)}catch(e){return this.onAttemptError(e)}this.alive&&(this.item=t,this.selected=null,this.busy=!1,t.kind===`terrain`?this.renderTerrain(t):this.renderChoice(t),this.startTimer(t.remainingMs))}stepTrack(){let e=this.attempt;return`<div class="step-track" aria-label="第 ${e.next+1} 題，共 ${e.total} 題">${Array.from({length:e.total},(t,n)=>`<span class="${n<=e.next?`current`:``}"></span>`).join(``)}</div>`}timerHtml(e){return`<div class="timer" data-role="timer" role="timer" aria-live="off">${Math.ceil(e/1e3)} 秒</div>`}renderTerrain(e){this.wb?.destroy();let t=this.ctx.levels.find(t=>t.id===e.levelId),n=this.attempt.next;this.main.innerHTML=`${this.header(`CLASS CHALLENGE`,`第 ${n+1} 題 · 捏出${u(e.title)}`,`仔細觀察地形特徵，完成後記得提交答案。`,this.timerHtml(e.remainingMs))}
<div class="step-row">${this.stepTrack()}</div>
<div data-role="bench">${Fy(t,this.ctx.cfg,{exam:!0,actionsHtml:`<button class="secondary" data-act="check" ${e.checksLeft<1?`disabled`:``}>${b(`check`)}${e.checksLeft<1?`已使用檢查`:`檢查 · 剩 1 次`}</button><button class="primary" data-act="submit">提交這一題 ${b(`arrow`)}</button>`})}</div>
<div class="underbar"><span>${b(`clock`)}每題獨立計時，時間到會自動提交。「檢查」會給提示，完成後仍要按「提交」。</span></div>`;let r=this.main.querySelector(`[data-role=bench]`);this.wb=new Iy(r,this.ctx.cfg,this.ctx.audio,t,!0,!0),r.querySelector(`[data-act=check]`).addEventListener(`click`,()=>void this.check()),r.querySelector(`[data-act=submit]`).addEventListener(`click`,()=>void this.submit(!1)),window.scrollTo(0,0)}renderChoice(e){this.wb?.destroy(),this.wb=null;let t=this.attempt.next;this.main.innerHTML=`<div class="exam-layout">${this.header(`CLASS CHALLENGE`,`第 ${t+1} 題 · 地形小知識`,`選出你認為最適合的答案。`,this.timerHtml(e.remainingMs))}
${this.stepTrack()}
<section class="question-card"><span class="pill">概念選擇題</span><h2>${u(e.stem)}</h2><div class="options">${e.options.map((e,t)=>`<button class="option" data-opt="${t}" aria-pressed="false"><b>${String.fromCharCode(65+t)}</b>${u(e)}</button>`).join(``)}</div><button class="primary" data-act="submit" disabled>確定答案 ${b(`arrow`)}</button><p class="small-note" style="text-align:left;margin-top:18px">送出後就不能修改了，想好再按喔。</p></section></div>`,this.main.querySelectorAll(`[data-opt]`).forEach(e=>e.addEventListener(`click`,()=>{this.busy||(this.selected=Number(e.dataset.opt),this.main.querySelectorAll(`[data-opt]`).forEach(t=>{let n=t===e;t.classList.toggle(`selected`,n),t.setAttribute(`aria-pressed`,String(n))}),this.main.querySelector(`[data-act=submit]`).disabled=!1)})),this.main.querySelector(`[data-act=submit]`).addEventListener(`click`,()=>void this.submit(!1)),window.scrollTo(0,0)}startTimer(e){this.stopTimer(),this.deadline=performance.now()+e,this.lastSecond=-1;let t=()=>{let e=Math.max(0,Math.ceil((this.deadline-performance.now())/1e3)),t=this.main.querySelector(`[data-role=timer]`);t&&(t.textContent=`${e} 秒`,t.classList.toggle(`urgent`,e<=10)),e!==this.lastSecond&&e<=10&&(e===0?this.ctx.audio.beep(330,.6):this.ctx.audio.beep(e<=3?990:760,.08)),this.lastSecond=e,e===0&&(this.stopTimer(),v()&&_(),m(`時間到，這一題已自動提交。`),this.submit(!0))};t(),this.timer=window.setInterval(t,200)}stopTimer(){clearInterval(this.timer),this.timer=0}async check(){let e=this.item;if(!e||e.kind!==`terrain`||e.checksLeft<1||this.busy)return;let t=this.main.querySelector(`[data-act=check]`);t.disabled=!0,e.checksLeft=0;try{let n=await eb.post(`/api/attempts/${this.attempt.attemptId}/items/${e.idx}/check`,{terrain:await ab(this.wb.board.heights())});t.innerHTML=`${b(`check`)}已使用檢查`;let r=this.wb.board;r.clay.mask.set(ob(n.mask,r.clay.mask.length)),r.clay.version++,this.ctx.audio.play(n.passed?`pass`:`fail`),g(n.passed?`方向很棒，記得按提交！`:`再觀察一下地形`,n.passed?`<p>目前的地形符合條件了。倒數還在繼續，完成後請按「提交這一題」。</p>`:`<ul class="hint-list">${n.hints.map(e=>`<li>${u(e)}</li>`).join(``)}</ul><p class="small-note">土盤上閃紅色的地方需要再調整。倒數還在繼續喔！</p>`,[{label:`繼續捏`,primary:!0,value:`ok`}])}catch(e){if(m(tb(e),4e3),e instanceof Qy&&e.code!==`no_checks_left`)return this.onAttemptError(e)}}async submit(e){let t=this.item,n=this.attempt;if(t&&n&&!this.busy&&(e||t.kind!==`mc`||this.selected!==null)){this.busy=!0,this.stopTimer(),this.wb&&(this.wb.board.locked=!0),this.main.querySelectorAll(`[data-act=submit],[data-act=check]`).forEach(e=>e.disabled=!0);try{let e=t.kind===`terrain`?{terrain:await ab(this.wb.board.heights())}:{choice:this.selected};await eb.post(`/api/attempts/${n.attemptId}/items/${t.idx}/submit`,e),this.ctx.audio.play(`click`),n.next=t.idx+1,this.item=null,await this.nextItem()}catch(e){this.onAttemptError(e)}}}async onAttemptError(e){if(e instanceof Qy&&[`quiz_closed`,`attempt_finished`,`item_submitted`,`not_next_item`].includes(e.code)){if(e.code===`quiz_closed`)return this.stopTimer(),await g(`測驗已關閉`,`<p>老師已經關閉這份測驗，已提交的題目都有保存。</p>`),this.loadList();try{return this.attempt=await eb.get(`/api/attempts/${this.attempt.attemptId}`),this.nextItem()}catch{return this.loadList()}}this.busy=!1,this.wb&&(this.wb.board.locked=!1),this.main.querySelectorAll(`[data-act=submit]`).forEach(e=>e.disabled=!1),m(`${tb(e)}（地形還在，可以再按一次提交）`,5e3)}async finish(){let e=this.attempt;this.stopTimer();let t;try{t=await eb.post(`/api/attempts/${e.attemptId}/finish`)}catch(e){return m(tb(e),4e3),this.loadList()}this.wb?.destroy(),this.wb=null;let n=e.quizId;this.attempt=null,this.ctx.audio.play(t.stars>=3?`pass`:`click`),this.ctx.audio.speak(`挑戰完成！你得到 ${t.stars} 顆星`),this.main.innerHTML=`<div class="exam-layout">${this.header(`EVERY TRY HELPS YOU GROW`,`挑戰完成，做得好！`,`看看這次的發現，下次還可以更進步。`,`<span class="badge">第 ${t.attempts} 次挑戰</span>`)}
<div class="card"><div class="result-score">${t.stars}<span class="result-total"> / 5</span></div><div class="stars result-stars">${f(t.stars)}</div>
<p class="result-best">目前最佳紀錄 <strong>${t.best} 顆星</strong>${t.stars===t.best?` · 這次也是你的最佳表現！`:``}</p>
<div class="result-list">${t.items.map((e,t)=>`<div class="result-item"><span>${t+1}. ${u(e.label)}${e.kind===`mc`&&!e.correct?`<br><small class="result-explain">正確答案：${u(e.answer)}${e.explanation?` · ${u(e.explanation)}`:``}</small>`:``}</span><strong class="${e.correct?`ok`:`retry`}">${e.correct?`★ 答對`:`再練習`}</strong></div>`).join(``)}</div>
<div class="dialog-actions"><button class="secondary" data-act="list">回測驗首頁</button><button class="primary" data-act="again">再挑戰一次 ${b(`rotate`)}</button></div></div></div>`,this.main.querySelector(`[data-act=list]`).addEventListener(`click`,()=>void this.loadList()),this.main.querySelector(`[data-act=again]`).addEventListener(`click`,()=>void this.start(n)),window.scrollTo(0,0)}},lb=/^[$_\u0080-\uFFFFa-zA-Z][$_\u0080-\uFFFF\w]*$/;function ub(e){let t={},n={},r=e(),i=e.toString(),a=i.slice(i.indexOf(`[`)+1,i.lastIndexOf(`]`)).split(`,`).map(e=>e.trim());for(let e of a)if(!lb.test(e))throw Error(`Invalid dependency name: ${e}`);let o=0;for(;o<r.length;){let e=a[o],i=r[o];typeof i==`function`?t[e]=db(i,e):n[e]=i,o++}return{functions:t,variables:n}}function db(e,t){let n=e.toString();if(e.prototype){if(n.indexOf(`[native code]`)>=0){let e=n.indexOf(` `,8)+1,t=n.indexOf(`(`,e);return n.slice(e,t)}{let r=n;for(let n in e.prototype)r+=`;`+t+`.prototype.`+n+`=`+e.prototype[n].toString();return r}}return n}function fb(e,t,n,r,i,a){let o=!1,s,c=()=>{s.stop()},l=(e,t)=>{try{s.ingest(e,t)}catch(e){throw c(),e}};return{start:(c,u)=>{if(o)throw Error(`Was started`);o=!0;let d=i(),f=d&&d._,p=f||mb(t,c);f||a({_:p});let[m,h]=p;s=e(m,()=>{let e=i();if(e)return e.other},e=>{a(Object.assign(Object.assign({},i()),{other:e}))},n,r),h&&l(h,u)},stop:c,ingest:l}}var pb=`)(postMessage)}`;function mb(e,t){let[n,r]=hb(t);return[n+`;var onMessage = function(data) {for (var key in data) {self[key] = data[key]}onMessage = (`+e.toString()+pb,r]}function hb(e){let t={},n={};for(let r of e){let{functions:e,variables:i}=ub(r);t=Object.assign(Object.assign({},t),e),n=Object.assign(Object.assign({},n),i)}return[Object.keys(t).map(e=>e+`=`+t[e]).join(`;`),n]}function gb(e,t,n,r,i,a){let o=!1,s=!1,c=[],l=()=>[],u=()=>[],d,f,p=e=>_b[e],m=(e,t)=>{_b[e]=t},h=()=>{if(!o)throw Error(`Not started`)},g=()=>{if(o)throw Error(`Was started`)},_=()=>{if(s)throw Error(`Was stopped`)},v=()=>{if(d)throw Error(`Has alias`)},y=e=>{if(typeof e!=`function`)throw TypeError(`Argument must be a function`)},b;if(typeof t==`string`){if(d=t,f=p(d),!f||!f.$)throw Error(`Not found`);b=f.$[0],c=f.$[1],l=f.$[2],u=f.$[3],f.$[4]}else b=t;y(b);let x,S=e=>{_(),g(),y(e),c.push(e)},C=()=>{_(),g(),S(()=>[b,u,r]),o=!0,x.start(c,void 0)},w=()=>{s=!0,x.stop()},T=e=>{x.ingest([Date.now(),e],l(...e))},E,D=Object.assign({inputLatency:E,outputLatency:E,addDependencies(e){v(),S(e)},inputTransferList:e=>{_(),g(),v(),y(e),l=e},outputTransferList:e=>{_(),g(),v(),y(e),u=e},alias(e){_(),g(),v(),d=e,m(d,{$:[b,c,l,u]})},start:C,stop:w},n(C,w,o,s,T,h,g,_));return x=fb(e,e=>{let t=-1,n=-1,i=r(b,r=>{e([t,n,Date.now(),r],u(r))});return([e,r])=>(t=e,n=Date.now(),i(r))},e=>{s||i(e)},([e,t,n,r])=>{s||(e!==-1&&(D.inputLatency=t-e),D.outputLatency=Date.now()-n,a(r))},()=>{if(d){let e=p(d);if(e)return e.other}},e=>{d&&m(d,Object.assign(Object.assign({},p(d)),{other:e}))}),D}var _b={};function vb(e,t){let n,r;return gb(e,t,(e,t,i,a,o,s,c,l)=>({call(...e){if(l(),s(),n||r)throw Error(`Previous call not finished`);return new Promise((t,i)=>{n=t,r=i,o(e)})},callOnce(...n){return e(),this.call(...n).finally(t)}}),(e,t)=>{let n=e=>typeof e==`object`&&!!e&&typeof e.then==`function`;return r=>{let i=e(...r);n(i)?i.then(t):t(i)}},e=>{if(r)r(e),n=void 0,r=void 0;else throw Error("`reject` callback not found")},e=>{if(n)n(e),n=void 0,r=void 0;else throw Error("`resolve` callback not found")})}function yb(e,t,n,r,i){let a=t();a||(a=bb(e),n(a));let o=new Worker(a);return o.onmessage=e=>{let t=e.data,n=t?t[xb]:void 0;if(n){let e=Error(n[0]);e.stack=n[1];let t=2;for(;t<n.length;)e[n[t][0]]=n[t][1],t++;r(e),o.terminate()}else i(t)},{stop:o.terminate.bind(o),ingest:o.postMessage.bind(o)}}function bb(e){return URL.createObjectURL(new Blob([e+`;`+Sb],{type:`text/javascript`}))}var xb=`$err$`,Sb=`self.onmessage = function(evt) {onMessage(evt.data)};function onErr(err_, msg) {var err = err_ instanceof Error ? err_ : new Error(msg);postMessage({$err$:[err.message,err.stack].concat(Object.keys(err).map(function(k){return[k,err[k]]}))})};var postMessage = self.postMessage;addEventListener("error",function(evt) {onErr(evt.error, evt.message)});addEventListener("unhandledrejection",function(evt) {evt.preventDefault();onErr(evt.reason, String(evt.reason))})`;function Cb(e){return vb(yb,e)}function wb(e){"@babel/helpers - typeof";return wb=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},wb(e)}function Tb(e){var t=String.fromCharCode,n=Object.prototype.hasOwnProperty,r=/&#(\d+);|&#x([0-9a-f]+);|&(\w+);/gi,i={amp:`&`,apos:`'`,gt:`>`,lt:`<`,quot:`"`};Object.keys(i).forEach(function(e){i[e.toUpperCase()]=i[e]});function a(e,r,a,o){return o?n.call(i,o)?i[o]:`&`+o+`;`:t(r||parseInt(a,16))}function o(e){return e.length>3&&e.indexOf(`&`)!==-1?e.replace(r,a):e}var s=`non-whitespace outside of root node`;function c(e){return Error(e)}function l(e){return`missing namespace for prefix <`+e+`>`}function u(e){return{get:e,enumerable:!0}}function d(e){var t={},n;for(n in e)t[n]=e[n];return t}var f=Symbol(`nameCache`);function p(e){return e+`$uri`}function m(e){var t={},n,r;for(n in e)r=e[n],t[r]=r,t[p(r)]=n;return t}function h(){return{line:0,column:0}}function g(e){throw e}function _(e){if(!this)return new _(e);var t=e&&e.proxy,n,r,i,a,v=g,y,b,x,S,C=h,w=!1,T=!1,E=``,D=!1,O=!1,k=null,A=!1,ee,j,te,M;function N(e){e instanceof Error||(e=c(e)),k=e,v(e,C)}function ne(e){y&&(e instanceof Error||(e=c(e)),y(e,C))}this.on=function(e,t){if(typeof t!=`function`)throw c(`required args <name, cb>`);switch(e){case`openTag`:r=t;break;case`text`:n=t;break;case`closeTag`:i=t;break;case`error`:v=t;break;case`warn`:y=t;break;case`cdata`:a=t;break;case`attention`:S=t;break;case`question`:x=t;break;case`comment`:b=t;break;default:throw c(`unsupported event: `+e)}return this},this.ns=function(e){if(e===void 0&&(e={}),wb(e)!==`object`)throw c(`required args <nsMap={}>`);var t={},n;for(n in e)t[n]=e[n];return O=!0,M=t,this};function re(){ee=O?[]:null,j=O?m(M):null,te=[],C=h,A=!1,k=null,T=!1,E=``}this.parse=function(e){if(typeof e!=`string`)throw c(`required args <xml=string>`);if(w)throw c(`parse during stream; call end() first`);return re(),P(e),C=h,A=!1,k},this.write=function(e){if(typeof e!=`string`)throw c(`required args <xml=string>`);return w||=(re(),!0),k||(E=P(E+e,!0)||``),this},this.end=function(){return w||re(),w=!1,k||P(E),E=``,C=h,A=!1,k},this.stop=function(){A=!0};function P(e){var c=arguments.length>1&&arguments[1]!==void 0&&arguments[1],m=null,h=null,g,_=0,v=!1,y=!1,w=0,E=0,k,re,P,F,ie,ae,I,oe,se,ce=``,le=0,ue;function L(e,t){var n=e.indexOf(`:`);if(n===-1)return e;var r=j[e.substring(0,n)];return r?t===r?e.substr(n+1):r+e.substr(n):(ne(l(e.substring(0,n))),null)}function de(){if(ue!==null)return ue;var e,t,n=O&&j.xmlns,r=O&&D?[]:null,i=le,a=ce,s=a.length,c,l,u,f,m,h={},g=new Set,v,y,b;parseAttr:for(;i<s;i++)if(v=!1,y=a.charCodeAt(i),!(y===32||y<14&&y>8)){for((y<65||y>122||y>90&&y<97)&&y!==95&&y!==58&&(ne(`illegal first char attribute name`),v=!0),b=i+1;b<s;b++)if(y=a.charCodeAt(b),!(y>96&&y<123||y>64&&y<91||y>47&&y<59||y===46||y===45||y===95)){if(y===32||y<14&&y>8){ne(`missing attribute value`),i=b;continue parseAttr}if(y===61)break;ne(`illegal attribute name char`),v=!0}if(m=a.substring(i,b),m===`xmlns:xmlns`&&(ne(`illegal declaration of xmlns`),v=!0),y=a.charCodeAt(b+1),y===34)b=a.indexOf(`"`,i=b+2),b===-1&&(b=a.indexOf(`'`,i),b!==-1&&(ne(`attribute value quote missmatch`),v=!0));else if(y===39)b=a.indexOf(`'`,i=b+2),b===-1&&(b=a.indexOf(`"`,i),b!==-1&&(ne(`attribute value quote missmatch`),v=!0));else for(ne(`missing attribute value quotes`),v=!0,b+=1;b<s&&(y=a.charCodeAt(b+1),!(y===32||y<14&&y>8));b++);for(b===-1&&(ne(`missing closing quotes`),b=s,v=!0),v||(u=a.substring(i,b)),i=b;b+1<s&&(y=a.charCodeAt(b+1),!(y===32||y<14&&y>8));b++)i===b&&(ne(`illegal character after attribute end`),v=!0);if(i=b+1,v)continue parseAttr;if(g.has(m)){ne(`attribute <`+m+`> already defined`);continue}if(g.add(m),!O){h[m]=u;continue}if(D){if(l=m===`xmlns`?`xmlns`:m.charCodeAt(0)===120&&m.substr(0,6)===`xmlns:`?m.substr(6):null,l!==null){if(e=o(u),t=p(l),f=M[e],!f){if(l===`xmlns`||t in j&&j[t]!==e)do f=`ns`+_++;while(j[f]!==void 0);else f=l;M[e]=f}j[l]!==f&&(c||=(j=d(j),!0),j[l]=f,l===`xmlns`&&(j[p(f)]=e,n=f),j[t]=e),h[m]=u;continue}r.push(m,u);continue}m=L(m,n),m!==null&&(h[m]=u)}if(D)for(i=0,s=r.length;i<s;i++)m=L(r[i++],n),u=r[i],m!==null&&(h[m]=u);return ue=h}function R(){for(var t=/(\r\n|\r|\n)/g,n=0,r=0,i=0,a=E,o,s;w>=i&&(o=t.exec(e),!(!o||(a=o[0].length+o.index,a>w)));)n+=1,i=a;return w==-1?(r=a,s=e.substring(E)):E===0?s=e.substring(E,w):(r=w-i,s=E==-1?e.substring(w):e.substring(w,E+1)),{data:s,line:n,column:r}}for(C=R,t&&(se=Object.create({},{name:u(function(){return I}),originalName:u(function(){return oe}),attrs:u(de),ns:u(function(){return j})}));E!==-1;){if(w=e.charCodeAt(E)===60?E:e.indexOf(`<`,E),w===-1){if(c)return e.substring(E);if(te.length)return N(`unexpected end of file`);if(!T)return N(`missing start tag`);E<e.length&&e.substring(E).trim()&&ne(s);return}if(T||=!0,E!==w){if(te.length){if(n&&(n(e.substring(E,w),o,C),A))return}else if(e.substring(E,w).trim()&&(ne(s),A))return}if(F=e.charCodeAt(w+1),F===33){if(P=e.charCodeAt(w+2),P===91&&e.substr(w+3,6)===`CDATA[`){if(E=e.indexOf(`]]>`,w),E===-1)return c?e.substring(w):N(`unclosed cdata`);if(a&&(a(e.substring(w+9,E),C),A))return;E+=3;continue}if(P===45&&e.charCodeAt(w+3)===45){if(E=e.indexOf(`-->`,w),E===-1)return c?e.substring(w):N(`unclosed comment`);if(b&&(b(e.substring(w+4,E),o,C),A))return;E+=3;continue}}if(F===63){if(E=e.indexOf(`?>`,w),E===-1)return c?e.substring(w):N(`unclosed question`);if(x&&(x(e.substring(w,E+2),C),A))return;E+=2;continue}for(k=w+1;;k++){if(ie=e.charCodeAt(k),isNaN(ie))return c?e.substring(w):(E=-1,N(`unclosed tag`));if(ie===34)P=e.indexOf(`"`,k+1),k=P===-1?k:P;else if(ie===39)P=e.indexOf(`'`,k+1),k=P===-1?k:P;else if(ie===62){E=k;break}}if(F===33){if(S&&(S(e.substring(w,E+1),o,C),A))return;E+=1;continue}if(ue={},F===47){if(v=!1,y=!0,!te.length)return N(`missing open tag`);if(k=I=te.pop(),P=w+2+k.length,e.substring(w+2,P)!==k)return N(`closing tag mismatch`);for(;P<E;P++)if(F=e.charCodeAt(P),!(F===32||F>8&&F<14))return N(`close tag`)}else{if(e.charCodeAt(E-1)===47?(k=I=e.substring(w+1,E-1),v=!0,y=!0):(k=I=e.substring(w+1,E),v=!0,y=!1),!(F>96&&F<123||F>64&&F<91||F===95||F===58))return N(`illegal first char nodeName`);for(P=1,re=k.length;P<re;P++)if(F=k.charCodeAt(P),!(F>96&&F<123||F>64&&F<91||F>47&&F<59||F===45||F===95||F==46)){if(F===32||F<14&&F>8){I=k.substring(0,P),ue=null;break}return N(`invalid nodeName`)}y||te.push(I)}if(O){g=j,v&&(y||ee.push(g),ue===null&&(D=k.indexOf(`xmlns`,P)!==-1)&&(le=P,ce=k,de(),D=!1)),oe=I,h!==j&&(m=j[f],m===void 0&&(m=j[f]={}),h=j);var fe=m[I];if(fe!==void 0)I=fe;else{if(F=I.indexOf(`:`),F!==-1){if(ae=j[I.substring(0,F)],!ae)return N(`missing namespace on <`+oe+`>`);I=I.substr(F+1)}else ae=j.xmlns;ae&&(I=ae+`:`+I),m[oe]=I}}if(v&&(le=P,ce=k,r&&(t?r(se,o,y,C):r(I,de,o,y,C),A)))return;if(y){if(i&&(i(t?se:I,o,v,C),A))return;O&&(j=v?g:ee.pop())}E+=1}}}return new _(e)}function Eb(e,t,n,r){var i=!1,a=function(){if(i)throw Error(`Errored`)},o,s=new Tb;return{promise:new Promise(function(a,c){o=a,s.on(`error`,function(e){throw i=!0,e}),s.on(`text`,function(t,n){r&&r(n(t),e)}),s.on(`openTag`,function(n,r,i,a,o){if(t){var s=r();for(var c in s)s[Db(c,!0)]=i(s[c]);t(Db(n),s,e)}}),s.on(`closeTag`,function(t){n&&n(Db(t),e)})}),write:function(e){a(),s.write(e)},end:function(){a(),s.end(),o()}}}function Db(e,t){for(var n=0;n<e.length;){if(e[n]===`:`&&!(t&&n===5&&e.slice(0,5)===`xmlns`))return e.slice(n+1);n++}return e}function Ob(e){"@babel/helpers - typeof";return Ob=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ob(e)}function kb(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,jb(r.key),r)}}function Ab(e,t,n){return t&&kb(e.prototype,t),n&&kb(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function jb(e){var t=Mb(e,`string`);return Ob(t)===`symbol`?t:String(t)}function Mb(e,t){if(Ob(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Ob(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Nb(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Pb(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Hb(e,t)}function Fb(e){var t=Bb();return function(){var n=Ub(e),r;if(t){var i=Ub(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Ib(this,r)}}function Ib(e,t){if(t&&(Ob(t)===`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return Lb(e)}function Lb(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Rb(e){var t=typeof Map==`function`?new Map:void 0;return Rb=function(e){if(e===null||!Vb(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return zb(e,arguments,Ub(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Hb(n,e)},Rb(e)}function zb(e,t,n){return zb=Bb()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&Hb(i,n.prototype),i},zb.apply(null,arguments)}function Bb(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Vb(e){return Function.toString.call(e).indexOf(`[native code]`)!==-1}function Hb(e,t){return Hb=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Hb(e,t)}function Ub(e){return Ub=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ub(e)}var Wb=function(e){Pb(n,e);var t=Fb(n);function n(e){var r;return Nb(this,n),r=t.call(this,e),r.name=`InvalidSpreadsheetError`,r}return Ab(n)}(Rb(Error));function Gb(e,t,n,r,i,a){var o=Eb(t,n,r,i);return a?s(o,e,a):(o.write(e),o.end()),o.promise.then(function(e){return e},function(e){var t=new Wb(e.message);throw t.stack=e.stack,t.cause=e,t});function s(e,t,n,r){var i=65536,a=0,o=i,s=function(){a++;var r=Date.now();if(t.length>o){e.write(t.slice(0,o)),n&&n(!1),t=t.slice(o);var i=Date.now()-r;return i<3.5?o*=2:i>7&&(o/=2),!0}return e.write(t),e.end(),n&&n(!0),!1};(function e(){s()&&(r?typeof setImmediate<`u`?setImmediate(e):setTimeout(e,0):e())})()}}var Kb={},qb=(function(e,t,n,r,i){var a=new Worker(Kb[t]||(Kb[t]=URL.createObjectURL(new Blob([e+`;addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})`],{type:`text/javascript`}))));return a.onmessage=function(e){var t=e.data,n=t.$e$;if(n){var r=Error(n[0]);r.code=n[1],r.stack=n[2],i(r,null)}else i(null,t)},a.postMessage(n,r),a}),Jb=Uint8Array,Yb=Uint16Array,Xb=Int32Array,Zb=new Jb([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Qb=new Jb([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$b=new Jb([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ex=function(e,t){for(var n=new Yb(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Xb(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},tx=ex(Zb,2),nx=tx.b,rx=tx.r;nx[28]=258,rx[258]=28;var ix=ex(Qb,0),ax=ix.b;ix.r;for(var ox=new Yb(32768),sx=0;sx<32768;++sx){var cx=(sx&43690)>>1|(sx&21845)<<1;cx=(cx&52428)>>2|(cx&13107)<<2,cx=(cx&61680)>>4|(cx&3855)<<4,ox[sx]=((cx&65280)>>8|(cx&255)<<8)>>1}for(var lx=(function(e,t,n){for(var r=e.length,i=0,a=new Yb(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new Yb(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new Yb(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[ox[d]>>c]=l}else for(s=new Yb(r),i=0;i<r;++i)e[i]&&(s[i]=ox[o[e[i]-1]++]>>15-e[i]);return s}),ux=new Jb(288),sx=0;sx<144;++sx)ux[sx]=8;for(var sx=144;sx<256;++sx)ux[sx]=9;for(var sx=256;sx<280;++sx)ux[sx]=7;for(var sx=280;sx<288;++sx)ux[sx]=8;for(var dx=new Jb(32),sx=0;sx<32;++sx)dx[sx]=5;var fx=lx(ux,9,1),px=lx(dx,5,1),mx=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},hx=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},gx=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},_x=function(e){return(e+7)/8|0},vx=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new Jb(e.subarray(t,n))},yx=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],bx=function(e,t,n){var r=Error(t||yx[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,bx),!n)throw r;return r},xx=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new Jb(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new Jb(i*3));var l=function(e){var t=n.length;if(e>t){var r=new Jb(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=hx(e,d,1);var v=hx(e,d+1,3);if(d+=3,!v){var y=_x(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&bx(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}if(v==1)p=fx,m=px,h=9,g=5;else if(v==2){var S=hx(e,d,31)+257,C=hx(e,d+10,15)+4,w=S+hx(e,d+5,31)+1;d+=14;for(var T=new Jb(w),E=new Jb(19),D=0;D<C;++D)E[$b[D]]=hx(e,d+D*3,7);d+=C*3;for(var O=mx(E),k=(1<<O)-1,A=lx(E,O,1),D=0;D<w;){var ee=A[hx(e,d,k)];d+=ee&15;var y=ee>>4;if(y<16)T[D++]=y;else{var j=0,te=0;for(y==16?(te=3+hx(e,d,3),d+=2,j=T[D-1]):y==17?(te=3+hx(e,d,7),d+=3):y==18&&(te=11+hx(e,d,127),d+=7);te--;)T[D++]=j}}var M=T.subarray(0,S),N=T.subarray(S);h=mx(M),g=mx(N),p=lx(M,h,1),m=lx(N,g,1)}else bx(1);if(d>_){c&&bx(0);break}}s&&l(f+131072);for(var ne=(1<<h)-1,re=(1<<g)-1,P=d;;P=d){var j=p[gx(e,d)&ne],F=j>>4;if(d+=j&15,d>_){c&&bx(0);break}if(j||bx(2),F<256)n[f++]=F;else if(F==256){P=d,p=null;break}else{var ie=F-254;if(F>264){var D=F-257,ae=Zb[D];ie=hx(e,d,(1<<ae)-1)+nx[D],d+=ae}var I=m[gx(e,d)&re],oe=I>>4;I||bx(3),d+=I&15;var N=ax[oe];if(oe>3){var ae=Qb[oe];N+=gx(e,d)&(1<<ae)-1,d+=ae}if(d>_){c&&bx(0);break}s&&l(f+131072);var se=f+ie;if(f<N){var ce=a-N,le=Math.min(N,se);for(ce+f<0&&bx(3);f<le;++f)n[f]=r[ce+f]}for(;f<se;++f)n[f]=n[f-N]}}t.l=p,t.p=P,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?vx(n,0,f):n.subarray(0,f)},Sx=new Jb(0),Cx=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},wx=function(e,t,n){for(var r=e(),i=e.toString(),a=i.slice(i.indexOf(`[`)+1,i.lastIndexOf(`]`)).replace(/\s+/g,``).split(`,`),o=0;o<r.length;++o){var s=r[o],c=a[o];if(typeof s==`function`){t+=`;`+c+`=`;var l=s.toString();if(s.prototype){if(l.indexOf(`[native code]`)!=-1){var u=l.indexOf(` `,8)+1;t+=l.slice(u,l.indexOf(`(`,u))}else for(var d in t+=l,s.prototype)t+=`;`+c+`.prototype.`+d+`=`+s.prototype[d].toString()}else t+=l}else n[c]=s}return t},Tx=[],Ex=function(e){var t=[];for(var n in e)e[n].buffer&&t.push((e[n]=new e[n].constructor(e[n])).buffer);return t},Dx=function(e,t,n,r){if(!Tx[n]){for(var i=``,a={},o=e.length-1,s=0;s<o;++s)i=wx(e[s],i,a);Tx[n]={c:wx(e[o],i,a),e:a}}var c=Cx({},Tx[n].e);return qb(Tx[n].c+`;onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=`+t.toString()+`}`,n,c,Ex(c),r)},Ox=function(){return[Jb,Yb,Xb,Zb,Qb,$b,nx,ax,fx,px,ox,yx,lx,mx,hx,gx,_x,vx,bx,xx,Ix,kx,Ax]},kx=function(e){return postMessage(e,[e.buffer])},Ax=function(e){return e&&{out:e.size&&new Jb(e.size),dictionary:e.dictionary}},jx=function(e,t,n,r,i,a){var o=Dx(n,r,i,function(e,t){o.terminate(),a(e,t)});return o.postMessage([e,t],t.consume?[e.buffer]:[]),function(){o.terminate()}},Mx=function(e,t){return e[t]|e[t+1]<<8},Nx=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Px=function(e,t){return Nx(e,t)+Nx(e,t+4)*4294967296};function Fx(e,t,n){return n||(n=t,t={}),typeof n!=`function`&&bx(7),jx(e,t,[Ox],function(e){return kx(Ix(e.data[0],Ax(e.data[1])))},1,n)}function Ix(e,t){return xx(e,{i:2},t&&t.out,t&&t.dictionary)}var Lx=typeof TextDecoder<`u`&&new TextDecoder;try{Lx.decode(Sx,{stream:!0})}catch{}var Rx=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:vx(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function zx(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}if(Lx)return Lx.decode(e);var i=Rx(e),a=i.s,n=i.r;return n.length&&bx(8),a}var Bx=function(e,t){return t+30+Mx(e,t+26)+Mx(e,t+28)},Vx=function(e,t,n){var r=Mx(e,t+28),i=Mx(e,t+30),a=zx(e.subarray(t+46,t+46+r),!(Mx(e,t+8)&2048)),o=t+46+r,s=Hx(e,o,i,n,Nx(e,t+20),Nx(e,t+24),Nx(e,t+42)),c=s[0],l=s[1],u=s[2];return[Mx(e,t+10),c,l,a,o+i+Mx(e,t+32),u]},Hx=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+Mx(e,t+2))if(Mx(e,t)==1)return[s?Px(e,t+4+8*c):i,c?Px(e,t+4):a,l?Px(e,t+4+8*(c+s)):o,1];r<2&&bx(13)}return[i,a,o,0]},Ux=typeof queueMicrotask==`function`?queueMicrotask:typeof setTimeout==`function`?setTimeout:function(e){e()};function Wx(e,t,n){n||(n=t,t={}),typeof n!=`function`&&bx(7);var r=[],i=function(){for(var e=0;e<r.length;++e)r[e]()},a={},o=function(e,t){Ux(function(){n(e,t)})};Ux(function(){o=n});for(var s=e.length-22;Nx(e,s)!=101010256;--s)if(!s||e.length-s>65558)return o(bx(13,0,1),null),i;var c=Mx(e,s+8);if(c){var l=c,u=Nx(e,s+16),d=Nx(e,s-20)==117853008;if(d){var f=Nx(e,s-12);d=Nx(e,f)==101075792,d&&(l=c=Nx(e,f+32),u=Nx(e,f+48))}for(var p=t&&t.filter,m=function(t){var n=Vx(e,u,d),s=n[0],l=n[1],f=n[2],m=n[3],h=n[4],g=n[5],_=Bx(e,g);u=h;var v=function(e,t){e?(i(),o(e,null)):(t&&(a[m]=t),--c||o(null,a))};if(!p||p({name:m,size:l,originalSize:f,compression:s})){if(!s)v(null,vx(e,_,_+l));else if(s==8){var y=e.subarray(_,_+l);if(f<524288||l>.8*f)try{v(null,Ix(y,{out:new Jb(f)}))}catch(e){v(e,null)}else r.push(Fx(y,{size:f},v))}else v(bx(14,`unknown compression type `+s,1),null)}else v(null,null)},h=0;h<l;++h)m(h)}else o(null,{});return i}function Gx(e){"@babel/helpers - typeof";return Gx=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Gx(e)}function Kx(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Jx(r.key),r)}}function qx(e,t,n){return t&&Kx(e.prototype,t),n&&Kx(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jx(e){var t=Yx(e,`string`);return Gx(t)===`symbol`?t:String(t)}function Yx(e,t){if(Gx(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Gx(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Xx(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Zx(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&aS(e,t)}function Qx(e){var t=rS();return function(){var n=oS(e),r;if(t){var i=oS(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return $x(this,r)}}function $x(e,t){if(t&&(Gx(t)===`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return eS(e)}function eS(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function tS(e){var t=typeof Map==`function`?new Map:void 0;return tS=function(e){if(e===null||!iS(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return nS(e,arguments,oS(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),aS(n,e)},tS(e)}function nS(e,t,n){return nS=rS()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&aS(i,n.prototype),i},nS.apply(null,arguments)}function rS(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function iS(e){return Function.toString.call(e).indexOf(`[native code]`)!==-1}function aS(e,t){return aS=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},aS(e,t)}function oS(e){return oS=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},oS(e)}var sS=function(e){Zx(n,e);var t=Qx(n);function n(){return Xx(this,n),t.apply(this,arguments)}return qx(n)}(tS(Error));function cS(e){var t=new sS(e.message);return e.stack&&(t.stack=e.stack),Error.captureStackTrace&&Error.captureStackTrace(t,cS),t.cause=e,t}function lS(e,t){return uS(e,t,dS,!0)}function uS(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).filter,n=arguments.length>2?arguments[2]:void 0;return arguments.length>3&&arguments[3],n(new Uint8Array(e),{filter:function(e){return!t||t({path:e.name})}}).then(function(e){return e},function(e){throw fS(e)?cS(e):e})}function dS(e){return new Promise(function(t,n){Wx(e,function(e,r){e?n(e):t(r)})})}function fS(e){return typeof e.code==`number`}function pS(e){"@babel/helpers - typeof";return pS=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},pS(e)}function mS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,gS(r.key),r)}}function hS(e,t,n){return t&&mS(e.prototype,t),n&&mS(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function gS(e){var t=_S(e,`string`);return pS(t)===`symbol`?t:String(t)}function _S(e,t){if(pS(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(pS(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function vS(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function yS(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&DS(e,t)}function bS(e){var t=TS();return function(){var n=OS(e),r;if(t){var i=OS(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return xS(this,r)}}function xS(e,t){if(t&&(pS(t)===`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return SS(e)}function SS(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function CS(e){var t=typeof Map==`function`?new Map:void 0;return CS=function(e){if(e===null||!ES(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return wS(e,arguments,OS(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),DS(n,e)},CS(e)}function wS(e,t,n){return wS=TS()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&DS(i,n.prototype),i},wS.apply(null,arguments)}function TS(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ES(e){return Function.toString.call(e).indexOf(`[native code]`)!==-1}function DS(e,t){return DS=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},DS(e,t)}function OS(e){return OS=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},OS(e)}var kS={XLS_FILE_NOT_SUPPORTED:"You passed a legacy `.xls` file. Only `.xlsx` files are supported",FILE_NOT_SUPPORTED:"Doesn't look like an `.xlsx` file",INVALID_ZIP:"Couldn't unzip `.xlsx` file contents",NO_DATA:`No data`},AS=function(e){yS(n,e);var t=bS(n);function n(e,r){var i;return vS(this,n),i=t.call(this,kS[e]||e),i.code=e,i.name=`InvalidInputError`,i.cause=r,i}return hS(n)}(CS(Error));function jS(e){var t=e.path;return t.endsWith(`.xml`)||t.endsWith(`.xml.rels`)}var MS=[80,75],NS=[208,207,17,224],PS=[MS,NS];PS.indexOf(MS);var FS=PS.indexOf(NS);function IS(){var e,t=LS(PS),n=0;return function(r){if(isNaN(e)){var i;t=t.filter(function(e){if(r===PS[e][n])return PS[e].length===n+1&&(i=e),!0}),t.length===1?e=i:t.length===0&&(e=-1)}return n++,e}}function LS(e){for(var t=[],n=0;n<e.length;)t.push(n),n++;return t}function RS(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=zS(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zS(e,t){if(e){if(typeof e==`string`)return BS(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(e);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return BS(e,t)}}function BS(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function VS(e){for(var t=IS(),n=RS(e),r;!(r=n()).done;){var i=r.value;if(HS(i,t))return}US(e.length)}function HS(e,t){var n=t(e);if(n!==void 0){if(n===FS)throw new AS(`XLS_FILE_NOT_SUPPORTED`);if(n<0)throw new AS(`FILE_NOT_SUPPORTED`);return!0}}function US(e){throw new AS(e===0?`NO_DATA`:`FILE_NOT_SUPPORTED`)}var WS;function GS(e){var t=Date.now();(typeof global<`u`?global.READ_EXCEL_FILE_CHECKPOINTS:typeof window<`u`&&window.READ_EXCEL_FILE_CHECKPOINTS)&&(WS&&console.log(`  -`,t-WS,`ms`),console.log(`*`,e)),WS=t}function KS(){WS=void 0}function qS(e){return KS(),GS(`unpack files`),e instanceof File||e instanceof Blob?e.arrayBuffer().then(JS):Promise.resolve(e).then(JS)}function JS(e){return VS(new Uint8Array(e)),lS(e,{filter:jS}).then(function(e){return e},function(e){throw e instanceof sS?new AS(`INVALID_ZIP`,e.cause):e})}function YS(e,t){var n=r();return t(e,n,a,null,null).then(function(){return i(n)});function r(){return{workbookPr:void 0,sheets:[]}}function i(e){return{epoch1904:e.workbookPr?e.workbookPr.epoch1904:!1,sheets:e.sheets}}function a(e,t,n){e===`workbookPr`?n.workbookPr||={epoch1904:t.date1904===`1`}:e===`sheet`&&t.name&&n.sheets.push({id:Number(t.sheetId),name:t.name,relationId:t.id})}}function XS(e,t){var n=`http://schemas.openxmlformats.org/officeDocument/2006/relationships/`,r=`http://purl.oclc.org/ooxml/officeDocument/relationships/`,i=a();return t(e,i,s,null,null).then(function(){return o(i)});function a(){return{sheets:{},sharedStrings:void 0,styles:void 0}}function o(e){return e}function s(e,t,n){e===`Relationship`&&c(n,t.Id,t.Type,t.Target)}function c(e,t,i,a){switch(i){case n+`styles`:case r+`styles`:e.styles=l(a);break;case n+`sharedStrings`:case r+`sharedStrings`:e.sharedStrings=l(a);break;case n+`worksheet`:case r+`worksheet`:e.sheets[t]=l(a)}}function l(e){return e[0]===`/`?e.slice(1):`xl/`+e}}function ZS(e){"@babel/helpers - typeof";return ZS=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ZS(e)}var QS=[`xfId`];function $S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function eC(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?$S(Object(n),!0).forEach(function(t){tC(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$S(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function tC(e,t,n){return t=nC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nC(e){var t=rC(e,`string`);return ZS(t)===`symbol`?t:String(t)}function rC(e,t){if(ZS(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(ZS(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function iC(e,t){if(e==null)return{};var n=aC(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function aC(e,t){if(e==null)return{};for(var n={},r=Object.keys(e),i,a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function oC(e,t){var n=r();return t(e,n,a,o,null).then(function(){return i(n)});function r(){return{numberFormats:[],baseStyles:[],styles:[],cellStyleXfs:!1,cellXfs:!1}}function i(e){return e.styles.map(function(t){if(t.xfId){var n=t.xfId,r=iC(t,QS);return eC(eC({},e.baseStyles[n]),r)}return t})}function a(e,t,n){if(e===`numFmt`){var r=Number(t.numFmtId),i={id:r};r>=100&&(i.template=t.formatCode),n.numberFormats[r]=i}else if(e===`cellStyleXfs`)n.cellStyleXfs=!0;else if(e===`cellXfs`)n.cellXfs=!0;else if(e===`xf`){if(n.cellStyleXfs)n.baseStyles.push(s(t));else if(n.cellXfs){var a=s(t,n.numberFormats);t.xfId&&(a.xfId=Number(t.xfId)),n.styles.push(a)}}}function o(e,t){e===`cellStyleXfs`?t.cellStyleXfs=!1:e===`cellXfs`&&(t.cellXfs=!1)}function s(e,t){var n={};if(e.numFmtId){var r=Number(e.numFmtId);n.numberFormat=t&&t[r]?t[r]:{id:r}}return n}}function sC(e,t){var n=r();return t(e,n,a,o,s).then(function(){return i(n)});function r(){return{si:void 0,strings:[]}}function i(e){return e.strings}function a(e,t,n){e===`si`?n.si=c():n.si&&l(e,t,n.si)}function o(e,t){e===`si`?(t.strings.push(t.si.string),t.si=void 0):t.si&&u(e,t.si)}function s(e,t){t.si&&d(e,t.si)}function c(){return{t:!1,r:!1,rPh:!1,string:``}}function l(e,t,n){e===`t`?n.t=!0:e===`r`?n.r=!0:e===`rPh`&&(n.rPh=!0)}function u(e,t){e===`t`?t.t=!1:e===`r`?t.r=!1:e===`rPh`&&(t.rPh=!1)}function d(e,t){t.rPh||t.t&&(t.r?t.string+=e:t.string=e)}}function cC(e,t){var n=17,r=1,i=1,a=864e5,o=365;t&&(e+=4*o+r+i);var s=r+i+70*o+n;return Math.floor((e-s)*a)}var lC=/;@$/,uC=/[^a-z0#\?%]+/;function dC(e,t,n){var r=n[e];return r===void 0?n[e]=fC(t):r}function fC(e){return e=e.toLowerCase(),e=e.replace(lC,``),e=e.replace(/\\./g,` `),e.split(`;`).some(t);function t(e){e=e.replace(/"[^"]*"/g,` `),e=e.replace(/(\[?[smhd]{1,2}\]?)[\.\,]00?0?/g,`$1`),e=e.replace(/\[([smhd]{1,2})\]/g,`$1`),e=e.replace(/\[[^\]]*\]/g,``);var t=e.split(uC).filter(function(e){return e});return t.length!==0&&t.every(function(e){return pC.indexOf(e)>=0})}}var pC=`s.ss.m.mm.h.hh.am.pm.a.p.d.dd.ddd.dddd.aaa.aaaa.aaaaa.m.mm.mmm.mmmm.mmmmm.y.yy.yyyy.e.ee.eeee`.split(`.`);function mC(e,t,n,r){return e.numberFormat?!!(vC.indexOf(e.numberFormat.id)>=0||t&&e.numberFormat.template===t||n&&e.numberFormat.template&&dC(e.numberFormat.id,e.numberFormat.template,r)):!1}var hC=[14,15,16,17,18,19,20,21,22,45,46,47],gC=[27,28,29,30,31,32,33,34,35,36,50,51,52,53,54,55,56,57,58],_C=[27,28,29,30,31,32,33,34,35,36,50,51,52,53,54,55,56,57,58],vC=hC.concat(gC).concat(_C.filter(function(e){return gC.indexOf(e)<0})).concat([71,72,73,74,75,76,77,78,79,80,81].filter(function(e){return gC.indexOf(e)<0}).filter(function(e){return _C.indexOf(e)<0}));function yC(e,t){return wC(e)||CC(e,t)||xC(e,t)||bC()}function bC(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xC(e,t){if(e){if(typeof e==`string`)return SC(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(e);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SC(e,t)}}function SC(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function CC(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function wC(e){if(Array.isArray(e))return e}var TC=[null,null];function EC(e,t,n,r,i){var a=yC(i,7),o=a[0],s=a[1],c=a[2],l=a[3],u=a[4],d=a[5],f=a[6];switch(e||`n`){case`str`:return n===void 0?`VALUE_MISSING`:n?[`s`,n]:TC;case`inlineStr`:return r===void 0?`VALUE_MISSING`:[`s`,r];case`s`:if(!n)return`VALUE_MISSING`;var p=Number(n);return isNaN(p)||o[p]===void 0?`VALUE_INVALID`:[`s`,o[p]];case`b`:return n?n===`1`?[`b`,!0]:n===`0`?[`b`,!1]:`VALUE_INVALID`:`VALUE_MISSING`;case`e`:return n?[`e`,n]:`VALUE_MISSING`;case`d`:if(!n)return TC;var m=new Date(n);return isNaN(m.valueOf())?`VALUE_INVALID`:[`d`,m.getTime()];case`n`:if(!n)return TC;if(t){var h=Number(t);if(isNaN(h)||s[h]===void 0)return`FORMAT_INVALID`;if(mC(s[h],u,d,l)){var g=Number(n);return isNaN(g)?`VALUE_INVALID`:[`d`,cC(g,c)]}}if(f)return[`n`,n];var _=Number(n);return isNaN(_)?`VALUE_INVALID`:[`n`,_];default:return`TYPE_INVALID`}}function DC(e){for(var t=0,n=0;n<e.length;){var r=e.charCodeAt(n);if(r>=48&&r<=57){var i=Number(e.slice(n));return isNaN(i)&&OC(e),[i,t]}t*=26,t+=e.charCodeAt(n)-64,n++}OC(e)}function OC(e){throw Error(`<c r="${e}">`)}function kC(e,t){return MC(e)||jC(e,t)||PC(e,t)||AC()}function AC(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jC(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function MC(e){if(Array.isArray(e))return e}function NC(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=PC(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PC(e,t){if(e){if(typeof e==`string`)return FC(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(e);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FC(e,t)}}function FC(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var IC=null;function LC(e,t,n){var r=n.sharedStrings,i=n.styles,a=n.epoch1904,o=n.dateFormatDetectionCache,s=n.options,c=[r,i,a,o,s.dateFormat,s.smartDateParser!==!1,s.parseNumber],l=[],u=[],d=f();return t(e,d,y,b,x,v).then(function(){var e=d.sheetData,t=e.rowCount,n=e.columnCount,r=e.dataRowCount,i=e.dataColumnCount;if(r<t&&(l=l.slice(0,r)),i<n)for(var a=0;a<l.length;)l[a].length>i&&(l[a]=l[a].slice(0,i)),a++;for(var o=NC(l),s;!(s=o()).done;)for(var c=s.value;c.length<i;)c.push(IC);return l});function f(){return{dimension:void 0,sheetData:void 0}}function p(e){return e.sheetData.rows}function m(e,t){e.sheetData.rowIndexShift+=e.sheetData.rows.length-t.length,e.sheetData.rows=t}function h(e){return e.sheetData.errors}function g(e,t){e.sheetData.errors=t}function _(e){var t=e.row,n=e.column,r=e.error;throw new Wb(`<c/> at row ${t}, col ${n}: ${r}`)}function v(e){var t=p(d),n=h(d);if(e)l=l.concat(t),u=u.concat(n),u.length>0&&_(u[0]);else if(t.length>1){var r=t.slice(0,-1);l=l.concat(r),u=u.concat(n),m(d,t.slice(-1)),g(d,[])}}function y(e,t,n){e===`dimension`?n.dimension=S(t.ref):e===`sheetData`?n.sheetData=C():n.sheetData&&w(e,t,n.sheetData)}function b(e,t){t.sheetData&&T(e,t.sheetData)}function x(e,t){t.sheetData&&E(e,t.sheetData)}function S(e){var t=e.split(`:`).map(DC);return t.length===1&&(t=[t[0],t[0]]),t}function C(){return{c:void 0,rows:[],row:void 0,rowNumber:void 0,rowIndexShift:0,cursor:[0,0],rowCount:0,columnCount:0,dataRowCount:0,dataColumnCount:0,errors:[]}}function w(e,t,n){e===`row`?(t.r&&(n.rowNumber=Number(t.r)),n.row=[]):e===`c`?(n.c=ee(),n.c.attributes=t):n.c&&j(e,t,n.c)}function T(e,t){if(e===`row`){if(t.rowNumber){var n=t.rowIndexShift+t.rows.length;if(t.rowNumber<=n)throw new Wb(`Out-of-place <row/> number ${t.rowNumber} follows <row/> number ${n}`);for(;t.rowNumber>t.rowIndexShift+t.rows.length+1;)t.rows.push([])}t.rows.push(t.row),t.row.length>0&&(t.dataRowCount=t.rowNumber),t.rowNumber>t.rowCount&&(t.rowCount=t.rowNumber),t.row=void 0,t.rowNumber=void 0}else if(e===`c`){var r=D(t.c);if(r.row<t.cursor[0]||r.row===t.cursor[0]&&r.column<=t.cursor[1])throw new Wb(`Out-of-place <c/> at row ${r.row} col ${r.column} follows <c/> at row ${t.cursor[0]} col ${t.cursor[1]}`);if(t.cursor[0]=r.row,t.cursor[1]=r.column,t.rowNumber||=r.row,r.error)N&&_(r),t.errors.push(r);else if(r.value!==IC){for(;r.column>t.row.length+1;)t.row.push(IC);t.row.push(r.value),r.column>t.dataColumnCount&&(t.dataColumnCount=r.column)}r.column>t.columnCount&&(t.columnCount=r.column),t.c=void 0}else t.c&&te(e,t.c)}function E(e,t){t.c&&M(e,t.c)}function D(e){var t=e.attributes,n=e.inlineString,r=e.vText,i=kC(DC(t.r),2),a=i[0],o=i[1],l=O(t.t,t.s,r,n,c,s.trim!==!1);return typeof l==`string`?{row:a,column:o,error:l}:{row:a,column:o,value:A(l[1],l[0])}}function O(e,t,n,r,i,a){var o=k(e,t,n,r,i);return Array.isArray(o)&&o[0]===`s`&&(a&&(o[1]=o[1].trim()),o[1]===``)?TC:o}function k(e,t,n,r,i){var a=EC(e,t,n,r,i);if(a===`VALUE_MISSING`)switch(e||`n`){case`str`:case`inlineStr`:case`s`:case`b`:return TC}return e===`e`?TC:a}function A(e,t){return t===`n`?s.parseNumber?s.parseNumber(e):e:t===`d`?new Date(e):e}function ee(){return{v:!1,is:!1,t:!1,r:!1,rPh:!1,vText:void 0,inlineString:void 0,attributes:void 0}}function j(e,t,n){e===`v`?n.v=!0:e===`is`?(n.is=!0,n.inlineString=``):e===`t`?n.t=!0:e===`r`?n.r=!0:e===`rPh`&&(n.rPh=!0)}function te(e,t){e===`v`?(t.v=!1,t.vText||=``):e===`is`?t.is=!1:e===`t`?t.t=!1:e===`r`?t.r=!1:e===`rPh`&&(t.rPh=!1)}function M(e,t){t.v?t.vText=e:t.is&&(t.rPh||t.t&&(t.r?t.inlineString+=e:t.inlineString=e))}var N}function RC(e){GS(`convert files to strings`);for(var t={},n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];t[i]=zC(e[i])}return t}function zC(e){return typeof TextDecoder<`u`?new TextDecoder().decode(e):zx(e)}function BC(e){"@babel/helpers - typeof";return BC=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},BC(e)}function VC(e){return BC(e)===`object`&&typeof e.then==`function`}function HC(e){"@babel/helpers - typeof";return HC=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},HC(e)}function UC(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,GC(r.key),r)}}function WC(e,t,n){return t&&UC(e.prototype,t),n&&UC(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function GC(e){var t=KC(e,`string`);return HC(t)===`symbol`?t:String(t)}function KC(e,t){if(HC(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(HC(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function qC(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function JC(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&nw(e,t)}function YC(e){var t=ew();return function(){var n=rw(e),r;if(t){var i=rw(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return XC(this,r)}}function XC(e,t){if(t&&(HC(t)===`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return ZC(e)}function ZC(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function QC(e){var t=typeof Map==`function`?new Map:void 0;return QC=function(e){if(e===null||!tw(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return $C(e,arguments,rw(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),nw(n,e)},QC(e)}function $C(e,t,n){return $C=ew()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&nw(i,n.prototype),i},$C.apply(null,arguments)}function ew(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function tw(e){return Function.toString.call(e).indexOf(`[native code]`)!==-1}function nw(e,t){return nw=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},nw(e,t)}function rw(e){return rw=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},rw(e)}var iw=function(e){JC(n,e);var t=YC(n);function n(e,r){var i;return qC(this,n),i=t.call(this,`Sheet not found: ${typeof e==`number`?e+`. Sheet count: `+r.length:e+`. Available sheets: `+r.join(`, `)}`),i.name=`SheetNotFoundError`,i.sheet=e,i.sheets=r,i}return WC(n)}(QC(Error));function aw(e){"@babel/helpers - typeof";return aw=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},aw(e)}function ow(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=sw(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sw(e,t){if(e){if(typeof e==`string`)return cw(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(e);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cw(e,t)}}function cw(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function lw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function uw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?lw(Object(n),!0).forEach(function(t){dw(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lw(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function dw(e,t,n){return t=fw(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fw(e){var t=pw(e,`string`);return aw(t)===`symbol`?t:String(t)}function pw(e,t){if(aw(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(aw(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function mw(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=RC(t);return GS(`parse spreadsheet info and file paths`),xw(vw(),r,e).then(function(t){var i=t.spreadsheetInfo,a=t.filePaths;return GS(`parse "shared strings" and "styles"`),xw(yw(a),r,e).then(function(t){var o=t.sharedStrings,s=t.styles,c=n.sheets?n.sheets.map(function(e){return gw(e,i.sheets)}):i.sheets.map(function(e){return e.relationId});return GS(`parse sheet${c.length===1?``:`s`} data`),xw(bw(a,c,{sharedStrings:o,styles:s,epoch1904:i.epoch1904,dateFormatDetectionCache:[],options:n}),r,e).then(function(e){return GS(`end`),c.map(function(t){return{sheet:_w(t,i.sheets),data:e[t]}})})})})}function hw(e,t,n,r){return r&&r.parseNumber||(r=uw(uw({},r),{},{parseNumber:null})),mw(t,n,r)}function gw(e,t){if(typeof e==`string`)for(var n=ow(t),r;!(r=n()).done;){var i=r.value;if(i.name===e)return i.relationId}else if(e<=t.length)return t[e-1].relationId;throw new iw(e,t.map(function(e){return e.name}))}function _w(e,t){for(var n=ow(t),r;!(r=n()).done;){var i=r.value;if(i.relationId===e)return i.name}throw Error(`Sheet relation ID not found: ${e}`)}function vw(){return{"xl/_rels/workbook.xml.rels":{name:`filePaths`,parse:XS},"xl/workbook.xml":{name:`spreadsheetInfo`,parse:YS}}}function yw(e){var t={};return dw(t,e.sharedStrings||`xl/sharedStrings.xml`,{name:`sharedStrings`,parse:sC,fallback:Promise.resolve([])}),dw(t,e.styles||`xl/styles.xml`,{name:`styles`,parse:oC,fallback:{}}),t}function bw(e,t,n){return Object.keys(e.sheets).filter(function(e){return t.includes(e)}).reduce(function(t,r){return uw(uw({},t),{},dw({},e.sheets[r],{name:r,parse:function(e,t){return LC(e,t,n)}}))},{})}function xw(e,t,n){for(var r={},i=function(){var i=o[a],s=e[i];r[s.name]=t[i]===void 0?s.fallback===void 0?function(){throw new Wb(`"${i}" file not found inside the \`.xlsx\` file`)}():s.fallback:s.parse(t[i],n)},a=0,o=Object.keys(e);a<o.length;a++)i();for(var s=[],c=function(){var e=u[l];VC(r[e])&&s.push(r[e].then(function(t){r[e]=t}))},l=0,u=Object.keys(r);l<u.length;l++)c();return s.length>0?Promise.all(s).then(function(){return r}):r}function Sw(e){"@babel/helpers - typeof";return Sw=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Sw(e)}function Cw(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Tw(r.key),r)}}function ww(e,t,n){return t&&Cw(e.prototype,t),n&&Cw(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Tw(e){var t=Ew(e,`string`);return Sw(t)===`symbol`?t:String(t)}function Ew(e,t){if(Sw(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Sw(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Dw(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Ow(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Iw(e,t)}function kw(e){var t=Pw();return function(){var n=Lw(e),r;if(t){var i=Lw(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Aw(this,r)}}function Aw(e,t){if(t&&(Sw(t)===`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return jw(e)}function jw(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Mw(e){var t=typeof Map==`function`?new Map:void 0;return Mw=function(e){if(e===null||!Fw(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Nw(e,arguments,Lw(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Iw(n,e)},Mw(e)}function Nw(e,t,n){return Nw=Pw()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&Iw(i,n.prototype),i},Nw.apply(null,arguments)}function Pw(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Fw(e){return Function.toString.call(e).indexOf(`[native code]`)!==-1}function Iw(e,t){return Iw=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Iw(e,t)}function Lw(e){return Lw=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Lw(e)}var Rw=function(e){Ow(n,e);var t=kw(n);function n(e){var r;return Dw(this,n),r=t.call(this,`invalid`),r.reason=e,r}return ww(n)}(Mw(Error));function zw(e){if(typeof e==`string`){var t=e;if(e=Number(e),String(e)!==t)throw new Rw(`not_a_number`)}if(typeof e!=`number`)throw new Rw(`not_a_number`);if(isNaN(e))throw new Rw(`invalid_number`);if(!isFinite(e))throw new Rw(`out_of_bounds`);return e}function Bw(e){if(typeof e==`string`)return e;if(typeof e==`number`){if(isNaN(e))throw new Rw(`invalid_number`);if(!isFinite(e))throw new Rw(`out_of_bounds`);return String(e)}throw new Rw(`not_a_string`)}function Vw(e){if(typeof e==`boolean`)return e;throw new Rw(`not_a_boolean`)}function Hw(e){if(e instanceof Date){if(isNaN(e.valueOf()))throw new Rw(`out_of_bounds`);return e}throw new Rw(`not_a_date`)}var Uw={}.constructor;function Ww(e){return e!=null&&e.constructor===Uw}function Gw(e){"@babel/helpers - typeof";return Gw=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Gw(e)}function Kw(e,t){return Zw(e)||qw(e,t)||iT(e,t)||Yw()}function qw(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Jw(e){return Zw(e)||Xw(e)||iT(e)||Yw()}function Yw(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xw(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Zw(e){if(Array.isArray(e))return e}function Qw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $w(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Qw(Object(n),!0).forEach(function(t){eT(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qw(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function eT(e,t,n){return t=tT(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tT(e){var t=nT(e,`string`);return Gw(t)===`symbol`?t:String(t)}function nT(e,t){if(Gw(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Gw(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function rT(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=iT(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iT(e,t){if(e){if(typeof e==`string`)return aT(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(e);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return aT(e,t)}}function aT(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var oT=null;function sT(e,t,n){GS(`parse sheet data using schema`);for(var r=[],i=[],a=cT(e,t,n),o=0,s=rT(a),c;!(c=s()).done;){var l=c.value,u=l.object,d=l.errors;d?i=i.concat(d.map(function(e){return $w($w({},e),{},{row:o+1})})):r.push(u),o++}return GS(`end`),i.length>0?{errors:i}:{objects:r}}function cT(e,t,n){ET(t);var r=AT(n),i=Jw(e),a=i[0];return i.slice(1).map(function(e){return lT(e,t,a,r)})}function lT(e,t,n,r){var i={schema:t},a=dT(e,i,void 0,n,r),o=a.value,s=a.isEmptyValue,c=a.errors,l=a.children,u={value:jT,isEmptyValue:s,errors:c,isRequired:void 0},d=CT(i,o,s,c,l,u.isRequired,u.value,u.isEmptyValue,u.errors,n);return c||d?{errors:(c||[]).concat(d||[])}:{object:xT(o,s,void 0,r)}}function uT(e,t,n,r,i){for(var a={},o=!0,s=[],c=[],l=0,u=Object.keys(t);l<u.length;l++){var d=u[l],f=dT(e,t[d],ST(d,n),r,i);f.errors?s=s.concat(f.errors):(a[d]=xT(f.value,f.isEmptyValue,ST(d,n),i),o&&!f.isEmptyValue&&(o=!1)),c.push($w($w({},f),{},{schemaEntry:t[d]}))}return s.length>0?{errors:s,children:c}:{value:a,isEmptyValue:o,children:c}}function dT(e,t,n,r,i){var a=t.column?r.indexOf(t.column):void 0,o=t.column?a<0:void 0,s=t.column?o?{value:i.propertyValueWhenColumnIsMissing,isEmptyValue:!0}:fT(e[a],t,a,i):uT(e,t.schema,n,r,i),c=s.value,l=s.isEmptyValue,u=s.errors,d=s.children;return u?{errors:u,children:d}:{value:c,isEmptyValue:l,children:d}}function fT(e,t,n,r){var i=pT(e,t,r),a=i.value,o=i.isEmptyValue,s=i.error,c=i.reason;return s?{errors:[TT({error:s,reason:c,column:t.column,columnIndex:n,valueType:t.type,value:e})]}:{value:a,isEmptyValue:o}}function pT(e,t,n){return e===void 0?{value:n.propertyValueWhenColumnIsMissing,isEmptyValue:!0}:e===oT?{value:n.propertyValueWhenCellIsEmpty,isEmptyValue:!0}:Array.isArray(t.type)?mT(e,t,n):hT(e,t,n)}function mT(e,t,n){if(typeof e!=`string`)return{error:`not_a_string`};var r=!0,i=[],a=[],o=bT(e,n.separatorCharacter).map(function(e){if(!(i.length>0)){if(!e){i.push(`invalid`),a.push(`syntax`);return}var o=hT(e,t,n),s=o.value,c=o.isEmptyValue,l=o.error,u=o.reason;if(l){i.push(l),a.push(u);return}return r&&!c&&(r=!1),s}});return i.length>0?{error:i[0],reason:a[0]}:{value:o,isEmptyValue:r}}function hT(e,t,n){if(e===oT)return{value:e,isEmptyValue:!0};var r=t.type?_T(e,Array.isArray(t.type)?t.type[0]:t.type,n):{value:e};if(r.error)return r;if(e===oT)return{value:e,isEmptyValue:!0};if(t.oneOf){var i=gT(r.value,t.oneOf);if(i)return i}if(t.validate)try{t.validate(r.value)}catch(e){return{error:e.message}}return{value:r.value,isEmptyValue:OT(r.value)}}function gT(e,t){if(t.indexOf(e)<0)return{error:`invalid`,reason:`unknown`}}function _T(e,t){switch(t){case String:return vT(e,Bw);case Number:return vT(e,zw);case Date:return vT(e,Hw);case Boolean:return vT(e,Vw);default:if(typeof t!=`function`)throw Error(`Unsupported schema \`type\`: ${t&&t.name||t}`);return vT(e,t)}}function vT(e,t){try{var n=t(e);return n===void 0?{value:oT}:{value:n}}catch(e){var r={error:e.message};return e.reason&&(r.reason=e.reason),r}}function yT(e,t,n){for(var r=0,i=``;n+r<e.length;){var a=e[n+r];if(a===t)return[i,r];i+=a,r++}return[i,r]}function bT(e,t){for(var n=[],r=0;r<e.length;){var i=Kw(yT(e,t,r),2),a=i[0],o=i[1];r+=o+t.length,n.push(a.trim())}return n}function xT(e,t,n,r){if(t){if(Ww(e))return r.transformEmptyObject(e,{path:n});if(Array.isArray(e))return r.transformEmptyArray(e,{path:n})}return e}function ST(e,t){return`${t?t+`.`:``}${e}`}function CT(e,t,n,r,i,a,o,s,c,l){var u=[],d=wT(e,a,o,s,c);if(d&&n&&u.push(TT({error:`required`,column:e.column,columnIndex:l.indexOf(e.column),valueType:e.type,value:t})),i)for(var f=rT(i),p;!(p=f()).done;){var m=p.value,h=CT(m.schemaEntry,m.value,m.isEmptyValue,m.errors,m.children,d,t,n,r,l);h&&(u=u.concat(h))}if(u.length>0)return u}function wT(e,t,n,r,i){return t===!1&&(r||i)?!1:e.required&&(typeof e.required==`boolean`?e.required:!i&&e.required(n))}function TT(e){var t=e.column,n=e.columnIndex,r=e.valueType,i=e.value,a=e.error,o=e.reason,s={error:a,column:t,columnIndex:n,value:i};return o&&(s.reason=o),r&&(s.type=r),s}function ET(e){for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t],i=e[r];if(Gw(i.type)===`object`&&!Array.isArray(i.type))throw Error("When defining a nested schema, use a `schema` property instead of a `type` property");if(!i.schema&&!i.column)throw Error(`"column" not defined for schema entry "${r}".`)}DT(e,void 0)}function DT(e,t){if(t!==void 0&&t!==!1)throw Error(`In a schema, a nested object can have a \`required\` property but the only allowed value is \`undefined\` or \`false\`. Otherwise, a "required" error for a nested object would have to include a specific \`column\` title and a nested object doesn't have one. You've specified the following \`required\`: ${t}`);for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];if(Ww(e[i].schema)){if(e[i].column)throw Error(`In a schema, \`column\` property is only allowed when describing a property value rather than a nested object. Key: ${i}. Schema:
${JSON.stringify(e[i],null,2)}`);DT(e[i].schema,e[i].required)}}}function OT(e){return e==null}var kT={propertyValueWhenColumnIsMissing:void 0,propertyValueWhenCellIsEmpty:null,transformEmptyObject:function(){return null},transformEmptyArray:function(){return null},separatorCharacter:`,`};function AT(e){return e?$w($w({},kT),e):kT}var jT={};function MT(e){"@babel/helpers - typeof";return MT=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},MT(e)}var NT=[`schema`];function PT(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function FT(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?PT(Object(n),!0).forEach(function(t){IT(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):PT(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function IT(e,t,n){return t=LT(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LT(e){var t=RT(e,`string`);return MT(t)===`symbol`?t:String(t)}function RT(e,t){if(MT(e)!==`object`||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(MT(r)!==`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function zT(e,t){if(e==null)return{};var n=BT(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function BT(e,t){if(e==null)return{};for(var n={},r=Object.keys(e),i,a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function VT(e,t,n,r,i){var a=i||{},o=a.schema;return hw(e,t,n,FT(FT({},zT(a,NT)),{},{sheets:[r===void 0?1:r]})).then(function(e){var t=e[0].data;return o?sT(t,o):t})}function HT(e,t,n){return!n&&t&&typeof t!=`number`&&typeof t!=`string`&&(n=t,t=void 0),qS(e).then(function(e){return VT(Cb,Gb,e,t,n)})}var UT=e=>`第 ${e} 組`,WT=e=>`★`.repeat(Math.floor(e))+`☆`.repeat(5-Math.floor(e));function GT(e,t){let n=e.mode===`team`?e.teams.filter(e=>e.rank!==null).map(e=>({name:UT(e.team),score:e.avg,rank:e.rank,sub:e.members.map(e=>e.name).join(`、`)})):e.ranking.slice(0,10).map(e=>({name:e.name,score:e.stars,rank:e.rank,sub:`${String(e.no).padStart(2,`0`)} 號`})),r=n.slice(0,3),i=r.length===3?[r[1],r[0],r[2]]:r,a=n.length,o=e=>Math.max(0,a-e)*350,s=Array.from({length:26},(e,t)=>`<i class="confetti" style="--x:${t*4}%;--d:${t%5*.3+1}s;--c:${[`#eaca76`,`#dbe8b9`,`#e69f67`][t%3]}"></i>`).join(``),c=n.slice(3);return`<section class="reveal">${s}<div class="eyebrow" style="color:#bacba3">A ROUND OF APPLAUSE FOR EVERYONE</div>
<h2>一起捏出，我們的高光時刻。</h2><p class="reveal-sub">${u(t)} · 全班平均 ${e.classAvg.toFixed(1)} 顆星</p>
<div class="podiums">${i.map(e=>`<div class="podium" style="animation-delay:${o(e.rank)}ms"><h3>${e.rank===1?`✦ `:``}${u(e.name)}</h3>
<p><span class="count-score" data-score="${e.score}" data-delay="${o(e.rank)}">0.0</span> <span style="font-size:15px">★</span></p>
<div class="reveal-stars" style="font-size:17px;color:#eaca76;margin-bottom:12px">☆☆☆☆☆</div><div class="bar" style="height:${210-e.rank*35}px">${e.rank}</div><div class="podium-sub">${u(e.sub)}</div></div>`).join(``)}</div>
${c.length?`<div class="reveal-rest">${c.map(e=>`<span>第 ${e.rank} 名　${u(e.name)}　${e.score.toFixed(1)} ★</span>`).join(``)}</div>`:``}
<p class="reveal-note">${e.mode===`team`?`小組分數＝組員最高星數的平均，沒作答的同學以 0 星計入。`:`個人成績取最高星數。`}平均取小數點後 1 位，同分並列同名次。</p>
<button class="secondary" data-act="back-board" style="margin-top:15px">返回計分面板</button></section>`}function KT(e,t){let n=performance.now(),r=[...e.querySelectorAll(`.count-score`)],i=!1,a=e=>{let o=!1;for(let t of r){if(!t.isConnected)continue;let r=Math.max(0,Math.min(1,(e-n-Number(t.dataset.delay))/1400)),i=Number(t.dataset.score)*(1-(1-r)**3);t.textContent=i.toFixed(1);let a=t.parentElement?.nextElementSibling;a&&(a.textContent=WT(i)),r<1&&(o=!0)}o?requestAnimationFrame(a):!i&&r.length&&r[0].isConnected&&(i=!0,t.play(`pass`))};requestAnimationFrame(a)}var qT={draft:`草稿`,published:`已發布`,closed:`已關閉`,settled:`已結算`},JT={draft:`gray`,published:`gold`,closed:``,settled:``},YT=5e3,XT=e=>String(e).padStart(2,`0`),ZT=e=>e.length?Math.round(e.reduce((e,t)=>e+t.best,0)/e.length*10)/10:0,QT=e=>new Date(e).toLocaleDateString(`zh-TW`,{year:`numeric`,month:`2-digit`,day:`2-digit`}),$T=class{ctx;main;tab=`tests`;quizzes=[];roster=[];questions=[];board=null;boardId=null;latestBoard=null;showReveal=!1;poll=0;dragging=!1;alive=!0;constructor(e){this.ctx=e}mount(e){this.main=e,this.boot()}unmount(){this.alive=!1,clearInterval(this.poll)}async boot(){this.main.innerHTML=this.header(`老師的地形工作室`,`正在確認學校身分…`);let e=null;try{e=await Ky()}catch{}if(this.alive){if(!e)return this.renderLogin();if(e.role!==`admin`)return this.renderForbidden(e.name);this.ctx.setUser({name:e.name||e.account,detail:`老師`}),await this.refreshAll(),this.render(),this.poll=window.setInterval(()=>void this.pollBoard(),YT)}}renderLogin(){this.main.innerHTML=`${this.header(`老師的地形工作室`,`建立測驗、管理名單、計分與結算。`)}
<section class="card login-card"><div class="login-icon">${b(`grid`)}</div><h2>老師請用學校帳號登入</h2><p>只有老師帳號可以進入後台。</p><button class="primary" data-act="login">${b(`lock`)}用學校帳號登入</button><button class="secondary" data-act="practice">回自由練習</button></section>`,this.main.querySelector(`[data-act=login]`).addEventListener(`click`,()=>{let e=new URL(location.href);e.searchParams.set(`view`,`teacher`),qy(e.toString())}),this.main.querySelector(`[data-act=practice]`).addEventListener(`click`,()=>this.ctx.nav(`practice`))}renderForbidden(e){this.main.innerHTML=`${this.header(`老師的地形工作室`,`這裡是老師專用的頁面。`)}
<section class="card login-card"><div class="login-icon">${b(`lock`)}</div><h2>${u(e)}，這裡只有老師能進來</h2><p>要作答請到「班級測驗」。</p><button class="primary" data-act="quiz">去班級測驗</button><button class="secondary" data-act="relogin">換老師帳號登入</button></section>`,this.main.querySelector(`[data-act=quiz]`).addEventListener(`click`,()=>this.ctx.nav(`quiz`)),this.main.querySelector(`[data-act=relogin]`).addEventListener(`click`,async()=>{await Jy();let e=new URL(location.href);e.searchParams.set(`view`,`teacher`),qy(e.toString())})}async refreshAll(){try{[this.quizzes,this.roster,this.questions]=await Promise.all([eb.get(`/api/quizzes`),eb.get(`/api/roster`),eb.get(`/api/questions`)]);let e=this.quizzes.find(e=>e.status!==`draft`);this.latestBoard=e?await eb.get(`/api/quizzes/${e.id}/board`):null,this.boardId&&(this.board=await eb.get(`/api/quizzes/${this.boardId}/board`))}catch(e){m(tb(e),5e3)}}async pollBoard(){if(!(!this.alive||this.tab!==`board`||!this.boardId||this.dragging||this.showReveal||v())&&this.board?.quiz.status===`published`)try{this.board=await eb.get(`/api/quizzes/${this.boardId}/board`),!this.dragging&&!v()&&this.renderBody()}catch{}}header(e,t,n=``){return`<div class="title-row"><div><div class="eyebrow">TEACHER’S WORKSPACE</div><h1>${u(e)}</h1><p>${t}</p></div>${n}</div>`}render(){let e=this.tab===`board`&&this.board,t=e?`<button class="secondary" data-act="back">← 返回測驗管理</button>`:`<button class="primary" data-act="create">${b(`plus`)}建立測驗</button>`;this.main.innerHTML=`${this.header(e?this.board.quiz.title:`老師的地形工作室`,`${this.roster.length} 位學生${e?` · ${this.board.quiz.mode===`team`?`分組賽 · ${this.board.quiz.teamCount} 組`:`個人賽`}`:``}`,t)}
<nav class="teacher-nav">${[[`tests`,`測驗管理`],[`roster`,`班級名單`],[`questions`,`概念題題庫`],[`board`,`計分面板`]].map(([e,t])=>`<button class="${this.tab===e?`active`:``}" data-tab="${e}">${t}</button>`).join(``)}</nav><div data-role="body"></div>`,this.main.querySelector(`[data-act=back]`)?.addEventListener(`click`,()=>this.setTab(`tests`)),this.main.querySelector(`[data-act=create]`)?.addEventListener(`click`,()=>void this.createQuiz()),this.main.querySelectorAll(`[data-tab]`).forEach(e=>e.addEventListener(`click`,()=>this.setTab(e.dataset.tab))),this.renderBody()}setTab(e){if(this.tab=e,this.showReveal=!1,e===`board`&&!this.boardId){let e=this.quizzes.find(e=>e.status!==`draft`)??this.quizzes[0];if(e)return void this.openBoard(e.id)}this.render()}renderBody(){let e=this.main.querySelector(`[data-role=body]`);e&&(e.innerHTML=this.tab===`tests`?this.testsHtml():this.tab===`roster`?this.rosterHtml():this.tab===`questions`?this.questionsHtml():this.boardHtml(),this.bindBody(e))}testsHtml(){let e=this.latestBoard,t=e?e.students.filter(e=>e.attempts>0).length:0;return`<div class="stats"><div class="stat"><small>班級學生</small><strong>${this.roster.length}<span> 人</span></strong></div>
<div class="stat"><small>進行中測驗</small><strong>${this.quizzes.filter(e=>e.status===`published`).length}<span> 份</span></strong></div>
<div class="stat"><small>已參與學生${e?`（${u(e.quiz.title)}）`:``}</small><strong>${t}<span> / ${this.roster.length}</span></strong></div>
<div class="stat"><small>全班平均${e?`（最近一次）`:``}</small><strong>${ZT(e?.students??[]).toFixed(1)}<span> 顆星</span></strong></div></div>
${this.quizzes.length?`<div class="table-wrap"><table><thead><tr><th>測驗名稱</th><th>模式</th><th>狀態</th><th>建立日期</th><th>操作</th></tr></thead><tbody>${this.quizzes.map(e=>`<tr><td><strong>${u(e.title)}</strong></td><td>${e.mode===`team`?`分組賽 · ${e.teamCount} 組`:`個人賽`}</td>
<td><span class="pill ${JT[e.status]}">${qT[e.status]}</span></td><td>${QT(e.createdAt)}</td>
<td class="row-actions"><button data-board="${e.id}">${e.status===`settled`?`查看結果`:`計分面板`}</button>${e.status===`draft`?`<button data-publish="${e.id}">發布測驗 ↗</button><button data-delete="${e.id}" class="danger-text">刪除</button>`:e.status===`published`?`<button data-close="${e.id}">關閉</button>`:``}</td></tr>`).join(``)}</tbody></table></div>`:`<section class="card empty"><h2>還沒有測驗</h2><p>按右上角「建立測驗」開始。</p></section>`}
<div class="learn-strip" style="margin-top:25px"><div class="learn-icon">${b(`bulb`)}</div><div><h3>準備好了，再讓全班一起出發。</h3><p>先建立草稿，按「發布」後學生才會看到新測驗通知；「關閉」後學生不能再作答，接著就可以結算並揭曉成績。</p></div></div>`}async createQuiz(){let e=``;for(;;){let t=await g(`建立新測驗`,`<label class="form-field">測驗名稱<input id="f-title" maxlength="40" placeholder="例如：臺灣地形大挑戰"></label>
<label class="form-field">競賽模式<select id="f-mode"><option value="team">分組賽</option><option value="solo">個人賽</option></select></label>
<label class="form-field" id="f-team-field">小組數量<select id="f-teams">${[2,3,4,5,6,7,8].map(e=>`<option ${e===6?`selected`:``}>${e}</option>`).join(``)}</select></label><p>先存成草稿，準備好再發布給學生。每次作答 5 題：捏地形 3 題、概念選擇題 2 題。</p>${e?`<p class="form-error">${u(e)}</p>`:``}`,[{label:`取消`,value:`cancel`},{label:`建立草稿`,primary:!0,value:`ok`}]),n=document.getElementById(`modal`),r=d(`#f-title`,n).value.trim(),i=d(`#f-mode`,n).value,a=Number(d(`#f-teams`,n).value);if(t!==`ok`)return;if(!r){e=`請輸入測驗名稱`;continue}try{await eb.post(`/api/quizzes`,{title:r,mode:i,teamCount:a}),m(`草稿已建立，發布後才會出現在學生首頁。`),await this.refreshAll(),this.boardId=null,this.tab=`tests`,this.render()}catch(e){m(tb(e),5e3)}return}}async publish(e){await g(`發布測驗？`,`<p>發布後，全班學生登入時會看到「${u(this.quizzes.find(t=>t.id===e).title)}」的新測驗通知，可以開始作答。</p>`,[{label:`先不要`,value:`no`},{label:`發布`,primary:!0,value:`yes`}])===`yes`&&await this.act(()=>eb.post(`/api/quizzes/${e}/publish`),`測驗已發布，學生首頁會出現新測驗。`)}async close(e){await g(`確定要關閉測驗？`,`<p>關閉後學生就不能再作答或重考；正在作答的同學，已提交的題目會保留，其餘算錯。關閉後就可以結算。</p>`,[{label:`繼續開放`,value:`no`},{label:`確定關閉`,primary:!0,danger:!0,value:`yes`}])===`yes`&&await this.act(()=>eb.post(`/api/quizzes/${e}/close`),`測驗已關閉，可以準備揭曉成績。`)}async remove(e){await g(`刪除草稿？`,`<p>「${u(this.quizzes.find(t=>t.id===e).title)}」還沒發布，刪除後無法復原。</p>`,[{label:`保留`,value:`no`},{label:`刪除`,primary:!0,danger:!0,value:`yes`}])===`yes`&&(this.boardId===e&&(this.boardId=null),await this.act(()=>eb.del(`/api/quizzes/${e}`),`草稿已刪除。`))}async act(e,t){try{await e(),m(t)}catch(e){m(tb(e),5e3)}await this.refreshAll(),this.render()}rosterHtml(){return`<div class="card-row" style="margin-bottom:20px"><p class="muted">${this.roster.length} 位學生 · 帳號就是學校 SSO 的學號，用來比對登入的學生</p>
<div class="row-actions"><label class="secondary file-btn">${b(`plus`)}匯入 Excel（account.xlsx）<input type="file" accept=".xlsx" data-act="roster-file" hidden></label><button class="secondary" data-act="roster-paste">貼上名單</button></div></div>
${this.roster.length?`<div class="table-wrap"><table><thead><tr><th>座號</th><th>帳號（學號）</th><th>姓名</th><th>作答狀態</th></tr></thead><tbody>${this.roster.map(e=>`<tr><td>${XT(e.no)}</td><td>${u(e.uid)}</td><td>${u(e.name)}</td><td><span class="pill ${e.attempts?``:`gray`}">${e.attempts?`已參與`:`尚未作答`}</span></td></tr>`).join(``)}</tbody></table></div>`:`<section class="card empty"><h2>還沒有名單</h2><p>匯入 account.xlsx（欄位：no、account、name），或把 Excel 的三欄直接複製貼上。</p></section>`}`}parseRows(e){let t=[];for(let n of e){let e=n.map(e=>String(e??``).trim());if(!e.every(e=>!e)&&/^\d+$/.test(e[0])){if(e.length<3||!e[1]||!e[2])return{rows:t,error:`第 ${e[0]} 號的資料不完整`};t.push({no:Number(e[0]),uid:e[1],name:e[2]})}}return t.length?new Set(t.map(e=>e.no)).size===t.length?new Set(t.map(e=>e.uid)).size===t.length?{rows:t,error:``}:{rows:t,error:`名單裡有重複的帳號`}:{rows:t,error:`名單裡有重複的座號`}:{rows:t,error:`沒有讀到任何學生：每一列要有座號、帳號、姓名`}}async confirmRoster(e){await g(`確認班級名單`,`<p>共 <strong>${e.length}</strong> 位學生，會取代目前的名單（已作答的成績不會刪除）。</p><div class="table-wrap preview"><table><thead><tr><th>座號</th><th>帳號</th><th>姓名</th></tr></thead><tbody>${e.slice(0,8).map(e=>`<tr><td>${XT(e.no)}</td><td>${u(e.uid)}</td><td>${u(e.name)}</td></tr>`).join(``)}${e.length>8?`<tr><td colspan="3">…還有 ${e.length-8} 位</td></tr>`:``}</tbody></table></div>`,[{label:`取消`,value:`no`},{label:`套用名單`,primary:!0,value:`yes`}])===`yes`&&await this.act(()=>eb.put(`/api/roster`,{students:e}),`已匯入 ${e.length} 位學生。`)}async rosterFromFile(e){try{let t=await HT(e),n=this.parseRows(t);if(n.error)return void m(n.error,5e3);await this.confirmRoster(n.rows)}catch{m(`讀不到這個 Excel 檔，請確認是 .xlsx 格式`,5e3)}}async rosterFromPaste(){if(await g(`貼上班級名單`,`<p>每行一位學生：座號、帳號、姓名，用逗號或 Tab 分隔（從 Excel 直接複製三欄貼上即可）。</p><textarea id="f-roster" aria-label="班級名單" placeholder="1,hs112001,王小明"></textarea>`,[{label:`取消`,value:`no`},{label:`下一步`,primary:!0,value:`yes`}])!==`yes`)return;let e=d(`#f-roster`,document.getElementById(`modal`)).value,t=this.parseRows(e.split(/\r?\n/).map(e=>e.split(/[,\t、]/)));if(t.error)return void m(t.error,5e3);await this.confirmRoster(t.rows)}questionsHtml(){return`<div class="card-row" style="margin-bottom:20px"><p class="muted">啟用中 ${this.questions.filter(e=>e.active).length} 題 · 每次作答隨機抽 2 題，選項順序也會打亂 · 答案只存在伺服器</p>
<label class="secondary file-btn">${b(`plus`)}匯入／更新題庫（JSON）<input type="file" accept=".json,application/json" data-act="q-file" hidden></label></div>
${this.questions.length?`<div class="table-wrap"><table><thead><tr><th>編號</th><th>題目</th><th>正確答案</th><th>狀態</th><th>操作</th></tr></thead><tbody>${this.questions.map(e=>`<tr><td>${u(e.id)}</td><td class="wrap">${u(e.stem)}</td><td class="wrap">${u(e.options[e.answer])}</td>
<td><span class="pill ${e.active?``:`gray`}">${e.active?`啟用`:`停用`}</span></td><td class="row-actions"><button data-edit-q="${u(e.id)}">檢視／編輯</button></td></tr>`).join(``)}</tbody></table></div>`:`<section class="card empty"><h2>題庫是空的</h2><p>請匯入 question-bank.json（由 social-題目卷 與解析卷整理，已核對答案）。</p></section>`}`}async questionsFromFile(e){let t;try{let n=JSON.parse(await e.text());if(t=Array.isArray(n)?n:n.questions,!Array.isArray(t))throw Error()}catch{m(`讀不到題庫：請選擇 question-bank.json`,5e3);return}await g(`更新題庫？`,`<p>檔案裡有 <strong>${t.length}</strong> 題。匯入後會取代目前的題庫；不在檔案裡的舊題目會停用（舊的作答紀錄仍保留）。</p>`,[{label:`取消`,value:`no`},{label:`匯入`,primary:!0,value:`yes`}])===`yes`&&await this.act(()=>eb.put(`/api/questions`,{questions:t.map(e=>({id:e.id,stem:e.stem,options:e.options,answer:e.answer,explanation:e.explanation??``,active:e.active!==!1}))}),`題庫已更新，共 ${t.length} 題。`)}async editQuestion(e){let t=this.questions.find(t=>t.id===e);if(await g(`編輯題目 ${t.id}`,`<label class="form-field">題目<textarea id="f-stem" style="height:90px">${u(t.stem)}</textarea></label>${t.options.map((e,t)=>`<label class="form-field">選項 ${String.fromCharCode(65+t)}<input id="f-opt-${t}" value="${u(e)}"></label>`).join(``)}<label class="form-field">正確答案<select id="f-answer">${t.options.map((e,n)=>`<option value="${n}" ${n===t.answer?`selected`:``}>選項 ${String.fromCharCode(65+n)}</option>`).join(``)}</select></label><label class="form-field">解析（作答後顯示給學生）<input id="f-exp" value="${u(t.explanation)}"></label>
<label class="toggle-label"><input type="checkbox" id="f-active" ${t.active?`checked`:``}>啟用這一題</label>`,[{label:`取消`,value:`no`},{label:`儲存`,primary:!0,value:`yes`}])!==`yes`)return;let n=document.getElementById(`modal`),r={id:t.id,stem:d(`#f-stem`,n).value.trim(),options:[0,1,2,3].map(e=>d(`#f-opt-${e}`,n).value.trim()),answer:Number(d(`#f-answer`,n).value),explanation:d(`#f-exp`,n).value.trim(),active:d(`#f-active`,n).checked};if(!r.stem||r.options.some(e=>!e)||new Set(r.options).size!==4)return void m(`請填入完整題目與四個不同的選項`,5e3);await this.act(()=>eb.put(`/api/questions`,{questions:this.questions.map(t=>t.id===e?r:t)}),`題目已更新。`)}async openBoard(e){this.boardId=e,this.tab=`board`,this.showReveal=!1;try{this.board=await eb.get(`/api/quizzes/${e}/board`)}catch(e){m(tb(e),5e3)}this.render()}boardHtml(){let e=this.board;if(!e)return`<section class="card empty"><h2>還沒有測驗</h2><p>先到「測驗管理」建立並發布測驗。</p></section>`;let t=e.quiz;if(this.showReveal&&e.settlement)return GT(e.settlement,t.title);let n=this.quizzes.length>1?`<select class="quiz-picker" data-act="pick" aria-label="選擇測驗">${this.quizzes.map(e=>`<option value="${e.id}" ${e.id===t.id?`selected`:``}>${u(e.title)}（${qT[e.status]}）</option>`).join(``)}</select>`:``,r=t.status===`draft`||t.status===`published`;return`<div class="board-actions"><span class="pill ${JT[t.status]}">${qT[t.status]}</span>
<span class="muted small">${t.mode===`team`?`分組賽`:`個人賽`} · ${t.status===`published`?`每 5 秒自動更新`:`成績已保留`}</span>${n}<span class="spacer"></span>
${t.mode===`team`&&t.status!==`settled`?`<button class="secondary" data-act="copy-teams">沿用上次分組</button>`:``}
<button class="secondary" data-act="export">${b(`download`)}匯出成績</button>
${t.status===`published`?`<button class="secondary danger" data-close="${t.id}">關閉測驗</button>`:t.status===`draft`?`<button class="secondary" data-publish="${t.id}">發布測驗</button>`:``}
<button class="primary" data-act="settle" ${r?`disabled title="請先關閉測驗，再進行結算"`:``}>${b(`trophy`)}${t.status===`settled`?`重播揭曉`:`結算並揭曉`}</button></div>`+(t.mode===`team`?this.teamHtml(e):this.rankingHtml(e.students))}cardHtml(e,t){let n=t.status===`settled`;return`<div class="student" ${n?``:`draggable="true" data-drag="${u(e.uid)}"`}><span class="seat">${XT(e.no)}</span><strong>${u(e.name)}</strong>
<span class="star-score">${e.attempts||e.best?`${e.best} ★`:`未作答`}</span>${n?``:`<select data-move="${u(e.uid)}" aria-label="${u(e.name)}的組別"><option value="0" ${e.team?``:`selected`}>待分組</option>${Array.from({length:t.teamCount},(t,n)=>`<option value="${n+1}" ${e.team===n+1?`selected`:``}>第 ${n+1} 組</option>`).join(``)}</select>`}</div>`}teamHtml(e){let t=e.quiz,n=t=>e.students.filter(e=>e.team===t),r=e.students.filter(e=>!e.team||e.team>t.teamCount);return`<div class="board-layout"><div class="groups">${Array.from({length:t.teamCount},(e,r)=>{let i=n(r+1);return`<section class="group" data-drop="${r+1}"><div class="group-head"><h3><span class="group-num">${XT(r+1)}</span>第 ${r+1} 組</h3><span class="group-score">${ZT(i).toFixed(1)}<small> ★</small></span></div>
<p class="group-meta">${i.length} 位成員 · ${i.filter(e=>e.attempts||e.best).length} 人已作答</p>${i.map(e=>this.cardHtml(e,t)).join(``)||`<div class="empty">拖曳學生到這裡</div>`}</section>`}).join(``)}</div>
<aside class="unassigned" data-drop="0"><h3>個人點數 <span class="pill">${r.length}</span></h3><p>拖曳卡片到小組，或用選單選組別。</p>${r.map(e=>this.cardHtml(e,t)).join(``)||`<p class="empty">全班都已分組！</p>`}</aside></div>
<div class="underbar"><span>小組分數＝組員最高星數的平均 · 沒作答以 0 星計入</span><span data-role="save">分組變更會自動儲存</span></div>`}rankingHtml(e){let t=[...e].sort((e,t)=>t.best-e.best||e.no-t.no),n=e=>1+t.filter(t=>t.best>e.best).length;return`<div class="stats"><div class="stat"><small>全班平均</small><strong>${ZT(e).toFixed(1)}<span> 顆星</span></strong></div>
<div class="stat"><small>已作答</small><strong>${e.filter(e=>e.attempts||e.best).length}<span> 人</span></strong></div>
<div class="stat"><small>滿星學生</small><strong>${e.filter(e=>e.best===5).length}<span> 人</span></strong></div>
<div class="stat"><small>總作答次數</small><strong>${e.reduce((e,t)=>e+t.attempts,0)}<span> 次</span></strong></div></div>
<div class="table-wrap"><table><thead><tr><th>名次</th><th>座號</th><th>姓名</th><th>最高星數</th><th>作答次數</th></tr></thead><tbody>${t.map(e=>`<tr><td>${n(e)}</td><td>${XT(e.no)}</td><td>${u(e.name)}</td><td class="stars">${f(e.best)}</td><td>${e.attempts?`${e.attempts} 次`:`尚未作答`}</td></tr>`).join(``)}</tbody></table></div>`}async moveStudent(e,t){let n=this.board,r=n.students.find(t=>t.uid===e);if(!r||(r.team??0)===t)return;let i=r.team;r.team=t||null,this.renderBody();let a=this.main.querySelector(`[data-role=save]`);a&&(a.textContent=`儲存中…`);try{await eb.put(`/api/quizzes/${n.quiz.id}/teams`,{uid:e,team:t||null});let r=this.main.querySelector(`[data-role=save]`);r&&(r.textContent=`分組已儲存`)}catch(e){r.team=i,this.renderBody();let t=this.main.querySelector(`[data-role=save]`);t&&(t.textContent=`尚未儲存，請再試一次`),m(`${tb(e)}（分組尚未儲存）`,5e3)}}async settle(){let e=this.board;if(e.quiz.status===`settled`){this.showReveal=!0,this.renderBody();return}let t=e.quiz.mode===`team`?e.students.filter(e=>!e.team).length:0;if(await g(`一起揭曉，努力的成果！`,`<p>${t?`還有 <strong>${t} 人未分組</strong>，這些同學不計入任何一組。<br>`:``}${e.quiz.mode===`team`?`沒作答的組員以 0 星列入平均。`:`全班平均包含還沒作答的同學。`}結算後分組和結果就會固定。</p>`,[{label:`返回確認`,value:`no`},{label:`開始揭曉 ✦`,primary:!0,value:`yes`}])===`yes`)try{let t=await eb.post(`/api/quizzes/${e.quiz.id}/settle`);await this.refreshAll(),this.board.settlement=t,this.showReveal=!0,this.render()}catch(e){m(tb(e),5e3)}}async exportCsv(){let e=this.board;try{let t=await eb.blob(`/api/quizzes/${e.quiz.id}/export.csv`),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`${e.quiz.title}_成績.csv`,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3),m(`已匯出成績（可以用 Excel 開啟）。`)}catch(e){m(tb(e),5e3)}}bindBody(e){e.querySelectorAll(`[data-board]`).forEach(e=>e.addEventListener(`click`,()=>void this.openBoard(e.dataset.board))),e.querySelectorAll(`[data-publish]`).forEach(e=>e.addEventListener(`click`,()=>void this.publish(e.dataset.publish))),e.querySelectorAll(`[data-close]`).forEach(e=>e.addEventListener(`click`,()=>void this.close(e.dataset.close))),e.querySelectorAll(`[data-delete]`).forEach(e=>e.addEventListener(`click`,()=>void this.remove(e.dataset.delete))),e.querySelector(`[data-act=roster-file]`)?.addEventListener(`change`,e=>{let t=e.target.files?.[0];t&&this.rosterFromFile(t)}),e.querySelector(`[data-act=roster-paste]`)?.addEventListener(`click`,()=>void this.rosterFromPaste()),e.querySelector(`[data-act=q-file]`)?.addEventListener(`change`,e=>{let t=e.target.files?.[0];t&&this.questionsFromFile(t)}),e.querySelectorAll(`[data-edit-q]`).forEach(e=>e.addEventListener(`click`,()=>void this.editQuestion(e.dataset.editQ))),e.querySelector(`[data-act=pick]`)?.addEventListener(`change`,e=>void this.openBoard(e.target.value)),e.querySelector(`[data-act=copy-teams]`)?.addEventListener(`click`,async()=>{try{await eb.post(`/api/quizzes/${this.board.quiz.id}/teams/copy`),m(`已套用上一次的分組。`),this.board=await eb.get(`/api/quizzes/${this.board.quiz.id}/board`),this.renderBody()}catch(e){m(tb(e),5e3)}}),e.querySelector(`[data-act=export]`)?.addEventListener(`click`,()=>void this.exportCsv()),e.querySelector(`[data-act=settle]`)?.addEventListener(`click`,()=>void this.settle()),e.querySelector(`[data-act=back-board]`)?.addEventListener(`click`,()=>{this.showReveal=!1,this.renderBody()}),this.showReveal&&KT(e,this.ctx.audio),e.querySelectorAll(`[data-move]`).forEach(e=>e.addEventListener(`change`,()=>void this.moveStudent(e.dataset.move,Number(e.value)))),e.querySelectorAll(`[data-drag]`).forEach(e=>{e.addEventListener(`dragstart`,t=>{this.dragging=!0,t.dataTransfer?.setData(`text/plain`,e.dataset.drag),e.classList.add(`dragging`)}),e.addEventListener(`dragend`,()=>{this.dragging=!1,e.classList.remove(`dragging`)})}),e.querySelectorAll(`[data-drop]`).forEach(e=>{e.addEventListener(`dragover`,t=>{t.preventDefault(),e.classList.add(`drag-over`)}),e.addEventListener(`dragleave`,()=>e.classList.remove(`drag-over`)),e.addEventListener(`drop`,t=>{t.preventDefault(),e.classList.remove(`drag-over`),this.dragging=!1;let n=t.dataTransfer?.getData(`text/plain`);n&&this.moveStudent(n,Number(e.dataset.drop))})})}},eE=[[`practice`,`hand`,`自由練習`],[`quiz`,`trophy`,`班級測驗`],[`teacher`,`grid`,`老師後台`]],tE=class{cfg;levels;params;audio=new l;page=`practice`;view=null;main;constructor(e,t,n,r){this.cfg=t,this.levels=n,this.params=r,e.innerHTML=`<div class="shell"><aside class="rail"><a class="brand-symbol" href="./" aria-label="黏土捏地形首頁" data-nav="practice">${b(`mountain`)}</a>${eE.map(([e,t,n])=>`<button data-nav="${e}">${b(t)}${n}</button>`).join(``)}<span class="rail-label">EXPLORE · SHAPE · DISCOVER</span><button class="bottom" data-act="help">${b(`help`)}使用說明</button></aside>
<header class="topbar"><a class="brand" href="./" data-nav="practice">黏土捏地形 <small>TERRAIN STUDIO</small></a><div class="top-actions"><button class="help-btn" data-act="help">玩法說明</button><div class="avatar"><span class="avatar-circle" data-role="avatar">訪</span><span data-role="user">小小地形探險家</span></div></div></header>
<main class="content" id="main"></main></div>`,this.main=e.querySelector(`#main`),e.querySelectorAll(`[data-nav]`).forEach(e=>e.addEventListener(`click`,t=>{t.preventDefault(),this.nav(e.dataset.nav)})),e.querySelectorAll(`[data-act=help]`).forEach(e=>e.addEventListener(`click`,()=>nE())),window.addEventListener(`pointerdown`,()=>this.audio.unlock(),{once:!0});let i=r.get(`view`);this.show(i===`quiz`||i===`teacher`?i:r.has(`quiz`)?`quiz`:`practice`)}async nav(e){e!==this.page&&(!this.view?.canLeave||await this.view.canLeave())&&this.show(e)}show(e){this.view?.unmount(),this.page=e,document.querySelectorAll(`.rail [data-nav]`).forEach(t=>t.classList.toggle(`active`,t.dataset.nav===e)),this.view=e===`practice`?new By(this):e===`quiz`?new cb(this):new $T(this),this.main.innerHTML=``,window.scrollTo(0,0),this.view.mount(this.main)}setUser(e){let t=document.querySelector(`[data-role=avatar]`),n=document.querySelector(`[data-role=user]`);t&&n&&(t.textContent=e?e.name.slice(0,1):`訪`,n.innerHTML=e?`${u(e.name)}${e.detail?` · ${u(e.detail)}`:``}`:`小小地形探險家`)}};function nE(){g(`一起捏出臺灣的地形`,`<p>① 在上方選一種想認識的地形。<br>② 選下方的工具，在黏土上按住或拖曳；也可以從兩邊的黏土罐拖一團黏土到土盤上。<br>③ 觀察高度顏色和等高線，再按「檢查我的地形」。</p><p>在土盤外面拖曳可以轉動畫面，兩根手指可以縮放，也能用「俯視」「側看」「還原」。捏錯了可以按「復原」。</p><p>「班級測驗」要用學校帳號登入，每次 5 題，答對 1 題得 1 顆星。</p>`)}
// Exhibition adapter: only the local sculpture practice route is mounted.
async function rE(){
 const [cfg,levels]=await Promise.all(['terrain','levels'].map(n=>fetch('./config/'+n+'.json').then(r=>{if(!r.ok)throw Error('config');return r.json()})));
 const params=new URLSearchParams(location.search);const id=params.get('terrain')||'plain';
 const index=Math.max(0,levels.findIndex(l=>l.id===id));params.set('level',String(index+1));
 const ctx={cfg,levels,params,audio:new l()};ctx.audio.muted=true;
 const view=new By(ctx);view.mount(document.getElementById('app'));
 const send=data=>{if(window.parent!==window)window.parent.postMessage(data,location.origin)};
 let attempts=0,passed=false;
 const tips={plain:'選「壓平」按住凸起，再用「抹平」整理，讓整片地面寬闊平坦。',tableland:'頂部抹平，保留高地四周的坡。切換側看，確認它比周圍高。',hills:'在不同位置各放 1 團黏土，捏出數個和緩小山丘，再抹平尖角。',mountain:'把黏土疊在一起，用「拉高」按住山峰，捏出高聳、坡陡的山。',basin:'用「壓平」整理中央，留下四周較高的邊緣，再抹平中央低地。'};
 const status=document.createElement('div');status.className='clay-guide';status.setAttribute('role','status');status.setAttribute('aria-live','polite');document.getElementById('app').prepend(status);
 function guide(){status.innerHTML='<span>✦ 捏塑提示</span><p></p>';status.querySelector('p').textContent=tips[view.level.id]||view.level.tip;}
 guide();
 const sequences={
 plain:[['press','① 壓平凸起','選壓平，在每個凸起的地方按住；不要只輕點一下。'],['smooth','② 來回抹平','拖曳整理表面，讓整片土地寬闊平坦。'],['side','③ 側看檢查','從側面確認高低起伏很小，再按檢查。']],
 tableland:[['smooth','① 整理頂端','在高地的頂部來回抹平，先保留邊緣。'],['press','② 壓平小凸起','只整理頂面，留下周圍較低、四邊有坡的形狀。'],['side','③ 側看檢查','觀察平坦的頂部是否比周圍高，再按檢查。']],
 hills:[['drop','① 放數個小丘','在 4～5 個不同位置各放 1 團黏土，先不要疊在一起。'],['smooth','② 整理緩坡','抹掉尖角，讓好幾個小山丘和緩地連起來。'],['side','③ 側看檢查','看得到連續起伏、沒有高聳尖峰，再按檢查。']],
 mountain:[['drop','① 堆出山體','從黏土罐拖幾團黏土，疊在土盤中央。'],['raise','② 拉高山峰','選拉高，在山頂按住或向上拖，做出明顯的高峰與陡坡。'],['side','③ 側看檢查','從側面看山峰高度；紅色線是遊戲中的高度參考。']],
 basin:[['press','① 壓低中央','先選壓平，在土堆中央按住，四周先不要動。'],['smooth','② 整理盆底','在中央小範圍抹平，保留一圈較高的邊緣。'],['top','③ 俯視檢查','從上方確認四周圍起來、中央較低，再按檢查。']]
 };
 const coach=document.createElement('details');coach.className='clay-coach';coach.innerHTML='<summary>第一次玩？跟著捏 <span>展開 3 個操作步驟</span></summary><div class="coach-steps"></div><p class="coach-caption">點選步驟會切換工具，地形仍由你親手捏。高度數字是這個遊戲的簡化模型。</p>';
 status.after(coach);
 function buildCoach(){const steps=coach.querySelector('.coach-steps');steps.replaceChildren();for(const [action,title,detail]of sequences[view.level.id]||[]){const button=document.createElement('button');button.className='coach-step';button.type='button';button.innerHTML='<strong>'+title+'</strong><span>'+detail+'</span>';button.addEventListener('click',()=>{steps.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));button.classList.add('selected');if(['side','top'].includes(action)){view.wb.board.setView(action);view.root.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===action));}else view.wb.setTool(action);});steps.append(button);}}
 buildCoach();
 const credit=document.createElement('footer');credit.className='clay-credit';credit.innerHTML='捏塑引擎原作：<a href="https://tyctc128.github.io/topography_game/" target="_blank" rel="noopener noreferrer">黏土捏地形 ↗</a> · 展場闖關介面改編';document.getElementById('app').append(credit);
 // Original board.check evaluates the actual height grid. Neither time nor clicks grant a pass.
 view.check=async function(){
  const terrain=this.level.id;const result=this.wb.board.check(this.level.target);attempts++;
  send({type:'terrain-assessment',terrain,passed:result.passed,score:result.score,stars:result.stars,hints:result.hints||[],attempts});
  if(result.passed){
   status.classList.add('is-passed');status.innerHTML='<span>✓ 地形完成！</span><p>太棒了！你捏出了'+u(this.level.title)+'。等待下一個任務。</p>';
   passed=true;send({type:'terrain-pass',terrain,score:result.score,stars:result.stars,attempts});
   m('完成 '+this.level.title+'！',3500);
  }else{
   status.classList.remove('is-passed');status.innerHTML='<span>再調整一下</span><p></p>';status.querySelector('p').textContent=result.hints?.[0]||tips[terrain];
   await g('再捏一下，就更接近了','<ul class="hint-list">'+(result.hints||[]).map(h=>'<li>'+u(h)+'</li>').join('')+'</ul><p class="small-note">土盤上閃紅色的地方需要再調整。可以不限次數再試。</p>');
  }
 };
 const originalSetLevel=view.setLevel.bind(view);
 function setTerrain(terrain){const idx=levels.findIndex(l=>l.id===terrain);if(idx<0||terrain==='profile')return;const d=document.getElementById('modal');if(d.open)d.close();attempts=0;passed=false;status.classList.remove('is-passed');if(idx===view.index)view.wb.load(view.level);else originalSetLevel(idx);guide();buildCoach();send({type:'terrain-ready',terrain:view.level.id});}
 window.addEventListener('message',event=>{if(event.origin!==location.origin||event.source!==window.parent)return;const data=event.data;if(data?.type==='set-terrain')setTerrain(data.terrain);if(data?.type==='terrain-check')void view.check();});
 window.addEventListener('pointerdown',()=>ctx.audio.unlock(),{once:true});
 send({type:'terrain-ready',terrain:view.level.id});
}
rE().catch(error=>{console.error(error);document.getElementById('app').innerHTML='<p class="load-error">地形工作臺載入失敗，請重新整理頁面。</p>';if(window.parent!==window)window.parent.postMessage({type:'terrain-error',message:'地形工作臺載入失敗'},location.origin)});
export{o as t};
