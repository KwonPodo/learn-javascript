// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            if (
                (id === 'jay' && password === 'kwon') ||
                (id === 'ludin' && password === '9901')) {
                    resolve('jay');
                } else {
                    reject('Not Found');
                }
        })
    }
        
    
    getRoles(user) {
        return new Promise((resolve, reject) => {
            if (user === 'jay') {
                resolve({name: 'jay', role: 'admin'});
            } else {
                reject(new Error('no access'));
            }
    })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
    .loginUser(id, password)
    .then(user => userStorage.getRoles(user))
    .then(user => alert(`Hello ${user.name}, you have ${user.role} role`))
    .catch(error => console.log(error));