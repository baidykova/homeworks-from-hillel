/*
* избавится от неуникальных элементов массива
*/
const numbersArray = [1, 1, 2, 3, 4, 5, 5, 5, 6]; 

function leaveUnique(arr) {
    return [...new Set(arr)];
}

console.log(leaveUnique(numbersArray));

/*
* создать Map который будет по переданному объекту возвращать строку привествия
*/
const UserJane = {
    name: 'Jane'
}

const UserBob = {
    name: 'Bob'
}

const users = new Map();

users.set(UserBob, `Hello ${UserBob.name} nice to see you`);
users.set(UserJane, `How your kids doing ${UserJane.name}?`);

function greetUser (user) {
    if (users.has(user)) {
        console.log(users.get(user));
    }
    else {
        console.log(`There is no such user as ${user}!`);
    }
}

greetUser(UserBob);

/*
* cоздать функцию по превращению Map в object или object в Map в 
* зависимости от того что было передано в функцию
*/

function convertToMapOrObject(data) {
    if(data instanceof Map) {
        return Object.fromEntries(data);
    } else if (typeof data === 'object' && data !== null) {
        return new Map(Object.entries(data));
    } else {
        console.log('сannot convert passed argument to map or object');
    }
}

const UserBoba = {
    name: 'Boba',
    age: 18
}

console.log(convertToMapOrObject(UserBob));

let secondMap = new Map([['string', 'some string'], ['number', 106]]);

console.log(convertToMapOrObject(secondMap));
