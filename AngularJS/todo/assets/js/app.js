var todoApp = angular.module('todoApp', []);

//Creamos un controlador en el que se define el modelo dentro de una función
todoApp.controller('TodoController', ['$scope', function($scope){
    /*$scope se usa para la inyección de dependencias, y es la variable que nos hace la conexión
    con la vista, esto es, el HTML. En el HTML, mediante directivas especiales de Angular, le vamos
    diciendo qué es lo que queremos.

    Es un framework que trabaja de forma declarativa(le decimos qué queremos, el resulatdo final) 
    y no de manera imperativa(haz esto, luego esto, luego lo otro... y al final, da como resultado esto).
    Esto es, le decimos el qué y no el cómo*/


    var todos = [];

    todos.push({ done: false, task: 'Aprender AngularJS' });
    todos.push({ done: false, task: 'Aprender Ionic' });
    todos.push({ done: true, task: 'Adorar Javascript' });

    $scope.todos = todos;

    $scope.addTodo = function() {
        todos.push({ done: false, task: $scope.inputText });
        $scope.inputText = '';
    };
}]);
