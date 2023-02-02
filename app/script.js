"use strict";
const form = document.querySelector("form");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navBg");
const sliders = document.querySelectorAll(".testimonial");
const sliderRight = document.querySelector(".slider_icon__right");
const sliderLeft = document.querySelector(".slider_icon__left");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const burgerFunc = function () {
  nav.classList.toggle("navActive");
  burger.classList.toggle("toggle");
};

burger.addEventListener("click", burgerFunc);

let curSlide = 0;
let maxSlide = sliders.length - 1;

const goToSlide = function (slide) {
  sliders.forEach(
    (slider, index) =>
      (slider.style.transform = `translateX(${100 * (index - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

const arrowSlide = function (e) {};

sliderRight.addEventListener("click", nextSlide);
sliderLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") prevSlide();
});
