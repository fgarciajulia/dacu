var owl_Home = $('#owl-carousel1');
var owl_Servicios = $('#owl-carousel2');

var servicios_icono1_Books = $(['#servicios_icono1 > #Books_1_ rect', '#servicios_icono1 > #cuadrados_1_ rect', '#servicios_icono1 > #Diploma_1_ rect']);
var servicios_icono1_Reloj_min = $('#servicios_icono1 > #Reloj-min_1_');
var servicios_icono1_Line_start = $(['#servicios_icono1 > #Lineas_x5F_Start_1_ line', '#servicios_icono1 > #Diploma_1_ line']);
var servicios_icono1_Humo = $('#servicios_icono1 > #humo_1_ path');
var servicios_icono1_regla = $('#servicios_icono1 #regla_1_');
var servicios_icono1_pluma = $('#servicios_icono1 #Pluma_1_');
var servicios_icono1_Pantone1 = $('#servicios_icono1 #Pantone1_1_');
var servicios_icono1_Pantone2 = $('#servicios_icono1 #Pantone2_1_');
var servicios_icono1_Pantone3 = $('#servicios_icono1 #Pantone3_1_');
var servicios_icono1_Lamp = $('#servicios_icono1 #Lamp_1_');
var servicios_icono1_headerLamp = $('#servicios_icono1 #headerLamp_1_');

var servicios_icono2_nubes = $('#servicios_icono2 #Nubes_1_ g');

function CierreIcon1() {
  var TimeCloseIcon1 = new TimelineMax();
  TimeCloseIcon1.append(TweenMax.staggerTo(servicios_icono1_Books, 1, { scaleX: 0, transformOrigin: '0% 0%' }, 0.1), 0, 0);
  TweenLite.to(servicios_icono1_Reloj_min, 2, { rotation: 0, transformOrigin: 'center center' });
  TweenLite.to(servicios_icono1_Lamp, 1, { fill: '#fff' });
  TweenLite.to(servicios_icono1_regla, 1, { rotation: 0, transformOrigin: '100% 100%' });
  TweenLite.to(servicios_icono1_pluma, 1, { rotation: 0, transformOrigin: '0 10' });
  TweenLite.to(servicios_icono1_headerLamp, 1, { rotation: 0, transformOrigin: '18 0' });
  TweenLite.to(servicios_icono1_Pantone3, 1, { rotation: 0, transformOrigin: '10 19' });
  TweenLite.to(servicios_icono1_Pantone2, 1, { rotation: 0, transformOrigin: '10 19' });
  TweenLite.to(servicios_icono1_Pantone1, 1, { rotation: 0, transformOrigin: '10 19' });
  TweenLite.to(servicios_icono1_Line_start, 2, { drawSVG: '50% 50%' });
  TweenLite.to(servicios_icono1_Humo, 2, { drawSVG: '100% 100%' });
}

function OpenIcon1() {
  var TimeIcon1 = new TimelineMax();
  TimeIcon1.append(TweenMax.staggerTo(servicios_icono1_Books, 1, { scaleX: 1, transformOrigin: '0% 0%' }, 0.1), 0, 0);
  TweenLite.to(servicios_icono1_Reloj_min, 3, { rotation: 240, transformOrigin: 'center center' });
  TweenLite.to(servicios_icono1_Lamp, 1, { fill: '#C9BB9E' });
  TweenLite.to(servicios_icono1_regla, 1, { rotation: 50, transformOrigin: '100% 100%' });
  TweenLite.to(servicios_icono1_pluma, 1, { rotation: -90, transformOrigin: '0 10' });
  TweenLite.to(servicios_icono1_headerLamp, 1, { rotation: -25, transformOrigin: '18 0' });
  TweenLite.to(servicios_icono1_Pantone3, 1, { rotation: -90, transformOrigin: '10 19' });
  TweenLite.to(servicios_icono1_Pantone2, 1, { rotation: -45, transformOrigin: '10 19' });
  TweenLite.to(servicios_icono1_Pantone1, 1, { rotation: 0, transformOrigin: '10 19' });
  TweenLite.to(servicios_icono1_Line_start, 2, { drawSVG: '0% 100%' });
  TimeIcon1.set(servicios_icono1_Humo, { drawSVG: '0% 0%' }).to(servicios_icono1_Humo, 1, { drawSVG: '10% 50%', ease: Linear.easeNone }).to(servicios_icono1_Humo, 1, { drawSVG: '35% 80%', ease: Linear.easeNone }).to(servicios_icono1_Humo, 2, { drawSVG: '100% 100%', ease: Linear.easeNone });
}

function CierreIcon2() {
  var TimeCloseIcon2 = new TimelineMax();
  TimeCloseIcon2.append(TweenMax.staggerTo(servicios_icono2_nubes, 1, { scaleX: 0, transformOrigin: '0% 0%' }, 0.1), 0, 0);
}
function OpenIcon2() {
  var TimeIcon2 = new TimelineMax();
  TimeIcon2.append(TweenMax.staggerTo(servicios_icono2_nubes, 1, { scaleX: 1, transformOrigin: '0% 0%' }, 0.1), 0, 0);
}



CierreIcon1();
CierreIcon2();