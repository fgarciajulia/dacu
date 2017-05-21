

function OpenPreload() {
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
    preload_FondoEdificio1 = $('#preload #Edi1_1_ #Fondo_x5F_Edi1_1_'),
    preload_PisoEdificio1 = $('#preload #Edi1_1_ .piso-edi'),
    preload_LineEdificio1 = $('#preload #Edi1_1_ line'),
    preload_TechoEdificio1 = $('#preload #Techo_x5F_Edi1_1_'),
    preload_FondoEdificio2 = $('#preload #Edi2_1_ #Fondo_x5F_Edi2_1_'),
    preload_LineEdificio2 = $('#preload #Edi2_1_ #LineasEdi2_1_ line, #preload #Edi2_1_ #LineasEdi2_1_  polyline'),
    preload_facebook = $('#preload .facebook line, #preload .facebook polyline, #preload .facebook path, #preload .facebook rect'),
    preload_facebook_fondo = $('#preload .facebook-fondo'),
    preload_facebook_cuadrados = $('#preload .facebook-cuadrados rect,#preload .facebook-cuadrados line,#preload .facebook-cuadrados path'),
    preload_facebook_header = $('#preload .facebook-header rect,#preload .facebook-header line,#preload .facebook-header path,#preload .facebook-header circle'),
    preload_veinticuatro = $('#preload #veinticuatro'),
    preload_veinticuatro_texto = $('#preload #veinticuatro-texto path'),
    preload_veinticuatro_circulo = $('#preload #veinticuatro-circulo circle'),
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
    TimeOpenPreload = new TimelineMax();

  TimeOpenPreload.timeScale(1)
    .eventCallback('onComplete', aperturaPreload)

    .set(preload_lampara, { drawSVG: '50% 50%', opacity: 0  })
    .set(preload_reloj, { drawSVG: '50% 50%', opacity: 0  })
    .set(preloadSvg, { opacity: 1 })
    .set(preload_books, { scaleX: 0, transformOrigin: '0% 0%' })
    .set(preload_diploma_linea, { drawSVG: '50% 50%' })
    .set(preload_diploma_cuadrado, { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' })
    .set(preload_lineStart, { drawSVG: '50% 50%' })
    .set(preload_nubes, { drawSVG: '0% 0%', fill:'rgba(255, 255, 255, 0)' })
    .set(preload_paracaidas, { drawSVG: '0% 0%', fill:'rgba(255, 255, 255, 0)' })
    .set(preload_LineEdificio1, { drawSVG: '50% 50%' })
    .set(preload_FondoEdificio1, { scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_PisoEdificio1, { scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_TechoEdificio1, { scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_LineEdificio2, { drawSVG: '50% 50%' })
    .set(preload_FondoEdificio2, { scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_libro_play, { scaleX: 0, transformOrigin: '0% 50%' })
    .set(preload_libro_play, { scaleX: 0, transformOrigin: '0% 50%' })
    .set(preload_pantalla_redes_fondo, { scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_pantalla_redes_franja, { scaleX: 0, transformOrigin: '0% 100%'})
    .set(preload_pantalla_redes_imagen, { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' })
    .set(preload_pantalla_redes_fondoLineasFan, { drawSVG: '50% 50%' })
    .set(preload_facebook, { drawSVG: '50% 50%' })
    .set(preload_facebook_fondo, { opacity: 0 })
    .set(preload_facebook_cuadrados, { opacity: 0 })
    .set(preload_facebook_header, { scaleY: 0, transformOrigin: '0% 100%'})
    .set(preload_veinticuatro, { opacity: 0 })
    .set(preload_veinticuatro_circulo, { opacity: 0 })
    .set(preload_veinticuatro_texto, { drawSVG: '50% 50%', fill:'#fff'})
    .set(preload_torre, { scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_torre, { scaleY: 0, transformOrigin: '0% 100%' })
    .set(preload_check_pestanias, { drawSVG: '100% 100%' })
    .set(preload_IDE, { drawSVG: '50% 50%' })
    .set(preload_check_circulo, {  scaleX: 0,  scaleY: 0, transformOrigin: '50% 50%' })
    .set(preload_IDE_fondo, { scaleY: 0, transformOrigin: '0% 100%'})
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
    .set(preload_piso, { drawSVG: '50% 50%', fill:'rgba(255, 255, 255, 0)' })
    .set(preload_titulo,  {scaleX:1, scaleY:1,x:375.275, y:297.672,  transformOrigin: '50% 50%' })
    
    .to(preload_titulo, 2, {ease: Power1.easeOut,scrambleText:{text:'Programación Web', chars:'lowerCase'}}, 'titulo')
    .to(preload_piso, 2, {ease: Power1.easeOut, drawSVG: '0% 100%' }, 'titulo-=1')
    .to(preload_compu_pantalla, 1, {ease: Back.easeOut.config(1.7), scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' }, 'compu')
    .to(preload_compu_fondo, 1, {ease: Power1.easeInOut, scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' },'compu+=1')
    .to(preload_compu_line, 1, {ease: Power1.easeInOut, drawSVG: '0% 100%' },'compu+=1.5')
    .to(preload_papelito, 1, {ease: Power1.easeInOut, scaleY: 1, scaleX: 1,  transformOrigin: '0% 0%' },'compu+=1.5')
    .to(preload_check_circulo,1, {ease: Back.easeOut.config(1.7),  scaleX: 1,  scaleY: 1, transformOrigin: '50% 50%'  }, 'IDE')
    .to(preload_IDE_fondo, 1, {ease: Power1.easeOut, scaleY: 1, transformOrigin: '0% 100%' }, 'IDE')
    .staggerTo(preload_IDE, 1, {ease:Power1.easeInOut, drawSVG: '0% 100%'  }, 0.03, 'IDE')
    .to(preload_IDE_header, 0.5,{opacity: 1 }, 'IDE')
    .staggerTo(preload_check_pestanias, 1, {ease: Power1.easeInOut, drawSVG: '0% 100%'  }, 0.1, 'IDE')
    .to(preload_lampara, .5, {opacity: 1 }, 'lampara-=1')
    .staggerTo(preload_lampara, 1, {ease: Power1.easeInOut, drawSVG: '0% 100%' },  0.05,'lampara-=1')
    .to(preload_titulo, 1, {scrambleText:{text:'Diseño Gráfico', chars:'lowerCase'}}, 'lampara')
    .to(preload_pantone, 0.5, {opacity: 1 },'disenio-=.5')
    .to(preload_pantone3, 2, {ease: Back.easeOut.config(3), rotation: -90, transformOrigin: '10 19' }, 'disenio')
    .to(preload_pantone2, 2, {ease: Back.easeOut.config(3), rotation: -45, transformOrigin: '10 19' }, 'disenio')
    .to(preload_pantone1, 2, {ease: Back.easeOut.config(3), rotation: 0, transformOrigin: '10 19' }, 'disenio')
    .to(preload_navaja, 0.5, {opacity: 1 },'navaja-=1')
    .to(preload_regla, 2, {ease: Back.easeOut.config(3), rotation: 50, transformOrigin: '100% 100%' }, 'navaja-=.5')
    .to(preload_pluma, 2, {ease: Back.easeOut.config(3), rotation: -90, transformOrigin: '00 50%' }, 'navaja-=.5')
    .to(preload_reloj, .5, {opacity: 1 },'reloj-=.5')
    .to(preload_celu_fondo, 1, {ease: Power1.easeOut, scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' },'navaja')
    .to(preload_celu_pantalla, 1, {ease: Power1.easeOut, scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' },'navaja+=.5')
    .to(preload_taza, 2, {opacity: 1 },'navaja-=1')
    .to(preload_lapicero, 2, {opacity: 1 },'navaja-=.5')
    .staggerTo(preload_diploma_cuadrado, 1, {ease: Power1.easeOut, scaleX: 1, scaleY: 1, transformOrigin: '50% 50%' }, .2, 'navaja+=.5')
    .to(preload_diploma_linea, 1, {ease: Power1.easeOut, drawSVG: '0% 100%' }, 'navaja+=1')
    .to(preload_reloj, 1, {ease: Power1.easeOut, drawSVG: '0% 100%' },'reloj')
    .to(preload_titulo, 1, {ease: Power1.easeOut,scrambleText:{text:'Marketing digital', chars:'lowerCase'}}, 'marketing')
    .to(preload_veinticuatro_circulo, 0.5, { opacity: 1 },'marketing+=1')
    .to(preload_veinticuatro, 0.5, { opacity: 1 },'marketing+=1')
    .to(preload_veinticuatro_texto, 3, {  drawSVG: '0% 100%', fill:'#C99F7E' },'marketing+=1')
    .to(preload_diamante, 0.5, { opacity: 1 },'marketing+=1')
    .to(preload_diamante, 1, {ease: Power1.easeOut, drawSVG: '0% 100%' }, 'marketing+=1.5')
    .to(preload_diamante_line, 1, {ease: Power1.easeOut, drawSVG: '0% 100%' }, 'marketing+=2')
    .to(preload_facebook, 1, {ease: Power1.easeOut, drawSVG: '0% 100%' },'facebook-=1')
    .to(preload_facebook_fondo, 0.5, { opacity: 1 },'facebook-=1')
    .staggerTo(preload_facebook_cuadrados, 0.5, { opacity: 1 }, 0.1, 'facebook-=1')
    .to(preload_facebook_header, 1, {ease: Power1.easeOut, scaleY: 1, transformOrigin: '0% 100%' }, 'facebook')

    .to(preload_titulo, 1, {ease: Power1.easeOut,scrambleText:{text:'e-commerce', chars:'lowerCase'}}, 'eCommerce')
    .to(preload_TechoEdificio1, 1, {ease: Power1.easeOut, scaleY: 1, transformOrigin: '0% 100%' }, 'edificios')
    .to(preload_FondoEdificio2, 1, {ease: Power1.easeOut, scaleY: 1, transformOrigin: '0% 100%' }, 'edificios')
    .to(preload_FondoEdificio1, 1, {ease: Power1.easeOut, scaleY: 1, transformOrigin: '0% 100%' }, 'edificios')
    .to(preload_PisoEdificio1, 1, {ease: Power1.easeOut, scaleY: 1, transformOrigin: '0% 100%' }, 'edificios')
    .to(preload_LineEdificio1, 1, {ease: Power1.easeOut, drawSVG: '0% 100%' }, 'edificios+=1')
    .to(preload_LineEdificio2, 1, {ease: Power1.easeOut, drawSVG: '0% 100%' }, 'edificios+=2')     

    .to(preload_libro_play, 1, {ease: Power1.easeOut, scaleX: 1, transformOrigin: '0% 50%' }, 'otros')
    .to(preload_paracaidas, 2, {ease: Power1.easeOut, drawSVG: '0% 100%' }, 'otros')
    .to(preload_pantalla_redes_fondo, 1, {ease: Power1.easeOut, scaleY: 1, transformOrigin: '0% 100%' },'otros')
    .to(preload_pantalla_redes_imagen, 1, {ease: Power1.easeOut, scaleY: 1, scaleX: 1,  transformOrigin: '50% 50%' },'otros+=1')
    .to(preload_pantalla_redes_fondoLineasFan, 1, {ease: Power1.easeOut, drawSVG: '0% 100%' },'otros+=2')
    .to(preload_pantalla_redes_franja, 1, {ease: Power1.easeOut, scaleX: 1, transformOrigin: '0% 100%'},'otros+=3')
    
    // no secuencial
    .to(preload_headerLamp, 2, {ease: Back.easeInOut.config(2), rotation: -25, transformOrigin: '20 10' }, 'lampara+=1')
    .to(preload_lamp, 3, {ease: Back.easeInOut.config(4), fill: '#C9BB9E' }, 'lampara+=1')
    .to(preload_lampara_gris, 1, {ease: Power1.easeOut, fill: '#AFAEB4' }, 'lampara+=1')
    .staggerTo(preload_nubes, 1, {ease: Power1.easeOut, drawSVG: '00% 110%', fill: 'rgb(237, 238, 240)'}, .5, 'disenio')
    .staggerTo(preload_primeras_lineas, 1, {ease: Power1.easeOut, drawSVG: '0% 100%' }, .5, 'disenio')
    .staggerTo(preload_lineStart, 1, {ease: Power1.easeOut, drawSVG: '0% 100%' }, .3, 'disenio')
    .staggerTo(preload_books, 1, {ease: Power1.easeOut, scaleX: 1, transformOrigin: '0% 0%' }, .2, 'marketing-=.5')
    .to(preload_relojMin, 5, {ease: Back.easeInOut.config(3), rotation: 240, transformOrigin: 'center center' }, 'reloj')
    .to(preload_veinticuatro, 6, {ease: Power1.easeInOut, rotation: 720, transformOrigin: 'center center' },'marketing+=1.5')
    .staggerTo(preload_torre, 1.5, {ease: Power1.easeOut, scaleY: 1, transformOrigin: '0% 100%' }, 2, 'edificios')

    .to(preload_titulo, 3, {ease: Power1.easeOut,scrambleText:{text:'soluciones integrales', chars:'lowerCase'}}, 'cierreTitulo')
    .to(preload_titulo, 1.5, {scaleX:.8, scaleY:.8,  transformOrigin: '50% 50%'},'cierreTitulo')
    
    .to(preload_pantalla_redes_imagen, 1, { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' },'cierre')
    .to(preload_pantalla_redes_fondoLineasFan, 1, { drawSVG: '50% 50%' },'cierre+=1')
    .to(preload_pantalla_redes_franja, 1, { scaleX: 0, transformOrigin: '0% 100%'},'cierre+=1')
    .to(preload_pantalla_redes_fondo, 1, { scaleY: 0, transformOrigin: '0% 100%' },'cierre+=2')
    .to(preload_books, 1, { scaleX: 0, transformOrigin: '0% 0%' }, 'cierre+=0.1')
    .to(preload_lamp, 1, { fill: '#fff' }, 'cierre')
    .to(preload_headerLamp, 1, { rotation: 0, transformOrigin: '20 10' }, 'cierre')
    .to(preload_regla, 1, { rotation: 0, transformOrigin: '100% 100%' }, 'cierre')
    .to(preload_pluma, 1, { rotation: 0, transformOrigin: '00 50%' }, 'cierre')
    .to(preload_pantone3, 1, { rotation: 0, transformOrigin: '10 19' }, 'cierre')
    .to(preload_pantone2, 1, { rotation: 0, transformOrigin: '10 19' }, 'cierre')
    .to(preload_pantone1, 1, { rotation: 0, transformOrigin: '10 19' }, 'cierre')
    .to(preload_lineStart, 2, { drawSVG: '50% 50%' }, 'cierre')
    .to(preload_paracaidas, 2, { drawSVG: '50% 50%' }, 'cierre')
    .staggerTo(preload_nubes, 1, { drawSVG: '50% 50%', fill:'rgba(255, 255, 255, 0)' }, 0.05, 'cierre')
    .to(preload_LineEdificio1, 1, { drawSVG: '50% 50%' }, 'cierre')
    .to(preload_FondoEdificio1, 1, { scaleY: 0, transformOrigin: '0% 100%' }, 'cierre+=1')
    .to(preload_PisoEdificio1, 1, { scaleY: 0, transformOrigin: '0% 100%' }, 'cierre+=1')
    .to(preload_TechoEdificio1, 1, { scaleY: 0, transformOrigin: '0% 100%' }, 'cierre+=1')
    .to(preload_PisoEdificio1, 1, { scaleY: 0, transformOrigin: '0% 100%' }, 'cierre+=1')
    .to(preload_LineEdificio2, 1, { drawSVG: '50% 50%' }, 'cierre+=1')
    .to(preload_FondoEdificio2, 1, { scaleY: 0, transformOrigin: '0% 100%' }, 'cierre+=2')
    .to(preload_libro_play, 1, { scaleX: 0, transformOrigin: '0% 50%' }, 'cierre+=2')
    .to(preload_lampara, 1, { drawSVG: '50% 50%',opacity: 0 },'cierre+=1')
    .to(preload_reloj, 1, { drawSVG: '50% 50%',opacity: 0 },'cierre+=1')
    .to(preload_relojMin, 1, { rotation: 0, transformOrigin: 'center center' }, 'cierre')
    .to(preload_facebook, 1, { drawSVG: '50% 50%' },'cierre')
    .to(preload_facebook_fondo, 0.5, { opacity: 0 },'cierre')
    .staggerTo(preload_facebook_cuadrados, 0.15, { opacity: 0 }, 0.1, 'cierre+=.5')
    .to(preload_facebook_header, 1, { scaleY: 0, transformOrigin: '0% 100%' }, 'cierre')
    .to(preload_veinticuatro, 1, { opacity: 0 }, 'cierre')
    .to(preload_veinticuatro_circulo, 1, { opacity: 0 }, 'cierre')
    .to(preload_veinticuatro_texto,1, { drawSVG: '50% 50%', opacity:0}, 'cierre')
    .staggerTo(preload_torreReverse, 1, { scaleY: 0, transformOrigin: '0% 100%' }, 1, 'cierre')
    .staggerTo(preload_check_pestanias, 1, { drawSVG: '0% 0%'  }, 0.1, 'cierre')
    .to(preload_check_circulo, 1, { scaleX: 0, scaleY: 0, transformOrigin: '50% 50%' }, 'cierre+=1')
    .staggerTo(preload_IDE, 1, { drawSVG: '50% 50%'  }, 0.05, 'cierre')
    .to(preload_IDE_fondo, 1, { scaleY: 0, transformOrigin: '0% 100%' },'cierre+=2')
    .to(preload_IDE_header, 1, { opacity: 0 }, 'cierre')
    .to(preload_diamante, 1, { drawSVG: '50% 50%' }, 'cierre')
    .to(preload_diamante, 1, { 'opacity': 0 }, 'cierre+=1')
    .to(preload_diamante_line, 1, { drawSVG: '0% 0%' }, 'cierre+=1')
    .to(preload_celu_pantalla, 1, { scaleY: 0, scaleX: 0,  transformOrigin: '50% 50%' },'cierre')
    .to(preload_celu_fondo, 1, { scaleY: 0, scaleX: 0,  transformOrigin: '50% 50%' },'cierre+=.5')
    .to(preload_compu_fondo, 1,  { opacity:0 },'cierre')
    .to(preload_compu_pantalla, 1, { opacity:0 },'cierre')
    .to(preload_compu_line, 1, { drawSVG: '50% 50%' },'cierre')
    .to(preload_papelito, 1, { scaleY: 0, scaleX: 0,  transformOrigin: '100% 100%' },'cierre')
    .to(preload_taza, 1, { opacity: 0 }, 'cierre')
    .to(preload_lapicero, 1, { opacity: 0 }, 'cierre')
    .to(preload_navaja, 1, { opacity: 0 }, 'cierre')
    .to(preload_pantone, 1, { opacity: 0 }, 'cierre')
    .to(preload_piso, 2, { drawSVG: '50% 50%' }, 'cierre')
    .staggerTo(preload_diploma_cuadrado, 1, { scaleX: 0, transformOrigin: '0% 0%' }, .2, 'cierre')
    .to(preload_diploma_linea, 1, { drawSVG: '0% 0%' }, 'cierre')
    .to(preload_titulo, 1, {  scaleX:1.5, scaleY:1.5,  transformOrigin: '50% 50%'},'cierre+=5')
    .to(preload_titulo, 2, {x:275.275, y:100, transformOrigin: '50% 50%' },'cierre+=4')
    .to($('.percentage'), 2, {opacity:0 },'cierre')
    .to(preload_titulo, .8,  {opacity:0});

  var  TimeOpenPreloadTaza = new TimelineMax();
  TimeOpenPreloadTaza
  .repeat(7)
    .set(preload_icono1Humo, { drawSVG: '0% 0%' })
    .to(preload_icono1Humo, 1, { drawSVG: '10% 50%', ease: Linear.easeNone })
    .to(preload_icono1Humo, 1, { drawSVG: '35% 80%', ease: Linear.easeNone })
    .to(preload_icono1Humo, 2, { drawSVG: '100% 100%', ease: Linear.easeNone });
  
}

function aperturaDeTelon() {
  $('body').addClass('loaded');
  $('#loader').addClass('fadeOut');
  $('#loader').addClass('hidden');
}
/* LOADING */
var progressTl = new TimelineMax({
  paused: true,
  onUpdate: progressUpdate,
  onComplete: loadComplete
});


progressTl
  .to($(''), 2, {
    transformOrigin: 'center center'
  }, 0);
// ? ? ?

function preload() {
  var demoImgArray = [
      'img/Mockup1-1.jpg',
      'img/Mockup1-2.jpg',
      'img/Mockup1-3.png',
      'img/Mockup1-4.jpg',
      'img/Mockup1-5.png',
      'img/Mockup2-0.gif'
    ],
    imagenesCargadas = 0,
    imagenesTotales = demoImgArray.length,
    loadingProgress = 0;
    
  OpenPreload();
  $(demoImgArray).each(function () {
    $('<img>').attr('src', this).on('load', function () {
      imagenesCargadas++;
      loadingProgress = (imagenesCargadas / imagenesTotales);
      TweenLite.to(progressTl, 2, {
        progress: loadingProgress,
        ease: Linear.easeNone
      });
    });
  });
}

function progressUpdate() {
  var loadingPorcent = Math.round(progressTl.progress() * 100);
  $('.percentage').text('Cargando ' + loadingPorcent + '%');
}


function loadComplete() {
  $('.percentage').text('Omitir presentación').css('color','#17422b');
  $('#loader').on('click', aperturaPreload);
  $('#loader').css('cursor', 'pointer');
}

function aperturaPreload() {
  
  $('#loader').off('click', aperturaPreload);
  aperturaDeTelon();
  setTimeout(function () {
    activaMiselaneaHome();
  }, 1200);
}

preload();