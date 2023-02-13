function Car(model) {
    this.model = model;
  
    Car.prototype.Drive = function() {
        this.drive = true;
        console.log(`the ${this.model} is going. Drive = ${this.drive}`);
    }

    Car.prototype.Stop = function() {
        this.drive = false;
        console.log(`the ${this.model} stopped. Drive = ${this.drive}`);
    }

    Car.prototype.OpenDoors = function() {
        console.log(`the ${this.model} door is open`);
    }
}

let car = new Car('default Car');
car.Drive();
car.Stop();
car.OpenDoors();

console.log();

let lamborghini = new Car('lamborghini');
lamborghini.OpenDoors = function() {
    console.log(`the ${this.model} door is open vertically`);
}

lamborghini.Drive();
lamborghini.Stop();
lamborghini.OpenDoors();

console.log();

let BMW = new Car('BMW');
lamborghini.OpenDoors = function() {
    console.log(`the ${this.model} door is open normally`);
}

BMW.Drive();
BMW.Stop();
BMW.OpenDoors();
