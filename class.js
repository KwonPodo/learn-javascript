'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const jay = new Person('jay', 23);
console.log(jay.name);
console.log(jay.age);
jay.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //getter returns value
    // this.age가 get age()를 호출
    get age() {
        return this._age;
    }
    //setter sets value
    // = age가 set age(value)를 호출
    set age(value) {
        /*if (value < 0) {
            throw Error('age can not be negative');
        } */
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steven', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// Added Recently, not used wide yet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
// 수많은 오브젝트들 중 변하지 않고 공통적으로 사용하는 데이터와 메소드에 사용
// object 각각에 할당 되는 정적 변수가 아닌, class Article 자체에 할당됨
// article1.publisher가 아닌, Article.publisher로 호출
class Article {
    static publisher = 'Jay Kwon';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;
    }
    draw() {
        // 부모의 메소드 호출
        super.draw();
        console.log(`draw a triangle`);
    }
}

const rectangle = new Rectangle(20, 20, 'black');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true




// Class & Callback function
// Class에 원하는 기능을 모두 정의하게 되면 사용자가 세부내용을 컨트롤할 수 없고 재사용성이 떨어진다.
// 하지만 Callback 함수를 이용해서 Class를 만들게 되면, 사용자가 자신의 입맛에 맞게 재활용 가능해진다.
// Class를 하나의 완전체로 만들기 보단, 원하는 기능을 끼워맞춰서 재조립이 가능하도록 설계하라.
class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
            // if(this.callback) {
            //     this.callback(this.counter);
            // }
        }
    }
}

function printSomething(num) {
    console.log(`Wow! ${num}`);
}
function alertNum(num) {
    alert(`alert! ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);