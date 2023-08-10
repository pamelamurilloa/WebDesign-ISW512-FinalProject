window.onscroll = function() {headerSticker()};

var header = document.getElementById("header-container-index");

var sticky = header.offsetTop;

function headerSticker()
{
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
}
}

const bodyTheme = document.getElementById('bodyTheme');
const themeButton = document.getElementById('theme-button');

const changeTheme = () => {
  if (bodyTheme.className === "dark-blue") {
    bodyTheme.classList.remove("dark-blue");
    themeButton.innerHTML = "Light Theme";
  } else {
    bodyTheme.className = "dark-blue";
    themeButton.innerHTML = "Dark Theme";
  }
}