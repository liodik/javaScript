export class Vehicle {
  constructor(name, numberOfwheels) {
    this.name = name;
    this.numberOfwheels = numberOfwheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

export class Ship extends Vehicle {
  constructor(name, numberOfwheels, maxSpeed) {
    super(name);
    this.numberOfwheels = numberOfwheels;
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

// const ship1 = new Ship('aurora', false, 25);
// console.log(ship1);
// ship1.move();
