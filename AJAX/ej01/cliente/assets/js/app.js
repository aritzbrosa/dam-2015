$(function(){
	var $ticker = $('#ticker');
		$detener = $('#detener');

	var peticionAjax = function(){
		$.ajax('../servidor/generaContenidos.php', {
			data : {
				user : 'Aritz',
				pass : 'Livingston'
			},
			method : 'POST',
			success : function(data, status, jqXHR){
				$ticker.text(data);
			}
		});

	};

	var peticionAjax2 = function(){
		$.get('../servidor/generaContenidos.php', null, function(data){
			$ticker.text(data);
		});
		
	};

	//setTimeout(fn, 1000); // lo ejecuta 1 vez despues de un segundo.
	var interval = setInterval(peticionAjax,1000);

	$detener.on('click', function(){
			clearInterval(interval);
		}
	);

});