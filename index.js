// Your code here
class Polygon {
  constructor(arrOfInts) {
    this.arrOfInts = arrOfInts;
  };

  get countSides() {
    return this.arrOfInts.length
  };

  get perimeter() {
    return this.arrOfInts.reduce((a,b) => a + b);
  };

};

class Triangle extends Polygon {

  get isValid() {
    return (this.arrOfInts[0] + this.arrOfInts[1] > this.arrOfInts[2] && this.arrOfInts[0] + this.arrOfInts[2] > this.arrOfInts[1] && this.arrOfInts[2] + this.arrOfInts[1] > this.arrOfInts[0])
  };

};

class Square extends Polygon {

  get isValid() {
    return (this.arrOfInts[0] === this.arrOfInts[1] && this.arrOfInts[1] === this.arrOfInts[2] && this.arrOfInts[2] === this.arrOfInts[3])
  };

  get area() {
    return this.arrOfInts[0] * this.arrOfInts[0];
  }

};
