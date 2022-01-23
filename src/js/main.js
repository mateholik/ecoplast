const menu = document.getElementById("mobileMenu");
const burger = document.getElementById("hamburger");
//TODO dynamic items
const moreBtn = document.getElementById("more");
const priceBoxes = document.querySelectorAll("#tables .table-holder");
const priceArrow = moreBtn.getElementsByTagName("img")[0];

burger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  menu.classList.toggle("active");
});

moreBtn.addEventListener("click", function () {
  priceBoxes.forEach((item, index) => {
    if (index !== 0) {
      item.classList.toggle("table-holder--show");
    }
  });
  priceArrow.classList.toggle("rotate");
  document
    .getElementsByClassName("tables-title")[0]
    .scrollIntoView({ behavior: "smooth" });
});
