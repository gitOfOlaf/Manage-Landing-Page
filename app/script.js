"use strict";
const form = document.querySelector("form");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navBg");
const sliders = document.querySelectorAll(".testimonial");
const sliderRight = document.querySelector(".slider_icon__right");
const sliderLeft = document.querySelector(".slider_icon__left");
const errorMsg = document.querySelector(".errorMsg");
const input = document.querySelector("input");

// form validation
const validateEmail = function (email) {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(email);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input.value) {
    errorMessage("wrong");
    return;
  }
  let inputValue = input.value;
  if (validateEmail(inputValue)) {
    errorMessage("right");
    input.value = "";
  }
  if (!validateEmail(inputValue)) {
    errorMessage("wrong");
  }
});

const errorMessage = function (arg) {
  if (arg === "right") {
    errorMsg.textContent = "Email Successfully Added!";
    errorMsg.style.color = "green";
    errorMsg.style.fontSize = "12px";
    errorMsg.style.marginTop = "8px";

    setTimeout(() => {
      errorMsg.textContent = "";
      errorMsg.style.fontSize = "";
      errorMsg.style.marginTop = "";
    }, 3000);
  } else if (arg === "wrong") {
    errorMsg.textContent = "Please Enter in a correct Email Address";
    errorMsg.style.color = "red";
    errorMsg.style.fontSize = "12px";
    errorMsg.style.marginTop = "8px";

    setTimeout(() => {
      errorMsg.textContent = "";
      errorMsg.style.fontSize = "";
      errorMsg.style.marginTop = "";
    }, 3000);
  }
};

// burger menu implementation
const burgerFunc = function () {
  nav.classList.toggle("navActive");
  burger.classList.toggle("toggle");
};

burger.addEventListener("click", burgerFunc);

// Slider implementation
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

sliderRight.addEventListener("click", nextSlide);
sliderLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

// Reveal Element on scroll
const section = document.getElementById("section2");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.05,
});
sectionObserver.observe(section);
section.classList.add("section--hidden");
