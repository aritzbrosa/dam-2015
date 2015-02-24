var App = App || { Model : {}};
App.Model.Circulo=(function(){
	var _radio;

	function Circulo( x, y, radio){
		//call, apply, bind metodos de entrevista de trabajo.
		//App.Model.Shape.apply(this,[x,y]);
		//App.Model.Shape.bind(this)(x,y);
		App.Model.Shape.call(this,x,y);

		_radio=(typeof radio === 'number') ? radio : 0;
	}

	Circulo.prototype = Object.create(App.Model.Shape.prototype);
	//Circulo.prototype.constructor = Circulo;

	Circulo.prototype.getRadio = function(){
		return _radio;
	};

	Circulo.prototype.setRadio = function(radio){
		_radio=(typeof radio === 'number') ? radio : _radio;
	};

	Circulo.prototype.getArea = function(){
		return Math.PI*Math.pow(_radio,2);
	};

	return Circulo;

})();