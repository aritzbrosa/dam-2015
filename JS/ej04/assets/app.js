(function(){

	var validar_email=/^\w([\w.\-]*\w)?@[.]$/.test("");

	console.log(validar_email.test("hola@arkaitzgarro.com") === false);
	console.log(validar_email.test("arkaitz.garro@gmail.com") === false);
	console.log(validar_email.test("arkaitz.garro@arkaitzgarro.com") === false);
	console.log(validar_email.test("hola@arkaitzgarro.com") === false);
	console.log(validar_email.test("hola@arkaitzgarro.com") === false);
	console.log(validar_email.test("hola@arkaitzgarro.com") === false);

})();