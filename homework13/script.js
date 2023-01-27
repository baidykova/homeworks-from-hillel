// 1
const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let numberOfPositiveNumbers = 0, sum = 0;
for(const number of numbers) {
 if(number > 0) {
   numberOfPositiveNumbers++;
    sum += number;
  } 
}
console.log(`number of positive numbers: ${numberOfPositiveNumbers} and their sum = ${sum}`);

// 2
const minElement = Math.min(...numbers);
console.log(`min element: ${minElement} at index ${numbers.indexOf(minElement)}`);

let minElementSecondVariant = numbers[0];
for(const number of numbers) {
 if(number < minElementSecondVariant) {
   minElementSecondVariant = number;
  }
}

console.log(`min element: ${minElementSecondVariant} at index ${numbers.indexOf(minElementSecondVariant)}`);

// 3
const maxElement = Math.max(...numbers);
console.log(`max element: ${maxElement} at index ${numbers.indexOf(maxElement)}`);

let maxElementSecondVariant = numbers[0];
for(const number of numbers) {
 if(number > maxElementSecondVariant) {
   maxElementSecondVariant = number;
  }
}

console.log(`max element: ${maxElementSecondVariant} at index ${numbers.indexOf(maxElementSecondVariant)}`);

// 4
let numberOfNegativeNumbers = 0;
for(const number of numbers) {
 if(number < 0) {
   numberOfNegativeNumbers++;
  } 
}
console.log(`number of negative numbers: ${numberOfNegativeNumbers}`);

// 5 
let numberOfOddPositiveNumbers = 0;
for(const number of numbers) {
 if(number > 0 && number % 2 != 0) {
   numberOfOddPositiveNumbers++;
  } 
}
console.log(`number of odd positive numbers: ${numberOfOddPositiveNumbers}`);

// 6
let numberOfEvenPositiveNumbers = 0;
for(const number of numbers) {
 if(number > 0 && number % 2 == 0) {
   numberOfEvenPositiveNumbers++;
  } 
}
console.log(`number of even positive numbers: ${numberOfEvenPositiveNumbers}`);

// 7
let sumOfEvenPositiveNumbers = 0;
for(const number of numbers) {
 if(number > 0 && number % 2 == 0) {
   sumOfEvenPositiveNumbers += number;
  } 
}
console.log(`sum of even positive numbers: ${sumOfEvenPositiveNumbers}`);

// 8
let sumOfOddPositiveNumbers = 0;
for(const number of numbers) {
 if(number > 0 && number % 2 != 0) {
   sumOfOddPositiveNumbers += number;
  } 
}
console.log(`sum of odd positive numbers: ${sumOfOddPositiveNumbers}`);

// 9
let productOfPositiveNumbers = 1;
for(const number of numbers) {
 if(number > 0) {
   productOfPositiveNumbers *= number;
  } 
}
console.log(`product of positive numbers: ${productOfPositiveNumbers}`);

// 10
const maxElementInArray = Math.max(...numbers);
for(let i = 0; i < numbers.length; i++) {
 if(numbers[i] !== maxElementInArray) {
   numbers[i] = 0;
  } 
}
console.log(`max element in array: ${maxElementInArray}`);
console.log(`array after change: [${numbers}]`);