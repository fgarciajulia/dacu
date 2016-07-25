<script type="text/javascript" >
	$('.gallery<?php echo $id_proyecto;?>').magnificPopup({

		delegate: ' a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		callbacks:
		{
			/**
			 * Adds custom parameters to markup
			 * For example data-description on <a> can be used as mfp-description in markup html
			 *
			 * @param template
			 * @param values
			 * @param item
			 */
		},
		image: {

			markup:
			'<div class="mfp-figure container-fluid fondo-blanco">'+
					'<header class="mfp-header row">'+
						'<div class="">'+
							'<div class="mfp-close"></div>'+
						'</div>'+
					'</header>'+
					'<div class="row">'+
						'<div class="col-xs-12 col-md-7 Cero ">'+
							'<section class="mfp-content-container">'+
								'<div class=" mfp-img"></div>'+
							'</section>'+
						'</div>'+
						'<div class="col-xs-12 col-md-5 col-lg-5 margin-galeria">'+
                            '<h4 class="azul titulo"><?php echo $data[1];?></h4>'+
                            '<p><?php echo $data[6];?></p>'+
                            '<a target="_blank" class="link" href="<?php echo $data[4];?>"><?php echo $data[3];?></a>'+
                            '<div class="items">'+
                                <?php
                                    if (($hand = fopen("php/caracteristicas.csv", "r")) !== FALSE) {
                                        while (($caracteristicas = fgetcsv($hand, 1000, ";")) !== FALSE) {
                                        if ($caracteristicas[0]==$id_proyecto){
                                ?>
                                '<p class="items"><?php echo $caracteristicas[1];?></p>'+
                                <?php
                                        }
                                    }
                                fclose($hand);}
                                ?>
                            '</div>'+
						'</div>'+
                        '<div class="col-xs-12 col-md-5 col-lg-5 mfp-title"></div>'+
					'</div>'+
			'</div>',
		tError: 'La imagen no se puede descargar, compruebe su conexión.',
		titleSrc: function(item) {
			//return //item.el.attr('title');
			var $gallery = $('.gallery<?php echo $id_proyecto;?>');
			var $result = '';
			if ($gallery.find('li').length > 0) {
				$result = '<div class="mfp-pager">' +
					'<ul class="dots" style="display: inline-block;">';
					for (var i=0; i<$gallery.find('li').length; i++) {
						var $cl_active = '';
						if (item.index == i) $cl_active = ' class="active"'; else $cl_active = '';
						var $thumb = $gallery.find('li:eq('+i+')').find('img').attr('src');
						$result += '<li'+$cl_active+'>' +
						'<button type="button" onclick="javascript:$(\'.gallery\').magnificPopup(\'goTo\', ' + i + ');return false;"><img src="' + $thumb + '" width="100"></button>' + '</li>';
				}
				$result += '</ul>' +
					'</div>';
			}
			return $result;
		}
		}
	});
</script>
