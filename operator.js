// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 1); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment opreators
let x = 3;
let y = 6;
x += y; // x = x + y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// heavy한 연산일수록 제일 뒤에 위치
// boolean < expression < function
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// heavy한 연산일수록 제일 뒤에 위치
// boolean < expression < function
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
let nullableObject = null;
if (nullableObject != null) {
  nullableObject.something;
}

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("ㅠ");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
/* jay1 -> ref1 -> name: jay
   jay3 -> ref1
   jay2 -> ref2 -> name: jay */

const jay1 = { name: "jay" };
const jay2 = { name: "jay" };
const jay3 = jay1;
console.log(jay1 == jay2); // 각각 다른 ref가 저장되어 있기 때문에 reference가 다름
console.log(jay1 === jay2); // 똑같은 타입이든 아니든 ref값이 다르기 때문에 false
console.log(jay1 === jay3); // 동일한 ref를 가지고 있기 때문에 true

// equality - pussler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" == undefined); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const Name = "jay";
if (Name === "jay") {
  console.log("Welcome Jay!");
} else if (Name === "programmer") {
  console.log("You are the best programmer");
} else {
  console.log("Unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(Name === "jay" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed fisrt,
// then check the condition.
// Difference from other loops is how it behaves
// when the condition fails on the First Check.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i -= 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
// O(n^2) -> not good for the CPU
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Quiz 01. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`i: ${i}`);
  } else {
    continue;
  }
}

// Quiz 02. iterate from 0 to 10 and print numbers until reaching 8(use break)
for (let l = 0; l <= 10; l++) {
  if (l >= 8) {
    break;
  } else {
    console.log(`l: ${l}`);
  }
}
let m = 0;
while (m < 8) {
  console.log(`m: ${m}`);
  m++;
}
