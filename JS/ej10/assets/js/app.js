window.onload = function() {

	var lista = document.getElementById('lista');

	console.log(lista);

	var addElement = function(){
		if(lista.length){
			classList.remove('oculto');
		}

		if(lista.length){
			lista[0].classList.add('oculto');
		}
	};

	if(lista.length){
		getElementsByTagName('input').addEventListener('click',addElement, false);
	}
};