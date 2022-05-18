function setFormMessage (formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message){
    inputElement.classList.add("form__input-error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

    });

    document.querySelector("#linkLogin").addEventListener("click",  e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        
    });

    // const userName = document.getElementById("Username");
    // const password = document.getElementById("Password");

    loginForm.addEventListener("submit", e =>{
        e.preventDefault();
//if (userName != "Chrismelo@email.com" && password != "1234"){
            setFormMessage(loginForm, "error", "Invalid Username/Password combination");
        //} else {
            //setFormMessage(loginForm, "Success", "You're Logged in!");
//}
    });

});