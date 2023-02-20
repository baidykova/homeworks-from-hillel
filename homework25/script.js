class Human {
   constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Apartment {
  residents = [];

  addResident(resident) {
    this.residents.push(resident); 
  }
}

class House {
  constructor(maxNumberOfApartments) {
    this.apartments = [];
    this.maxNumberOfApartments = maxNumberOfApartments;
  }
  
  addApartment(apartment) {
  if(this.maxNumberOfApartments === this.apartments.length) {
   console.log('Error! Max size is reached!');
    }
    else {
   this.apartments.push(apartment);
    }
  }
}

const human = new Human('Max', 'male');
const apartment = new Apartment();
apartment.addResident(human);
console.log(apartment.residents);

const house = new House(25);
house.addApartment(apartment);
console.log(house.apartments);