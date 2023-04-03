const form = document.getElementById("order-form");
const saveButton = document.getElementById("save-button");
const nameInput = document.getElementById("name-input");
const birthInput = document.getElementById("birth-input");
const sexMaleInput = document.getElementById("sex-male-input");
const sexFemaleInput = document.getElementById("sex-female-input");
const cityInput = document.getElementById("city-select");
const adressInput = document.getElementById("adress-input");
const name = document.getElementById("name");
const birth = document.getElementById("birth");
const sex = document.getElementById("sex");
const city = document.getElementById("city");
const adress = document.getElementById("adress");
const language = document.getElementById("language");
const table = document.getElementById("table");

saveButton.addEventListener("click", (event) => {
  form.style.display = 'none';

  const nameForm = nameInput.value;
  const birthForm = birthInput.value;
  const cityForm = cityInput.value;
  let sexForm;
  
  if(sexFemaleInput.value === "women") {
    sexForm = sexMaleInput.value;
  } 
  else {
    sexForm = sexFemaleInput.value;
  }
  
  const adressForm = adressInput.value;
  
  let checkBoxes = document.querySelectorAll('input[name="language"]:checked');
  let selectedCheckBoxes = [];
  checkBoxes.forEach((checkbox) => {
    selectedCheckBoxes.push(checkbox.value);
  });
  
  name.innerHTML = nameForm;
  birth.innerHTML = birthForm;
  sex.innerHTML = sexForm;
  city.innerHTML = cityForm;
  adress.innerHTML = adressForm;
  language.innerHTML = selectedCheckBoxes.toString().replace(/,/g, ', ');

  table.style.display = "block";
});