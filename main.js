const burger = document.querySelector(".burger");
const nav = document.querySelector("ul");
const searchicon = document.querySelector(".search-icon-mob");
const form = document.querySelector("form");

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  nav.classList.toggle("toggle");
});

searchicon.addEventListener("click", () => {
  form.classList.toggle("toggle");
});
