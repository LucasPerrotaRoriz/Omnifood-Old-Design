const btnHamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".hero__navigation--mobile");

const smoothNav = function() {
  btnHamburger.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active--mobile");
}

btnHamburger.addEventListener("click", function () {
  smoothNav()
});

document.querySelector('.hero__navigation--mobile').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('hey')

  // Matching strategy
  if (e.target.classList.contains('hero__link--mobile')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
  smoothNav()
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