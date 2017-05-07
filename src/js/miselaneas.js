function activaMiselaneaHome() {
  var controller = $.superscrollorama({
      triggerAtCenter: false,
      playoutAnimations: true,
    }),
    line5 = $(' #Line5-SVG polyline');


  /* Mockup 1 */
  TweenLite.set('#Line1-poly_1_', {
    opacity: 1
  }, 0);
  TweenLite.set('#Line1-poly_1_', {
    stroke: '#333399'
  }, 0);
  TweenLite.from('#Line1-poly_1_',
    7, {
      drawSVG: '100% 100%'
    });
  TweenLite.set('#Line2-poly', {
    opacity: 1
  }, 0);
  TweenLite.from('#Line2-poly',
    5, {
      drawSVG: '0% 0%',
      delay: 6
    });

  /* Title  Diseño Grafico */
  TweenLite.to('#Line3-poly',
    1, {
      drawSVG: '6% 85%'
    });
  TweenLite.to('#Line4-poly',
    1, {
      drawSVG: '30% 100%'
    });



  /* Diseño Grafico */
  var misela1 = $('.cuadraditos_sereados > rect');
  var minela2 = $('#responsive_misela_cuadraditos_02  rect');
  var miselaSlider = $('.owl-dot');


  TweenLite.set(misela1, {
    opacity: 1
  }, 0);
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

  var AltoMap = $('.porfolio-content').height();
  $('.porfolio #XMLID_1_ rect').css('height', AltoMap);
  
}

TweenLite.set('#Line2-poly, #Line1-poly_1_,#responsive_misela_cuadraditos_02  rect, .cuadraditos_sereados > rect', {
  opacity: 0
}, 0);