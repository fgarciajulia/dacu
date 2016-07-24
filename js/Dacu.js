var owl_Home = $('#owl-carousel1');
var owl_Servicios = $('#owl-carousel2');

$(document).ready(function () {
  owl_Home.owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
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
  $('nav a').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});



$(window).ready(function () {
  var controller = $.superscrollorama({
    triggerAtCenter: false,
    playoutAnimations: true,
  });


  var line5 = $(' #Line5-SVG > polyline');


  /* Mockup 1 */
  TweenLite.from('#Line1-poly', 7, { drawSVG: '100% 100%', delay: 0.2 });
  TweenLite.from('#Line2-poly', 5, { drawSVG: '0% 0%', delay: 6 });

  /* Title  Diseño Grafico */
  TweenLite.to('#Line3-poly', 1, { drawSVG: '6% 85%', delay: 0 });
  TweenLite.to('#Line4-poly', 1, { drawSVG: '30% 100%', delay: 0 });



  /* Diseño Grafico */
  var misela1 = $('.cuadraditos_sereados > rect');
  var minela2 = $('#responsive_misela_cuadraditos_02 > rect');
  var miselaSlider = $('.owl-dot');


  TweenMax.staggerFrom(misela1, 0.5, { opacity: 0, y: 200, x: 200, scale: 3, delay: 0.5 }, 0.2);
  TweenMax.staggerFrom(miselaSlider, 0.5, { opacity: 0, y: 200, x: 200, rotation: 680, scale: 2, delay: 0.5 }, 0.2);

  /* Responsive */

  var staggerTween = new TimelineMax();
  staggerTween.append(TweenMax.staggerFrom(minela2, 1, { css: { opacity: 0, y: 200, x: 200, scale: 2 } }, 0.25), 0, 0);
  controller.addTween(minela2, staggerTween);
  controller.addTween(line5, TweenLite.from(line5, 3, { drawSVG: '85% 85%' }));
  controller.addTween(line5, TweenLite.from($('.line-responsive'), 3, { drawSVG: '0% 0%' }));
});

/* Servicios */
$(document).ready(function () {
  owl_Servicios.owlCarousel({
    loop: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    margin: 80,
    dragEndSpeed: 1000, //speed when touch
    dotsSpeed: 1000, //speed with dots
    autoplaySpeed: 1000
  });

  var elementoAnterior = 0;
  var width_Contacto_Books = $('#servicios_icono1 > #Books rect');
  var width_Contacto_Reloj_min = $('#servicios_icono1 > #Reloj-min');
  owl_Servicios.on('translated.owl.carousel', onTranslatedEvent);
  function onTranslatedEvent(event) {
    // Elemento Anterior 
    if (elementoAnterior == 0) {
      var TimeCloseIcon1 = new TimelineMax();
      TimeCloseIcon1.append(TweenMax.staggerTo(width_Contacto_Books, .5, { scaleX: 0, transformOrigin: '0% 0%' }, 0.1), 0, 0);
      TweenLite.to(width_Contacto_Reloj_min, 1, { rotation: 0, transformOrigin: 'center center' });
    }
    elementoAnterior = event.page.index;

    // Elemento Nuevo
    if (event.page.index == 0) {
      var TimeIcon1 = new TimelineMax();
      TimeIcon1.append(TweenMax.staggerTo(width_Contacto_Books, .5, { scaleX: 1, transformOrigin: '0% 0%' }, 0.1), 0, 0);
      TweenLite.to(width_Contacto_Reloj_min, 2, { rotation: 180, transformOrigin: 'center center' });
    }
  }
});

/*
owl_Servicios.on('changed.owl.carousel', function(e) {
    var element   = event.target;  
    alert(element);
});
*/


/* Iconos Icon grafic design */

/*
--- NAV ---


    var width_Home = $( '.Nav-Home a span' ).width();
    var width_Servicios = $( '.Nav-Servicios a span' ).width();
    var width_Porfolio = $( '.Nav-Porfolio a span' ).width();
    var width_Contacto = $( '.Nav-Contacto a span' ).width();

    function pepe() {
        $( '.Nav-Home:not(.active) a span' ).css({ 'width': width_Home });
        $( '.Nav-Servicios:not(.active) a span' ).css({ 'width': width_Servicios });
        $( '.Nav-Porfolio:not(.active) a span' ).css({ 'width': width_Porfolio    });
        $( '.Nav-Contacto:not(.active) a span' ).css({ 'width': width_Contacto   });
    };
    function pepe2() {
        $( '.Nav-Home:not(.active) a span' ).css({ 'width': 0 });
        $( '.Nav-Servicios:not(.active) a span' ).css({ 'width': 0 });
        $( '.Nav-Porfolio:not(.active) a span' ).css({ 'width': 0  });
        $( '.Nav-Contacto:not(.active) a span' ).css({ 'width': 0 });
    };
    $( 'nav' ).mouseenter( pepe );
    $( 'nav' ).mouseleave( pepe2 ) ;
    pepe2();
    */