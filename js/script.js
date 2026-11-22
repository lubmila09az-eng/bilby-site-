(function(){
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
els.forEach(function(el,i){el.style.transitionDelay=(i%3)*100+'ms';io.observe(el);});
}else{els.forEach(function(el){el.classList.add('in');});}
var d=document.getElementById('lb'),im=d.querySelector('img');
document.querySelectorAll('.gal button').forEach(function(b){b.addEventListener('click',function(){var s=b.querySelector('img');im.src=s.src;im.alt=s.alt;d.showModal();});});
d.querySelector('button').addEventListener('click',function(){d.close();});
d.addEventListener('click',function(e){if(e.target===d)d.close();});
})();
