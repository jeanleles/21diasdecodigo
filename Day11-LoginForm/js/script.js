const username = document.getElementById('email')
const password = document.getElementById('password')

username.addEventListener('input', () => {
    if(username.value.length >= 3 & password.value.length > 5) {
        document.getElementById('login').classList.add('button-enabled')
    } else {
        document.getElementById('login').classList.remove('button-enabled') 
    }
})

password.addEventListener('input', () => {
    if(username.value.length >= 3 & password.value.length > 5) {
        document.getElementById('login').classList.add('button-enabled')
    } else {
        document.getElementById('login').classList.remove('button-enabled') 
    }
})
//@jeanleles