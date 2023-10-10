$(function(){
    $('.header__slider').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/prev arrow slider.png" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/next arrow slider.png" alt=""></button>',
      vertical: true
    })
});

const headerBtn = document.querySelector('.menu__btn'),
  headerNav = document.querySelector('.header__menu'),
  dropdownBtn = document.querySelector('.dropdown__btn.footer__services-title'),
  dropdownContent = document.querySelector('.footer__services-list.dropdown__content'),
  footerPagesEl = document.querySelector('.footer__pages');

headerBtn.addEventListener('click', ()=>{
    headerNav.classList.toggle('menu-open');
});

dropdownBtn.addEventListener('click', ()=>{
    dropdownContent.classList.toggle('show'),
    footerPagesEl.classList.toggle('footer__pages_mt106');
});