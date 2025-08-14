// beforeafter.js - comparador simples antes/depois
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.before-after').forEach(function(container){
    const range = container.querySelector('input[type=range]');
    const after = container.querySelector('.after');
    function update(){ after.style.width = range.value + '%'; }
    range.addEventListener('input', update);
    update();
  });
});
