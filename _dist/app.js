var owl_Home = $('#owl-carousel1');
var owl_Servicios = $('#owl-carousel2');

var servicios_icono1_Books = $(['#servicios_icono1 > #Books_1_ rect', '#servicios_icono1 > #cuadrados_1_ rect', '#servicios_icono1 > #Diploma_1_ rect']);
var servicios_icono1_Reloj_min = $('#servicios_icono1 > #Reloj-min_1_');
var servicios_icono1_Line_start = $(['#servicios_icono1 > #Lineas_x5F_Start_1_ line', '#servicios_icono1 > #Diploma_1_ line']);
var servicios_icono1_Humo = $('#servicios_icono1 > #humo_2_ path');
var servicios_icono1_regla = $('#servicios_icono1 #regla_1_');
var servicios_icono1_pluma = $('#servicios_icono1 #Pluma_1_');
var servicios_icono1_Pantone1 = $('#servicios_icono1 #Pantone1_1_');
var servicios_icono1_Pantone2 = $('#servicios_icono1 #Pantone2_1_');
var servicios_icono1_Pantone3 = $('#servicios_icono1 #Pantone3_1_');
var servicios_icono1_Lamp = $('#servicios_icono1 #Lamp_1_');
var servicios_icono1_headerLamp = $('#servicios_icono1 #headerLamp_1_');

var servicios_icono2_nubes = $('#servicios_icono2 #Nubes_1_ g');
var servicios_icono2_Billete = $('#servicios_icono2 #Billete_2_');
var servicios_icono2_Lineas = $('#servicios_icono2 #Lineas_1_ line');
var servicios_icono2_Cuadrado = $('#servicios_icono2 #cuadrdos_1_ rect');
var servicios_icono2_Veinti4 = $('#servicios_icono2 #Veinti4_2_');
var servicios_icono2_porcentaje = $('#servicios_icono2 #porcentaje_1_');
var servicios_icono2_porcentaje_Line = $('#servicios_icono2 #porcentaje_1_ g line');
var servicios_icono2_fondo = $('#servicios_icono2 #fondo_1_');
var servicios_icono2_fondoLineasFan = $('#servicios_icono2 #LineasFanPage_1_ line');
var servicios_icono2_Frnja = $('#servicios_icono2 #Frnja_1_');
var servicios_icono2_Imagen = $(['#servicios_icono2 #Imagen_2_','#servicios_icono2 #Imagen_3_', '#servicios_icono2 #Tilde_1_']);

