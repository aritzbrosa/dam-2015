(function(){
	var tweet = {
		id: "234234234234",
		text: "Yeah",
		author: "Livingston",
		timestamp: "Mon Sep 24 03:35:21 +0000 2012"
	};

	var success = function(datos){
		console.log(datos);
	};

	APP.DB.getAll(success);
})();