/*Реализовать функцию-генератор которая отдаст 10 рандомных чисел в
диапазоне переданном в аргументах в ней.*/

function* randomNumber(start, end) {
	for(let i = 0; i < 10; i++) {
  	yield Math.floor(Math.random() * (end - start) + start);
  }
}

console.log(...randomNumber(10, 100));

/*Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" 
выполнение асинхронной функции brushTeeth перед тем как приступать к выполнению 
следующей асинхронной функции)*/

async function MySchedule() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Waking up at 6:00 am.");
      resolve("Good morning!");
    }, 500);
  });

  await new Promise((resolve, reject) => {
  console.log("Preparing breakfast.");
    setTimeout(() => {
      console.log("Breakfast is ready!");
      resolve("Enjoy your breakfast!!");
    }, 400);
  });

  await new Promise((resolve, reject) => {
  console.log("Preparation for work.");
    setTimeout(() => {
      console.log("Time for work!");
      resolve("Have a nice day at work!");
    }, 300);
  });

  await new Promise((resolve, reject) => {
  console.log("Cooking dinner.");
    setTimeout(() => {
      console.log("Dinner is ready!");
      resolve("Enjoy your dinner!!");
    }, 200);
  });
}

MySchedule().catch(error => {
  console.log(error.message);
});