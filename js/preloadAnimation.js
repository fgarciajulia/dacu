var servicios_preload_Lamp = $('#preload #Lamp_1_');
var servicios_preload_headerLamp = $('#preload #headerLamp_1_');
var servicios_icono1_Humo = $('#preload  #humo_2_ path');


function cierrePreload() {
  var TimeCierrePreload = new TimelineMax();
  TimeCierrePreload.timeScale(1);
  TimeCierrePreload
    .to(servicios_preload_Lamp, 1, { fill: '#fff' }, 0)
    .to(servicios_preload_headerLamp, 1, { rotation: 0, transformOrigin: '20 10' }, 0)
    .to(servicios_icono1_Humo, 2, { drawSVG: '100% 100%' }, 0);

}
function OpenPreload() {
  var TimeOpenPreload = new TimelineMax();
  TimeOpenPreload.timeScale(1);
  TimeOpenPreload
    .to(servicios_preload_Lamp, 1, { fill: '#C9BB9E' }, 0)
    .to(servicios_preload_headerLamp, 1, { rotation: -25, transformOrigin: '20 10' }, 0)
    .set(servicios_icono1_Humo, { drawSVG: '0% 0%' }, 0).to(servicios_icono1_Humo, 1, { drawSVG: '10% 50%', ease: Linear.easeNone }).to(servicios_icono1_Humo, 1, { drawSVG: '35% 80%', ease: Linear.easeNone }).to(servicios_icono1_Humo, 2, { drawSVG: '100% 100%', ease: Linear.easeNone })

}


