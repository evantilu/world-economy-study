const CFG=window.REPORT||{};
const REPO=CFG.repo||'evantilu/world-economy-study', PREFIX=CFG.prefix, MD=CFG.md||'report.md', MD_PATH=CFG.mdPath, KEY=CFG.key||'rp';
document.body.insertAdjacentHTML('afterbegin','\n<div id="progress"><\/div>\n<header><div class="bar">\n  <span class="t" id="barTitle"><\/span>\n<\/div><\/header>\n<main id="content"><p class="meta">載入中…<\/p><\/main>\n\n<div id="selbar">\n  <button id="selFb">💬 回饋<\/button>\n  <button id="selHl">🖍 畫重點<\/button>\n  <button id="selX">✕<\/button>\n<\/div>\n\n<nav id="dock"><div class="in">\n  <button id="dToc"><b>☰<\/b>目錄<\/button>\n  <button id="dFb"><b>💬<\/b><span>回饋<span class="cnt" id="fbCount"><\/span><\/span><\/button>\n  <button id="dView"><b>Aa<\/b>版面<\/button>\n  <button id="dTheme"><b>◐<\/b>深淺<\/button>\n  <button id="dTop"><b>↑<\/b>頂端<\/button>\n<\/div><\/nav>\n\n<div class="sheet" id="tocSheet"><div class="shade"><\/div><div class="pane">\n  <div class="grab"><\/div>\n  <div class="hd"><span>目錄<\/span><span><a class="btn ghost" id="pdfLink" hidden target="_blank" rel="noopener">PDF<\/a> <button class="btn ghost" data-close>關閉<\/button><\/span><\/div>\n  <input id="q" type="search" placeholder="搜尋全文" enterkeyhint="search">\n  <div id="tocList"><\/div>\n<\/div><\/div>\n\n<div class="sheet" id="fbSheet"><div class="shade"><\/div><div class="pane">\n  <div class="grab"><\/div>\n  <div class="hd"><span id="fbTitle">回饋<\/span><button class="btn ghost" data-close>取消<\/button><\/div>\n  <div class="meta" id="fbWhere"><\/div>\n  <div class="q" id="fbQuote" hidden><\/div>\n  <div class="chips" id="fbType">\n    <button class="on" data-v="問題">❓ 問題<\/button>\n    <button data-v="修正">✏️ 修正<\/button>\n    <button data-v="補充">➕ 補充<\/button>\n    <button data-v="想深入">🔍 想深入<\/button>\n  <\/div>\n  <textarea id="fbText" placeholder="想問、想改、想補的內容。語音輸入也可以。"><\/textarea>\n  <p class="hint">按「送出」會開啟 GitHub 新增 Issue 頁面（內容已幫你填好），在那裡按 Submit 就完成。需登入 GitHub；repo 是公開的，回饋也會公開。草稿會暫存在這台裝置。<\/p>\n  <div class="row2"><button class="btn" data-close>取消<\/button><button class="btn pri" id="fbSend">送出到 GitHub<\/button><\/div>\n<\/div><\/div>\n\n<div class="sheet" id="listSheet"><div class="shade"><\/div><div class="pane">\n  <div class="grab"><\/div>\n  <div class="hd"><span>回饋與重點<\/span><button class="btn ghost" data-close>關閉<\/button><\/div>\n  <div class="tabs"><button class="on" data-tab="fb">回饋<\/button><button data-tab="hl">我的重點<\/button><\/div>\n  <div id="tabFb"><p class="meta" id="fbStatus">讀取中…<\/p><ul class="fbl" id="fbList"><\/ul>\n    <div class="row2"><button class="btn" id="fbGeneral">💬 整體回饋<\/button><a class="btn" id="editLink" target="_blank" rel="noopener">✏️ 在 GitHub 直接編輯<\/a><\/div><\/div>\n  <div id="tabHl" hidden><p class="hint">畫重點只存在這台裝置的瀏覽器裡，不會上傳。<\/p><ul class="fbl" id="hlList"><\/ul><\/div>\n<\/div><\/div>\n\n<div class="sheet" id="viewSheet"><div class="shade"><\/div><div class="pane">\n  <div class="grab"><\/div>\n  <div class="hd"><span>版面<\/span><button class="btn ghost" data-close>完成<\/button><\/div>\n  <div class="vrow"><span class="lab">字級<\/span><button class="step" id="vFsMinus" aria-label="縮小">A−<\/button><span class="val" id="vFsVal"><\/span><button class="step" id="vFsPlus" aria-label="放大">A+<\/button><button class="btn ghost" id="vFsReset">重設<\/button><\/div>\n  <div class="vrow"><span class="lab">寬度<\/span><input type="range" id="vW" aria-label="內容寬度"><span class="val" id="vWVal"><\/span><\/div>\n  <div class="vchips" id="vWChips"><button data-w="680">窄<\/button><button data-w="880">標準<\/button><button data-w="1200">寬<\/button><button data-w="full">全寬<\/button><\/div>\n  <p class="hint">設定只存在這台裝置，本站各份報告共用。電腦上也可以用鍵盤 + / − 調字級。手機螢幕本身比設定窄時，選「全寬」會把左右留白縮到最小。<\/p>\n<\/div><\/div>\n<div id="lb"><img alt=""><\/div>\n<div id="toast"><\/div>\n\n');
if(CFG.searchHint)document.getElementById('q').placeholder=CFG.searchHint;
if(CFG.pdf){const a=document.getElementById('pdfLink');a.href=CFG.pdf;a.hidden=false;}
document.getElementById('barTitle').textContent=CFG.title||document.title;
const $=s=>document.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const store={get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
function toast(t){const el=$('#toast');el.textContent=t;el.style.display='block';clearTimeout(toast._t);toast._t=setTimeout(()=>el.style.display='none',1800);}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- theme & font (applied early) ---------- */
(function(){const r=document.documentElement;const t=store.get('tk-theme',null);if(t)r.dataset.theme=t;
  applyView();})();
function applyView(){const r=document.documentElement,fs=store.get('tk-fs',null),w=store.get('tk-w',null);
  r.style.setProperty('--fs',fs?fs+'px':'');
  r.style.setProperty('--w',w==='full'?'100%':w?w+'px':'');r.style.setProperty('--pad',w==='full'?'10px':'');}

/* ---------- charts ---------- */
const Chart=(function(){
  const SER=['--s1','--s2','--s3','--s4'];
  const css=v=>getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const fmt=(v,d)=>v==null||isNaN(v)?'—':Number(v).toLocaleString('zh-TW',{maximumFractionDigits:d==null?2:d});
  function nice(min,max,n){if(min===max){min-=1;max+=1}const span=max-min,step0=span/n,mag=Math.pow(10,Math.floor(Math.log10(step0))),r=step0/mag;
    const step=(r<1.5?1:r<3?2:r<7?5:10)*mag;const lo=Math.floor(min/step)*step,hi=Math.ceil(max/step)*step;const t=[];for(let v=lo;v<=hi+step/2;v+=step)t.push(+v.toFixed(10));return t;}
  async function load(spec){
    if(spec.csv){const txt=await (await fetch(spec.csv,{cache:'no-cache'})).text();
      const rows=txt.trim().split(/\r?\n/).filter(l=>l&&!l.startsWith('#')).map(l=>l.split(','));const h=rows.shift().map(s=>s.trim());
      const xi=h.indexOf(spec.xcol||h[0]);spec.x=rows.map(r=>isNaN(+r[xi])?r[xi]:+r[xi]);
      spec.series=(spec.ycols||h.filter((_,i)=>i!==xi)).map((c,k)=>{const i=h.indexOf(c);return{name:(spec.names&&spec.names[k])||c,data:rows.map(r=>r[i]===''||r[i]==null?null:+r[i])};});}
    return spec;}
  function render(fig,spec){
    const box=fig.querySelector('.ch-box');box.innerHTML='';
    const W=Math.max(280,box.clientWidth),narrow=W<480,H=spec.height||(narrow?230:Math.round(Math.min(400,Math.max(290,W*0.3))));
    const n=spec.x.length,ser=spec.series,multi=ser.length>1,endLab=multi&&ser.length<=4&&!narrow&&spec.type==='line';
    const vals=ser.flatMap(s=>s.data).filter(v=>v!=null&&!isNaN(v));
    let lo=Math.min(...vals),hi=Math.max(...vals);if(spec.type==='bar'||spec.zero!==false&&lo>0&&spec.yMin==null&&spec.type!=='line'){lo=Math.min(0,lo)}
    if(spec.yMin!=null)lo=spec.yMin;if(spec.yMax!=null)hi=spec.yMax;if(spec.type==='bar')hi=Math.max(0,hi);
    const ticks=nice(lo,hi,narrow?4:5);lo=Math.min(lo,ticks[0]);hi=Math.max(hi,ticks[ticks.length-1]);
    const evRows=(spec.events||[]).length?(narrow?2:1):0;
    const m={t:8+evRows*14,r:endLab?78:10,b:22,l:0};
    const tl=Math.max(...ticks.map(t=>fmt(t,spec.dec).length));m.l=Math.min(64,8+tl*6.4);
    const pw=W-m.l-m.r,ph=H-m.t-m.b;
    const numX=spec.x.every(v=>typeof v==='number');
    const band=pw/n;
    const X=i=>spec.type==='bar'?m.l+band*(i+.5):m.l+(n===1?pw/2:pw*i/(n-1));
    const Y=v=>m.t+ph*(1-(v-lo)/(hi-lo));
    const ns='http://www.w3.org/2000/svg';const svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox',`0 0 ${W} ${H}`);svg.setAttribute('height',H);
    svg.setAttribute('role','img');svg.setAttribute('aria-label',spec.title||'chart');
    const el=(t,a,p=svg)=>{const e=document.createElementNS(ns,t);for(const k in a)e.setAttribute(k,a[k]);p.appendChild(e);return e;};
    ticks.forEach(t=>{el('line',{x1:m.l,x2:W-m.r,y1:Y(t),y2:Y(t),stroke:t===0?css('--axis'):css('--grid'),'stroke-width':1});
      const tx=el('text',{x:m.l-6,y:Y(t)+3.5,'text-anchor':'end'});tx.textContent=fmt(t,spec.dec);});
    // x ticks
    const maxT=narrow?5:8;let idx=[];
    if(numX&&spec.type==='line'){const st=nice(spec.x[0],spec.x[n-1],maxT-1);const xs=spec.x;st.forEach(v=>{let b=-1,bd=1e9;xs.forEach((x,i)=>{const d=Math.abs(x-v);if(d<bd){bd=d;b=i}});if(bd<1e-9||Math.abs(xs[b]-v)<=(xs[1]-xs[0])/2)if(!idx.includes(b))idx.push(b);});}
    else if(spec.x.every(v=>/^\d{4}-\d{2}-\d{2}$/.test(v))){const mk=spec.x.map((v,i)=>i===0||v.slice(0,7)!==spec.x[i-1].slice(0,7)?i:-1).filter(i=>i>=0);const lim=narrow?4:6;const st=Math.ceil(mk.length/lim);idx=mk.filter((_,k)=>k%st===0);idx.lab=i=>spec.x[i].slice(0,7).replace('-','/');}
    else if(spec.x.every(v=>/^\d{4}-\d{2}$/.test(v))){const jan=spec.x.map((v,i)=>v.endsWith('-01')?i:-1).filter(i=>i>=0);const st=Math.ceil(jan.length/maxT);idx=jan.filter((_,k)=>k%st===0);idx.lab=i=>spec.x[i].slice(0,4);}
    else{const step=Math.ceil(n/maxT);for(let i=0;i<n;i+=step)idx.push(i);}
    idx.forEach(i=>{const tx=el('text',{x:X(i),y:H-6,'text-anchor':'middle'});tx.textContent=idx.lab?idx.lab(i):spec.x[i];});
    // events
    (spec.events||[]).forEach((e,k)=>{let i=spec.x.indexOf(e.x);if(i<0&&numX){let bd=1e9;spec.x.forEach((x,j)=>{const d=Math.abs(x-e.x);if(d<bd){bd=d;i=j}});}if(i<0)return;
      const g=el('g',{class:'evt'});const x=X(i);el('line',{x1:x,x2:x,y1:m.t-2,y2:m.t+ph,stroke:css('--axis'),'stroke-dasharray':'3 3'},g);
      const row=narrow?k%2:0;const anc=x>W*0.75?'end':x<W*0.2?'start':'middle';const tx=el('text',{x:anc==='end'?x-3:anc==='start'?x+3:x,y:10+row*14,'text-anchor':anc},g);tx.textContent=e.label;});
    // marks
    if(spec.type==='bar'){const k=ser.length,gw=Math.min(band*.72,46),bw=Math.max(2,(gw-(k-1)*2)/k);
      ser.forEach((s,j)=>{const col=css(s.color||SER[j%4]);s.data.forEach((v,i)=>{if(v==null)return;const x0=X(i)-gw/2+j*(bw+2),y0=Y(0),y1=Y(v),h=Math.abs(y1-y0),r=Math.min(3,bw/2,h);
        const top=Math.min(y0,y1);let d;if(v>=0)d=`M${x0},${y0}V${top+r}Q${x0},${top} ${x0+r},${top}H${x0+bw-r}Q${x0+bw},${top} ${x0+bw},${top+r}V${y0}Z`;
        else{const b=Math.max(y0,y1);d=`M${x0},${y0}V${b-r}Q${x0},${b} ${x0+r},${b}H${x0+bw-r}Q${x0+bw},${b} ${x0+bw},${b-r}V${y0}Z`;}
        el('path',{d,fill:col,class:'bm','data-i':i});});});}
    else{ser.forEach((s,j)=>{const col=css(s.color||SER[j%4]);let d='',pen=false;s.data.forEach((v,i)=>{if(v==null||isNaN(v)){pen=false;return}d+=(pen?'L':'M')+X(i).toFixed(1)+','+Y(v).toFixed(1);pen=true;});
      el('path',{d,fill:'none',stroke:col,'stroke-width':2,'stroke-linejoin':'round','stroke-linecap':'round'});
      if(n<=14)s.data.forEach((v,i)=>{if(v!=null)el('circle',{cx:X(i),cy:Y(v),r:3,fill:col,stroke:css('--bg'),'stroke-width':1.5});});
      if(endLab){let li=s.data.length-1;while(li>=0&&s.data[li]==null)li--;if(li>=0){const tx=el('text',{x:X(li)+6,y:Y(s.data[li])+4});tx.style.fill=css('--muted');tx.textContent=s.name;}}});}
    // hover layer
    const cross=el('line',{y1:m.t,y2:m.t+ph,stroke:css('--muted'),'stroke-width':1,opacity:0});
    const dots=ser.map((s,j)=>el('circle',{r:4.5,fill:css(s.color||SER[j%4]),stroke:css('--bg'),'stroke-width':2,opacity:0}));
    const hit=el('rect',{x:m.l,y:0,width:pw,height:H,fill:'transparent'});
    const tip=document.createElement('div');tip.className='ch-tip';box.appendChild(svg);box.appendChild(tip);
    function show(cx){let i=spec.type==='bar'?Math.floor((cx-m.l)/band):Math.round((cx-m.l)/pw*(n-1));i=Math.max(0,Math.min(n-1,i));const x=X(i);
      cross.setAttribute('x1',x);cross.setAttribute('x2',x);cross.setAttribute('opacity',spec.type==='bar'?0:.6);
      $$('.bm',svg).forEach(b=>b.style.opacity=+b.dataset.i===i?1:.45);
      dots.forEach((d,j)=>{const v=ser[j].data[i];if(spec.type==='line'&&v!=null){d.setAttribute('cx',x);d.setAttribute('cy',Y(v));d.setAttribute('opacity',1)}else d.setAttribute('opacity',0)});
      tip.textContent='';const xd=document.createElement('div');xd.className='x';xd.textContent=spec.x[i]+(spec.xUnit||'');tip.appendChild(xd);
      ser.forEach((s,j)=>{const r=document.createElement('div');r.className='r';const k=document.createElement('i');k.style.background=css(s.color||SER[j%4]);
        const b=document.createElement('b');b.textContent=fmt(s.data[i],spec.dec)+(spec.unit?' '+spec.unit:'');r.append(k,b);if(multi){const sp=document.createElement('span');sp.textContent=s.name;r.appendChild(sp);}tip.appendChild(r);});
      if(spec.notes&&spec.notes[spec.x[i]]){const nd=document.createElement('div');nd.className='x';nd.textContent=spec.notes[spec.x[i]];tip.appendChild(nd);}
      tip.style.display='block';const tw=tip.offsetWidth;let left=x+12;if(left+tw>W)left=x-tw-12;if(left<0)left=Math.max(0,x-tw/2);tip.style.left=left+'px';tip.style.top=Math.max(0,m.t)+'px';}
    function hide(){tip.style.display='none';cross.setAttribute('opacity',0);dots.forEach(d=>d.setAttribute('opacity',0));$$('.bm',svg).forEach(b=>b.style.opacity=1);}
    const pt=e=>{const r=svg.getBoundingClientRect();return (e.clientX-r.left)*W/r.width;};
    hit.addEventListener('pointermove',e=>show(pt(e)));hit.addEventListener('pointerdown',e=>show(pt(e)));hit.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')hide()});
    svg.addEventListener('click',e=>e.stopPropagation());
    document.addEventListener('pointerdown',e=>{if(!box.contains(e.target))hide()},{passive:true});
  }
  async function mount(pre){
    const fig=document.createElement('figure');fig.className='chart';pre.replaceWith(fig);
    let spec;try{spec=JSON.parse(pre.textContent);spec.type=spec.type||'line';await load(spec);}catch(e){fig.innerHTML='<div class="ch-err">圖表資料讀取失敗：'+esc(e.message)+'</div>';return;}
    const t=document.createElement('div');t.className='ch-t';t.textContent=spec.title||'';fig.appendChild(t);
    if(spec.subtitle){const s=document.createElement('div');s.className='ch-s';s.textContent=spec.subtitle;fig.appendChild(s);}
    if(spec.series.length>1){const lg=document.createElement('div');lg.className='ch-lg';spec.series.forEach((s,j)=>{const sp=document.createElement('span');const i=document.createElement('i');if(spec.type==='bar')i.className='box';i.style.background=`var(${s.color||SER[j%4]})`;sp.append(i,document.createTextNode(s.name));lg.appendChild(sp);});fig.appendChild(lg);}
    const box=document.createElement('div');box.className='ch-box';fig.appendChild(box);
    const f=document.createElement('div');f.className='ch-f';const src=document.createElement('div');src.className='src';src.textContent=spec.source?'來源：'+spec.source:'';
    const acts=document.createElement('div');acts.className='acts';const tb=document.createElement('button');tb.textContent='看數據';const fb=document.createElement('button');fb.textContent='💬';fb.title='對這張圖回饋';acts.append(tb,fb);f.append(src,acts);fig.appendChild(f);
    const tbl=document.createElement('div');tbl.className='ch-tbl';const table=document.createElement('table');const thead=table.createTHead().insertRow();
    [spec.xLabel||'',...spec.series.map(s=>s.name+(spec.unit?`（${spec.unit}）`:''))].forEach((h,k)=>{const th=document.createElement('th');th.textContent=h;if(k)th.className='n';thead.appendChild(th);});
    const tbd=table.createTBody();spec.x.forEach((x,i)=>{const r=tbd.insertRow();const c=r.insertCell();c.textContent=x;spec.series.forEach(s=>{const d=r.insertCell();d.className='n';d.textContent=fmt(s.data[i],spec.dec);});});
    tbl.appendChild(table);fig.appendChild(tbl);
    tb.onclick=()=>{const o=tbl.style.display==='block';tbl.style.display=o?'none':'block';tb.textContent=o?'看數據':'收起數據';};
    fb.onclick=()=>Feedback.open({quote:'〔圖〕'+(spec.title||''),sec:secOf(fig)});
    render(fig,spec);let w=box.clientWidth;new ResizeObserver(()=>{if(Math.abs(box.clientWidth-w)>4){w=box.clientWidth;render(fig,spec);}}).observe(box);
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>render(fig,spec));fig._rerender=()=>render(fig,spec);
  }
  return {mount};
})();

