// menu.js - menu mobile overlay
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('btnMenu');
  const close = document.getElementById('closeMenu');
  btn && btn.addEventListener('click', ()=> document.body.classList.toggle('menu-open'));
  close && close.addEventListener('click', ()=> document.body.classList.remove('menu-open'));
  // Fecha ao clicar fora do painel
  document.addEventListener('click', (e)=>{
    if(document.body.classList.contains('menu-open')){
      const panel = document.querySelector('.mobile-panel');
      if(panel && !panel.contains(e.target) && !btn.contains(e.target)){
        document.body.classList.remove('menu-open');
      }
    }
  });
});
