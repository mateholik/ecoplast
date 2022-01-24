const heroSLider = new Glide("#heroSLider", {
  type: "carousel",
  autoplay: 4000,
  animationDuration: 800,
});

const areasSLider = new Glide("#areasSLider", {
  type: "carousel",
  // autoplay: 4000,
  animationDuration: 800,
  perView: 3,
  gap: 20,
  breakpoints: {
    900: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
});

heroSLider.mount();
areasSLider.mount();

const menu = document.getElementById("mobileMenu");
const burger = document.getElementById("hamburger");
burger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  menu.classList.toggle("active");
});

//TODO dynamic items
const moreBtn = document.getElementById("more");
if (moreBtn) {
  const priceBoxes = document.querySelectorAll("#tables .table-holder");
  const priceArrow = moreBtn.getElementsByTagName("img")[0];
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
}
