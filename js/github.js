const fixedNav = document.querySelector(".fixed");
const normal = document.querySelector(".normal");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    fixedNav.style.display = "flex";
  } else {
    fixedNav.style.display = "none";
  }
});