class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  output() {
    console.log(`name: ${this.name}\nage: ${this.age}`)
  }
}

class Car {
  constructor(brand, model, release, licenseplate) {
    this.brand = brand;
    this.model = model;
    this.release = release;
    this.licenseplate = licenseplate;
  }
  
  addOwner(owner) {
    if(owner.age >= 18) {
      this.owner = owner;
    }
    else{
     console.log('вам не виповнилось 18 років');
    }
  }
  
  outputCarOwner() {
    console.log(`brand: ${this.brand}, model: ${this.model}, 
       release: ${this.release}, licenseplate: ${this.licenseplate}`); 
    
    console.log('owner: ');
    this.owner.output();
  }
}

const limonchik = new Human('limonchik', '19');
const bysanchik = new Human('bysanchik', '18');

const bmwm5 = new Car('bmw', 'M5', '2022', 'AH 5766 IO');
const bwmm8 = new Car('bmw', 'M8', '2021', 'AO 6364 MM');

bmwm5.addOwner(limonchik);
bmwm5.outputCarOwner();
console.log();
bwmm8.addOwner(bysanchik);
bwmm8.outputCarOwner();