
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
var preloadBooks = $('#preload #Books_1_ rect, #preload #cuadrados_1_ rect, #preload #Diploma_1_ rect');
var preloadLineStart = $('#preload #Lineas_x5F_Start_1_ line, #preload #Diploma_1_ line');
var preloadNubes = $('#preload .nubes polygon, #preload .nubes line');
var paracaidas = $('#preload #paracaidas path, #preload #paracaidas line, #preload #paracaidas rect');
var preload_libro_play = $('#preload #libro-play path, #preload #libro-play line, #preload #libro-play rect, #preload #libro-play polygon');
var preload_pantalla_redes_fondo = $('#preload #pantalla-redes #fondo_1_');
var preload_pantalla_redes_fondoLineasFan = $('#preload #pantalla-redes #LineasFanPage_1_ line');
var preload_pantalla_redes_franja = $('#preload #pantalla-redes .Frnja_1_');
var preload_pantalla_redes_imagen = $('#preload #pantalla-redes #Imagen_2_ , #preload #pantalla-redes #Imagen_3_ ,  #preload #pantalla-redes #Tilde_1_');
var preload_torre = $('#preload #torre rect , #preload #torre path, #preload #torre  polygon');
var preload_torreReverse = preload_torre.toArray().reverse();
var preload_FondoEdi1 = $('#preload #Edi1_1_ #Fondo_x5F_Edi1_1_');
var preload_PisoEdi1 = $('#preload #Edi1_1_ .piso-edi');
var preload_LineEdi1 = $('#preload #Edi1_1_ line');
var preload_TechoEdi1 = $('#preload #Techo_x5F_Edi1_1_');
var preload_FondoEdi2 = $('#preload #Edi2_1_ #Fondo_x5F_Edi2_1_');
var preload_LineEdi2 = $('#preload #Edi2_1_ #LineasEdi2_1_ line, #preload #Edi2_1_ #LineasEdi2_1_  polyline');

var preload_facebook = $('#preload .facebook line, #preload .facebook polyline, #preload .facebook path, #preload .facebook rect');
var preload_facebook_fondo = $('#preload .facebook-fondo');
var preload_facebook_cuadrados = $('#preload .facebook-cuadrados rect,#preload .facebook-cuadrados line,#preload .facebook-cuadrados path');
var preload_facebook_header = $('#preload .facebook-header rect,#preload .facebook-header line,#preload .facebook-header path,#preload .facebook-header circle');

var preload_icono2_Veinti4 = $('#preload #Veinti4_2_');
var preload_Veinti4_2_circle = $('#preload #Veinti4_2_circle');

var TimeOpenPreload = new TimelineMax();
var TimeOpenPreload2 = new TimelineMax({repeat:-1});
var TimeCierrePreload = new TimelineMax();

