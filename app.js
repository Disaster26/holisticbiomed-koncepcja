(function(){
  var burger=document.getElementById('burger'),menu=document.getElementById('menu');
  function zamknij(){menu.classList.remove('otw');burger.setAttribute('aria-expanded','false');}
  burger.addEventListener('click',function(){var o=menu.classList.toggle('otw');burger.setAttribute('aria-expanded',o?'true':'false');});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',zamknij);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')zamknij();});

  // dolny pasek na telefonie - dopiero po przewinieciu za przyciski hero
  var mob=document.getElementById('mob'),cel=document.querySelector('.hero-cta'),kontakt=document.getElementById('kontakt');
  if('IntersectionObserver' in window&&mob&&cel){
    var zaHero=false,wKontakcie=false;
    function ustaw(){var w=zaHero&&!wKontakcie;mob.classList.toggle('widac',w);mob.setAttribute('aria-hidden',w?'false':'true');mob.querySelectorAll('a').forEach(function(a){a.tabIndex=w?0:-1;});}
    new IntersectionObserver(function(e){zaHero=!e[0].isIntersecting&&e[0].boundingClientRect.top<0;ustaw();}).observe(cel);
    new IntersectionObserver(function(e){wKontakcie=e[0].isIntersecting;ustaw();},{rootMargin:'0px 0px -40% 0px'}).observe(kontakt);
  }

  // formularz - atrapa
  var f=document.getElementById('form'),info=document.getElementById('formInfo');
  f.addEventListener('submit',function(e){e.preventDefault();info.hidden=false;});
})();
