// 1 task
let res = '';
for(let i = 10; i <= 20; i++) {
    res += (i === 20 ? `${i}`: `${i}, `);
}
console.log(res);

// 2 task
let result = '';
for(let i = 10; i <= 20; i++) {
    result += (i**2 === 400 ? `${i**2}`: `${i**2}, `);
}
console.log(result);

// 3 task
for(let i = 1; i <= 10; i++) {
	console.log(`${i} * 7 = ${i*7}`);
}

// 4 task
let sum = 0;
for(let i = 1; i <= 15; i++) {
	sum += i;
}
console.log(sum);

// 5 task
let mult = 1;
for(let i = 15; i <= 35; i++) {
	mult *= i;
}
console.log(mult);

// 6 task
let value = 0;
for(let i = 1; i <= 500; i++) {
	value += i / 500;
}
console.log(value);

// 7 task
let even = 0;
for(let i = 30; i <= 80; i++) {
	if(!(i % 2)) {
  	even += i;
  }
}
console.log(even);

// 8 task
for(let i = 100; i <= 200; i++) {
	if(!(i % 3)) { // !1 = 0; !0 = 1 
    console.log(i); 
  }
}

// 9 task
const naturalNumber = prompt('введіть натуральне число');
for(let i = 0; i <= naturalNumber; i ++) {
  	if(naturalNumber % i == 0) {
    	console.log(i);
    }
}

// 10 task
const naturalNumber1 = prompt('введіть натуральне число');
for(let i = 0; i <= naturalNumber1; i ++) {
  	if(naturalNumber1 % i == 0 && i % 2 == 0) {
    	console.log(i);
    }
}

// 11 task
const naturalNumber2 = prompt('введіть натуральне число');
let resultOfSum = 0;
for(let i = 0; i <= naturalNumber2; i ++) {
  	if(naturalNumber2 % i == 0 && i % 2 == 0) {
    	resultOfSum += i;
    }
}
console.log(resultOfSum);

// 12 task

// 1 variant
let table = '';
for(let i = 1; i <= 10; i++) {
	for(let j = 1; j <= 10; j++) {
		table += (i == 10 || j == 10) ? ((i == 10 && j != 10) ? `${i*j}, ` : `${i*j}`) : `${i*j}, `;
	}
  table += (i == 10) ? '' : '\n';
}
console.log(table);

// 2 variant
for(let i = 1; i <= 10; i++) {
	for(let j = 1; j <= 10; j++) {
  		console.log(`${i} * ${j} = ${i*j}`);
 	}
 console.log();
}


