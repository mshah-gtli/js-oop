// Constructor Function
/**
 * It usually have the first capital letter
 */
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log("drawing circle");
    }
}

// In JS, there is no concept of class.

const circle = new Circle(1);
/* 
 * The new keyword will create an empty object {}
 * It will make this to point to a newly created object.
 * By default, 'this' points to Window global object in case of browser
 * In case of node, it points to global
 * Also, it will automatically return function.
 */
circle.draw();

// lets print this

function Printthis(property1){
    //console.log('this' , this);
    this.property1 = property1;
    this._function1 = function() {
        console.log("printing function");
    }
}

const printthisdemo = new Printthis(20);
console.log('printthisdemo', printthisdemo);

// assign without a new and see what happens
const printhisdemononew = Printthis(21);
console.log('printhisdemononew', printhisdemononew);


const Circle1 = new Function('radius', `this.radius = radius;
this._function = function() {
    console.log("printing function");
}`);

const strCircle = new Circle1(10);

console.log('strCircle', strCircle);

// another way


console.log(Circle.call({}, 1));
console.log(Circle.apply({}, [1]));
