var preloadSvg = $('svg#preload'),
  preload_titulo = $('#preload .titulo-preload'),
  preload_lamp = $('#preload #Lamp_1_'),
  preload_headerLamp = $('#preload #headerLamp_1_'),
  preload_icono1Humo = $('#preload  #humo_2_ path'),
  preload_regla = $('#preload #regla_1_'),
  preload_pluma = $('#preload #Pluma_1_'),
  preload_reloj = $('#preload .reloj circle,#preload .reloj line,#preload .reloj  path'),
  preload_lampara = $('#preload .lampara circle,#preload .lampara line, #preload .lampara  path, #preload .lampara polygon, #preload .lampara polyline, #preload .lampara ellipse, #preload .lampara rect'),
  preload_lampara_gris = $('#preload .lampara .gris'),
  preload_relojMin = $('#preload #Reloj-min_1_'),
  preload_pantone1 = $('#preload #pantone1_1_'),
  preload_pantone2 = $('#preload #pantone2_1_'),
  preload_pantone3 = $('#preload #pantone3_1_'),
  preload_diploma_cuadrado = $('#Diploma_1_ rect'),
  preload_diploma_linea = $('#Diploma_1_ line'),
  preload_books = $('#preload #Books_1_ rect, #preload #cuadrados_1_ rect'),
  preload_primeras_lineas = $('#preload #Lineas_x5F_Start_1_ #primeras-lineas line'),
  preload_lineStart = $('#preload #Lineas_x5F_Start_1_ line'),
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
  preload_diamante = $('#preload .diamante polyline'),
  preload_diamante_line = $('#preload .diamante line'),
  preload_celu_fondo = $('#preload .celu .celu-fondo'),
  preload_celu_pantalla = $('#preload .celu .celu-pantalla,#preload .celu ellipse'),
  preload_compu_pantalla = $('#preload .compu rect'),
  preload_compu_fondo = $('#preload .compu path,#preload .compu  polygon'),
  preload_compu_line = $('#preload .compu line'),
  preload_papelito = $('#preload .papelito'),
  preload_taza = $('#preload .taza'),
  preload_lapicero = $('#preload .lapicero'),
  preload_navaja = $('#preload .navaja'),
  preload_pantone = $('#preload .pantone'),
  preload_piso = $('#preload .piso line'),

  TimeOpenPreload = new TimelineMax(),
  TimeOpenPreloadTaza = new TimelineMax({
    repeat: -1
  }),
  TimeCierrePreload = new TimelineMax();
  

