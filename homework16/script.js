const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);

function removeElement(arr, item) {
 arr.filter(function(element, index, arr) {
  if (element === item) {
    arr.splice(index, 1);
 }
  });
}

removeElement(array, 5);
console.log(array);