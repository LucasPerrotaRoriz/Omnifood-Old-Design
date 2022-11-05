const btnHamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".hero__navigation--mobile");

btnHamburger.addEventListener("click", function () {
  btnHamburger.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active--mobile");
});
