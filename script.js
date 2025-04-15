const form = document.getElementById('form')
const email = document.getElementById('email')
const errorIcon = document.getElementById('error-icon')
const errorMsg = document.getElementById('error-msg')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    emailValidate()
})

email.addEventListener('change', (e)=> {
    const selectedInput = e.target
    
    if (selectedInput.value.trim().length > 0) {
        errorIcon.classList.remove('error-icon--active')
    } else {
        errorIcon.classList.add('error-icon--active')
    }
})

const emailValidate = () => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailRegex.test(email.value)) {
        errorMsg.classList.remove('error-msg--active')
    } else {
        errorMsg.classList.add('error-msg--active')
    }
}