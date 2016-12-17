
var preloadSvg = $('svg#preload');
var preloadLamp = $('#preload #Lamp_1_');
var preloadHeaderLamp = $('#preload #headerLamp_1_');
var preloadIcono1Humo = $('#preload  #humo_2_ path');
var preloadRegla = $('#preload #regla_1_');
var preloadPluma = $('#preload #Pluma_1_');
var preloadRelojMin = $('#preload #Reloj-min_1_');
var preloadPantone1 = $('#preload #Pantone1_1_');
var preloadPantone2 = $('#preload #Pantone2_1_');
var preloadPantone3 = $('#preload #Pantone3_1_');
var preloadBooks = $(['#preload #Books_1_ rect', '#preload #cuadrados_1_ rect', '#preload #Diploma_1_ rect']);
var preloadLineStart = $(['#preload #Lineas_x5F_Start_1_ line', '#preload #Diploma_1_ line']);
var TimeOpenPreload2 = new TimelineMax({repeat:-1});

function cierrePreload() {
  var TimeCierrePreload = new TimelineMax();
  TimeCierrePreload.timeScale(1);
  TimeCierrePreload
    .staggerTo(preloadBooks, 1, { scaleX: 0, transformOrigin: '0% 0%' }, 0.1)
    .to(preloadLamp, 1, { fill: '#fff' }, 0)
    .to(preloadHeaderLamp, 1, { rotation: 0, transformOrigin: '20 10' }, 0)
    .to(preloadRegla, 1, { rotation: 0, transformOrigin: '100% 100%' }, 0)
    .to(preloadPluma, 1, { rotation: 0, transformOrigin: '00 50%' }, 0)
    .to(preloadPantone3, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(preloadPantone2, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(preloadPantone1, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(preloadLineStart, 2, { drawSVG: '50% 50%' }, 0)
     TweenLite.to(TimeOpenPreload2, 3, {timeScale:0})
}
function OpenPreload() {
  var TimeOpenPreload = new TimelineMax();
  TimeOpenPreload.timeScale(1);
  TimeOpenPreload
    .set(preloadSvg, { opacity: 1 })
    .set(preloadBooks, { scaleX: 0, transformOrigin: '0% 0%' })
    .set(preloadLineStart, { drawSVG: '50% 50%' })
    .to(preloadLamp, 1, { fill: '#C9BB9E' }, 0)
    .to(preloadHeaderLamp, 1, { rotation: -25, transformOrigin: '20 10' }, 0)
    .to(preloadRegla, 1, { rotation: 50, transformOrigin: '100% 100%' }, 0)
    .to(preloadPluma, 1, { rotation: -90, transformOrigin: '00 50%' }, 0)
    .to(preloadRelojMin, 3, { rotation: 240, transformOrigin: 'center center' }, 0)
    .to(preloadPantone3, 1, { rotation: -90, transformOrigin: '10 19' }, 0)
    .to(preloadPantone2, 1, { rotation: -45, transformOrigin: '10 19' }, 0)
    .to(preloadPantone1, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .staggerTo(preloadBooks, 1, { scaleX: 1, transformOrigin: '0% 0%' }, 0.3, 0)
    .to(preloadLineStart, 2, { drawSVG: '0% 100%' }, 0);

    

  TimeOpenPreload2
      .set(preloadIcono1Humo, { drawSVG: '0% 0%' })
    .to(preloadIcono1Humo, 1, { drawSVG: '10% 50%', ease: Linear.easeNone })
    .to(preloadIcono1Humo, 1, { drawSVG: '35% 80%', ease: Linear.easeNone })
    .to(preloadIcono1Humo, 2, { drawSVG: '100% 100%', ease: Linear.easeNone });

}
