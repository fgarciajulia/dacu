function miselaneas() {
  var controller = $.superscrollorama({
    triggerAtCenter: false,
    playoutAnimations: true,
  });


  var line5 = $(' #Line5-SVG polyline');


  /* Mockup 1 */
  TweenLite.to('#Line1-poly_1_',
    0, {
      stroke: '#333399'
    }, 0);
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
}

function PorfolioAltoMiselanea() {
  var AltoMap = $('.porfolio-content').height();
  $('.porfolio #XMLID_1_ rect').css('height',
    AltoMap);
}