//Abstraction is hide details and show only essentials.

function Circle(radius){
    this.radius = radius;
    this.defaultLocation = {y : 20};
    this.someFunction = function(){
        //some code
    }
    this.draw = function() {
        this.someFunction();
        console.log("drawing circle");
    }
}

const circle = new Circle(1);
circle.defaultLocation = 10;
circle.someFunction();
console.log(circle);
circle.draw();

// to hide it from showing outside, define it all with let

function Circle1(radius){
    this.radius = radius;
    let defaultLocation = {y : 20};
    let someFunction = function(){
        //some code
    }
    this.draw = function() {
        someFunction();
        console.log("drawing circle");
    }
}

const circle1 = new Circle1(1);
circle.defaultLocation = 10; 
circle.someFunction(); 
console.log(circle1);
circle.draw();

//Next: getset