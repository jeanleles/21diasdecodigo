const checkbox = document.querySelector('.checkbox')

function changeMode() {
  document.body.classList.toggle('dark-mode1');
  document.querySelector('.top').classList.toggle('dark-mode2');
  document.querySelector('.bg-button').classList.toggle('bg-button-dark');
}

checkbox.addEventListener('change', ()=>{
  changeMode()
})

const evento = document.querySelector('.evento')
const tecla = document.querySelector('.tecla')
const codigo = document.querySelector('.codigo')

function handleEvent(event) {
  evento.innerText = event.type
  tecla.innerText = event.key
  codigo.innerText = `${event.keyCode} (${event.code})`

  if(event.key === 'd' && checkbox.checked == false) {
    changeMode()
    checkbox.checked = true
  }
  if(event.key === 'l' && checkbox.checked == true) {
    changeMode()
    checkbox.checked = false
  }

}

window.addEventListener('keydown', handleEvent)
