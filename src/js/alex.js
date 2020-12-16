let div = document.createElement('div');
div.className = 'popup';
div.innerHTML += '<span class="close">X</span>';
div.innerHTML += '<p>This is popup window!</p>';
document.body.prepend(div);

let close = document.querySelector('.close');
close.addEventListener('click', function (){
  div.classList.add('hidden');
})