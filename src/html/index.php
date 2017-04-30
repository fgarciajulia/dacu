<!DOCTYPE html>
<html lang="es">

<head>

  @@include('head.meta.html')

<link rel="stylesheet" type="text/css" href="css/app.min.css?v=1">
  @@include('body.googleAnalytics.html')
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
  @@include('body.preload.html')  
  @@include('body.navbar.html')  
  @@include('body.home.html')
  @@include('body.responsive.html')
  @@include('body.servicios.html')
  @@include('porfolio/body.porfolio.html')
  @@include('body.contacto.html')
  
  <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700,900" rel="stylesheet">

  @@if (debug === 'true') {
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/dropdown.js"></script>
    <script type="text/javascript" src="js/dsvgp.min.js"></script>
    <script type="text/javascript" src="js/jquery.easing.min.js"></script>
    <script type="text/javascript" src="js/jquery.magnific-popup.js"></script>
    <script type="text/javascript" src="js/jquery.superscrollorama.js"></script>
    <script type="text/javascript" src="js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="js/owl.carousel.js"></script>
    <script type="text/javascript" src="js/tm.min.js"></script>
    
    <script type="text/javascript" src="js/preloadAnimation.js" ></script>
    <script type="text/javascript" src="js/home.js" ></script>
    <script type="text/javascript" src="js/Servicios.Animation.js" ></script>
    <script type="text/javascript" src="js/servicios.js" ></script>
    <script type="text/javascript" src="js/contacto.js" ></script>
    <script type="text/javascript" src="js/miselaneas.js" ></script>
    <script type="text/javascript" src="js/dacu.js" ></script>
  }

  @@if (debug === 'false')  {
    <script type="text/javascript" src="js/app.dependencias.js"></script>
    <script type="text/javascript" src="js/app.js"></script> 
  }

  @@include('porfolio/porfolio-js.php')
  </body>
</html>