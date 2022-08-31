function loadQuestions() {
    return fetch('./js/questions.json')
}

const createQuestion = async () => {
    const data = await loadQuestions()
    const result = await data.json()
    console.log(result.questions[2].question)
    
    const aleatorio = Math.floor(Math.random() * result.questions.length)
    console.log(aleatorio)
}

createQuestion()


