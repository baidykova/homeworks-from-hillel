// 1 task

// 1 variant
let numbers = '';
for (let i = 20; i <= 30; i ++) {
  numbers += (i == 30 ? `${i}` : `${i + ' ' +  (i + 0.5) + ' '}`);
}
console.log(numbers);

// 2 variant

let numbers1 = '';
for (let i = 20; i <= 30; i += 0.5) {
  numbers1 += i + ' ';
}
console.log(numbers1);

// 2 task

const dollar = 27;
for(let i = 10; i <= 100; i+=10) {
	console.log(27*i);
}

// 3 task

const naturalNumber = 10;
for(let i = 1; i <= 100; i++) {
  if(i**2 < naturalNumber) {
    console.log(i);
  }
}	

// 4 task

const number = 17;
let counter = 0;
for(let i = 1; i <= number; i++) {
  if(number % i == 0) {
    counter++;
 }
}
if (counter > 2) {
  console.log(`number ${number} is not simple!`);
}
else {
  console.log(`number ${number} is simple!`); 
}

// 5 task

const userNumber = 81;
let numberThree = 3;
let power = 1;

do
{
 if(numberThree === userNumber) {
   console.log(`You can get your number ${userNumber} by raising the number 3 to the power ${power}`);
    break;
 }
  
  ++power;
  numberThree *= 3;
  
  if(numberThree > userNumber) {
   console.log(`You can not get your number ${userNumber} by raising the number 3 to the power! Because your number is already less than 3 to the ${power}th power what equals ${numberThree}`);
    break;
  }
}while (numberThree <= userNumber);