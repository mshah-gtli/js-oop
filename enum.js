function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log("drawing circle");
    }
}

const circle = new Circle(10);

for(let key in circle){
    console.log(key, circle[key]);
}

//When you do not want to print functions

for(let key in circle){
    console.log('type of ' + key, typeof circle[key]);
    if(typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

//Get all keys as an array

const keys = Object.keys(circle);
console.log('Keys array', keys);

//To verify if the property or method exist

if('radius' in circle)
 console.log('Circle has a radius.');

 //Next: abstraction