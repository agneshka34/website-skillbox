
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__nav__link')

burger.addEventListener('click',

  function() {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){

    burger.classList.remove('bureger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })

})