function cierrePreload() {
  TimeCierrePreload
    .timeScale(1)
    .eventCallback('onComplete', aperturaPreload)
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
    .to(preload_lampara, 1, { drawSVG: '50% 50%',opacity: 0 },1)
    .to(preload_reloj, 1, { drawSVG: '50% 50%',opacity: 0 },1)
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
    .to(preload_diamante, 1, { drawSVG: '50% 50%' }, 0)
    .to(preload_diamante, 1, { 'opacity': 0 }, 1)
    .to(preload_diamante_line, 1, { drawSVG: '0% 0%' }, 1)
    .to(preload_celu_pantalla, 1,{ scaleY: 0, scaleX: 0,  transformOrigin: '50% 50%' },0)
    .to(preload_celu_fondo, 1,{ scaleY: 0, scaleX: 0,  transformOrigin: '50% 50%' },.5)
    .to(preload_compu_fondo, 1,{ scaleY: 0, scaleX: 0,  transformOrigin: '50% 50%' },0)
    .to(preload_compu_pantalla, 1,{ scaleY: 0, scaleX: 0,  transformOrigin: '50% 50%' },1)
    .to(preload_compu_line, 1, { drawSVG: '50% 50%' },0)
    .to(preload_papelito, 1,{ scaleY: 0, scaleX: 0,  transformOrigin: '100% 100%' },0)
    .to(preload_taza, 1, { opacity: 0 }, 0)
    .to(preload_lapicero, 1, { opacity: 0 }, 0)
    .to(preload_navaja, 1, { opacity: 0 }, 0)
    .to(preload_pantone, 1, { opacity: 0 }, 0)
    .to(preload_piso, 2, { drawSVG: '50% 50%' }, 0)
    
  TweenLite.to(TimeOpenPreloadTaza, 3, {timeScale:0});
}
function OpenPreload() {
  TimeOpenPreload.timeScale(1)
  .eventCallback('onComplete',cierrePreload)

    .set(preload_lampara, { drawSVG: '50% 50%', opacity: 0  })
    .set(preload_reloj, { drawSVG: '50% 50%', opacity: 0  })
    .set(preloadSvg, { opacity: 1 })
    .set(preload_books, { scaleX: 0, transformOrigin: '0% 0%' })
    .set(preload_diploma_linea, { drawSVG: '50% 50%' })
    .set(preload_diploma_cuadrado, { scaleX: 0, transformOrigin: '0% 0%' })
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
    .set(preload_diamante, { drawSVG: '50% 50%' ,'opacity':0})
    .set(preload_diamante_line, { drawSVG: '0% 0%' })
    .set(preload_celu_fondo, {  scaleX: 0,  scaleY: 0, transformOrigin: '50% 50%' })
    .set(preload_celu_pantalla, {  scaleX: 0,  scaleY: 0, transformOrigin: '50% 50%' })
    .set(preload_compu_pantalla, {  scaleX: 0,  scaleY: 0, transformOrigin: '50% 50%' })
    .set(preload_compu_fondo, {  scaleX: 0,  scaleY: 0, transformOrigin: '50% 50%' })
    .set(preload_compu_line, { drawSVG: '50% 50%' })
    .set(preload_papelito, {  scaleX: 0,  scaleY: 0, transformOrigin: '0% 0%' })
    .set(preload_taza, { opacity: 0 })
    .set(preload_lapicero, { opacity: 0 })
    .set(preload_navaja, { opacity: 0 })
    .set(preload_pantone, { opacity: 0 })
    .set(preload_piso, { drawSVG: '0% 0%', fill:'rgba(255, 255, 255, 0)' })
    .set(preload_titulo, {  scaleX:2, scaleY:2,x:275.275, y:100 ,  transformOrigin: '50% 50%'  })

    .to(preload_titulo, 2, { scaleX:1, scaleY:1,x:275.275, y:100 ,  transformOrigin: '50% 50%' })
    .to(preload_titulo, 1, { x:375.275, y:297.672 }, 'titulo')
    .to(preload_piso, 2, { drawSVG: '0% 100%' }, 'titulo-=2')
    .to(preload_compu_pantalla, 1,{ scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' }, 'compu')
    .to(preload_compu_fondo, 1,{ scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' },'compu+=1')
    .to(preload_compu_line, 1, { drawSVG: '0% 100%' },'compu+=1.5')
    .to(preload_papelito, 1,{ scaleY: 1, scaleX: 1,  transformOrigin: '0% 0%' },'compu+=1.5')
    .to(preload_check_circulo,1 , {  scaleX: 1,  scaleY: 1, transformOrigin: '50% 50%'  }, 'IDE')
    .to(preload_IDE_fondo, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 'IDE')
    .staggerTo(preload_IDE, 1 , { drawSVG: '0% 100%'  }, 0.03, 'IDE')
    .to(preload_IDE_header, 0.5, { opacity: 1 }, 'IDE')
    .staggerTo(preload_check_pestanias, 1 , { drawSVG: '0% 100%'  }, 0.1, 'IDE')
    .add(function () {$(preload_titulo).text('Diseño Gráfico');})
    .to(preload_lampara, .5, {  opacity: 1 }, 'lampara')
    .staggerTo(preload_lampara, 1, { drawSVG: '0% 100%' },  0.1,'lampara')
    .to(preload_headerLamp, 2, { rotation: -25, transformOrigin: '20 10' }, 'lampara+=2')
    .to(preload_lamp, 1, { fill: '#C9BB9E' }, 'lampara+=2')
    .to(preload_lampara_gris, 1, { fill: '#AFAEB4' }, 'lampara+=2')
    .to(preload_pantone, 0.5 , { opacity: 1 },'disenio')
    .to(preload_pantone3, 1, { rotation: -90, transformOrigin: '10 19' }, 'disenio+=.5')
    .to(preload_pantone2, 1, { rotation: -45, transformOrigin: '10 19' }, 'disenio+=.5')
    .to(preload_pantone1, 1, { rotation: 0, transformOrigin: '10 19' }, 'disenio+=.5')
    .to(preload_navaja, 0.5 , { opacity: 1 },'navaja-=1')
    .to(preload_regla, 1, { rotation: 50, transformOrigin: '100% 100%' }, 'navaja-=.5')
    .to(preload_pluma, 1, { rotation: -90, transformOrigin: '00 50%' }, 'navaja-=.5')
    .to(preload_reloj, .5, {  opacity: 1 },'reloj-=.5')
    .to(preload_reloj, 1, { drawSVG: '0% 100%' },'reloj')
    .to(preload_relojMin, 5, { rotation: 240, transformOrigin: 'center center' }, 'reloj')
    .to(preload_celu_fondo, 1,{ scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' },'navaja')
    .to(preload_celu_pantalla, 1,{ scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' },'navaja+=.5')
    .to(preload_taza, 2 , { opacity: 2 },'navaja+=1')
    .to(preload_lapicero, 2 , { opacity: 2 },'navaja+=1.5')
    .staggerTo(preload_diploma_cuadrado, 1, { scaleX: 1, transformOrigin: '0% 0%' }, .2, 'navaja+=2')
    .to(preload_diploma_linea, 1, { drawSVG: '0% 100%' }, 'navaja+=2')
    .add(function () {$(preload_titulo).text('Marketing digital');})
    .staggerTo(preload_books, 1, { scaleX: 1, transformOrigin: '0% 0%' }, .2, 'marketing')


    .to(preload_paracaidas, 2, { drawSVG: '0% 100%' }, 'test')
    .to(preload_FondoEdi1, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 'test')
    .to(preload_PisoEdi1, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 'test')
    .to(preload_LineEdi1, 1, { drawSVG: '0% 100%' }, 'test+=1')
    .to(preload_libro_play, 1, { scaleX: 1, transformOrigin: '0% 50%' }, 'test')
    .to(preload_TechoEdi1, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 'test+=1')
    .to(preload_FondoEdi2, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 'test+=1')
    .to(preload_LineEdi2, 1, { drawSVG: '0% 100%' }, 'test+=2')
    .to(preload_pantalla_redes_fondo, 1,{ scaleY: 1, transformOrigin: '0% 100%' },'test')
    .to(preload_pantalla_redes_imagen, 1,{ scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' },'test+=1')
    .to(preload_pantalla_redes_fondoLineasFan, 1, { drawSVG: '0% 100%' },'test+=2')
    .to(preload_pantalla_redes_franja, 1, { scaleX: 1, transformOrigin: '0% 100%'},'test+=3')
    .to(preload_facebook, 1, { drawSVG: '0% 100%' },'test')
    .to(preload_facebook_fondo, 0.5 , { opacity: 1 },'test')
    .staggerTo(preload_facebook_cuadrados, 0.5 , { opacity: 1 }, 0.1, 'test')
    .to(preload_facebook_header, 1,{ scaleY: 1, transformOrigin: '0% 100%' }, 'test+=1')
    .to(preload_icono2_Veinti4, 0.5, { opacity: 1 },'test')
    .to(preload_Veinti4_2_circle, 0.5, { opacity: 1 },'test')
    .to(preload_icono2_Veinti4, 3, { rotation: 360, transformOrigin: 'center center' }, 'test+=.5')
    .staggerTo(preload_torre, 2 , { scaleY: 1, transformOrigin: '0% 100%' }, 2, 'test')
    .to(preload_diamante, 0.5 , { opacity: 1 },'test')
    .to(preload_diamante, 1, { drawSVG: '0% 100%' }, 'test+=.5')
    .to(preload_diamante_line, 1, { drawSVG: '0% 100%' }, 'test+=1')
    .staggerTo(preload_nubes, 1, { drawSVG: '00% 110%', fill: 'rgb(237, 238, 240)'}, 1, 'disenio')
    .staggerTo(preload_primeras_lineas, 1, { drawSVG: '0% 100%' }, 1, 'disenio')
    .staggerTo(preload_lineStart, 1, { drawSVG: '0% 100%' }, 1, 'disenio')

  TimeOpenPreloadTaza
    .set(preload_icono1Humo, { drawSVG: '0% 0%' })
    .to(preload_icono1Humo, 1, { drawSVG: '10% 50%', ease: Linear.easeNone })
    .to(preload_icono1Humo, 1, { drawSVG: '35% 80%', ease: Linear.easeNone })
    .to(preload_icono1Humo, 2, { drawSVG: '100% 100%', ease: Linear.easeNone });

}
