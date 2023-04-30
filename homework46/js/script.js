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


