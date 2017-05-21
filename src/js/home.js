function owlHome() {
  $('#owl-home').owlCarousel({
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
}

function navFondo() {
  if ($(document).scrollTop() > 20) {
    $('nav').addClass('Fondo');
  } else {
    $('nav').removeClass('Fondo');
  }
}

function animacionesNavegacion() {
  $('nav a').bind('click',
    function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
}

$(window).scroll(navFondo);
$(document).ready(navFondo);
$(document).ready(owlHome);
$(document).ready(animacionesNavegacion);