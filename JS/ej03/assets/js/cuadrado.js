var App = App || { Model : {}};
App.Model.Cuadrado=(function(){
	var _lado;

	function Cuadrado( x, y, lado){
		//call, apply, bind metodos de entrevista de trabajo.
		//App.Model.Shape.apply(this,[x,y]);
		//App.Model.Shape.bind(this)(x,y);
		App.Model.Shape.call(this,x,y);

		_lado=(typeof lado === 'number') ? lado : 0;
	}

	Cuadrado.prototype = Object.create(App.Model.Shape.prototype);
	//Cuadrado.prototype.constructor = Cuadrado;

	Cuadrado.prototype.getLado = function(){
		return _lado;
	};

	Cuadrado.prototype.setLado = function(lado){
		_lado=(typeof lado === 'number') ? lado : _lado;
	};

	Cuadrado.prototype.getArea = function(){
		return Math.pow(_lado,2);
	};

	return Cuadrado;

})();