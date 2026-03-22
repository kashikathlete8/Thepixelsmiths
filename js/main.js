/* ============================================================
   ThePixelSmiths — Main JavaScript
   Handles: Cursor, Loader, Canvas, CMS, Admin, Animations
   Login credentials: admin / pixelsmiths2025
   © 2025 ThePixelSmiths. All rights reserved.
============================================================ */

/* CURSOR — faster lerp */
const cur=document.getElementById('cur'),cr=document.getElementById('cur-r');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;});
(function a(){rx+=(mx-rx)*.2;ry+=(my-ry)*.2;cr.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(a);})();

/* LOADER */
window.addEventListener('load',()=>setTimeout(()=>{const l=document.getElementById('loader');l.style.transition='opacity .5s';l.style.opacity='0';setTimeout(()=>l.style.display='none',520);},1900));

/* HERO CANVAS */
const cv=document.getElementById('hero-canvas'),cx=cv.getContext('2d');
let W,H,pts=[];
function rsz(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;}
rsz();window.addEventListener('resize',rsz);
class Pt{constructor(){this.x=Math.random()*W;this.y=Math.random()*H;this.r=Math.random()*1.1+.2;this.vx=(Math.random()-.5)*.3;this.vy=(Math.random()-.5)*.3;this.a=Math.random()*.45+.08;const c=Math.random();this.col=c<.4?'255,107,43':c<.65?'245,197,66':'240,237,232';}upd(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>W)this.vx*=-1;if(this.y<0||this.y>H)this.vy*=-1;}drw(){cx.beginPath();cx.arc(this.x,this.y,this.r,0,Math.PI*2);cx.fillStyle=`rgba(${this.col},${this.a})`;cx.fill();}}
for(let i=0;i<160;i++)pts.push(new Pt());
(function loop(){cx.clearRect(0,0,W,H);pts.forEach(p=>{p.upd();p.drw();});for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<85){cx.beginPath();cx.strokeStyle=`rgba(255,107,43,${(1-d/85)*.09})`;cx.lineWidth=.5;cx.moveTo(pts[i].x,pts[i].y);cx.lineTo(pts[j].x,pts[j].y);cx.stroke();}}requestAnimationFrame(loop);})();

/* MOBILE NAV */
function toggleMob(){document.getElementById('mob-menu').classList.toggle('open');}
function closeMob(){document.getElementById('mob-menu').classList.remove('open');}

/* TABS */
function switchTab(t,btn){document.querySelectorAll('.w-panel').forEach(p=>p.classList.remove('on'));document.querySelectorAll('.w-tab').forEach(b=>b.classList.remove('on'));document.getElementById('panel-'+t).classList.add('on');btn.classList.add('on');}

/* CONFETTI */
const cl=['#ff6b2b','#f5c542','#ff4d6d','#1de9b6','#f0ede8'];
const cbg=document.getElementById('cbg');
for(let i=0;i<26;i++){const d=document.createElement('div');d.className='c-dot';const sz=Math.random()*7+3;d.style.cssText=`left:${Math.random()*100}%;background:${cl[Math.floor(Math.random()*cl.length)]};width:${sz}px;height:${sz}px;opacity:${Math.random()*.45+.1};border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${Math.random()*13+9}s;animation-delay:-${Math.random()*13}s;`;cbg.appendChild(d);}

/* REVEAL + COUNTERS + SKILL BARS */
const rvObs=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*52);const n=e.target.querySelector('.stat-n');if(n&&!n.dataset.done){n.dataset.done='1';const tg=parseInt(n.dataset.t);let c=0;const inc=tg/52;const t=setInterval(()=>{c=Math.min(c+inc,tg);n.textContent=Math.floor(c)+(n.dataset.t==='100'?'%':'+');if(c>=tg)clearInterval(t);},20);}e.target.querySelectorAll('.sb-fill').forEach(b=>setTimeout(()=>b.style.width=b.dataset.w+'%',300));}});},{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>rvObs.observe(el));

/* FORM */
function submitForm(e){e.preventDefault();const btn=e.target.querySelector('.sub-btn');btn.textContent='Sending...';btn.disabled=true;setTimeout(()=>{e.target.style.display='none';document.getElementById('f-ok').style.display='block';},1100);}

