"use strict";
const form = document.querySelector("form");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navBg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

burger.addEventListener("click", () => {
  nav.classList.toggle("navActive");
});
