// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one purpose
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello World');

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const jay = { name: 'jay' };
changeName(jay);
console.log(jay);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknwon') {
    console.log(`${message} by ${from}`);
}
showMessage('HI!');

// 4. Rest parameters (added in ES6)
// 배열 형태로 전달
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach(arg => console.log(arg));
}
printAll('I', 'Am', 'a', 'Developer');

// 5. Local scope
// 밖에서는 안이 보이지 않고
// 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnotherMessage(message) {
        console.log(message);
        let childMessage = 'hi';
    }
    // console.log(chileMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reachs it.
const print = function () { // anonymous function, nameless function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum; //위에서 이미 정의한 함수 sum()이용.
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('Yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions f(f(x))
const printNo = function print() {
    console.log('No');
};
randomQuiz('Hate you', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

// const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();


// Quiz
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
            break;
        case 'subtract':
            return a - b;
            break;
        case 'divide':
            return a / b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'remainder':
            return a % b;
        default:
            throw Error('That isn\'t a comand');
    }
}
let command = 'multiply'
console.log(`3 command 5: ${calculate(command, 3, 5)}`);