class SumOfASquare {
  constructor(number) {
    this.number = number;
  }

  sumOfSquares() {
    let arr = [];
    for (let i = 1; i <= this.number; i++) {
      var square = i * i;
      arr.push(square);
    }

    let sum = arr.reduce(function(p, c) {
      return p + c;
    });

    return sum;
  }

  squareOfTheSums() {
    var arr = [];

    for (let i = 1; i <= this.number; i++) {
      arr.push(i);
    }

    var sum = arr.reduce(function(p, c) {
      return p + c;
    });

    return Math.pow(sum, 2);
  }
}

module.exports = { SumOfASquare };
