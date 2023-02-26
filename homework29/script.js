class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.addProduct = [];
  }

  static SIZE_SMALL = {"price": 50, "callories": 20};
  static SIZE_BIG = {"price": 100, "callories": 40};
  static STUFFING_CHEESE = {"price": 10, "callories": 20};
  static STUFFING_SALAD = {"price": 20, "callories": 5};
  static STUFFING_POTATO = {"price": 15, "callories": 10};
  static TOPPING_SEASONING = {"price": 15, "callories": 0};
  static TOPPING_MAYO = {"price": 20, "callories": 5};

  addTopping(newToping) {
    if(newToping == Hamburger.SIZE_SMALL || newToping == Hamburger.SIZE_BIG) {
      console.log('can\'t add size');
    }
    else {
      this.addProduct.push(newToping);
    }
  }

  removeTopping(deleteTopping) {
    if(this.addProduct.length <= 0) {
      console.log('не має додактових начинок або соусів');
    }
    else {
      const index = this.addProduct.indexOf(deleteTopping);
      this.addProduct.splice(index, 1);
    }
  }

  calculateCalories() {
    let sum = this.size.callories;
    sum += this.stuffing.callories;

    for(let item of this.addProduct) {
      sum += item.callories;
    }
    return sum;
  }

  calculatePrice() {
    let sum = this.size.price;
    sum += this.stuffing.price;

    for(let item of this.addProduct) {
      sum += item.price;
    }
    return sum;
  }

}

// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий
console.log("Calories:" + hamburger.calculateCalories());

// сколько стоит
console.log("Price:" + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SEASONING);

// А сколько теперь стоит?
console.log("Price with seasoning:" + hamburger.calculatePrice());

hamburger.removeTopping(Hamburger.TOPPING_SEASONING);

console.log("Price without seasoning:" + hamburger.calculatePrice());

hamburger.removeTopping(Hamburger.TOPPING_MAYO);

console.log("Calories without sauce:" + hamburger.calculateCalories());

console.log("Price without sauce:" + hamburger.calculatePrice());

hamburger.removeTopping(Hamburger.TOPPING_MAYO);

hamburger.addTopping(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.SIZE_BIG);