const headerNuvBtn = document.querySelector('.header__nav-btn');
const headerNavigation = document.querySelector('.header__navigation');

headerNuvBtn.addEventListener('click', () => {
    headerNavigation.classList.toggle('header__navigation_open')
});
