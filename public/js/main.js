const scrolling = document.querySelector("header");

window.addEventListener("scroll", () => {
  scrolling.classList.toggle("header-fixed", this.scrollY > 0);
});

// =====

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  window.location.reload();
});
