// first task

// 1 variant
const array = [123, 'hello', 34, 67, true, 'serjik', 29, false];
let sum = 0, count = 0;

function arithmeticMean(arr) {
  arr.forEach(function(element) {
   if (typeof(element) === 'number') {
     count++;
     sum += element;
   }
  });
  
  return sum / count;
}

console.log('arithmeticMean: ', arithmeticMean(array));

// 2 variant
// є можливість перетворити рядок в число
sum = 0; 
count = 0;

function arithmeticMean2(arr) {
 arr.forEach(function (element) {
  if (!isNaN(parseInt(element))) {
   sum += parseInt(element);
   count++;  
  }
 });
  
  return sum / count;
}

console.log('arithmeticMean2: ', arithmeticMean2(array));

// 2 task

const firstNumber = Number(prompt('enter your first number'));
const secondNumber = Number(prompt('enter your second number'));
const sign = prompt('enter mathematical sign (+, -, *, /, %, ^):');

function doMath(x, y, sign) {
	switch (sign) {
  	case '+':
    	return x + y;
    case '-':
    	return x - y;
    case '*':
    	return x * y;
    case '/':
    	return x / y;
    case '%':
    	return x % y;
    case '^':
    	return x ** y;
  	}
}

console.log(`${firstNumber} ${sign} ${secondNumber} = ${doMath(firstNumber, secondNumber, sign)}`);

// 3 task
const arr = [];
const rows = Number(prompt('enter number of rows'));
const cols = Number(prompt('enter number of cols'));

function fillMatrix(arr, rows, cols) {
    for(let i = 0; i < rows; i++) {
        arr[i] = [];
        for(let j = 0; j < cols; j++) {
            arr[i][j] = Number(prompt('enter element of matrix')); 
        }
    }

    return arr;
}

console.log(fillMatrix(arr, rows, cols));

// 4 task
let string = prompt('enter your string');
const characters = prompt('enter characters separated by spaces').split(' ');

function deleteCharacters(str, characters) {
    for(let element of str) {  
        for(let character of characters) {
            if(element === character) {
                let tmp = str.split('');
                tmp.splice(str.indexOf(character), 1);
                str = tmp.join('');
            }
        }
    }
  
    return str;
}

console.log(deleteCharacters(string, characters));