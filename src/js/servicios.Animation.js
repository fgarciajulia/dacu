
var servicios_icono1_Books = $('#servicios_icono1 > #Books_1_ rect, #servicios_icono1 > #cuadrados_1_ rect, #servicios_icono1 > #Diploma_1_ rect');
var servicios_icono1_Reloj_min = $('#servicios_icono1 > #Reloj-min_1_');
var servicios_icono1_Line_start = $('#servicios_icono1 > #Lineas-miselaneas line, #servicios_icono1 > #Diploma_1_ line');
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
var servicios_icono2_Veinti4 = $('#servicios_icono2 #veinticuatro');
var servicios_icono2_porcentaje = $('#servicios_icono2 #porcentaje_1_');
var servicios_icono2_porcentaje_Line = $('#servicios_icono2 #porcentaje_1_ g line');
var servicios_icono2_fondo = $('#servicios_icono2 #fondo_1_');
var servicios_icono2_fondoLineasFan = $('#servicios_icono2 #LineasFanPage_1_ line');
var servicios_icono2_Frnja = $('#servicios_icono2 #Frnja_1_');
var servicios_icono2_Imagen = $('#servicios_icono2 #Imagen_2_servicio , #servicios_icono2 #Imagen_3_ ,  #servicios_icono2 #Tilde_1_');

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
    .to(servicios_icono2_Frnja, 1, { scaleX: 0, transformOrigin: '0% 100%'},'preload-content')
    .to(servicios_icono2_Imagen, 1, { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' },'preload-content')
    .to(servicios_icono2_fondoLineasFan, 1, { drawSVG: '50% 50%' },'preload-content')
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
    .to(servicios_icono2_fondoLineasFan, 1, { drawSVG: '0% 100%' },'preload-content')
    .to(servicios_icono2_Frnja, 1, { scaleX: 1, transformOrigin: '0% 100%'},'preload-content')
    .to(servicios_icono2_Imagen, 1, { scaleX: 1, scaleY: 1, transformOrigin: '50% 50%' },'preload-content')
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

var isPlay = true;

function play() {
  if (!isPlay) {
    owl_Servicios.trigger('play.owl.autoplay', [100]);
    isPlay = true;
  }
}

function pause() {
  owl_Servicios.trigger('stop.owl.autoplay');
  isPlay = false;
}

$(window).scroll(function () {
  var hT = $('#owl-carousel2').offset().top,
    hH = $('#owl-carousel2').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (((wS + wH) > hT) && (wS < (hT + hH))) {
    play();
  } else {
    pause();
  }
});