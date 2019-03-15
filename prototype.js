//Prototype is more like inheritance. Since JS is not a class based.

/*
 * 
 * 
Classical Inheritance (non-javascript)
* Vehicle is parent class and v1,v2 are the instances of Vehicle
* Car is child class of Vehicle and c1, c2 are instances of Car
* In classical inheritance it creates a copy of the behavior from parent class into the child when we extend the class and after that parent and child class are separate entity.
* Similarly, another copy of the behavior happens when we create an instance or object out of the class and both are separate entity again.
* It’s like car is manufactured from the vehicle and car blueprints but after that both are separate entity because they are not linked because It’s a copy. That’s the reason all arrows going downwards (property and behavior flowing down)

Prototypal Inheritance (Behavior delegation pattern)
* v1 and v2 are linked to Vehicle.prototype because it’s been created using new keyword.
* Similarly, c1 and c2 is linked to Car.prototype and Car.prototype is linked to Vehicle.prototype.
* In JavaScript when we create the object it does not copy the properties or behavior, it creates a link. Similar kind of linkage gets created in case of extend of class as well.
* All arrows go in the opposite direction compare to classical non-js inheritance because it’s a behavior delegation link. These links are known as prototype chain.
* This pattern is called Behavior Delegation Pattern which commonly known as prototypal inheritance in JavaScript.
 */

// base object with methods including initialization
var Vehicle = {
  init: function(name) {
    this.name = name;
  },
  start: function() {
    return "engine of "+this.name + " starting...";
  }
}

//Usage of Object.create() to achieve classical inheritance
// delegation link created between sub object and base object
var Car = Object.create(Vehicle);
// sub object method
Car.run = function() {
  console.log("Hello "+ this.start());
};
// instance object with delegation link point to sub object
var c1 = Object.create(Car);
c1.init('Fiesta');
var c2 = Object.create(Car);
c2.init('Baleno');
c1.run();   // "Hello engine of Fiesta starting..."
c2.run();   // "Hello engine of Baleno starting..."

//src: https://codeburst.io/javascript-inheritance-25fe61ab9f85

//Next: values