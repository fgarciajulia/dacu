function loaded3() {
  $('body').addClass('loaded');
  setTimeout(function () {
    $('#loader').addClass('fadeOut');
    $('#loader').addClass('hidden');
  }, 600);
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

function preload(imgArray) {
  OpenPreload();
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

function progressUpdate() {
  loadingPorcent = Math.round(progressTl.progress() * 100);
  $('.percentage').text(loadingPorcent + '%');
}


function loadComplete() {
  $('.percentage').text('Omitir presentación');
}

function CierreCompleto() {
  loaded3();
  setTimeout(function () {
    miselaneas();
  }, 1300);
}

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



$(window).scroll(function () {
  var hT = $('#owl-carousel2').offset().top,
    hH = $('#owl-carousel2').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (((wS + wH) > hT) && (wS < (hT + hH))) {
    play();
  } else {
    pause();
  }
});