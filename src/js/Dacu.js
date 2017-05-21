



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