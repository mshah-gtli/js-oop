// Constructor Function

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

// In JS, there is no concept of class.

const circle = new Circle(1);
/* 
 * The new keyword will create an empty object {}
 * It will make this to point to a newly created object.
 * By default, 'this' points to Window global object in case of browser
 * In case of node, it points to global
 */
circle.draw();