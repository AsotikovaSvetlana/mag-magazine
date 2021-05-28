const mobileIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.header-navigation-list');

mobileIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('header-navigation-list-active');
});


const footerMenu = document.querySelectorAll('.footer-menu-title');
const footerMenuList = document.querySelectorAll('.footer-menu-list');
const footerMenuArr = Array.from(footerMenu);
const footerMenuListArr = Array.from(footerMenuList);

footerMenuArr.forEach((item, index) => {
  item.addEventListener('click', () => {
    footerMenuListArr.forEach((el, i) => {
      if (index === i) {
        el.classList.toggle('footer-menu-list-active');
      }
    });
  });
});
