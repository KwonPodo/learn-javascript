'use strict';

// JavaScript is synchronous.
// Execute the code in order after hoisting
// hoisting: var, function declaration goes to the top in the JS Parser(Only Declarations)
console.log('1');
setTimeout(() => console.log('2'), 0); //브라우저 내부에서 비동기적으로 처리 CallBack function
console.log('3'); // setTimeout() 메소드를 위임받아 처리한 브라우저 프로그램은 
                  // 비동기적 API를 제외한 모든 코드가 실행된 이후에 결과를 콘솔에 찍는다
// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'jay' && password === 'ludin') ||
                (id === 'kwon' && password === 'family')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('Not Found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'jay') {
                onSuccess({ name: 'jay', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 1. 사용자에게 id, password를 입력받는다.
// 2. 받아온 id, password으로 login 한다
// 3. 로그인이 성공적으로 된다면 사용자에게 id를 받아와서 roles를 요청한다
// 4. roles가 성공적으로 받아와진다면 사용자의 object와 roles가 들어있는 것을 화면에 출력한다.

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password, 
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, yout have a ${userWithRole.role} role`);
            },
            (error) => {
                console.log(error);
            }
        );
    },
    (error) => {console.log(error)}
    );