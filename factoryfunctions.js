// Factory function
/*
 * Why? To resue the code. Say you want to create another function.
 */
function createCircle(radius){
    return {
        //properties
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
let circle = createCircle(1);
circle.draw();