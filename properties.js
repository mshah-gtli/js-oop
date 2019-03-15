// We can dynamically add/remove property to JS. That what make is more powerful.

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log("drawing circle");
    }
}

const circle = new Circle(10);

console.log('before add circle:',circle);

//Two ways to add property
circle.location = {x : 1};
circle['name'] = "Circle 1"; // This is more dynamic. Can be added at the runtime and can have special characters.

console.log('after add circle:',circle);

// Deleting a property
// Two ways we can delete property
delete circle['name'];
delete circle.location;

console.log('after delete circle:',circle);

// Next: enum
