export class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }

  id = (Math.random() * 1000).toFixed();

  dateCreated = new Date();

  isConfirmed = false;

  dateConfirmed = new Date();

  checkPrice() {
    return this.price > 1000 ? true : false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell' ? true : false;
  }
}

// const order1 = new Order(1200, 'Lviv', 'Buy');
// console.log(order1);
// console.log(order1.checkPrice());
// console.log(order1.confirmOrder());
// console.log(order1.dateConfirmed);
// console.log(order1.isValidType());
