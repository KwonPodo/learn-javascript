'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 공부 포인트
// 1. State(상태)
// 2. Producer와 Consumer의 차이점 이해

// State: pending(operation 수행중) -> fulfilled or rejected
// Producer(원하는 기능을 수행해서 해당 데이터를 만들어내는 ) 
// vs 
// Consumer(데이터를 소비하는)

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('jay');
        // reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => { //성공, 실패 여부에 상관없이 무조건 마지막에 호출되어짐
        console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num *2)
    .then(num => num*3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => egg`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fried`), 1000);
    });

getHen()
    .then(getEgg)              // .then(hen => getEgg(hen))
    .catch(error => {
        return 'bread';
    })
    .then(cook)               // .then(egg => cook(egg))
    .then(console.log) // .then(meal => console.log(meal));
    .catch(console.log);