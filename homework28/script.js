/*
1 task
Создать функцию которая будет принимать миллисекунды и вернет true или 
false в зависимости от того сегодня ли то число которое было передано
*/
function isToday(milliseconds) {
 const todayMilliseconds = Date.now();
  if (todayMilliseconds !== milliseconds) {
  return false;
  }
  
 return true;
}

console.log(`is today: ${isToday(1)}`);

/*
2 task
Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды
*/
function formatDate(milliseconds) {
	const dateIMilliseconds = new Date(milliseconds);
  const date = dateIMilliseconds.getDate().toString().padStart(2, '0');
  const month = dateIMilliseconds.getMonth().toString().padStart(2, '0');
  const year = dateIMilliseconds.getFullYear().toString();
  const hour = dateIMilliseconds.getHours().toString().padStart(2, '0');
  const minutes = dateIMilliseconds.getMinutes().toString().padStart(2, '0');
  console.log(`${date}.${month}.${year} ${hour}:${minutes}`);
}

formatDate(166568478000);

/* 3 task
Создать функцию которая принимает миллисекунды и вернет количество 
времени которое прошло или должно пройти с текущего момента.
*/

function DateDifference(milliseconds) {
 const now = Date.now();
 const difference = (now - milliseconds > 0) ? new Date(now - milliseconds) : new Date((now - milliseconds) * -1);
  
 const seconds = Math.floor(difference / 1000);
 const minutes = Math.floor(seconds / 60);
 const hours = Math.floor(minutes / 60);
 const days = Math.floor(hours / 24);
 let result = '';
 
  if (days > 0) {
    result = `${days} days ${hours % 24} hours ${minutes % 60} minutes ${seconds % 60} seconds`;
  } else if (hours > 0) {
    result = `${hours} hours ${minutes % 60} minutes ${seconds % 60} seconds`;
  } else if (minutes > 0) {
    result = `${minutes} minutes ${seconds % 60} seconds`;
  } else {
    result = `${seconds} seconds}`;
  }
  
  if(now > milliseconds) {
   return result + " approximately before today's date";
 }
  else {
   return result + " approximately after today's date";
 }
}

console.log(DateDifference(1672518456000));