//Encapsulation
// JS is not a class based. A keyword is introduced. Just adds a layer.
// We are going to have property and method

const circle = {
    //properties
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    //method
    draw: function(){
        console.log('draw');
    }
};

circle.draw();

// Next: Factory Functions