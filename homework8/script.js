let ageAndCity = '';
const ageOfUser = prompt('скільки тобі років?');
if (ageOfUser == null) {
	alert('шкода, що Ви не захотіли ввести свій вік');
}

const userСity = prompt('де ти живеш ?');
if (userСity == null) {
	alert('шкода, що Ви не захотіли ввести своє місто');
}
else if(userСity == 'київ') {
    console.log(ageAndCity = `тобі ${(ageOfUser != null ? ageOfUser : 'n-кількість')} років. ти живеш у столиці україни. `);  
} else if(userСity == 'вашингтон') {
    console.log(ageAndCity = `тобі ${(ageOfUser != null ? ageOfUser : 'n-кількість')} років. ти живеш у столиці сша.`);
} else if(userСity == 'лондон') {
    console.log(ageAndCity = `тобі ${(ageOfUser != null ? ageOfUser : 'n-кількість')} років. ти живеш у столиці великої британії.`);
} else {
    console.log(ageAndCity = `тобі ${(ageOfUser != null ? ageOfUser : 'n-кількість')} років. ти живеш у місті ${(userСity != '' ? userCity : 'X')}.`);
}

const kindOfSport = prompt('який твій улюблений вид спорту ?');
if (kindOfSport == null) {
	alert('шкода, що Ви не захотіли ввести свій улюблений вид спорту');
}
else if (kindOfSport == 'бокс') {
	alert(ageAndCity + 'круто! ти хочеш стати Олександром Усиком?');
}
else if (kindOfSport == 'футбол') {
	alert(ageAndCity + 'круто! ти хочеш стати Пеле?');
}
else if (kindOfSport == 'плавання') {
	alert(ageAndCity + 'круто! ти хочеш стати Майклом Фелпсом?');
}
