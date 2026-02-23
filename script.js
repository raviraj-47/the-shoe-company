const navBar = document.querySelector("#nav-bar");
const menuBtn = document.querySelector("#menu-btn");
const backBtn = document.querySelector("#back-btn");
const overlay = document.querySelector('#menu-overlay');
menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("hidden");
  navBar.classList.remove("hidden");
  navBar.classList.add("flex");
  overlay.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  menuBtn.classList.remove("hidden");
  navBar.classList.add("hidden");
  navBar.classList.remove("flex");
  overlay.classList.add("hidden");
});
