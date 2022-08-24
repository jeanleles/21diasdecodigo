const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark-mode1');
  document.querySelector('.top').classList.toggle('dark-mode2');
  document.querySelector('.bg-button').classList.toggle('bg-button-dark');
  document.querySelector('.more-btn').classList.toggle('more-btn-dark');
})