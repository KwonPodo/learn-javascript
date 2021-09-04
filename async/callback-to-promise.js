// Callback Hell example
class UserStorage {
    loginUser = (id, password) => 
        new Promise((resolve, reject) => {
            if (
                (id === 'jay' && password === 'ludin') ||
                (id === 'kwon' && password === 'family')
            ) {
                resolve(id);
            } else {
                reject(new Error('Not Found'));
            }
    })
    
    getRoles = (user) =>
        new Promise((resolve, reject) => {
            if (user === 'jay') {
                resolve({name: 'jay', role: 'admin'});
            } else {
                reject(new Error('no access'));
            }
    })
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
    .loginUser(id, password)
    .then(user => userStorage.getRoles(user))
    .then(user => alert(`Hello ${user.name}, you have ${user.role} role`))
    .catch(error => console.log(error));