const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark-mode1');
  document.querySelector('.bg-button').classList.toggle('bg-button-dark');
})