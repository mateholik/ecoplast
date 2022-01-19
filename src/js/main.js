const menu = document.getElementById("mobileMenu");
const burger = document.getElementById("hamburger");

burger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  menu.classList.toggle("active");
});