/* LOGIN */
function openLogin(e){if(e)e.preventDefault();document.getElementById('login-modal').classList.add('show');}
function closeLogin(){document.getElementById('login-modal').classList.remove('show');}
document.getElementById('login-modal').addEventListener('click',function(e){if(e.target===this)closeLogin();});
function doLogin(){const u=document.getElementById('lu').value.trim(),p=document.getElementById('lp').value.trim(),err=document.getElementById('lerr');if(u==='admin'&&p==='pixelsmiths2025'){closeLogin();openAdmin();}else{err.style.display='block';const mb=document.querySelector('.modal-box');mb.classList.add('shake');setTimeout(()=>mb.classList.remove('shake'),380);}}
document.getElementById('lp').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});

/* ADMIN */
function openAdmin(){document.getElementById('admin-panel').classList.add('show');document.body.style.overflow='hidden';renderALists();}
function logout(){document.getElementById('admin-panel').classList.remove('show');document.body.style.overflow='';}
function aTab(id,btn){document.querySelectorAll('.adm-sec').forEach(s=>s.classList.remove('on'));document.querySelectorAll('.adm-tab').forEach(b=>b.classList.remove('on'));document.getElementById(id).classList.add('on');btn.classList.add('on');}

/* STORAGE */
function gd(k){try{return JSON.parse(localStorage.getItem('tps_'+k)||'[]');}catch(e){return[];}}
function sd(k,v){localStorage.setItem('tps_'+k,JSON.stringify(v));}

/* ADD PROJECTS */
function ytThumb(url){const m=url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);return m?`https://img.youtube.com/vi/${m[1]}/hqdefault.jpg`:null;}
function addVideo(){const url=document.getElementById('v-url').value.trim(),title=document.getElementById('v-title').value.trim();if(!url||!title){alert('Please fill URL and Title');return;}const items=gd('video');items.push({id:Date.now(),url,title,desc:document.getElementById('v-desc').value,tags:document.getElementById('v-tags').value,client:document.getElementById('v-cli').value,thumb:ytThumb(url),visible:true});sd('video',items);['v-url','v-title','v-desc','v-tags','v-cli'].forEach(id=>document.getElementById(id).value='');renderAll();}
function addDesign(){const title=document.getElementById('d-title').value.trim(),file=document.getElementById('d-img').files[0];if(!title||!file){alert('Please fill Title and upload Image');return;}const r=new FileReader();r.onload=e=>{const items=gd('design');items.push({id:Date.now(),title,img:e.target.result,cat:document.getElementById('d-cat').value,desc:document.getElementById('d-desc').value,client:document.getElementById('d-cli').value,visible:true});sd('design',items);['d-title','d-desc','d-cli'].forEach(id=>document.getElementById(id).value='');document.getElementById('d-img').value='';document.getElementById('d-prv').style.display='none';renderAll();};r.readAsDataURL(file);}
function addWeb(){const title=document.getElementById('w-title').value.trim(),file=document.getElementById('w-img').files[0];if(!title||!file){alert('Please fill Title and upload Screenshot');return;}const r=new FileReader();r.onload=e=>{const items=gd('web');items.push({id:Date.now(),title,img:e.target.result,url:document.getElementById('w-url').value,desc:document.getElementById('w-desc').value,tags:document.getElementById('w-tags').value,visible:true});sd('web',items);['w-title','w-url','w-desc','w-tags'].forEach(id=>document.getElementById(id).value='');document.getElementById('w-img').value='';document.getElementById('w-prv').style.display='none';renderAll();};r.readAsDataURL(file);}
function prvw(inp,pid){const f=inp.files[0];if(!f)return;const r=new FileReader();r.onload=e=>{const i=document.getElementById(pid);i.src=e.target.result;i.style.display='block';};r.readAsDataURL(f);}
function delItem(t,id){if(!confirm('Delete?'))return;sd(t,gd(t).filter(i=>i.id!==id));renderAll();}
function togVis(t,id){const items=gd(t),i=items.find(x=>x.id===id);if(i)i.visible=!i.visible;sd(t,items);renderAll();}

