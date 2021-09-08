// Use strict
//added in ECMAScript 5
//use this for Vanilla JavaScript
'use strict';

//2. Variable
// let (added in ES6)
// is mutable
let globalName = 'global name';
{
    let myName = 'jay';
    console.log(myName);
    myName = 'hello';
    console.log(myName);
    console.log(globalName);
}
// console.log(myName);
console.log(globalName);

// var(don't ever use this!)
// var hoisting (move declaration from bottom to top)
// hsa no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constants
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undfined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 0;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 12344566069584843783929495848n; // over (-2**53 ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log(`value ` + helloBob + 'type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 <1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test} type: ${typeof test}`);

// null 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const jay = {name: 'jay', age: 23};

// 5. Dynamic typing: dynamically typed language
// type is defined at runtime -> TypeScript comes up. (JavaScript + Type)
let text = 'hello';
console.group(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`)
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);