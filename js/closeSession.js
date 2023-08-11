const closeSession = document.getElementById("close-session-button");

closeSession.addEventListener(`click`, (e) => {

    localStorage.removeItem('username');
    window.location.href = '../html/index.html';
})