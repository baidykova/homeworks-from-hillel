// 1 task
const name = prompt('what is your name ?');
const time = prompt('how soon do you want to be greeted ?'); 

function sayHi(name, time) {
 let timeout;
 const [amount, unit] = time.split(' ');
  switch (unit) {
   case 'seconds': 
     timeout = amount * 1000;
     break;
    case 'minutes':
     timeout = amount * 60 * 1000;
     break;
    case 'hours': 
     timeout = amount * 60 * 60 * 1000;
     break;
  }
  setTimeout(alertName, timeout, name);
}

function alertName(name) {
 alert(`hi ${name}!`);
}

sayHi(name, time);

// 2 task
const number = 10;
const user = {     
  name: "John",  
  age: 30        
};

const jsonText = '{ "name": "Іван", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

function serializeOrDeserialize(item) {
  if(typeof item === 'string') {
    console.log(JSON.parse(item));
  }
  else {
    console.log(JSON.stringify(item));
  }
}

serializeOrDeserialize(user);
serializeOrDeserialize(number);
serializeOrDeserialize(jsonText);

// 3 task
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } 
    catch (error) {
        return false;
    }
    
    return true;
}

let value = 'not a json';
console.log(`is json string: ${IsJsonString(value)}`);