function CierreIcon1() {
  var TimeCloseIcon1 = new TimelineMax();
  TimeCloseIcon1.timeScale(1);
  TimeCloseIcon1
    .staggerTo(servicios_icono1_Books, 1, { scaleX: 0, transformOrigin: '0% 0%' }, 0.1)
    .to(servicios_icono1_Reloj_min, 2, { rotation: 0, transformOrigin: 'center center' }, 0)
    .to(servicios_icono1_Lamp, 1, { fill: '#fff' }, 0)
    .to(servicios_icono1_regla, 1, { rotation: 0, transformOrigin: '100% 100%' }, 0)
    .to(servicios_icono1_pluma, 1, { rotation: 0, transformOrigin: '0 10' }, 0)
    .to(servicios_icono1_headerLamp, 1, { rotation: 0, transformOrigin: '18 0' }, 0)
    .to(servicios_icono1_Pantone3, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(servicios_icono1_Pantone2, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(servicios_icono1_Pantone1, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(servicios_icono1_Line_start, 2, { drawSVG: '50% 50%' }, 0)
    .to(servicios_icono1_Humo, 2, { drawSVG: '100% 100%' }, 0);
}
function OpenIcon1() {
  var TimeIcon1 = new TimelineMax();
  TimeIcon1.timeScale(1); 
  TimeIcon1
    .set(servicios_icono1_Humo, { drawSVG: '0% 0%' }, 0).to(servicios_icono1_Humo, 1, { drawSVG: '10% 50%', ease: Linear.easeNone }).to(servicios_icono1_Humo, 1, { drawSVG: '35% 80%', ease: Linear.easeNone }).to(servicios_icono1_Humo, 2, { drawSVG: '100% 100%', ease: Linear.easeNone })
    .staggerTo(servicios_icono1_Books, 1, { scaleX: 1, transformOrigin: '0% 0%' }, 0.3, 0)
    .to(servicios_icono1_Reloj_min, 3, { rotation: 240, transformOrigin: 'center center' }, 0)
    .to(servicios_icono1_Lamp, 1, { fill: '#C9BB9E' }, 0)
    .to(servicios_icono1_regla, 1, { rotation: 50, transformOrigin: '100% 100%' }, 0)
    .to(servicios_icono1_pluma, 1, { rotation: -90, transformOrigin: '0 10' }, 0)
    .to(servicios_icono1_headerLamp, 1, { rotation: -25, transformOrigin: '18 0' }, 0)
    .to(servicios_icono1_Pantone3, 1, { rotation: -90, transformOrigin: '10 19' }, 0)
    .to(servicios_icono1_Pantone2, 1, { rotation: -45, transformOrigin: '10 19' }, 0)
    .to(servicios_icono1_Pantone1, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(servicios_icono1_Line_start, 2, { drawSVG: '0% 100%' }, 0);
}

function CierreIcon2() {
  var TimeCloseIcon2 = new TimelineLite();
  TimeCloseIcon2
    .to(servicios_icono2_Frnja, 1, { scaleX: 0, transformOrigin: '0% 100%'},'hola')
    .to(servicios_icono2_Imagen, 1, { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' },'hola')
    .to(servicios_icono2_fondoLineasFan, 1, { drawSVG: '50% 50%' },'hola')
    .to(servicios_icono2_fondo, 1,{ scaleY: 0, transformOrigin: '0% 100%' })
    .to(servicios_icono2_Billete, 1, { y:0 }, 0.1, 0)
    .to(servicios_icono2_Lineas, 2, { drawSVG: '50% 50%' }, 0)
    .staggerTo(servicios_icono2_Cuadrado, 1, { scaleX: 0, transformOrigin: '0% 0%' }, 0.1, 0)
    .to(servicios_icono2_Veinti4, 3, { rotation: 0, transformOrigin: 'center center' }, 0)
    .to(servicios_icono2_porcentaje, 1, { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' }, 0)
    .to(servicios_icono2_porcentaje, 2, { rotation: 0, transformOrigin: 'center center' }, 1)
    .to(servicios_icono2_porcentaje_Line, 2, { drawSVG: '100% 100%' }, 0)
    .staggerTo(servicios_icono2_nubes, 1, { x: 0, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' }, 0.3, 0)
    
}
function OpenIcon2() {
  var TimeIcon2 = new TimelineLite();
  TimeIcon2
    .to(servicios_icono2_fondo, 1,{ scaleY: 1, transformOrigin: '0% 100%' })
    .to(servicios_icono2_fondoLineasFan, 1, { drawSVG: '0% 100%' },'hola')
    .to(servicios_icono2_Frnja, 1, { scaleX: 1, transformOrigin: '0% 100%'},'hola')
    .to(servicios_icono2_Imagen, 1, { scaleX: 1, scaleY: 1, transformOrigin: '50% 50%' },'hola')
    .to(servicios_icono2_nubes, 2, { x: 25 })
    .to(servicios_icono2_Billete, 1, { y:50 }, 0.1, 0)
    .to(servicios_icono2_Lineas, 2, { drawSVG: '0% 100%' }, 0)
    .staggerTo(servicios_icono2_Cuadrado, 1, { scaleX: 1, transformOrigin: '0% 0%' }, 0.3, 0)
    .to(servicios_icono2_Veinti4, 3, { rotation: 360, transformOrigin: 'center center' }, 0)
    .to(servicios_icono2_porcentaje, 1, { scaleX: 1, scaleY: 1, transformOrigin: '50% 50%' }, 0)
    .to(servicios_icono2_porcentaje, 3, { rotation: 180, transformOrigin: 'center center' }, 1)
    .to(servicios_icono2_porcentaje_Line, 3, { drawSVG: '0% 100%' }, 1)
    .staggerTo(servicios_icono2_nubes, 1, { scaleX: 1, scaleY: 1, transformOrigin: '50% 50%' }, 0.1, 0);
}

var servicios_icono4_nubes = $('#servicios_icono4 #nubes_2_ g');
var servicios_icono4_lineas = $('#servicios_icono4 #lineas_2_ line');
var servicios_icono4_Cuadrado = $('#servicios_icono4 #cuadrados_2_ rect');
var servicios_icono4_porcentaje = $('#servicios_icono4 #porcentaje_2_');
var servicios_icono4_porcentaje_Line = $('#servicios_icono4 #porcentaje_2_ g line');
var servicios_icono4_Humo = $('#servicios_icono4 > #humo_1_ path');
var servicios_icono4_MacetaTallo = $('#servicios_icono4 > #planta_2_ line#tallo_2_');
var servicios_icono4_MacetaHojas = $('#servicios_icono4 > #planta_2_ #hojas_2_');
var servicios_icono4_MacetaFlor = $('#servicios_icono4 > #planta_2_ #Flor_2_');
var servicios_icono4_Macetapesos = $('#servicios_icono4 > #planta_2_ #pesos_2_');

var servicios_icono4_FondoEdi1 = $('#servicios_icono4 > #Edi1_1_ #Fondo_x5F_Edi1_1_');
var servicios_icono4_LineEdi1 = $('#servicios_icono4 > #Edi1_1_ line');
var servicios_icono4_TechoEdi1 = $('#servicios_icono4 > #Techo_x5F_Edi1_1_');
var servicios_icono4_FondoEdi2 = $('#servicios_icono4 > #Edi2_1_ #Fondo_x5F_Edi2_1_');
var servicios_icono4_LineEdi2 = $('#servicios_icono4 > #Edi2_1_ #LineasEdi2_1_ line');
var servicios_icono4_Lamp = $('#servicios_icono4 #Lamp_1_');





function CierreIcon4() {
  var TimeCloseIcon4 = new TimelineLite();
  TimeCloseIcon4
    .staggerTo(servicios_icono4_nubes, 1, { x: 0, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' }, 0.3, 0)
    .to(servicios_icono4_lineas, 2, { drawSVG: '50% 50%' }, 0)
    .staggerTo(servicios_icono4_Cuadrado, 1, { scaleX: 0, transformOrigin: '0% 0%' }, 0.1, 0)
    .to(servicios_icono4_porcentaje, 1, { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' }, 0)
    .to(servicios_icono4_porcentaje, 2, { rotation: 0, transformOrigin: 'center center' }, 1)
    .to(servicios_icono4_porcentaje_Line, 2, { drawSVG: '100% 100%' }, 0)
    .to(servicios_icono4_Humo, 2, { drawSVG: '100% 100%' }, 0)
    .to(servicios_icono4_MacetaTallo, 1, { drawSVG: '100% 100%' }, 2)
    .to(servicios_icono4_MacetaHojas, 1, { scaleX: 0, scaleY: 0, transformOrigin: 'center center' }, 1)
    .to(servicios_icono4_MacetaFlor, 1, { scaleX: 0, scaleY: 0, transformOrigin: 'center 100%' }, .5)
    .to(servicios_icono4_Macetapesos, .5, { scaleX: 0, scaleY: 0, transformOrigin: 'center center' }, 0)
    .to(servicios_icono4_Lamp, 1, { fill: '#fff' }, 0)

    .to(servicios_icono4_LineEdi1, 1, { drawSVG: '50% 50%' }, 0)
    .to(servicios_icono4_FondoEdi1, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 1)
    .to(servicios_icono4_TechoEdi1, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 1)
    .to(servicios_icono4_LineEdi2, 1, { drawSVG: '50% 50%' }, 1)
    .to(servicios_icono4_FondoEdi2, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 2)
    
}


function OpenIcon4() {
  var TimeIcon4 = new TimelineLite();
  TimeIcon4
    .set(servicios_icono4_Humo, { drawSVG: '0% 0%' }, 0).to(servicios_icono4_Humo, 1, { drawSVG: '10% 50%', ease: Linear.easeNone }).to(servicios_icono4_Humo, 2, { drawSVG: '35% 80%', ease: Linear.easeNone }).to(servicios_icono4_Humo, 2, { drawSVG: '100% 100%', ease: Linear.easeNone })
    .staggerTo(servicios_icono4_nubes, 1, { scaleX: 1, scaleY: 1, transformOrigin: '50% 50%' }, 0.2, 0)
    .to(servicios_icono4_nubes, 2, { x: 25 })
    .to(servicios_icono4_lineas, 2, { drawSVG: '0% 100%' }, 0)
    .staggerTo(servicios_icono4_Cuadrado, 1, { scaleX: 1, transformOrigin: '0% 0%' }, 0.3, 0)
    .to(servicios_icono4_porcentaje, 1, { scaleX: 1, scaleY: 1, transformOrigin: '50% 50%' }, 0)
    .to(servicios_icono4_porcentaje, 3, { rotation: 180, transformOrigin: 'center center' }, 1)
    .to(servicios_icono4_porcentaje_Line, 3, { drawSVG: '0% 100%' }, 1)
    .to(servicios_icono4_MacetaTallo, 1, { drawSVG: '0% 100%' }, 0)
    .to(servicios_icono4_MacetaHojas, 1, { scaleX: 1, scaleY: 1, transformOrigin: 'center center' }, 1)
    .to(servicios_icono4_MacetaFlor, 1, { scaleX: 1, scaleY: 1, transformOrigin: 'center 100%' }, 2)
    .to(servicios_icono4_Macetapesos, 1, { scaleX: 1, scaleY: 1, transformOrigin: 'center center' }, 2.5)
    .to(servicios_icono4_Lamp, 1, { fill: '#DDD697' }, 0)

    .to(servicios_icono4_FondoEdi2, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 1)
    .to(servicios_icono4_LineEdi2, 1, { drawSVG: '0% 100%' }, 2)
    .to(servicios_icono4_TechoEdi1, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 1)
    .to(servicios_icono4_FondoEdi1, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 0)
    .to(servicios_icono4_LineEdi1, 1, { drawSVG: '0% 100%' }, 1)
}
CierreIcon1();
CierreIcon2();
CierreIcon4();
var owl_Home = $('#owl-carousel1');
var owl_Servicios = $('#owl-carousel2');

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



$(window).ready(function () {
  var controller = $.superscrollorama({
    triggerAtCenter: false,
    playoutAnimations: true,
  });


  var line5 = $(' #Line5-SVG polyline');


  /* Mockup 1 */
  TweenLite.from('#Line1-poly_1_',
    7, {
      drawSVG: '100% 100%',
      delay: 0.2
    });
  TweenLite.from('#Line2-poly',
    5, {
      drawSVG: '0% 0%',
      delay: 6
    });

  /* Title  Diseño Grafico */
  TweenLite.to('#Line3-poly',
    1, {
      drawSVG: '6% 85%',
      delay: 0
    });
  TweenLite.to('#Line4-poly',
    1, {
      drawSVG: '30% 100%',
      delay: 0
    });



  /* Diseño Grafico */
  var misela1 = $('.cuadraditos_sereados > rect');
  var minela2 = $('#responsive_misela_cuadraditos_02  rect');
  var miselaSlider = $('.owl-dot');


  TweenMax.staggerFrom(misela1, 0.5, {
    opacity: 0,
    y: 200,
    x: 200,
    scale: 3,
    delay: 0.5
  }, 0.2);
  TweenMax.staggerFrom(miselaSlider, 0.5, {
    opacity: 0,
    y: 200,
    x: 200,
    rotation: 680,
    scale: 2,
    delay: 0.5
  }, 0.2);

  /* Responsive */

  var staggerTween = new TimelineMax();
  staggerTween.append(TweenMax.staggerFrom(minela2, 1, {
    css: {
      opacity: 0,
      y: 200,
      x: 200,
      scale: 2
    }
  }, 0.25), 0, 0);
  controller.addTween(minela2, staggerTween);
  controller.addTween(line5, TweenLite.from(line5, 3, {
    drawSVG: '85% 85%'
  }));
  controller.addTween(line5, TweenLite.from($('.line-responsive'), 3, {
    drawSVG: '0% 0%'
  }));
});

/* Servicios */
$(document).ready(function () {
  owl_Servicios.owlCarousel({
    loop: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: false,
    center: true,
    margin: 118,
    dragEndSpeed: 1000, //speed when touch
    dotsSpeed: 1000, //speed with dots
    autoplaySpeed: 1000,
    responsive: {
      992: {
        items: 3,
      },
      0: {
        items: 1,
      }
    }
  });


  var elementoAnterior = 0;

  owl_Servicios.on('translated.owl.carousel',
    onTranslatedEvent);

  function onTranslatedEvent(event) {
    // Elemento Anterior --> cierre
    if (elementoAnterior == 0) {
      CierreIcon1();
    }
    if (elementoAnterior == 1) {
      CierreIcon2();
    }
    if (elementoAnterior == 3) {
      CierreIcon4();
    }
    elementoAnterior = event.page.index;

    // Elemento Nuevo --> Apertura
    if (event.page.index == 0) {
      OpenIcon1();
    }
    // Elemento Nuevo --> Apertura
    if (event.page.index == 1) {
      OpenIcon2();
    }
    // Elemento Nuevo --> Apertura
    if (event.page.index == 3) {
      OpenIcon4();
    }
  }
});

function PorfolioAltoMiselanea() {
  var AltoMap = $('.porfolio-content').height();
  $('.porfolio #XMLID_1_ rect').css('height',
    AltoMap);
}
PorfolioAltoMiselanea();


/*===========================================================*/
/*  Contact Form
/*===========================================================*/
$(document).ready(function () {
  $('#contact-form').validate({
    rules: {
      name: {
        minlength: 3,
        required: true
      },
      email: {
        minlength: 5,
        required: true
      },
      message: {
        required: true
      },
    },
    highlight: function (element) {
      $(element).closest('input').removeClass('success').addClass('error');
    },
    success: function (element) {
      element
        .text('').addClass('valid')
        .closest('input').removeClass('error').addClass('success');
    },
    submitHandler: function (form) {
      $.ajax({
        type: 'POST',
        url: 'php/contacto.php',
        data: $(form).serialize(),
        success: function () {
          $('.oculto').fadeOut(300);
          $('.enviado').delay(400).fadeIn(300);
          $('.Input').val('');
          $('.error').text('');
          $('.enviado').delay(5000).fadeOut(300);
          $('.oculto').delay(6000).fadeIn(300);
        }
      });
      return false; // required to block normal submit since you used ajax
    }
  });

});



/*!
 * classie - class helper functions
 * from bonzohttps://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function (window) {


  // class helper functions from bonzohttps://github.com/ded/bonzo

  function classReg(className) {
    return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;

  if ('classList' in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), ' ');
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(classie);
  } else {
    // browser global
    window.classie = classie;
  }

})(window);

(function () {
  // trim polyfill :https://developer.mozilla.org/en-US/docs/gjvaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function () {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function () {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call(document.querySelectorAll('.input__field')).forEach(function (inputEl) {
    // in case the input is already filled..
    if (inputEl.value.trim() !== '') {
      classie.add(inputEl.parentNode, 'input--filled');
    }

    // events:
    inputEl.addEventListener('focus',
      onInputFocus);
    inputEl.addEventListener('blur',
      onInputBlur);
  });

  function onInputFocus(ev) {
    classie.add(ev.target.parentNode, 'input--filled');
  }

  function onInputBlur(ev) {
    if (ev.target.value.trim() === '') {
      classie.remove(ev.target.parentNode, 'input--filled');
    }
  }
})();


var demoImgArray = [
  'img/Mockup1-3.png',
  'img/Mockup1-1.png',
  'img/Mockup1-2.png',
  'img/Mockup1-5.png',
  'img/Mockup1-4.png',
  'img/Mockup2-0.gif'
];

var imagenes_totales = demoImgArray.length;
var imagenes_cargadas = 0;
var porcentaje_imagenes = 0;

preload(demoImgArray);

$(window).load(function () {
  $('.percentage').text('100%');
});

/* LOADING */
function preload(imgArray) {
  $(imgArray).each(function () {
    $('<img>').attr('src', this).load(function () {
      imagenes_cargadas++;
      porcentaje_imagenes = Math.floor((imagenes_cargadas / imagenes_totales) * 100);

      $('.percentage').text(porcentaje_imagenes + '%');

    });
  });
}

var demoImgArray = [
  'img/Mockup1-3.png',
  'img/Mockup1-1.png',
  'img/Mockup1-2.png',
  'img/Mockup1-5.png',
  'img/Mockup1-4.png',
  'img/Mockup2-0.gif'
];

var imagenes_totales = demoImgArray.length;
var imagenes_cargadas = 0;
var porcentaje_imagenes = 0;

preload(demoImgArray);

$(window).load(function () {
  $('.percentage').text('100%');
});

/* LOADING */
function preload(imgArray) {
  $(imgArray).each(function () {
    $('<img>').attr('src', this).load(function () {
      imagenes_cargadas++;
      porcentaje_imagenes = Math.floor((imagenes_cargadas / imagenes_totales) * 100);

      $('.percentage').text(porcentaje_imagenes + '%');


    });
  });
}
var tl = new TimelineLite({
  onUpdate: porcentaje_imagenes / 100
});

var hola = $('.hola');
tl
  .from(hola, 1, {
    scaleX: 0,
    transformOrigin: '0% 0%'
  }, 0.1);
//# sourceMappingURL=app.js.map
