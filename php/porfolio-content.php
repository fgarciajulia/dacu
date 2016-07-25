			<div class="row porfolio-content">
				<div class="col-xs-12" style="width: 90%;margin-left: 5%;">
                
                <?php
                $fila = 1;
                if (($handle = fopen("php/test.csv", "r")) !== FALSE) {
                    while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                        $id_proyecto = $data[0];
                        $numero = count($data); if ($numero > 1){
                ?>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 margin">
                        <div class="grid gallery<?php echo $id_proyecto;?>">
                            <?php
                                if (($handl = fopen("php/img.csv", "r")) !== FALSE) {
                                    while (($img = fgetcsv($handl, 1000, ";")) !== FALSE) {
                                    if ($img[0]==$id_proyecto){
                            ?>
                            <li class="effect-milo">
                                <a href="<?php echo $img[2];?>">
                                    <img class="img-responsive" src="<?php echo $img[3];?>"alt="<?php echo $data[1];?>">
                                    <figcaption>
                                    <h2><?php echo $data[1];?></h2>
                                        <?php
                                            if (($hand = fopen("php/caracteristicas.csv", "r")) !== FALSE) {
                                                while (($caracteristicas = fgetcsv($hand, 1000, ";")) !== FALSE) {
                                                if ($caracteristicas[0]==$id_proyecto){
                                        ?>
                                        <p><?php echo $caracteristicas[1];?></p> 
                                        <?php
                                                }
                                            }
                                        fclose($hand);
                                        
                                        }
                                        
                                        ?>
                                        
                                    </figcaption>
                                </a>
                            </li>
                            <?php
                                    }
                                }
                            fclose($handl);}
                            ?>
                            <?php include("php/magnificGalery.php"); ?>
                            
                        </div>
                    </div>
                <?php
                    }
                }
                fclose($handle);}
                ?>
                </div>
            </div>
        </div>