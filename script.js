const openingOverlay = document.querySelector(".opening-overlay");

const menuItems =
  document.querySelectorAll(".menu-item") ||
  document.querySelectorAll("path") ||
  document.querySelectorAll("svg");
const everyStill = document.querySelectorAll(".still");

const slides = document.querySelectorAll(".sb-slide");

const portfolioSections = document.querySelectorAll(".portfolio-section");
const portfolioMenuItems = document.querySelectorAll(".portfolio-menu-item");
const portfolioMenu = document.querySelectorAll(".portfolio-menu");
const portfolio = document.querySelector(".portfolio");
const content = document.querySelectorAll(".content");

menuItems.forEach((item) => {
  item.addEventListener("mouseover", function (e) {
    e.target.style.color = "#d41935";
  });
  item.addEventListener("mouseout", function (e) {
    e.target.style.color = "rgb(126, 126, 126)";
  });
  item.addEventListener("click", function (e) {
    if (item === menuItems[0]) openingOverlay.style.transform = "translateY(0)";
    if (item === menuItems[1]) {
      content[1].classList.remove("hidden");
      portfolio.style.opacity = 0;
    }
  });
});

openingOverlay.addEventListener("click", function () {
  portfolio.classList.remove("hidden");
  openingOverlay.style.transform = "translateY(-100vh)";
});

let slideIndex = 1;

slides.forEach((slide) => {
  slide.addEventListener("click", function () {
    slideIndex++;
    if (slideIndex <= 15) {
      slide.style.transform = `rotate(-90deg)`;
    } else {
      slideIndex = 1;
      slides.forEach((slide) => (slide.style.transform = `rotate(0deg)`));
    }
  });
});

portfolioMenuItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    console.log(e.target.textContent);
    portfolioSections.forEach((section) => {
      if (section.classList.contains(e.target.textContent)) {
        section.style.display = "grid";
      } else {
        section.style.display = "none";
      }
    });
    content.forEach((section) => {
      if (section.classList.contains(e.target.textContent)) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  });
});

console.log("I am the change");
