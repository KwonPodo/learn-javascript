// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const jay = { name: "jay", age: 23 };
print(jay);

jay.hasJob = false; // 뒤늦게 객체의 속성 추가 가능 -> dynamic programming
console.log(jay.hasJob);

delete jay.hasJob; // 뒤늦게 객체의 속성 삭제 가능 -> dynamic programming
console.log(jay.hasJob);

// 2. Computed properties
// key should be always string
console.log(jay.name); // 코딩하는 그 순간, 그 key에 해당하는 값을 받아오고 싶을 때
console.log(jay["name"]); // 정확하게 어떤 key가 필요할 지 모를 때, Runtime에서 결정될 때
jay["hasJob"] = false; // 뒤늦게 객체의 속성 추가
console.log(jay.hasJob);

// Testing Objects for Properties
jay.hasOwnProperty("name"); // returns boolean.

function printValue(obj, key) {
  //console.log(obj.key); -> object에 key라는 property가 있는가?
  console.log(obj[key]);
}
printValue(jay, "name");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 32 };
const person3 = { name: "dave", age: 24 };
const person4 = makePerson("kwon", 56);
console.log(person4);

function makePerson(name, age) {
  return {
    name, //name: name, key와 value의 이름이 동일할 때 생략가능
    age, //age: age,
  };
}

// 4. Constructor Function
function Person(name, age) {
  // 순수하게 object만을 생성하는 함수는 대문자로 시작
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
const person5 = new Person("kay", 46);
console.log(person5);

// 5. in operator: property existence check (key in obj)
console.log("name" in jay);
console.log("age" in jay);
console.log("hasJob" in jay);
console.log("random" in jay);
console.log(jay.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in jay) {
  // 모든 key들을 받아와서 처리하고 싶을 때 사용
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
for (value of array) {
  // array 내부 모든 값들을 순차적으로 value에 할당
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user1 = { name: "jay", age: 23 };
const user2 = user1;
user2.name = "coder";
console.log(user1); // name changes into 'coder'
// user2 points at the same reference as user1

// old way to clone
const user3 = {};
for (key in user1) {
  user3[key] = user1[key];
}
console.clear();
console.log(user3);

// new way to clone 1.
const user4 = {};
Object.assign(user4, user1); // or can use -> const user4 = Object.assign({}, user1);
console.log(user4);

// new way to clone 2.
const user5 = { ...user1 };

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
