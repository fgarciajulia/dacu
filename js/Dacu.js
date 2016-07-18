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
    margin:400,
})
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 20) {
        $('nav').addClass('Fondo');
    } else {
        $('nav').removeClass('Fondo');
    }
});


$(window).ready(function(){
			var controller = $.superscrollorama({
        triggerAtCenter:false ,
        playoutAnimations: true,
		});
        
        
var line5 = $(" #Line5-SVG > polyline"); 


/* Mockup 1 */
TweenLite.from("#Line1-poly", 7, {drawSVG:"100% 100%", delay:0.2});
TweenLite.from("#Line2-poly", 5, {drawSVG:"0% 0%", delay:6});

/* Title  DiseÃ±o Grafico */
TweenLite.to("#Line3-poly",1,{drawSVG:"6% 85%", delay:0});
TweenLite.to("#Line4-poly",1,{drawSVG:"30% 100%", delay:0});



/* DiseÃ±o Grafico */
var misela1 = $("#misela1 > rect"); 
var minela2 = $("#Line4-SVG > rect"); 
var miselaSlider = $(".owl-dot");


TweenMax.staggerFrom(misela1, 0.5, {opacity:0, y:200, x:200, scale:3, delay:0.5}, 0.2);
TweenMax.staggerFrom(miselaSlider, 0.5, {opacity:0, y:200, x:200, rotation:680  , scale:2, delay:0.5}, 0.2);

/* Responsive */

var staggerTween = new TimelineMax();
    staggerTween.append(TweenMax.staggerFrom(minela2, 1, {css:{opacity:0, y:200, x:200 , scale:2}}, 0.25),0,0);
controller.addTween(minela2, staggerTween);
controller.addTween(line5,TweenLite.from(line5, 3, {drawSVG:"85% 85%"}));
controller.addTween(line5,TweenLite.from($(".line-responsive"), 3, {drawSVG:"0% 0%"}));

/* Wordpress */
var AltoCuadrado = ( $(".wordpress-BG")[0].scrollHeight );

controller.addTween(".wordpress-BG", TweenMax.fromTo (".wordpress-BG" , 3, {height:0, width:0},  {width:"100%", height: AltoCuadrado , ease: Power3.easeOut}));
        $('.wordpress-BG').delay( 800 ).addClass('sombra');
});



/*
    var width_Home = $( '.Nav-Home a span' ).width();
    var width_Servicios = $( '.Nav-Servicios a span' ).width();
    var width_Porfolio = $( '.Nav-Porfolio a span' ).width();
    var width_Contacto = $( '.Nav-Contacto a span' ).width();

    function pepe() {
        $( ".Nav-Home:not(.active) a span" ).css({ "width": width_Home });
        $( ".Nav-Servicios:not(.active) a span" ).css({ "width": width_Servicios });
        $( ".Nav-Porfolio:not(.active) a span" ).css({ "width": width_Porfolio    });
        $( ".Nav-Contacto:not(.active) a span" ).css({ "width": width_Contacto   });
    };
    function pepe2() {
        $( ".Nav-Home:not(.active) a span" ).css({ "width": 0 });
        $( ".Nav-Servicios:not(.active) a span" ).css({ "width": 0 });
        $( ".Nav-Porfolio:not(.active) a span" ).css({ "width": 0  });
        $( ".Nav-Contacto:not(.active) a span" ).css({ "width": 0 });
    };
    $( "nav" ).mouseenter( pepe );
    $( "nav" ).mouseleave( pepe2 ) ;
    pepe2();
    */