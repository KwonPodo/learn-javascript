'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 공부 포인트
// 1. State(상태)
// 2. Producer와 Consumer의 차이점 이해

// State: pending -> fulfilled or rejected
// Producer(원하는 기능을 수행해서 해당 데이터를 만들어내는 ) 
// vs 
// Consumer(데이터를 소비하는)

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('jay');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    });
