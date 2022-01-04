const mobileNavBar = document.querySelector(".mobile-nav-bar");
const introSection = document.querySelector(".intro");
const aboutSection = document.querySelector(".about");
const footerSection = document.querySelector(".footer");
const mobileNavBarLinks = document.querySelector(".mobile-nav-bar-links");

mobileNavBar.addEventListener("click", () => {
  mobileNavBar.classList.toggle("active");
  introSection.classList.toggle("active");
  aboutSection.classList.toggle("active");
  footerSection.classList.toggle("active");
  mobileNavBarLinks.classList.toggle("active");
});
