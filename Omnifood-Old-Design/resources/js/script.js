const btnHamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".hero__navigation--mobile");

btnHamburger.addEventListener("click", function () {
  btnHamburger.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active--mobile");
});

document.querySelector('.hero__navigation').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('hey')

  // Matching strategy
  if (e.target.classList.contains('hero__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});