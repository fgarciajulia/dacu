/* Servicios */
var owl_Servicios = $('#owl-carousel2');
$(document).ready(function () {
  owl_Servicios.owlCarousel({
    loop: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: false,
    center: true,
    margin: 118,
    dragEndSpeed: 1000, //speed when touch
    dotsSpeed: 1000, //speed with dots
    autoplaySpeed: 1000,
    responsive: {
      992: {
        items: 3,
      },
      0: {
        items: 1,
      }
    }
  });


  var elementoAnterior = 0;

  owl_Servicios.on('translated.owl.carousel',
    onTranslatedEvent);

  function onTranslatedEvent(event) {
    // Elemento Anterior --> cierre
    if (elementoAnterior == 0) {
      CierreIcon1();
    }
    if (elementoAnterior == 1) {
      CierreIcon2();
    }
    if (elementoAnterior == 3) {
      CierreIcon4();
    }
    elementoAnterior = event.page.index;

    // Elemento Nuevo --> Apertura
    if (event.page.index == 0) {
      OpenIcon1();
    }
    // Elemento Nuevo --> Apertura
    if (event.page.index == 1) {
      OpenIcon2();
    }
    // Elemento Nuevo --> Apertura
    if (event.page.index == 3) {
      OpenIcon4();
    }
  }
});

