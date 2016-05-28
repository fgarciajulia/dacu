$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    autoplaySpeed: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:450,
    lazyLoad:true,
    margin:100,
})
});
var AltoCuadrado = ( $(".wordpress-BG")[0].scrollHeight );

$(window).scroll(function() {
    if ($(document).scrollTop() > 20) {
        $('nav').addClass('Fondo');
    } else {
        $('nav').removeClass('Fondo');
    }
});


$(window).ready(function(){

var line5 = $(" #Line5-SVG > polyline"); 


/* Mockup 1 */
TweenLite.from("#Line1-poly", 7, {drawSVG:"100% 100%", delay:0.2});
TweenLite.from("#Line2-poly", 5, {drawSVG:"0% 0%", delay:6});

/* Title  Diseño Grafico */
TweenLite.to("#Line3-poly",1,{drawSVG:"6% 85%", delay:0});
TweenLite.to("#Line4-poly",1,{drawSVG:"30% 100%", delay:0});



			var controller = $.superscrollorama();
			var scrollDuration = 200; 

/* Diseño Grafico */
var misela1 = $("#misela1 > rect"); 
var miselaSlider = $(".owl-dot");

controller.addTween(misela1, TweenMax.staggerFrom(misela1, 0.5, {opacity:0, y:200, rotation:360, scale:2, delay:0.5}, 0.2), scrollDuration);
TweenMax.staggerFrom(miselaSlider, 0.5, {opacity:0, y:200, rotation:360, scale:2, delay:0.5}, 0.2);

/* Responsive */

TweenLite.from(line5, 7, {drawSVG:"85% 85%", delay:11});
TweenLite.from($(".line-responsive"), 7, {drawSVG:"0% 0%", delay:11});

/* Wordpress */
                    TweenMax.fromTo (".wordpress-BG" , 3, {height:0, width:0},  {width:"100%", height: AltoCuadrado , ease:Bounce.easeOut, delay:1});

});


                      wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'sombra', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
                    