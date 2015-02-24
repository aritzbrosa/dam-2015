(function() {
    var palin = function(str) {
    	str=str.toLowerCase().split(" ").join("");
    	rts=str.split("").reverse().join("");
    	return !!str.match(rts);
    };


    console.log(palin("holamundo")==true);
    console.log(palin(" La ruta nos aporto otro paso natural  ")==true);
    //console.log(par(7)==true);
    //console.log(par(10==true));
})();