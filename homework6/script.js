const firstString = prompt('what is the first suggestion ?');
const secondString = prompt('what is the second suggestion ?');
const thirdString = prompt('what is the third suggestion ?');

alert(`your sentences: ${firstString + secondString + thirdString}`);

// first variant
const num = 12345;
const stringNum = num.toString();
const digits = stringNum[0] + ' ' + stringNum[1] + ' ' + stringNum[2] + ' ' + stringNum[3] + ' ' + stringNum[4];
console.log(digits);

// second variant
let numb = 12345;
const digit5 = numb % 10;
numb = Math.floor(numb / 10);
const digit4 = numb % 10;
numb = Math.floor(numb / 10);
const digit3 = numb % 10;
numb = Math.floor(numb / 10);
const digit2 = numb % 10;
numb = Math.floor(numb / 10);
const digit1 = numb % 10;
const digitsNum = digit1 + ' ' + digit2 + ' ' + digit3 + ' ' + digit4 + ' ' + digit5;
alert(digitsNum);