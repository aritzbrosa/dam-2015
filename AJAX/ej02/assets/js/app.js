$(function(){
	var $prov = $('#prov'),
		$muni = $('#muni');

	var fillselect = function($select, values){
		var options = [];

		for(var i in values){
			options.push(new Option(values[i],i));
		}
		$select.children().remove();
		$select.append(options);
		$select.removeAttr('disabled');
	};	

	$.getJSON('./servidor/cargaProvinciasJSON.php',null, function(provincias){
		//console.log(data);
		fillselect($prov,provincias);
	});

	$prov.on('change', function(e){
		var cp = $prov.val();
			$.ajax('./servidor/cargaMunicipiosJSON.php',
			{ method : 'POST', 
			data : {
				provincia : cp
			},
			dataType : 'json',
			success : function(municipios){
				console.log(municipios);
				fillselect($muni,municipios);		
			}
		});
	});	
	
	//console.log(options);
	//setTimeout(peticionAjax,500);
	
});