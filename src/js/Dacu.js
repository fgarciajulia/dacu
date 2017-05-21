
 // Cierre automático de menú desplegable en dispositivos pequeños 
$('.navbar-collapse ul li a').click(function () {
  $('.navbar-toggle:visible').click();
});