function cierrePreload() {
  TimeCierrePreload.timeScale(1);
  TimeCierrePreload
    .to(preload_pantalla_redes_imagen, 1, { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' },0)
    .to(preload_pantalla_redes_fondoLineasFan, 1, { drawSVG: '50% 50%' },1)
    .to(preload_pantalla_redes_franja, 1, { scaleX: 0, transformOrigin: '0% 100%'},2)
    .to(preload_pantalla_redes_fondo, 1,{ scaleY: 0, transformOrigin: '0% 100%' },3)
    .staggerTo(preloadBooks, 1, { scaleX: 0, transformOrigin: '0% 0%' }, 0.1)
    .to(preloadLamp, 1, { fill: '#fff' }, 0)
    .to(preloadHeaderLamp, 1, { rotation: 0, transformOrigin: '20 10' }, 0)
    .to(preloadRegla, 1, { rotation: 0, transformOrigin: '100% 100%' }, 0)
    .to(preloadPluma, 1, { rotation: 0, transformOrigin: '00 50%' }, 0)
    .to(preloadPantone3, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(preloadPantone2, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(preloadPantone1, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(preloadLineStart, 2, { drawSVG: '50% 50%' }, 0)
    .to(paracaidas, 2, { drawSVG: '50% 50%' }, 0)
    .staggerTo(preloadNubes, 1, { drawSVG: '50% 50%', fill:'rgba(255, 255, 255, 0)' }, 0.1, 0)
    .to(preload_LineEdi1, 1, { drawSVG: '50% 50%' }, 0)
    .to(preload_FondoEdi1, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 1)
    .to(preload_PisoEdi1, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 1)
    .to(preload_TechoEdi1, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 1)
    .to(preload_PisoEdi1, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 1)
    .to(preload_LineEdi2, 1, { drawSVG: '50% 50%' }, 1)
    .to(preload_FondoEdi2, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 2)
    .to(preload_libro_play, 1,{ scaleX: 0, transformOrigin: '0% 50%' }, 2)
    .to(preloadRelojMin, 1, { rotation: 0, transformOrigin: 'center center' }, 0)
    .to(preload_facebook, 1,  { drawSVG: '50% 50%' },0)
    .to(preload_facebook_fondo, 0.5 , {  opacity: 0 },0)
    .staggerTo(preload_facebook_cuadrados, 0.3 , {  opacity: 0 }, 0.1, 1)
    .to(preload_facebook_header, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 0)
    .to(preload_icono2_Veinti4, 1, {  opacity: 0 }, 0)
    .to(preload_Veinti4_2_circle, 1, {  opacity: 0 }, 0)
    .staggerTo(preload_torreReverse, 1 ,  { scaleY: 0, transformOrigin: '0% 100%' }, 1, 0)
    
  TweenLite.to(TimeOpenPreload2, 3, {timeScale:0});
}
function OpenPreload() {
  TimeOpenPreload.timeScale(1);
  TimeOpenPreload
    .set(preloadSvg, { opacity: 1 })
    .set(preloadBooks, { scaleX: 0, transformOrigin: '0% 0%' })
    .set(preloadLineStart, { drawSVG: '50% 50%' })
    .set(preloadNubes, { drawSVG: '0% 0%', fill:'rgba(255, 255, 255, 0)' })
    .set(paracaidas, { drawSVG: '0% 0%', fill:'rgba(255, 255, 255, 0)' })
    .set(preload_LineEdi1, { drawSVG: '50% 50%' })
    .set(preload_FondoEdi1,{ scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_PisoEdi1,{ scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_TechoEdi1,{ scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_LineEdi2, { drawSVG: '50% 50%' })
    .set(preload_FondoEdi2,{ scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_libro_play,{ scaleX: 0, transformOrigin: '0% 50%' })
    .set(preload_libro_play,{ scaleX: 0, transformOrigin: '0% 50%' })
    .set(preload_pantalla_redes_fondo, { scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_pantalla_redes_franja, { scaleX: 0, transformOrigin: '0% 100%'})
    .set(preload_pantalla_redes_imagen, { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' })
    .set(preload_pantalla_redes_fondoLineasFan,  { drawSVG: '50% 50%' })
    .set(preload_facebook,  { drawSVG: '50% 50%' })
    .set(preload_facebook_fondo,  {  opacity: 0 })
    .set(preload_facebook_cuadrados,  {  opacity: 0 })
    .set(preload_facebook_header, { scaleY: 0, transformOrigin: '0% 100%'})
    .set(preload_icono2_Veinti4, {  opacity: 0 })
    .set(preload_Veinti4_2_circle, {  opacity: 0 })
    .set(preload_torre,{ scaleY: 0, transformOrigin: '0% 100%' })

    

    .to(preloadLamp, 1, { fill: '#C9BB9E' }, 0)
    .to(preloadHeaderLamp, 1, { rotation: -25, transformOrigin: '20 10' }, 0)
    .to(preloadRegla, 1, { rotation: 50, transformOrigin: '100% 100%' }, 0)
    .to(preloadPluma, 1, { rotation: -90, transformOrigin: '00 50%' }, 0)
    .to(preloadRelojMin, 3, { rotation: 240, transformOrigin: 'center center' }, 0)
    .to(preloadPantone3, 1, { rotation: -90, transformOrigin: '10 19' }, 0)
    .to(preloadPantone2, 1, { rotation: -45, transformOrigin: '10 19' }, 0)
    .to(preloadPantone1, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .staggerTo(preloadBooks, 1, { scaleX: 1, transformOrigin: '0% 0%' }, .2, 0)
    .staggerTo(preloadNubes, 1, {  drawSVG: '00% 110%',fill: 'rgb(237, 238, 240)'}, .3, 0)
    .to(preloadLineStart, 2, { drawSVG: '0% 100%' }, 0)
    .to(paracaidas, 2, { drawSVG: '0% 100%' }, 0)
    .to(preload_FondoEdi1, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 0)
    .to(preload_PisoEdi1, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 0)
    .to(preload_LineEdi1, 1, { drawSVG: '0% 100%' }, 1)
    .to(preload_libro_play, 1, {  scaleX: 1, transformOrigin: '0% 50%' }, 0)
    .to(preload_TechoEdi1, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 1)
    .to(preload_FondoEdi2, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 1)
    .to(preload_LineEdi2, 1, { drawSVG: '0% 100%' }, 2)
    .to(preload_pantalla_redes_fondo, 1,{ scaleY: 1, transformOrigin: '0% 100%' },0)
    .to(preload_pantalla_redes_imagen, 1,{ scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' },1)
    .to(preload_pantalla_redes_fondoLineasFan, 1, { drawSVG: '0% 100%' },2)
    .to(preload_pantalla_redes_franja, 1, { scaleX: 1, transformOrigin: '0% 100%'},3)
    .to(preload_facebook, 1,  { drawSVG: '0% 100%' },0)
    .to(preload_facebook_fondo, 0.5 ,  {  opacity: 1 },0)
    .staggerTo(preload_facebook_cuadrados, 0.5 ,  {  opacity: 1 }, 0.1, 0)
    .to(preload_facebook_header, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 1)

    .to(preload_icono2_Veinti4, 0.5, {  opacity: 1 },0)
    .to(preload_Veinti4_2_circle, 0.5, {  opacity: 1 },0)
    .to(preload_icono2_Veinti4, 3, { rotation: 360, transformOrigin: 'center center' }, .5)
    .staggerTo(preload_torre, 2 ,  { scaleY: 1, transformOrigin: '0% 100%' }, 2, 0)

    

  TimeOpenPreload2
    .set(preloadIcono1Humo, { drawSVG: '0% 0%' })
    .to(preloadIcono1Humo, 1, { drawSVG: '10% 50%', ease: Linear.easeNone })
    .to(preloadIcono1Humo, 1, { drawSVG: '35% 80%', ease: Linear.easeNone })
    .to(preloadIcono1Humo, 2, { drawSVG: '100% 100%', ease: Linear.easeNone });

}
