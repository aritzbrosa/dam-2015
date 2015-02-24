(function() {
    var validarDNI = function(dni) {
    	if (!dni || typeof dni!="string") return false;
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        d = dni.split("");
        if(d.length!=9)return false;
        numero = 0;
        for (i = 0; i < 8; i++) {
            if(isNaN(d[i]))return false;
            numero += d[i];
        }
        if((numero<0)||(numero>99999999)) return false;
        if (letras[numero % 23] == d[8].toUpperCase()) {
            return true;
        } else return false;
    };
    console.log(validarDNI("72507598") === true);
    console.log(validarDNI("12345678Z") === true);
    console.log(validarDNI("123A") === true);
    console.log(validarDNI("") === true);
    console.log(validarDNI("12345678P") === true);
    console.log(validarDNI(false) === true);
    console.log(validarDNI({}) === true);
})();
