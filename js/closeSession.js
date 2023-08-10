const closeSession = document.getElementById("close-session-button");



closeSession.addEventListener(`click`, (e) => {

    localStorage.removeItem('username');
    window.location.href = '../html/index.html';

    document.getElementById("login-content").style.visibility = 'visible';
    document.getElementById("full-screen-container").style.visibility = 'visible'; 
})