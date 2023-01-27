const arr = [];
const size = Number(prompt('введіть довжину масиву'));
for(let i = 0; i < size; i++) {
    arr[i] = Number(prompt('введіть елемент масиву (число)')); 
}
console.log(arr);

arr.sort( function(a, b) { return a - b; } );
console.log(arr);

arr.splice(1, 3);
console.log(arr);