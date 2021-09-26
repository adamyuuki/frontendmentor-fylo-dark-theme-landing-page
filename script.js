const error_1 = document.getElementById("email-error-1")
const error_2 = document.getElementById("email-error-2")
const email = document.getElementById('email-input')
const btn = document.getElementById('email-btn')

btn.addEventListener('click', e =>{
    e.preventDefault()

    if(validateEmail(email.value)){
        console.log('email valued')
        error_1.classList.add('hide')
        error_2.classList.add('hide')
    } else {
        error_1.classList.remove('hide')
        error_2.classList.remove('hide')
    }

    
})



function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}