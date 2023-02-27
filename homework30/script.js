class SuperMath {
  check(obj) {
    const { X, Y, sign } = obj;
    if (this.isValidSign(sign)) {
      const answer = this.calculate(X, Y, sign);
      const confirmation = confirm(`ви бажаєте виконати дію ${sign} з числами ${X} та ${Y}?`);
      if (confirmation) {
        console.log(`результат: ${answer}`);
      } else {
        this.input();
      }
    } else {
      console.error(`помилка: '${sign}' - некоректний знак операції!`);
      this.input();
    }
  }

  isValidSign(sign) {
    const validSigns = ['+', '-', '/', '*', '%'];
    return validSigns.includes(sign);
  }

  calculate(x, y, sign) {
    switch (sign) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '/':
        return x / y;
      case '*':
        return x * y;
      case '%':
        return x % y;
    }
  }

  input() {
    const X = +prompt('введіть число X');
    const Y = +prompt('введіть число Y');
    const sign = prompt('введіть знак операції (+, -, /, *, %)');
    this.check({ X, Y, sign });
  }
}

const superMath = new SuperMath();
superMath.input();