// Don't give up
// 포기하지 마세요

// 함수 선언
// 함수 호출

// 함수 선언
function doSomething(add) {
  console.log(add);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
doSomething();

const result = add(1,2);

// 함수 인자로 전달
function functionParam(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

// functionParam(add()) : 함수를 전달하는 것이 아닌, add함수를 functionParam보다 먼저 호출하는 것
functionParam(add); // 함수를 전달할 때는 함수의 이름만을 명시하여 전달할 것.

const addFun = add;
console.log(addFun);
addFun(1, 2);