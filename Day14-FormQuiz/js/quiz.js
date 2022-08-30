let questions
let aleatorio

async function loadQuestions() {
    const data = await fetch('./js/questions.json')
    questions = await data.json()
    
    questions.forEach(question => {
        createQuestion(question)
    })
}

function selectQuestion(question) {
    
}

//aleatorio = Math.floor(Math.random() * questions.length)

