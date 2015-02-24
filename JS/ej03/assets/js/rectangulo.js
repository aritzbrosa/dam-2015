var App = App || { Model : {}};
App.Model.Rectangulo=(function(){
	var _otrolado;

	function Rectangulo( x, y, lado, otrolado){
		//call, apply, bind metodos de entrevista de trabajo.
		//App.Model.Shape.apply(this,[x,y]);
		//App.Model.Shape.bind(this)(x,y);
		App.Model.Cuadrado.call(this,x,y,lado);

		_otrolado=(typeof otrolado === 'number') ? otrolado : 0;
	}

	Rectangulo.prototype = Object.create(App.Model.Cuadrado.prototype);
	//Rectangulo.prototype.constructor = Rectangulo;

	Rectangulo.prototype.getOtrolado = function(){
		return _otrolado;
	};

	Rectangulo.prototype.setOtrolado = function(otrolado){
		_otrolado=(typeof otrolado === 'number') ? otrolado : _otrolado;
	};

	Rectangulo.prototype.getOrea = function(){
		return _otrolado*this.getLado();
	};

	return Rectangulo;

})();