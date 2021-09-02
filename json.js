// JSON
// -simplest data interchange format
// -lightweight text-based structure
// -easy to read
// -key-value pairs
// -used for serialization and transmission of data between 
// the network connection
// -independent programming language and platform 


// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

//함수, 메소드는 오브젝트 내에 있는 데이터가 아니므로 JSON으로 변환 X
const rabbit = {
    name: 'Yeobgi',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => { 
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'jay' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
console.log(rabbit);
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json);
console.log(obj);
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
    // return value;
});
console.log(obj2);


rabbit.jump();
// obj.jump() =>  object rabbit -> JSON -> object obj  (object -> JSON 과정에서 메소드는 포함되지 않음)

console.log(rabbit.birthDate.getDate());
console.log(obj2.birthDate.getDate());
