const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion&&'IntersectionObserver'in window){document.documentElement.classList.add('js-reveal')}
const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.nav');
function closeMenu(){if(!toggle||!nav)return;nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();toggle.focus()}});document.addEventListener('pointerdown',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target)&&!toggle.contains(e.target))closeMenu()})}
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced||!('IntersectionObserver'in window)){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'))}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');observer.unobserve(entry.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
const dial=document.querySelector('[data-dial]');
if(dial&&!reduced){const needle=dial.querySelector('.rose-needle');const reading=dial.querySelector('[data-bearing]');dial.addEventListener('pointermove',e=>{const r=dial.getBoundingClientRect();const angle=(Math.atan2(e.clientY-r.top-r.height/2,e.clientX-r.left-r.width/2)*180/Math.PI+90+360)%360;needle.style.transform=`rotate(${angle}deg)`;reading.textContent=`${String(Math.round(angle)).padStart(3,'0')}°`});dial.addEventListener('pointerleave',()=>{needle.style.transform='rotate(22deg)';reading.textContent='022°'})}
