// syntactic sugar: 기존에 존재하는 것 위에 조금 더 간편하게 쓸 수 있는 API를 제공하는것
// ex) class, (async, await) -> Promise를 감싸고 있는 syntactic sugar

// async & await
// clear style of using promise :)

// 1. async
// code blocks in the function automatically turns into Promise.

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve('jay');
//   })
// }

async function fetchUser() {
  return 'jay';
}

const user = fetchUser();
console.log(user);
user.then(console.log);

// 2. await
// only used in async function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return 'apple';
}

// function getApple() {
//   await delay(3000)
//     .then(() => 'apple');
// }

async function getBanana() {
  await delay(4000);
  return 'banana';
}

// function get banana() {
//   return delay(3000)
//     .then(() => 'banana');
// }

// Sequential async
async function pickFruits() {
    // const applePromise = getApple();   When new Promise is created, exectutor runs automatically
    // const bananaPromise = getBanana();
    const app = await getApple();
    const ban = await getBanana();

    return `${app} + ${ban}`;
}

// function pickFruits() {
//   return getApple().then(apple => {
//     return get banana().then(banana => `${apple} + ${banana}`);
//   });
// }

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);