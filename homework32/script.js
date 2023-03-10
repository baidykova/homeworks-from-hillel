/*
Создать цепочку промисов (длинной минимум в 3) - свой распорядок дня
например (brushTeeth.then(() => dosmthelse.then(())
*/
const wakeUp = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Waking up at 6:00 am.");
    resolve("Good morning!");
  }, 200);
});


const breakfast = wakeUp.then((result) => {
  console.log(result);
  console.log("Preparing breakfast.");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Breakfast is ready!");
      resolve("Enjoy your meal!!");
    }, 500);
  });
});


const work = breakfast.then((result) => {
  console.log(result);
  console.log("Preparation for work.");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Time for work!");
      resolve("Have a nice day at work!");
    }, 200);
  });
});


const dinner = work.then((result) => {
  console.log(result);
  console.log("Cooking dinner.");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Dinner is ready!");
      resolve("Enjoy your meal!!");
    }, 200);
  });
});


dinner.then((result) => {
  console.log(result);
  console.log("Time to relax!");
}).catch((error) => {
  console.log(error);
});