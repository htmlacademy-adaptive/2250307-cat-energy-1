let navigationMenu = document.querySelector('.navigation');
let navigationToogle = document.querySelector('.main-header__navigation-toggle');

navigationToogle.addEventListener('click', function() {
  if(navigationMenu.classList.contains('navigation--closed')) {
    navigationMenu.classList.remove('navigation--closed');
    navigationMenu.classList.add('navigation--opened');

    navigationToogle.classList.remove('main-header__navigation-toggle--closed');
    navigationToogle.classList.add('main-header__navigation-toggle--opened');
  }
  else {
    navigationMenu.classList.remove('navigation--opened');
    navigationMenu.classList.add('navigation--closed');

    navigationToogle.classList.remove('main-header__navigation-toggle--opened');
    navigationToogle.classList.add('main-header__navigation-toggle--closed');
  }
});
