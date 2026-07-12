(function(){
const SERVICES = [
{name:'Roofing', icon:'🏠', href:'roofing.html', tag:'Repair · Replace · Inspect', bg:['#0e2a5e','#1a4a8a']},
{name:'HVAC / AC', icon:'❄️', href:'hvac.html', tag:'Repair · Install · Tune-up', bg:['#0e3a5c','#164a7a']},
{name:'Plumbing', icon:'🔧', href:'plumbing.html', tag:'Leaks · Drains · Water heaters', bg:['#1a3558','#0e2a5e']},
{name:'Solar', icon:'☀️', href:'solar.html', tag:'Install · Savings · Payback', bg:['#b45309','#f47c20']},
{name:'Lawn Care', icon:'🌿', href:'lawn-care.html', tag:'Mow · Landscape · Cleanup', bg:['#14532d','#166534']},
{name:'Painting', icon:'🎨', href:'painting.html', tag:'Interior · Exterior', bg:['#5b21b6','#7c3aed']},
{name:'Electrical', icon:'⚡', href:'electrical.html', tag:'Panels · Wiring · Fixtures', bg:['#854d0e','#c9a227']},
{name:'Pest Control',icon:'🐛', href:'pest-control.html', tag:'Termites · Rodents · Bugs', bg:['#3f3f46','#52525b']},
{name:'Tree Service',icon:'🌳', href:'tree-service.html', tag:'Trim · Remove · Stump', bg:['#14532d','#15803d']},
{name:'Moving', icon:'📦', href:'moving.html', tag:'Local · Long distance', bg:['#1e3a5f','#0e2a5e']},
{name:'Cleaning', icon:'✨', href:'house-cleaning.html',tag:'Deep · Recurring · Move-out', bg:['#0e7490','#06b6d4']},
{name:'Junk Removal',icon:'🚛', href:'junk-removal.html', tag:'Hauling · Cleanouts · Debris', bg:['#44403c','#78716c']},
{name:'Concrete', icon:'🧱', href:'concrete-quote.html', tag:'Driveways · Patios · Slabs', bg:['#57534e','#78716c']},
{name:'Commercial Cleaning',icon:'🏢', href:'commercial-cleaning-quote.html', tag:'Offices · Janitorial · Floors', bg:['#1e3a5f','#334155']},
{name:'Pool Service',icon:'🏊', href:'#quick-form', tag:'Clean · Repair · Maintain', bg:['#0369a1','#0ea5e9']},
{name:'Window Cleaning',icon:'🪟', href:'window-cleaning-quote.html', tag:'Interior · Exterior · Screens', bg:['#0e7490','#22d3ee']},
];
function paint(){
  var grid=document.getElementById('service-grid');
  if(!grid) return;
  grid.innerHTML = SERVICES.map(function(s){
    var g1=s.bg[0], g2=s.bg[1];
    return '<a href="'+s.href+'" class="cat-card group block rounded-2xl overflow-hidden bg-white shadow-sm" style="border:1px solid #e8edf5;transition:transform .2s,box-shadow .2s">'
      +'<div class="cat-photo relative" style="height:11rem;overflow:hidden;background:linear-gradient(145deg,'+g1+' 0%,'+g2+' 55%,#E5B53C 160%)">'
      +'<div style="position:absolute;inset:0;opacity:.3;background:radial-gradient(circle at 80% 20%,#fff 0%,transparent 45%),radial-gradient(circle at 10% 90%,#000 0%,transparent 40%)"></div>'
      +'<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1">'
      +'<div style="width:4.25rem;height:4.25rem;border-radius:1rem;background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.25);display:grid;place-items:center;font-size:2rem;margin-bottom:.75rem;box-shadow:0 8px 24px rgba(0,0,0,.15)">'+s.icon+'</div>'
      +'<div style="color:#fff;font-weight:800;font-size:1.05rem;text-align:center;text-shadow:0 1px 3px rgba(0,0,0,.35)">'+s.name+'</div>'
      +'<div style="color:#E5B53C;font-size:10px;font-weight:700;letter-spacing:.14em;margin-top:4px;text-transform:uppercase">Free quotes</div>'
      +'</div></div>'
      +'<div style="padding:14px 16px 16px">'
      +'<div style="font-size:12px;font-weight:600;color:#64748b">'+s.tag+'</div>'
      +'<div style="font-size:11px;color:#f47c20;font-weight:800;margin-top:6px">Get free quotes →</div>'
      +'</div></a>';
  }).join('');
  grid.querySelectorAll('.cat-card').forEach(function(a){
    a.addEventListener('mouseenter',function(){a.style.transform='translateY(-5px)';a.style.boxShadow='0 16px 40px rgba(14,42,94,.18)';});
    a.addEventListener('mouseleave',function(){a.style.transform='';a.style.boxShadow='';});
  });
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',paint);
else paint();
setTimeout(paint, 0);
setTimeout(paint, 300);
setTimeout(paint, 1000);
})();
