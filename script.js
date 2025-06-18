document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById('registration-form')
    const feedbackDiv = document.getElementById('form-feedback')
    
    form .addEventListener('submit', (e) => {
        e.preventDefault()
        const username = document.getElementById('username').value.trim()
        const email = document.getElementById('email').value.trim()
        const password = document.getElementById('password').value.trim()

        let isValid = true;
        const message = []

        if (username.length < 3){
            isValid = false
            message.push("Username must be more than 3 character")
        }

        if (!(email.includes('@')) && !(email.includes('.'))){
            isValid = false
            message.push("Invalid Email")
        }

        if (password.length < 8){
            isValid = false
            message.push("Use a more secured Password")
        }

        feedbackDiv.style.display = "block"

        if (isValid){
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.style.color = "#28a745"
        }else{
            feedbackDiv.innerHTML = `${message.join('<br>')}`
            feedbackDiv.style.color = "#dc3545"
        }
    })
})