/* ---------- section helpers ---------- */
let SECTIONS=[];
function secOf(node){let best=SECTIONS[0];for(const s of SECTIONS){if(s.el.compareDocumentPosition(node)&Node.DOCUMENT_POSITION_FOLLOWING||s.el===node)best=s;else break;}return best;}

/* ---------- feedback ---------- */
const Feedback=(function(){
  const sh=$('#fbSheet');let ctx=null,type='問題';
  $$('#fbType button').forEach(b=>b.onclick=()=>{$$('#fbType button').forEach(x=>x.classList.remove('on'));b.classList.add('on');type=b.dataset.v;});
  $('#fbText').addEventListener('input',e=>store.set(KEY+'-draft',{...ctxKey(),text:e.target.value}));
  function ctxKey(){return {sec:ctx&&ctx.sec?ctx.sec.id:'',quote:ctx?ctx.quote:''}}
  function open(c){ctx=c;const s=c.sec;$('#fbWhere').textContent=s?'段落：'+s.title:'整份報告';
    const q=$('#fbQuote');q.hidden=!c.quote;q.textContent=c.quote||'';
    const d=store.get(KEY+'-draft',null);$('#fbText').value=d&&d.sec===(s?s.id:'')&&d.quote===(c.quote||'')?d.text:'';
    Sheets.open(sh);setTimeout(()=>$('#fbText').focus(),250);}
  $('#fbSend').onclick=()=>{const text=$('#fbText').value.trim();if(!text){toast('先寫一點內容');return;}
    const s=ctx.sec;const short=text.replace(/\s+/g,' ').slice(0,28);
    const title=`${PREFIX}${s?s.num||s.title.slice(0,12):'整體'}｜${type}：${short}`;
    const url=location.href.split('#')[0]+(s?'#'+s.id:'');
    const body=[`**段落**：${s?s.title:'整份報告'} (#${s?s.id:'all'})`,`**類型**：${type}`,ctx.quote?`**引用**：\n> ${ctx.quote.replace(/\n+/g,'\n> ')}`:'', `**意見**：\n${text}`,'',`---\n頁面：${url}`].filter(Boolean).join('\n\n');
    window.open(`https://github.com/${REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`,'_blank','noopener');
    store.set(KEY+'-draft',null);Sheets.close(sh);toast('已開啟 GitHub，按 Submit 完成');};
  let issues=[];
  async function loadIssues(){
    try{const r=await fetch(`https://api.github.com/repos/${REPO}/issues?state=all&per_page=100&sort=created&direction=desc`,{headers:{Accept:'application/vnd.github+json'}});
      if(!r.ok)throw new Error(r.status);const all=await r.json();
      issues=all.filter(i=>!i.pull_request&&i.title.startsWith(PREFIX)).map(i=>{const m=(i.body||'').match(/\(#([^)\s]+)\)/);const q=(i.body||'').match(/\*\*引用\*\*：\s*\n>\s?([\s\S]*?)(?:\n\n|$)/);
        return{n:i.number,title:i.title.slice(PREFIX.length),url:i.html_url,state:i.state,sec:m?m[1]:'',quote:q?q[1].replace(/\n>\s?/g,'\n').trim():'',date:i.created_at.slice(0,10)};});
      $('#fbStatus').textContent=issues.length?`共 ${issues.length} 則（未處理 ${issues.filter(i=>i.state==='open').length}）`:'還沒有回饋。選取任何文字，或按章節旁的 💬 開始。';
    }catch(e){$('#fbStatus').textContent='暫時讀不到回饋清單（GitHub API 限流或離線），仍可新增回饋。';}
    paint();}
  function paint(){
    const open=issues.filter(i=>i.state==='open').length;$('#fbCount').textContent=open?` ${open}`:'';
    const ul=$('#fbList');ul.textContent='';
    issues.forEach(i=>{const li=document.createElement('li');const sec=SECTIONS.find(s=>s.id===i.sec);
      li.innerHTML=`<div><span class="s ${i.state==='open'?'o':'c'}">${i.state==='open'?'待處理':'已處理'}</span> <a href="${esc(i.url)}" target="_blank" rel="noopener">#${i.n}</a> <span class="m">${esc(i.date)}${sec?' · <a href="#'+esc(sec.id)+'" data-go>'+esc(sec.title)+'</a>':''}</span></div><div></div>`;
      li.lastChild.textContent=i.title;ul.appendChild(li);});
    $$('[data-go]',ul).forEach(a=>a.onclick=()=>Sheets.closeAll());
    // per-section counts
    SECTIONS.forEach(s=>{const c=issues.filter(i=>i.sec===s.id),o=c.filter(i=>i.state==='open').length;if(!s.btn)return;
      s.btn.textContent=c.length?`💬 ${c.length}${o?'':' ✓'}`:'💬';s.btn.classList.toggle('has',c.length>0);s.btn.title=c.length?`${c.length} 則回饋（未處理 ${o}）`:'對這節回饋';
      if(s.card){s.card.querySelector('.c').textContent=c.length?`💬 ${c.length}`:''}});
    // underline quoted passages
    issues.filter(i=>i.quote&&!i.quote.startsWith('〔圖〕')).forEach(i=>{const s=SECTIONS.find(x=>x.id===i.sec);wrapText(s?s.range():[$('#content')],i.quote.slice(0,120),'fbq',m=>{m.title=`#${i.n} ${i.title}`;m.onclick=()=>window.open(i.url,'_blank','noopener');});});
  }
  return {open,loadIssues};
})();

/* ---------- text wrap helper (find quote across text nodes within nodes) ---------- */
function wrapText(roots,quote,cls,cb){
  const q=quote.replace(/\s+/g,' ').trim();if(q.length<2)return false;
  for(const root of roots){const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];let full='';
    while(w.nextNode()){const t=w.currentNode;if(t.parentElement.closest('svg,.ch-tip,script'))continue;nodes.push({t,start:full.length});full+=t.nodeValue;}
    const norm=full.replace(/\s/g,' ');const at=norm.indexOf(q);if(at<0)continue;const end=at+q.length;
    nodes.forEach(({t,start})=>{const s=Math.max(at,start),e=Math.min(end,start+t.nodeValue.length);if(s>=e)return;
      let node=t;if(e-start<node.nodeValue.length)node.splitText(e-start);if(s-start>0)node=node.splitText(s-start);
      const mk=document.createElement('mark');mk.className=cls;node.replaceWith(mk);mk.appendChild(node);if(cb)cb(mk);});
    return true;}
  return false;}

/* ---------- highlights (local) ---------- */
const HL={list(){return store.get(KEY+'-hl',[])},
  add(q,sec){const l=this.list();l.push({q,sec:sec?sec.id:'',t:Date.now()});store.set(KEY+'-hl',l);this.apply([{q,sec:sec?sec.id:''}]);this.paint();},
  apply(items){items.forEach(h=>{const s=SECTIONS.find(x=>x.id===h.sec);wrapText(s?s.range():[$('#content')],h.q,'hl',m=>m.dataset.q=h.q);});},
  remove(q){store.set(KEY+'-hl',this.list().filter(h=>h.q!==q));$$('mark.hl').filter(m=>m.dataset.q===q).forEach(m=>m.replaceWith(...m.childNodes));this.paint();},
  paint(){const ul=$('#hlList');ul.textContent='';const l=this.list();if(!l.length){ul.innerHTML='<li class="m">還沒有重點。選取文字後按「🖍 畫重點」。</li>';return;}
    l.slice().reverse().forEach(h=>{const li=document.createElement('li');const s=SECTIONS.find(x=>x.id===h.sec);
      li.innerHTML=`<div class="m">${s?'<a href="#'+esc(s.id)+'" data-go>'+esc(s.title)+'</a>':''} <button class="btn ghost" style="float:right;padding:0 8px;font-size:12px">刪除</button></div><div></div>`;
      li.lastChild.textContent=h.q;li.querySelector('button').onclick=()=>HL.remove(h.q);ul.appendChild(li);});
    $$('[data-go]',ul).forEach(a=>a.onclick=()=>Sheets.closeAll());}};

/* ---------- sheets ---------- */
const Sheets={open(s){Sheets.closeAll();s.classList.add('open');document.body.style.overflow='hidden';},
  close(s){s.classList.remove('open');if(!$('.sheet.open'))document.body.style.overflow='';},
  closeAll(){$$('.sheet.open').forEach(s=>Sheets.close(s));}};
$$('.sheet').forEach(s=>{s.querySelector('.shade').onclick=()=>Sheets.close(s);$$('[data-close]',s).forEach(b=>b.onclick=()=>Sheets.close(s));});

/* ---------- main ---------- */
(async function(){
  const main=$('#content');let md;
  try{md=await (await fetch(MD,{cache:'no-cache'})).text();}catch(e){main.innerHTML='<p>讀取 report.md 失敗。</p>';return;}
  main.innerHTML=marked.parse(md,{gfm:true});

  // evidence tags
  const map={'事實':'fact','推論':'inf','轉述':'rep','報導':'quo'};
  const tw=document.createTreeWalker(main,NodeFilter.SHOW_TEXT);const tn=[];while(tw.nextNode()){if(/〔[^〕]{1,14}〕/.test(tw.currentNode.nodeValue)&&!tw.currentNode.parentElement.closest('pre,code'))tn.push(tw.currentNode);}
  tn.forEach(n=>{const sp=document.createElement('span');sp.innerHTML=esc(n.nodeValue).replace(/〔([^〕]{1,14})〕/g,(m,k)=>{const key=Object.keys(map).find(x=>k.startsWith(x));return key?`<span class="tag ${map[key]}">${k}</span>`:m;});n.replaceWith(...sp.childNodes);});

  // callouts  > [!重點] / [!注意] / [!現場]
  const cmap={'重點':'key','注意':'warn','現場':'field'};
  $$('blockquote',main).forEach(b=>{const p=b.querySelector('p');if(!p)return;const m=p.innerHTML.match(/^\s*\[!(重點|注意|現場)\]\s*(<br>)?/);if(!m)return;
    p.innerHTML=p.innerHTML.slice(m[0].length);b.className='co '+cmap[m[1]];const t=document.createElement('span');t.className='cot';t.textContent=m[1];b.prepend(t);});

  // charts
  await Promise.all($$('pre>code.language-chart',main).map(c=>Chart.mount(c.parentElement)));

  // tables: wrap + numeric columns
  $$('table',main).forEach(t=>{if(t.closest('.ch-tbl'))return;const w=document.createElement('div');w.className='tw';t.replaceWith(w);w.appendChild(t);
    const rows=[...t.rows];if(rows.length<2)return;[...rows[0].cells].forEach((_,ci)=>{const num=rows.slice(1).every(r=>!r.cells[ci]||/^[\s−\-+~約≈]*[\d.,]+[%％倍兆億萬円年點pt]*\s*$|^—$|^$/.test(r.cells[ci].textContent));if(num)rows.forEach(r=>r.cells[ci]&&r.cells[ci].classList.add('n'));});});
  $$('img',main).forEach(i=>i.loading='lazy');

  // headings: ids, status, feedback buttons
  const STATUS={'待研究':'todo','草稿':'draft','完成':'done','更新中':'wip'};
  const used={};
  $$('h1,h2,h3',main).forEach(h=>{
    let st=null;h.innerHTML=h.innerHTML.replace(/\s*\{(待研究|草稿|完成|更新中)\}\s*$/,(m,k)=>{st=k;return '';});
    const txt=h.textContent.trim();const num=(txt.match(/^(\d+(?:\.\d+)*)\.?\s/)||[])[1];
    let id=num?'s'+num.replace(/\./g,'-'):(txt.replace(/\s+/g,'-').replace(/[^\p{L}\p{N}\-]/gu,'').slice(0,40)||'s');while(used[id])id+='-';used[id]=1;h.id=id;
    if(h.tagName==='H1')return;
    const inner=h.innerHTML;h.innerHTML='';const ht=document.createElement('span');ht.className='ht';ht.innerHTML=inner;h.appendChild(ht);
    if(st){const b=document.createElement('span');b.className='st '+STATUS[st];b.textContent=st;h.appendChild(b);}
    const fb=document.createElement('button');fb.className='fbtn';fb.textContent='💬';fb.title='對這節回饋';h.appendChild(fb);
    const sec={id,el:h,title:txt,num,level:h.tagName==='H2'?2:3,status:st,btn:fb,
      range(){const out=[];let e=h.nextElementSibling;while(e&&!(/^H[1-3]$/.test(e.tagName)&&(e.tagName<=h.tagName||e.tagName==='H3'&&h.tagName==='H3'))){out.push(e);e=e.nextElementSibling;}return out;}};
    fb.onclick=e=>{e.stopPropagation();Feedback.open({sec});};SECTIONS.push(sec);});
  const h1=main.querySelector('h1');if(h1)document.title=h1.textContent;
  // legend + inference filter
  if(CFG.legend){const lg=document.createElement('div');lg.className='filters';
    lg.innerHTML='<span class="tag fact">事實</span><span class="tag quo">報導</span><span class="tag rep">轉述</span><span class="tag inf">推論</span><label><input type="checkbox" id="focusInf"> 只看推論段落</label>';
    (h1||main.firstChild).after(lg);lg.querySelector('#focusInf').onchange=e=>document.body.classList.toggle('focus-inf',e.target.checked);}
  // collapse the H3 sub-sections under configured H2s (e.g. one card per person)
  (CFG.collapse||[]).forEach(pref=>{const h2=SECTIONS.find(s=>s.level===2&&s.num===pref);if(!h2)return;
    const ctl=document.createElement('div');ctl.className='filters';ctl.innerHTML='<button class="btn">全部展開</button><button class="btn">全部收合</button>';
    const r2=h2.range();const subs=SECTIONS.filter(s=>s.level===3&&r2.includes(s.el));
    subs.forEach(s=>{const body=s.range();const d=document.createElement('details');d.className='person';const sm=document.createElement('summary');const bd=document.createElement('div');bd.className='body';
      s.el.replaceWith(d);sm.appendChild(s.el);d.append(sm,bd);body.forEach(e=>bd.appendChild(e));s.range=()=>[bd];s.details=d;
      s.btn.addEventListener('click',e=>e.preventDefault());});
    h2.el.after(ctl);const ds=()=>subs.map(s=>s.details);ctl.children[0].onclick=()=>ds().forEach(d=>d.open=true);ctl.children[1].onclick=()=>ds().forEach(d=>d.open=false);});
  const reveal=el=>{const d=el&&el.closest('details');if(d)d.open=true;};

  // overview cards: replace <div id="map"></div>
  const mapEl=main.querySelector('#map');
  if(mapEl){mapEl.className='map';SECTIONS.filter(s=>s.level===2&&s.num).forEach(s=>{const a=document.createElement('a');a.href='#'+s.id;
    const title=s.title.replace(/^\d+\.?\s*/,'');const next=s.range().find(e=>e.tagName==='P'||e.classList.contains('co'));
    a.innerHTML=`<div class="n">第 ${esc(s.num)} 部分</div><div class="h"></div><div class="row">${s.status?`<span class="st ${STATUS[s.status]}">${esc(s.status)}</span>`:''}<span class="c"></span></div>`;
    a.querySelector('.h').textContent=title;mapEl.appendChild(a);s.card=a;});}

  // TOC
  const list=$('#tocList');
  SECTIONS.forEach(s=>{const a=document.createElement('a');a.href='#'+s.id;a.className='l'+s.level;
    const sp=document.createElement('span');sp.className='sp';sp.textContent=s.title;a.appendChild(sp);
    if(s.status&&s.level===2){const b=document.createElement('span');b.className='st '+STATUS[s.status];b.style.marginTop=0;b.textContent=s.status;a.appendChild(b);}
    a.onclick=()=>{reveal(s.el);Sheets.closeAll();};list.appendChild(a);s.toc=a;});

  // search
  const q=$('#q');q.addEventListener('change',()=>{$$('mark.sq').forEach(m=>m.replaceWith(...m.childNodes));main.normalize();const term=q.value.trim();if(!term)return;
    const w=document.createTreeWalker(main,NodeFilter.SHOW_TEXT);const hits=[];while(w.nextNode()){const t=w.currentNode;if(t.nodeValue.includes(term)&&!t.parentElement.closest('svg'))hits.push(t);}
    const marks=[];hits.forEach(n=>{const parts=n.nodeValue.split(term);const fr=document.createDocumentFragment();parts.forEach((p,i)=>{fr.append(p);if(i<parts.length-1){const m=document.createElement('mark');m.className='sq';m.textContent=term;fr.append(m);marks.push(m);}});n.replaceWith(fr);});
    if(marks.length){Sheets.closeAll();const d=marks[0].closest('details');if(d)d.open=true;marks[0].scrollIntoView({block:'center'});toast(`找到 ${marks.length} 處`);}else toast('找不到：'+term);});

  // selection bar
  const sb=$('#selbar');let selCtx=null;
  document.addEventListener('selectionchange',()=>{const s=getSelection();const t=s&&s.toString().trim();
    if(t&&t.length>1&&s.rangeCount&&main.contains(s.getRangeAt(0).commonAncestorContainer)){selCtx={quote:t.replace(/\s+/g,' ').slice(0,400),sec:secOf(s.getRangeAt(0).startContainer.parentElement)};sb.style.display='flex';}
    else{setTimeout(()=>{const s2=getSelection();if(!s2||!s2.toString().trim())sb.style.display='none';},150);}});
  sb.addEventListener('pointerdown',e=>e.preventDefault());
  $('#selFb').onclick=()=>{if(!selCtx)return;sb.style.display='none';const c=selCtx;getSelection().removeAllRanges();Feedback.open(c);};
  $('#selHl').onclick=()=>{if(!selCtx)return;sb.style.display='none';getSelection().removeAllRanges();HL.add(selCtx.quote,selCtx.sec);toast('已畫重點');};
  $('#selX').onclick=()=>{getSelection().removeAllRanges();sb.style.display='none';};
  main.addEventListener('click',e=>{const m=e.target.closest('mark.hl');if(m&&confirm('刪除這個重點？'))HL.remove(m.dataset.q);});

  // dock
  $('#dToc').onclick=()=>Sheets.open($('#tocSheet'));
  $('#dFb').onclick=()=>{Sheets.open($('#listSheet'));};
  $('#fbGeneral').onclick=()=>Feedback.open({sec:null});
  $('#editLink').href=`https://github.com/${REPO}/edit/main/${MD_PATH}`;
  $$('#listSheet .tabs button').forEach(b=>b.onclick=()=>{$$('#listSheet .tabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');$('#tabFb').hidden=b.dataset.tab!=='fb';$('#tabHl').hidden=b.dataset.tab!=='hl';});
  // view settings: font size (px, 12–28) and content width (560–1600 px or full)
  const FS_MIN=12,FS_MAX=28,W_MIN=560,W_MAX=1600,W_STEP=40;
  const curFs=()=>store.get('tk-fs',null)||parseFloat(getComputedStyle(document.body).fontSize);
  const curW=()=>{const w=store.get('tk-w',null);return w==='full'?'full':w||parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--w'))||880;};
  const sv=$('#vW');sv.min=W_MIN;sv.max=W_MAX+W_STEP;sv.step=W_STEP;
  function paintView(){const fs=curFs(),w=curW();$('#vFsVal').textContent=Math.round(fs)+' px';
    sv.value=w==='full'?W_MAX+W_STEP:w;$('#vWVal').textContent=w==='full'?'全寬':w+' px';
    $$('#vWChips button').forEach(b=>b.classList.toggle('on',String(b.dataset.w)===String(w)));}
  function setFs(v){v=Math.max(FS_MIN,Math.min(FS_MAX,Math.round(v)));store.set('tk-fs',v);applyView();paintView();}
  function setW(v){store.set('tk-w',v);applyView();paintView();}
  $('#vFsMinus').onclick=()=>setFs(curFs()-1);$('#vFsPlus').onclick=()=>setFs(curFs()+1);
  $('#vFsReset').onclick=()=>{store.set('tk-fs',null);applyView();paintView();};
  sv.oninput=()=>setW(+sv.value>W_MAX?'full':+sv.value);
  $$('#vWChips button').forEach(b=>b.onclick=()=>setW(b.dataset.w==='full'?'full':+b.dataset.w));
  $('#dView').onclick=()=>{paintView();Sheets.open($('#viewSheet'));};
  document.addEventListener('keydown',e=>{if(e.target.matches('input,textarea'))return;if(e.key==='+'||e.key==='=')setFs(curFs()+1);else if(e.key==='-')setFs(curFs()-1);});
  $('#dTheme').onclick=()=>{const r=document.documentElement;const dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;r.dataset.theme=dark?'light':'dark';store.set('tk-theme',r.dataset.theme);$$('figure.chart').forEach(x=>x._rerender&&x._rerender());};
  $('#dTop').onclick=()=>scrollTo({top:0,behavior:'smooth'});

  // lightbox
  const lb=$('#lb'),lbi=lb.querySelector('img');main.addEventListener('click',e=>{if(e.target.tagName==='IMG'){lbi.src=e.target.src;lb.classList.add('open');}});lb.onclick=()=>lb.classList.remove('open');

  // progress + current section in header
  const prog=$('#progress'),bt=$('#barTitle'),base=document.title;
  const onScroll=()=>{const h=document.documentElement;prog.style.width=(h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100)+'%';
    let cur=null;for(const s of SECTIONS){if(s.el.getBoundingClientRect().top<80)cur=s;else break;}
    const h2=cur?(cur.level===2?cur:[...SECTIONS].reverse().find(s=>s.level===2&&s.el.compareDocumentPosition(cur.el)&Node.DOCUMENT_POSITION_FOLLOWING)||cur):null;
    bt.innerHTML=h2?esc(h2.title)+(cur!==h2?'<small>'+esc(cur.title)+'</small>':''):esc(base);
    SECTIONS.forEach(s=>s.toc&&s.toc.classList.toggle('active',s===cur));};
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  HL.apply(HL.list());HL.paint();
  const goHash=()=>{if(!location.hash)return;const t=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(t){reveal(t);t.scrollIntoView();}};goHash();addEventListener('hashchange',goHash);
  Feedback.loadIssues();
})();
