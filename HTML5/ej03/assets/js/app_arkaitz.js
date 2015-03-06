window.onload = function(){
	var inputs = document.querySelectorAll('input,textarea');
		storage = sessionStorage;
		prefix = 'ej03_prefix';

	var saveText = function(e){
		storage.setItem(prefix + this.name,this.value);
	};

	for(var i=inputs.length - 1; i>=0; i--){
		inputs.item(i).addEventListener('input', saveText);
	}

	var showData = function(){
		for(var i=storage.length - 1; i>=0;i--){
			var name = key.replace(new RegExp(prefix,''));
			if(inputs.item(i).name==name){
				inputs.item(i).value=value;
			}
		}
	};

	if(storage.length){
		for(var j=storage.length - 1; j>=0; j--){
			var key = storage.key(j);

			showData(key, storage.getItem(key));
		}
	}

	function handleStorage(event){
	    showData(e.key, e.newValue);
	}
};