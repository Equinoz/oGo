const menuButton = document.querySelector(".header--left__menu-button");
const backButton = document.querySelector(".nav__icon");
const navBar = document.querySelector("nav");

// Open the navbar
menuButton.addEventListener("click", () => {
  navBar.style.display = "block";
});

// Close the navbar
backButton.addEventListener("click", () => {
  navBar.style.display = "none";
});