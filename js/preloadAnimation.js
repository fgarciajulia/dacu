var preloadSvg = $('svg#preload'),
  preload_lamp = $('#preload #Lamp_1_'),
  preload_headerLamp = $('#preload #headerLamp_1_'),
  preload_icono1Humo = $('#preload  #humo_2_ path'),
  preload_regla = $('#preload #regla_1_'),
  preload_pluma = $('#preload #Pluma_1_'),
  preload_relojMin = $('#preload #Reloj-min_1_'),
  preload_pantone1 = $('#preload #Pantone1_1_'),
  preload_pantone2 = $('#preload #Pantone2_1_'),
  preload_pantone3 = $('#preload #Pantone3_1_'),
  preload_books = $('#preload #Books_1_ rect, #preload #cuadrados_1_ rect, #preload #Diploma_1_ rect'),
  preload_lineStart = $('#preload #Lineas_x5F_Start_1_ line, #preload #Diploma_1_ line'),
  preload_nubes = $('#preload .nubes polygon, #preload .nubes line'),
  preload_paracaidas = $('#preload #paracaidas path, #preload #paracaidas line, #preload #paracaidas rect'),
  preload_libro_play = $('#preload #libro-play path, #preload #libro-play line, #preload #libro-play rect, #preload #libro-play polygon'),
  preload_pantalla_redes_fondo = $('#preload #pantalla-redes #fondo_1_'),
  preload_pantalla_redes_fondoLineasFan = $('#preload #pantalla-redes #LineasFanPage_1_ line'),
  preload_pantalla_redes_franja = $('#preload #pantalla-redes .Frnja_1_'),
  preload_pantalla_redes_imagen = $('#preload #pantalla-redes #Imagen_2_ , #preload #pantalla-redes #Imagen_3_ ,  #preload #pantalla-redes #Tilde_1_'),
  preload_torre = $('#preload #torre rect , #preload #torre path, #preload #torre  polygon'),
  preload_torreReverse = preload_torre.toArray().reverse(),
  preload_FondoEdi1 = $('#preload #Edi1_1_ #Fondo_x5F_Edi1_1_'),
  preload_PisoEdi1 = $('#preload #Edi1_1_ .piso-edi'),
  preload_LineEdi1 = $('#preload #Edi1_1_ line'),
  preload_TechoEdi1 = $('#preload #Techo_x5F_Edi1_1_'),
  preload_FondoEdi2 = $('#preload #Edi2_1_ #Fondo_x5F_Edi2_1_'),
  preload_LineEdi2 = $('#preload #Edi2_1_ #LineasEdi2_1_ line, #preload #Edi2_1_ #LineasEdi2_1_  polyline'),
  preload_facebook = $('#preload .facebook line, #preload .facebook polyline, #preload .facebook path, #preload .facebook rect'),
  preload_facebook_fondo = $('#preload .facebook-fondo'),
  preload_facebook_cuadrados = $('#preload .facebook-cuadrados rect,#preload .facebook-cuadrados line,#preload .facebook-cuadrados path'),
  preload_facebook_header = $('#preload .facebook-header rect,#preload .facebook-header line,#preload .facebook-header path,#preload .facebook-header circle'),
  preload_icono2_Veinti4 = $('#preload #Veinti4_2_'),
  preload_Veinti4_2_circle = $('#preload #Veinti4_2_circle'),
  preload_check_pestanias = $('#preload #pestanias line, #preload #pestanias polyline'),
  preload_check_circulo = $('#preload #pestanias circle'),
  
  preload_IDE = $('#preload #IDE-code line'),
  preload_IDE_fondo = $('#preload #IDE-fondo'),
  preload_IDE_header = $('#preload #IDE-header'),

  TimeOpenPreload = new TimelineMax(),
  TimeOpenPreload2 = new TimelineMax({
    repeat: -1
  }),
  TimeCierrePreload = new TimelineMax();

