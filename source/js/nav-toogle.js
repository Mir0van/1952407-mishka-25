let mainNav = document.querySelector('.main-nav');
let mainNavToggle = document.querySelector('.main-nav__toogle');
let mainHeader = document.querySelector('.main-header')

mainNav.classList.remove('main-nav--no-js');
mainNavToggle.classList.remove('main-nav__toogle--no-js');
mainNavToggle.classList.add('main-nav__toogle--closed');
mainHeader.classList.add('main-header--js-menu');

mainNavToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    mainNavToggle.classList.remove('main-nav__toogle--closed');
    mainNavToggle.classList.add('main-nav__toogle--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    mainNavToggle.classList.add('main-nav__toogle--closed');
    mainNavToggle.classList.remove('main-nav__toogle--opened');
  }
});
