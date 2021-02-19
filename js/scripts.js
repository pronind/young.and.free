var topMenu = document.querySelector(".header");
var menuButton = topMenu.querySelector(".header__button-menu");
var menuOpen = topMenu.querySelector(".header__nav-container");
var topLogo = topMenu.querySelector(".header__logo");
var body = document.querySelector("body");





menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.toggle("header__nav-container--open");
  topLogo.classList.toggle("header__logo--modal");
  topMenu.classList.toggle("header__menu--open");
  menuButton.classList.toggle("header__button-menu--close");
  body.classList.toggle("modal-open");
});