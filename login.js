function setFormMessage (formElement, type, message){
    const messageElement = formElement.querySelector(".form_message"); 

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);//This will add the message and its corresponding styling
}

function setInputError(inputElement, message){
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
} // this function adds the error text when called

function clearInputError(inputElement){
    inputElement.classList.remove("form_input--error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
} // this function removes the error text when called

document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
// this function is triggered when clicking the  link is clicked


    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
        // When the link to don't have an account is clicked it adds the 
        //form-hidden to the login form and removes it  from the create an account form
    });

    document.querySelector("#linkLogin").addEventListener("click",  e => {
        e.preventDefault(); // Prevents the HTML going to the default
        loginForm.classList.remove("form-hidden"); // removes the class of hidden from the loginform
        createAccountForm.classList.add("form-hidden"); // adds the class of hidden from the loginform
        // When the link to already have an account is clicked it adds the 
        //form-hidden to the create account form and removes it  from the login form
    });

    const userName = document.getElementById("Username");
    const password = document.getElementById("Password");
    // This creates a variable for the username and password in the login form

    loginForm.addEventListener("submit", e =>{
       e.preventDefault(); // Prevents the HTML going to the default

if (userName.value === "HelpersHub" && password.value === "1234"){
    setFormMessage(loginForm, "success", "You're Logged in!");
    setTimeout(function () {
        window.location.href = "index.html";
    }, 2500);        
 // This compares the value of the password and user name inputed and if it matches
 //  it give you a message saying you're logged in followed by a delay to the home page.
    
        } else {
            setFormMessage(loginForm, "error", "Invalid Username/Password combination");
}           //Gives the error message if the password is wrong
    });

    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be atleast 10 characters in length")
            }// this function looks at the length of the string within the input for username
            //and depending on whether its longer than 10 characters or not it will add a error m
        });//essage as soon as you click off

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        }) // removes the 10 character error message once its 10 or more
    });

});