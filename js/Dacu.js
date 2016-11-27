function loaded2() {
  $('#loader').addClass('fadeOut');
  $('body').addClass('loaded');
  setTimeout(function () {
    $('#loader').addClass('hidden');
  }, 500);
}

var demoImgArray = [
  'img/Mockup1-1.png',
  'img/Mockup1-2.png',
  'img/Mockup1-3.png',
  'img/Mockup1-4.png',
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
    $('<img>').attr('src', this).load(function () {
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
  .to($('#logoPreload polyline'), 1, {
    borderBottomColor: '#90e500',
    stroke: 'white',
    fill: 'transparent',
    width: '542px',
  }).to($('#logoPreload polyline'), 1, {
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
  miselaneas();
  PorfolioAltoMiselanea();
}