function renderAll(){renderGrid('video');renderGrid('design');renderGrid('web');renderALists();}
function renderGrid(type){
  const g=document.getElementById('grid-'+type);
  const icons={video:'🎬',design:'🎨',web:'🌐'},labels={video:'No videos yet',design:'No designs yet',web:'No web projects yet'};
  const items=gd(type).filter(i=>i.visible);
  if(!items.length){g.innerHTML=`<div class="empty-s"><div class="ei">${icons[type]}</div><div style="font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:.5px;margin-bottom:.3rem;">${labels[type]}</div><div style="font-size:.8rem;">Team members log in to add projects</div></div>`;return;}
  g.innerHTML=items.map(item=>{
    if(type==='video')return`<div class="w-card" onclick="window.open('${item.url}','_blank')"><div class="w-thumb">${item.thumb?`<img src="${item.thumb}" alt="${item.title}">`:'<span style="font-size:2.3rem;opacity:.14">🎬</span>'}<div class="w-play"><div class="play-tri"></div></div></div><div class="w-info"><span class="w-tag">${item.tags||'Video Project'}</span><div class="w-title">${item.title}</div>${item.desc?`<div class="w-desc">${item.desc}</div>`:''}<span class="w-link">Watch Video →</span></div></div>`;
    if(type==='design')return`<div class="w-card"><div class="w-thumb">${item.img?`<img src="${item.img}" alt="${item.title}">`:'<span style="font-size:2.3rem;opacity:.14">🎨</span>'}</div><div class="w-info"><span class="w-tag">${item.cat||'Design'}</span><div class="w-title">${item.title}</div>${item.desc?`<div class="w-desc">${item.desc}</div>`:''}</div></div>`;
    if(type==='web')return`<div class="w-card"${item.url?` onclick="window.open('${item.url}','_blank')"`:''}>
<div class="w-thumb">${item.img?`<img src="${item.img}" alt="${item.title}">`:'<span style="font-size:2.3rem;opacity:.14">🌐</span>'}</div><div class="w-info"><span class="w-tag">${item.tags||'Web Project'}</span><div class="w-title">${item.title}</div>${item.desc?`<div class="w-desc">${item.desc}</div>`:''}</div></div>`;
  }).join('');
}
function renderALists(){['video','design','web'].forEach(type=>{const le=document.getElementById('a'+type[0]+'-list');if(!le)return;const items=gd(type);if(!items.length){le.innerHTML='<p style="color:var(--muted);font-size:.86rem;">No projects added yet.</p>';return;}le.innerHTML=items.map(item=>`<div class="adm-card"><div class="adm-thumb">${(item.thumb||item.img)?`<img src="${item.thumb||item.img}" alt="${item.title}">`:`<span style="font-size:1.8rem;opacity:.2">${type==='video'?'🎬':type==='design'?'🎨':'🌐'}</span>`}</div><div class="adm-ci"><div class="adm-ct">${item.title}</div><div class="adm-cd">${item.desc||''}</div><div class="adm-acts"><button class="vis-btn" onclick="togVis('${type}',${item.id})">${item.visible?'Hide':'Show'}</button><button class="del-btn" onclick="delItem('${type}',${item.id})">Delete</button></div></div></div>`).join('');});}
function exportData(){const data={video:gd('video'),design:gd('design'),web:gd('web'),exported:new Date().toISOString()};const b=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='thepixelsmiths-data.json';a.click();}

/* EASTER EGG */
const ks=document.createElement('style');ks.textContent=`@keyframes burst{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-90vh) scale(0);opacity:0}}`;document.head.appendChild(ks);
function easterEgg(){for(let i=0;i<32;i++){const d=document.createElement('div');d.style.cssText=`position:fixed;z-index:9999;width:9px;height:9px;border-radius:50%;background:${cl[Math.floor(Math.random()*cl.length)]};left:${Math.random()*100}vw;bottom:0;pointer-events:none;animation:burst ${.9+Math.random()*.6}s ease forwards;animation-delay:${Math.random()*.4}s`;document.body.appendChild(d);setTimeout(()=>d.remove(),2000);}}

renderAll();

/* ── MOBILE: show back-strips, hide flip; TABLET: tap to flip ── */
function handleResponsive(){
  const isMobile = window.innerWidth <= 640;
  const isTablet = window.innerWidth > 640 && window.innerWidth <= 900;

  document.querySelectorAll('.mob-back-strip').forEach(s => {
    s.style.display = isMobile ? 'flex' : 'none';
  });

  document.querySelectorAll('.flip-wrap').forEach(card => {
    if(isMobile){
      card.onclick = null;
    } else if(isTablet){
      card.onclick = function(){ this.classList.toggle('flipped'); };
    } else {
      card.onclick = null;
      card.classList.remove('flipped');
    }
  });
}
handleResponsive();
window.addEventListener('resize', handleResponsive);