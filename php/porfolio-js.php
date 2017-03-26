<?php
  $fila = 1;
  if (($handle = fopen("php/test.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
      $id_proyecto = $data[0];
      $numero = count($data);
      if ($numero > 1){
        include("php/magnificGalery.php");
      }
    }
    fclose($handl);
  }
?>