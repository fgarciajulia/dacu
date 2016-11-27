var owl_Home = $('#owl-carousel1');

$(document).ready(function () {
  owl_Home.owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    autoplaySpeed: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
    lazyLoad: true,
    margin: 400,
  });
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $('nav').addClass('Fondo');
  } else {
    $('nav').removeClass('Fondo');
  }
});

$(function () {
  $('nav a').bind('click',
    function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
});
