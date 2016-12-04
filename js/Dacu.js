function loaded2() {
  OpenPreload();
  // setTimeout(function () {
  //   $('body').addClass('loaded');
  //   setTimeout(function () {
  //     $('#loader').addClass('fadeOut');
  //     $('#loader').addClass('hidden');
  //   }, 600);
  // }, 1100);
}

var demoImgArray = [
  'img/Mockup1-1.jpg',
  'img/Mockup1-2.jpg',
  'img/Mockup1-3.png',
  'img/Mockup1-4.jpg',
  'img/Mockup1-5.png',
  'img/Mockup2-0.gif'
];

var imagenesCargadas = 0;
var imagenesTotales = demoImgArray.length;
var loadingPorcent = 0;
var loadingProgress = 0;
preload(demoImgArray);


/* LOADING */
function preload(imgArray) {
  $(imgArray).each(function () {
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
var progressTl = new TimelineMax({
  paused: true,
  onUpdate: progressUpdate,
  onComplete: loadComplete
});

progressTl
  .to($('#logoPreload .izquierda polyline'), 1, {
    borderBottomColor: '#90e500',
    stroke: 'white',
    fill: 'transparent',
    width: '542px',
  }).to($('#logoPreload .izquierda polyline'), 1, {
    borderBottomColor: '#90e500',
    stroke: '#000',
    fill: '#000',
    width: '0px',
  });

function progressUpdate() {
  loadingPorcent = Math.round(progressTl.progress() * 100);
  $('.percentage').text(loadingPorcent + '%');
}


function loadComplete() {
  $('.percentage').text('listo');
  loaded2();
  setTimeout(function () {
    miselaneas();
    PorfolioAltoMiselanea();
  }, 1300);
}



var $azul = $('.azul');
var $celeste = $('.celeste');
var $crema = $('.crema');
var $naranja = $('.naranja');
var start = 0;

var animacionLogoLoading = new TimelineMax({
  repeat: -1,
  repeatDelay: 0.05,
});
// center
animacionLogoLoading.fromTo($celeste, 0.4, {
  x: 0
}, {
  x: -30,
  rotation: 90,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start);
animacionLogoLoading.fromTo($crema, 0.4, {
  x: 0
}, {
  x: 30,
  rotation: -90,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start);
// ext 1st
animacionLogoLoading.to($celeste, 0.4, {
  x: -60,
  rotation: 180,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start + 0.45);
animacionLogoLoading.fromTo($naranja, 0.4, {
  x: 0
}, {
  x: -30,
  rotation: 180,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start + 0.45);
animacionLogoLoading.to($crema, 0.4, {
  x: 60,
  rotation: -180,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start + 0.45);
animacionLogoLoading.fromTo($azul, 0.4, {
  x: 0
}, {
  x: 30,
  rotation: -90,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start + 0.45);
// ext return
animacionLogoLoading.to($celeste, 0.4, {
  x: 30,
  rotation: -90,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start + 0.9);
animacionLogoLoading.to($naranja, 0.4, {
  x: 0,
  rotation: -90,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start + 0.9);
animacionLogoLoading.to($crema, 0.4, {
  x: -30,
  rotation: 0,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start + 0.9);
animacionLogoLoading.to($azul, 0.4, {
  x: 0,
  rotation: 0,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start + 0.9);
// center again
animacionLogoLoading.to($celeste, 0.4, {
  x: 0,
  rotation: 0,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start + 1.35);
animacionLogoLoading.to($crema, 0.4, {
  x: 0,
  rotation: 0,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
}, start + 1.35);


var isPlay = true;

function play() {
  if (!isPlay) {
    owl_Servicios.trigger('play.owl.autoplay', [100]);
    isPlay = true;
  }
}

function pause() {
  owl_Servicios.trigger('stop.owl.autoplay');
  isPlay = false;
}

pause();


$(window).scroll(function () {
  var hT = $('#owl-carousel2').offset().top,
    hH = $('#owl-carousel2').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (((wS + wH) > hT) && (wS > (hT + hH))) {
    play();
  } else {
    pause();
  }
});