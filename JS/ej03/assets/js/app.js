(function() {
    var s1= new App.Model.Shape();
    s1.move(5,5);
    console.log(s1.getX());
    console.log(s1.getY());


    var s2 = new App.Model.Shape(10,10);
    s2.move(5,5);
    console.log(s2);
    console.log(s2.getX());
    console.log(s2.getY());

    var c = new App.Model.Circulo(30,30,12);
    console.log(c.getArea());

    var cuad = new App.Model.Cuadrado(30,30,10);
    console.log(cuad);

    var rect = new App.Model.Rectangulo(30,30,15);
    console.log(rect);
    console.log(rect.getOtrolado());
    console.log(rect.getOrea());

    
})();