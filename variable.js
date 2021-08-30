// Use strict
//added in ECMAScript 5
//use this for Vanilla JavaScript
'use strict';

//2. Variable
// let (added in ES6)


let nothing = null;
let x;

console.log(`value: ${nothing}, type: ${typeof nothing}`);
console.log(`value: ${x}, type: ${typeof x}`);

//5.Dynamic typing: dynamically typed language

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 4;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 4;
console.log(`value: ${text}, type: ${typeof text}`);

const jay = {
    name: 'Jay',
    age: 20
};
console.log(jay);
jay.age = 23;
console.log(jay);