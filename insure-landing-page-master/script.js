const hamburger = document.querySelector(".hamburger");
const desktopMenu = document.querySelector(".desktop-menu");
const closeBtn = document.querySelector(".closebtn");

hamburger.addEventListener("click", function () {
  desktopMenu.classList.toggle("hidden");
  hamburger.src = desktopMenu.classList.contains("hidden")
    ? "./images/icon-hamburger.svg"
    : "./images/icon-close.svg";
});