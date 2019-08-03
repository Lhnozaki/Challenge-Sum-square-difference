class SumOfASquare {
  constructor(number) {
    this.number = number;
  }

  sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.number; i++) {
      let square = i * i;
      sum += square;
    }
    return sum;
  }

  squareOfTheSums() {
    let sum = 0;
    for (let i = 1; i <= this.number; i++) {
      sum += i;
    }
    return Math.pow(sum, 2);
  }
}

module.exports = { SumOfASquare };
