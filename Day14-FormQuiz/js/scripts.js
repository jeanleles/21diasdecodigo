const startStopBtn = document.getElementById('startStopBtn')
const iconBtn = document.getElementById('iconBtn')
const clock = document.getElementById('clock')
const msg = document.querySelector('.msg')
clock.innerText = '02:00'

const startingMinutes = 2

let time = startingMinutes * 60
let flag = true

function countdown() {
    let minutes = 0
    let seconds = 0
    setInterval(function () {
        if (flag == false) {
            minutes = Math.floor(time / 60)
            seconds = time % 60
            
            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds

            if (time >= 0) {
                clock.innerText = `${minutes}:${seconds}`
                time--
            }
        }
        if (clock.innerText === '00:00') {
            msg.innerText = 'PAUSA'
            iconBtn.setAttribute('src', './images/play.png')
        } 
    }, 1000)
}

startStopBtn.addEventListener('click', () => {
    if (flag == true && clock.innerText != '00:00') {
        flag = false
        countdown()
    }
    else {
        location.reload()
    }
})
