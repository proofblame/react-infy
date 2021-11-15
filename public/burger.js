$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger').toggleClass('header__burger_active');
    $('.header__nav').toggleClass('header__nav_active');
    $('body').toggleClass('root_lock-scroll');
    if (!$('.header__burger').hasClass("header__burger_animate-1", "header__burger_animate-2")) {
      $('.header__burger').addClass('header__burger_animate-1')
    } else if (!$('.header__burger_animate-1 ').hasClass("header__burger_animate-2")) {
      $('.header__burger').addClass('header__burger_animate-2')
    } else {
      $('.header__burger').removeClass('header__burger_animate-2')
    }
  });
  $('.header__menu-link').click(function () {
    $('.header__nav').toggleClass('header__nav_active');
    $('body').toggleClass('root_lock-scroll');
    if (!$('.header__burger').hasClass("header__burger_animate-1", "header__burger_animate-2")) {
      $('.header__burger').addClass('header__burger_animate-1')
    } else if (!$('.header__burger_animate-1 ').hasClass("header__burger_animate-2")) {
      $('.header__burger').addClass('header__burger_animate-2')
    } else {
      $('.header__burger').removeClass('header__burger_animate-2')
    }
  })
  $('.header__profile-link').click(function () {
    $('.header__nav').toggleClass('header__nav_active');
    $('body').toggleClass('root_lock-scroll');
    if (!$('.header__burger').hasClass("header__burger_animate-1", "header__burger_animate-2")) {
      $('.header__burger').addClass('header__burger_animate-1')
    } else if (!$('.header__burger_animate-1 ').hasClass("header__burger_animate-2")) {
      $('.header__burger').addClass('header__burger_animate-2')
    } else {
      $('.header__burger').removeClass('header__burger_animate-2')
    }
  })
  $('.rollup').click(function () {
    $('.header__nav').toggleClass('header__nav_active');
    $('body').toggleClass('root_lock-scroll');
    if (!$('.header__burger').hasClass("header__burger_animate-1", "header__burger_animate-2")) {
      $('.header__burger').addClass('header__burger_animate-1')
    } else if (!$('.header__burger_animate-1 ').hasClass("header__burger_animate-2")) {
      $('.header__burger').addClass('header__burger_animate-2')
    } else {
      $('.header__burger').removeClass('header__burger_animate-2')
    }
  })

});
