window.onload = function(){	

	var obtenerText = function(event){
		var text = document.getElementById('txt');
		var content = document.getElementById('area');
		localStorage.setItem('content',content.value);

		if(text){
			localStorage.setItem('text',text.value);	
		}
		if(content){
			content.value = localStorage.getItem('text');
		}
	};

	function handleStorage(event){
	    if (event.newValue === null) { // it was removed
	        // Do somthing
	    } else {
	        // Do somthing else
	    }
	}

	window.addEventListener('keyup',obtenerText,false);
	window.addEventListener('storage',handleStorage,false);
};

