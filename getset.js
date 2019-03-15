//We can use getter and setters to saftely set a value of a property

function Circle1(radius){
    this.radius = radius;
    let defaultLocation = {y : 20};
    this.getDefaultLocation = function(){
        return defaultLocation;
    }
    let someFunction = function(){
        //some code
    }
    this.draw = function() {
        someFunction();
        console.log("drawing circle");
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
                throw Error('invalid location');
            defaultLocation = value;
        }
    });
}

const circle1 = new Circle1(1);

circle1.defaultLocation = 10;