function cierrePreload() {
  TimeCierrePreload.timeScale(1);
  TimeCierrePreload
    .to(preload_pantalla_redes_imagen, 1, { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' },0)
    .to(preload_pantalla_redes_fondoLineasFan, 1, { drawSVG: '50% 50%' },1)
    .to(preload_pantalla_redes_franja, 1, { scaleX: 0, transformOrigin: '0% 100%'},2)
    .to(preload_pantalla_redes_fondo, 1,{ scaleY: 0, transformOrigin: '0% 100%' },3)
    .staggerTo(preload_books, 1, { scaleX: 0, transformOrigin: '0% 0%' }, 0.1)
    .to(preload_lamp, 1, { fill: '#fff' }, 0)
    .to(preload_headerLamp, 1, { rotation: 0, transformOrigin: '20 10' }, 0)
    .to(preload_regla, 1, { rotation: 0, transformOrigin: '100% 100%' }, 0)
    .to(preload_pluma, 1, { rotation: 0, transformOrigin: '00 50%' }, 0)
    .to(preload_pantone3, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(preload_pantone2, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(preload_pantone1, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .to(preload_lineStart, 2, { drawSVG: '50% 50%' }, 0)
    .to(preload_paracaidas, 2, { drawSVG: '50% 50%' }, 0)
    .staggerTo(preload_nubes, 1, { drawSVG: '50% 50%', fill:'rgba(255, 255, 255, 0)' }, 0.1, 0)
    .to(preload_LineEdi1, 1, { drawSVG: '50% 50%' }, 0)
    .to(preload_FondoEdi1, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 1)
    .to(preload_PisoEdi1, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 1)
    .to(preload_TechoEdi1, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 1)
    .to(preload_PisoEdi1, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 1)
    .to(preload_LineEdi2, 1, { drawSVG: '50% 50%' }, 1)
    .to(preload_FondoEdi2, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 2)
    .to(preload_libro_play, 1,{ scaleX: 0, transformOrigin: '0% 50%' }, 2)
    .to(preload_relojMin, 1, { rotation: 0, transformOrigin: 'center center' }, 0)
    .to(preload_facebook, 1, { drawSVG: '50% 50%' },0)
    .to(preload_facebook_fondo, 0.5 , { opacity: 0 },0)
    .staggerTo(preload_facebook_cuadrados, 0.3 , { opacity: 0 }, 0.1, 1)
    .to(preload_facebook_header, 1,{ scaleY: 0, transformOrigin: '0% 100%' }, 0)
    .to(preload_icono2_Veinti4, 1, { opacity: 0 }, 0)
    .to(preload_Veinti4_2_circle, 1, { opacity: 0 }, 0)
    .staggerTo(preload_torreReverse, 1 , { scaleY: 0, transformOrigin: '0% 100%' }, 1, 0)
    .staggerTo(preload_check_pestanias, 1 , { drawSVG: '0% 0%'  }, 0.1, 0)
    .to(preload_check_circulo, 1 , { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' }, 1)
    .staggerTo(preload_IDE, 1 , { drawSVG: '50% 50%'  }, 0.1, 0)
    .to(preload_IDE_fondo, 1,{ scaleY: 0, transformOrigin: '0% 100%' },3)
    .to(preload_IDE_header, 1, { opacity: 0 }, 0)
    
  TweenLite.to(TimeOpenPreload2, 3, {timeScale:0});
}
function OpenPreload() {
  TimeOpenPreload.timeScale(1);
  TimeOpenPreload
    .set(preloadSvg, { opacity: 1 })
    .set(preload_books, { scaleX: 0, transformOrigin: '0% 0%' })
    .set(preload_lineStart, { drawSVG: '50% 50%' })
    .set(preload_nubes, { drawSVG: '0% 0%', fill:'rgba(255, 255, 255, 0)' })
    .set(preload_paracaidas, { drawSVG: '0% 0%', fill:'rgba(255, 255, 255, 0)' })
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
    .set(preload_pantalla_redes_fondoLineasFan, { drawSVG: '50% 50%' })
    .set(preload_facebook, { drawSVG: '50% 50%' })
    .set(preload_facebook_fondo, { opacity: 0 })
    .set(preload_facebook_cuadrados, { opacity: 0 })
    .set(preload_facebook_header, { scaleY: 0, transformOrigin: '0% 100%'})
    .set(preload_icono2_Veinti4, { opacity: 0 })
    .set(preload_Veinti4_2_circle, { opacity: 0 })
    .set(preload_torre,{ scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_torre,{ scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_check_pestanias, { drawSVG: '100% 100%' })
    .set(preload_IDE, { drawSVG: '50% 50%' })
    .set(preload_check_circulo, {  scaleX: 0,  scaleY: 0, transformOrigin: '50% 50%' })
    .set(preload_IDE_fondo,{ scaleY: 0, transformOrigin: '0% 100%'})
    .set(preload_IDE_header, { opacity: 0 })

    

    .to(preload_lamp, 1, { fill: '#C9BB9E' }, 0)
    .to(preload_headerLamp, 1, { rotation: -25, transformOrigin: '20 10' }, 0)
    .to(preload_regla, 1, { rotation: 50, transformOrigin: '100% 100%' }, 0)
    .to(preload_pluma, 1, { rotation: -90, transformOrigin: '00 50%' }, 0)
    .to(preload_relojMin, 3, { rotation: 240, transformOrigin: 'center center' }, 0)
    .to(preload_pantone3, 1, { rotation: -90, transformOrigin: '10 19' }, 0)
    .to(preload_pantone2, 1, { rotation: -45, transformOrigin: '10 19' }, 0)
    .to(preload_pantone1, 1, { rotation: 0, transformOrigin: '10 19' }, 0)
    .staggerTo(preload_books, 1, { scaleX: 1, transformOrigin: '0% 0%' }, .2, 0)
    .staggerTo(preload_nubes, 1, { drawSVG: '00% 110%',fill: 'rgb(237, 238, 240)'}, .3, 0)
    .to(preload_lineStart, 2, { drawSVG: '0% 100%' }, 0)
    .to(preload_paracaidas, 2, { drawSVG: '0% 100%' }, 0)
    .to(preload_FondoEdi1, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 0)
    .to(preload_PisoEdi1, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 0)
    .to(preload_LineEdi1, 1, { drawSVG: '0% 100%' }, 1)
    .to(preload_libro_play, 1, { scaleX: 1, transformOrigin: '0% 50%' }, 0)
    .to(preload_TechoEdi1, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 1)
    .to(preload_FondoEdi2, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 1)
    .to(preload_LineEdi2, 1, { drawSVG: '0% 100%' }, 2)
    .to(preload_pantalla_redes_fondo, 1,{ scaleY: 1, transformOrigin: '0% 100%' },0)
    .to(preload_pantalla_redes_imagen, 1,{ scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' },1)
    .to(preload_pantalla_redes_fondoLineasFan, 1, { drawSVG: '0% 100%' },2)
    .to(preload_pantalla_redes_franja, 1, { scaleX: 1, transformOrigin: '0% 100%'},3)
    .to(preload_facebook, 1, { drawSVG: '0% 100%' },0)
    .to(preload_facebook_fondo, 0.5 , { opacity: 1 },0)
    .staggerTo(preload_facebook_cuadrados, 0.5 , { opacity: 1 }, 0.1, 0)
    .to(preload_facebook_header, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 1)

    .to(preload_icono2_Veinti4, 0.5, { opacity: 1 },0)
    .to(preload_Veinti4_2_circle, 0.5, { opacity: 1 },0)
    .to(preload_icono2_Veinti4, 3, { rotation: 360, transformOrigin: 'center center' }, .5)
    .staggerTo(preload_torre, 2 , { scaleY: 1, transformOrigin: '0% 100%' }, 2, 0)
    .staggerTo(preload_check_pestanias, 1 , { drawSVG: '0% 100%'  }, 0.1, 0)
    .to(preload_check_circulo,1 , {  scaleX: 1,  scaleY: 1, transformOrigin: '50% 50%'  },0 )
    .to(preload_IDE_fondo, 1,{ scaleY: 1, transformOrigin: '0% 100%' },0)
    .staggerTo(preload_IDE, 1 , { drawSVG: '0% 100%'  }, 0.1, 1)
    .to(preload_IDE_header, 0.5, { opacity: 1 },.5)

    

  TimeOpenPreload2
    .set(preload_icono1Humo, { drawSVG: '0% 0%' })
    .to(preload_icono1Humo, 1, { drawSVG: '10% 50%', ease: Linear.easeNone })
    .to(preload_icono1Humo, 1, { drawSVG: '35% 80%', ease: Linear.easeNone })
    .to(preload_icono1Humo, 2, { drawSVG: '100% 100%', ease: Linear.easeNone });

}
