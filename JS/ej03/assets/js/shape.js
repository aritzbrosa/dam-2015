var App = App || { Model : {}};
App.Model.Shape=(function() {
    var _x,_y;

    function Shape(x,y){
    	_x = (typeof x === 'number') ? x : 0;
    	_y = (typeof y === 'number') ? y : 0;
    }

    Shape.prototype.move = function(x,y) {
    	_x+= (typeof x === 'number') ? x : 0;
    	_y+= (typeof y === 'number') ? y : 0;
    };

    Shape.prototype.getX = function(){
    	return _x;
    };

    Shape.prototype.getY = function(){
    	return _y;
    };

    Shape.prototype.setX = function(x){
    	_x = (typeof x === 'number') ? x : _x;
    };

    Shape.prototype.setX = function(y){
    	_y = (typeof y === 'number') ? y : _y;
    };

    return Shape;

})();