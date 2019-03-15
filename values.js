// Premitives are copied by values
// Objects are copied by references.
let x = 10;
let y = x;

console.log('x:',x);
console.log('y:',y);

x = 19;

console.log('x:',x);
console.log('y:',y);

let ax = {value:10};
let ay = ax;

console.log('ax:',ax);
console.log('ay:',ay);

ax.value = 29;

console.log('ax:',ax);
console.log('ay:',ay);

function increase(number){
    number++;
} // This funciton will increase number. But have no effect as the value is copied.

increase(x);
console.log('after increase x:',x);

function increaseObj(obj){
    obj.value++;
}

increaseObj(ay);
console.log('after increaseObj ax:',ax);
console.log('after increaseObj ay:',ay);
//Next: Properties

