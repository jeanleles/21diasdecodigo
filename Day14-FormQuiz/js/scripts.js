const startStopBtn = document.getElementById('startStopBtn')
const iconBtn = document.getElementById('iconBtn')
const clock = document.getElementById('clock')
const msg = document.querySelector('.msg')
clock.innerText = '02:00'

const startingMinutes = 25

let time = startingMinutes * 60
let flag = true
let respostasCertas = 0

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
        limparTelaInicial()
        fetchQuestions()
    }
    else {
        location.reload()
    }
})

function loadQuestions() {
    return fetch('./js/questions.json')
}

let index = 0
let result

async function fetchQuestions() {
    const data = await loadQuestions()
    result = await data.json()
    createQuestion()
}

function createQuestion() {
    const display = document.querySelector('.question-wrapper')
    display.innerHTML = `<p>Questão ${index + 1}: ${result.questions[index].question}</p>
        <ul class="answers">
            <li id="answer1">${result.questions[index].answer1}</li>
            <li id="answer2">${result.questions[index].answer2}</li>
            <li id="answer3">${result.questions[index].answer3}</li>
            <li id="answer4">${result.questions[index].answer4}</li>
        </ul>`
    selecionarRespostas()
}

function limparTelaInicial() {
    document.querySelector('.start').classList.add('esconde')
}

function selecionarRespostas() {
    const respostas = document.querySelectorAll('.answers li')
    const respostas2 = Array.from(respostas)
    respostas2.forEach(function (item) {
        item.addEventListener('click', () => {
            const resposta = item.getAttribute('id')
            if (resposta === result.questions[index].correct_answer){
                item.classList.add('correct')
                respostasCertas += 1
            } else {
                item.classList.add('wrong')
            }
            index += 1
            nextQuestion()
        })
    })
}

function nextQuestion() {
    if (index < 5) {
        document.querySelector('.content').innerHTML += '<button class="btn" id="btnNext">Próxima Questão</button>'
        const btnNext = document.getElementById('btnNext')
        btnNext.addEventListener('click', () => {
            createQuestion()
            btnNext.remove()
        })
    } else {
        setTimeout(() => {
            const msg = respostasCertas > 2 ? 'Parabéns! Você foi muito bem.' : 'Você precisa melhorar. Boa sorte na próxima!'
            document.querySelector('.content').innerHTML = `<div class="result">
                <h1>Quiz finalizado!</h1>
                <h2>${msg}</h2>
                <h2>Respostas certas: ${respostasCertas}</h2>
            `
          }, "2000")
    }
}



//const aleatorio = Math.floor(Math.random() * result.questions.length)