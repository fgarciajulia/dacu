<?php
  include('php/isMobile.php')
?>
<!DOCTYPE html>
<html lang="es">

<head>
  @@include('head.meta.html')

<link rel="stylesheet" type="text/css" href="css/app.min.css?v=1">
  @@include('body.googleAnalytics.html')
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
  <?php
  if ($mobile_browser == 0){
  ?>
    @@include('body.preload.html')
  <?php } ?>

  @@include('body.navbar.html')  
  @@include('body.home.html')
  @@include('body.responsive.html')
  @@include('body.servicios.html')
  @@include('porfolio/body.porfolio.html')
  @@include('body.contacto.html')
  
  <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700,900" rel="stylesheet">

  @@for (var i = 0; i < listJsDependencias.length; i++) {<script type="text/javascript" src="`+folder+listJsDependencias[i]+`"></script>}
  
  <?php if ($mobile_browser == 0){ ?>
  <script type="text/javascript" src="@@folder@@jsPreloadAnimation"></script>
  <?php } ?>

  @@for (var i = 0; i < listJs.length; i++) {<script type="text/javascript" src="`+folder+listJs[i]+`"></script>}

  @@include('porfolio/porfolio-js.php')

  </body>
</html>