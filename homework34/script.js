/* єтекстове поле на сторінці. під час фокусування на цьому полі збоку з'являється <div>. 
при пропажі фокусу - <div> так само пропадає
*/
const myInput = document.getElementById("myInput");
const myDiv = document.getElementById("myDiv");

myInput.addEventListener("focus", () => {
	myDiv.hidden = false;
});

myInput.addEventListener("blur", () => {
	myDiv.hidden = true;
});