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

const bodyTheme = document.getElementsByClassName("theme_body")[0];
const themeButton = document.getElementsByClassName("theme_button")[0];

const changeTheme = () => {
  if (bodyTheme.className === "dark-blue") {
    bodyTheme.classList.remove("dark-blue");
    themeButton.innerHTML = "Light Theme";
    localStorage.setItem('theme', 'light');
  } else {
    bodyTheme.className = "dark-blue";
    themeButton.innerHTML = "Dark Theme";
    localStorage.setItem('theme', 'dark');

  }
}

if (localStorage.getItem('theme') === 'dark') {
  bodyTheme.style.transition = 'all 0s';
  bodyTheme.className = "dark-blue";
  themeButton.innerHTML = "Dark Theme";
} else {
  bodyTheme.style.transition = 'all 700ms';
}
