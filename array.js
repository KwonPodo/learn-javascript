'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length]);

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
console.clear();
// c. forEach
/* fruits.forEach(function (fruit, index) {
    console.log(fruit, index);
}); */
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('watermelon');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position and if needed add wanted values
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, 'apple', 'yellowmelon');
console.log(fruits);

// combine two arrays
const fruits2 = ['apple', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(fruits);
console.log(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
// indexOf: find and return the first index matched to the given parameter
console.clear();
console.log(fruits);
console.log(fruits.indexOf('peach'));
console.log(fruits.indexOf('watermelon')); // returns -1 if it doesn't have the value

// includes: return boolean whether it has it or not
console.log(fruits.includes('watermelon'));

// lastIndexOf: find and return the last index matched to the given parameter
console.clear();
fruits.push('lemon');
console.log(fruits);
console.log(fruits.indexOf('lemon'));
console.log(fruits.lastIndexOf('lemon'));

console.clear();
