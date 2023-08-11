const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");
const confirmationMessage = document.getElementById("confirmation_message");

const loginContainer = document.getElementById("login-content");
const backgroundContainer = document.getElementById("full-screen-container");

username.addEventListener(`click`, (e) => {
    confirmationMessage.innerHTML = "";
});

password.addEventListener(`click`, (e) => {
    confirmationMessage.innerHTML = "";
});

loginButton.addEventListener(`click`, async (e) => {

    if (password.value.length > 0 && username.value.length > 0) {
        console.log(`Intento de login con ${username.value} y ${password.value}`);

        const response = await confirmLogin({username:username.value, password:password.value});
        if (response.status === 200) {
            console.log(`Login exitoso con ${username.value} y ${password.value}`);
            loginContainer.style.visibility = 'hidden';
            backgroundContainer.style.visibility = 'hidden';
            password.value = "";
            confirmationMessage.innerHTML = "";
            localStorage.setItem('username', username.value);

        } else {
            confirmationMessage.innerHTML = "Invalid Login";
        }
 
    } else {
        confirmationMessage.innerHTML = "Username or password are empty";
    }
})

registerButton.addEventListener(`click`, async (e) => {
    if (password.value.length > 7 && username.value.length > 0) {
        insertUser({username:username.value, password:password.value});
        confirmationMessage.innerHTML = "User registered correctly";
    } else {
        confirmationMessage.innerHTML = "The password must be at least 8 characters long";
    }
    
})