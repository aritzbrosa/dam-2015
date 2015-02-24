(function() {
    var bloqmayus = function(str) {
    	a=str.toUpperCase();
    	if(str.match(a)) msg="Son todos amyusculas.";
    	else {
    		a=str.toLowerCase();
    		if(str.match(a)) msg="Son todos minusculas";
    	else msg="Son mezcla.";
    }
    return msg;
    };


    console.log(bloqmayus("Holamaundo"));
    console.log(bloqmayus("holamundo"));
    console.log(bloqmayus("HOLAMUNDO"));
})();