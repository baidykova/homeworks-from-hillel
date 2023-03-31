function generateArrayList(array) {
  const arrayList = document.createElement('ul');
  array.forEach((item) => {
    const itemOfList = document.createElement('li');
    if (Array.isArray(item)) {
      itemOfList.appendChild(generateArrayList(item));
    } else {
      itemOfList.textContent = item;
    }
    arrayList.appendChild(itemOfList);
  });
  return arrayList;
}

const arr = [1, 2, [1.1, 1.2, 1.3], 3];
const arrList = generateArrayList(arr);
document.body.appendChild(arrList);

const arr1 = [1, 2, 3];
const arrList1 = generateArrayList(arr1);
document.body.appendChild(arrList1);