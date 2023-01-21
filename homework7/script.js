let action = prompt('what action will be taken: add, sub, mult, div ?');
const firstNumber = Number(prompt('what is the first number ?'));
const secondNumber = Number(prompt('what is the second number ?'));
let res = 0;

if(action == 'add' || action == '+') {
    res = firstNumber + secondNumber;
    console.log(`${firstNumber} + ${secondNumber} = ${res}`);
} else if(action == 'sub' || action == '-') {
    res = firstNumber - secondNumber;
    console.log(`${firstNumber} - ${secondNumber} = ${res}`);
} else if(action == 'mult' || action == '*') {
    res = firstNumber * secondNumber;
    console.log(`${firstNumber} * ${secondNumber} = ${res}`);
} else if(action == 'div' || action == '/'){
    res = firstNumber / secondNumber;
    console.log(`${firstNumber} / ${secondNumber} = ${res}`);
} else {
    console.log('incorrect action');
}