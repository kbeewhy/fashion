/* ── LOOKBOOK DATA ── */
const lbItems=[
  {cat:'kente',name:'Kente Luxe Agbada',price:'₦65,000',p:'p-kente',featured:true},
  {cat:'Dashiki',name:' Dashiki',price:'₦35,000',p:'p-adinkra'},
  {cat:'Kaftan',name:' Kaftan',price:'₦42,000',p:'p-bogolan'},
  {cat:'ankara',name:'Ankara Blazer',price:'₦55,000',p:'p-ankara'},
  {cat:'adinkra',name:'Adinkra Shorts Set',price:'₦38,000',p:'p-adinkra'},
  {cat:'kente',name:'Kente Wrap Dress',price:'₦48,000',p:'p-kente'},
  {cat:'bogolan',name:'Bogolan Trousers',price:'₦28,000',p:'p-bogolan'},
  {cat:'ankara',name:'Ankara Co-ord Set',price:'₦52,000',p:'p-ankara'},
];
const patStyle={
  'p-adinkra':'background:#0e1f16;background-image:radial-gradient(circle at 25% 25%,#2D6A4F22 0%,transparent 60%),radial-gradient(circle at 75% 75%,#B2222222 0%,transparent 60%)',
  'p-kente':'background:#1B0A02;background-image:repeating-linear-gradient(0deg,#C8963E22 0 4px,transparent 4px 30px),repeating-linear-gradient(90deg,#B2222222 0 4px,transparent 4px 60px)',
  'p-bogolan':'background:#2A1505;background-image:repeating-linear-gradient(90deg,#C8963E18 0 3px,transparent 3px 18px),repeating-linear-gradient(0deg,#7A3B1E25 0 3px,transparent 3px 18px)',
  'p-ankara':'background:#0A1520;background-image:repeating-linear-gradient(60deg,#1B3A6B30 0 3px,transparent 3px 18px),repeating-linear-gradient(-60deg,#B2222230 0 3px,transparent 3px 18px)',
};
function renderLookbook(filter){
  const items=filter==='all'?lbItems:lbItems.filter(i=>i.cat===filter);
  document.getElementById('lbGrid').innerHTML=items.map(item=>`
    <div class="lb-item${item.featured&&filter==='all'?' featured':''}" style="${patStyle[item.p]}">
      <div class="lb-overlay">
        <div class="lb-overlay-name">${item.name}</div>
        <div class="lb-overlay-price">${item.price}</div>
      </div>
    </div>`).join('');
}
function filterLookbook(cat,btn){
  document.querySelectorAll('.lb-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  renderLookbook(cat);
}

/* ── SIZE TABLES ── */
const sizeData={
  tops:{h:['Size','Chest (cm)','Shoulder (cm)','Sleeve (cm)','Length (cm)'],r:[['XS','84–88','40–41','58–59','68'],['S','89–93','42–43','60–61','70'],['M','94–98','44–45','62–63','72'],['L','99–104','46–47','64–65','74'],['XL','105–111','48–50','66–67','76'],['XXL','112–120','51–54','68–69','78']]},
  bottoms:{h:['Size','Waist (cm)','Hip (cm)','Inseam (cm)','Rise (cm)'],r:[['XS','62–66','86–90','76','24'],['S','67–71','91–95','77','25'],['M','72–76','96–100','78','26'],['L','77–82','101–106','79','27'],['XL','83–89','107–113','80','28'],['XXL','90–98','114–122','81','29']]},
  full:{h:['Size','Chest (cm)','Waist (cm)','Hip (cm)','Height Range'],r:[['XS','84–88','62–66','86–90','155–162 cm'],['S','89–93','67–71','91–95','160–167 cm'],['M','94–98','72–76','96–100','165–172 cm'],['L','99–104','77–82','101–106','170–177 cm'],['XL','105–111','83–89','107–113','174–181 cm'],['XXL','112–120','90–98','114–122','178–185 cm']]}
};
function showSizeTab(tab,btn){
  document.querySelectorAll('.sg-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const d=sizeData[tab];
  document.getElementById('sizeContent').innerHTML=`
    <table class="sg-table">
      <thead><tr>${d.h.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${d.r.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>`;
}

/* ── SCROLL REVEAL ── */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal,.reveal-scale').forEach(el=>observer.observe(el));

/* ── NAV SCROLL ── */
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>60);
});

/* ── MOBILE MENU ── */
function toggleMenu(){
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── ORDER SUBMIT ── */
function submitOrder(){
  const t=document.getElementById('toast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3800);
}

/* ── INIT ── */
renderLookbook('all');
showSizeTab('tops',document.querySelector('.sg-tab'));