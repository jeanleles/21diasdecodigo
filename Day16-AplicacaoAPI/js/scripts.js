const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode1');
    document.querySelector('.top').classList.toggle('dark-mode2');
    document.querySelector('.bg-button').classList.toggle('bg-button-dark');
    document.querySelector('.more-btn').classList.toggle('more-btn-dark');
})

//https://api.github.com/users/${username}
//https://api.github.com/users/${username}/repos

const searchBtn = document.getElementById('searchBtn')
const search = document.getElementById('search')

searchBtn.addEventListener('click', () => {
    if (search.value != '') {
        searchUser()
        searchRepos()
    }
    else {
        alert('Digite um usu[ario do Github para pesquisa.')
    }
})

function fetchUser(user) {
    return fetch(`https://api.github.com/users/${user}`)
}

function fetchRepos(user) {
    return fetch(`https://api.github.com/users/${user}/repos`)
}

let githubUser
let githubRepos = []

async function searchUser() {
    const data = await fetchUser(search.value)
    githubUser = await data.json()
    fillUser()
}

async function searchRepos() {
    const data = await fetchRepos(search.value)
    githubRepos = await data.json()
    console.log(githubRepos)
    fillRepos()
}

const wrapperProfile = document.querySelector('.wrapper-profile')

function fillUser() {
    document.querySelector('.msg').classList.add('hide')
    wrapperProfile.innerHTML = `
        <img src="${githubUser.avatar_url}" alt="">
        <h1>${githubUser.name}</h1>
        <a href="#">${githubUser.login}</a>
        <p>${githubUser.bio}</p>
        <div class="follow">
            <p><span>${githubUser.followers}</span> Followers · Following ${githubUser.following}</p>
            <p>Respositórios: ${githubUser.public_repos}</p>
        </div>    
    `
    wrapperProfile.classList.remove('hide')
}

const wrapperRepos = document.querySelector('.wrapper-repos')

function fillRepos() {
    wrapperRepos.innerHTML = ''
    wrapperRepos.classList.remove('hide')
    githubRepos.map((repo) => {
        wrapperRepos.innerHTML += `
            <div class="repo">
                <a href="${repo.html_url}" target="_blank">
                    <h3>${repo.name}</h3>
                </a>
                <p>${repo.description}</p>
                <p class="date">${Intl.DateTimeFormat('pt-BR').format(new Date(repo.created_at))}</p>
            </div>    
            `
    })
}