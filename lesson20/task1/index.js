export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    const user = new User('', null);
    return user;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }
    this.age = newAge;
    if (newAge >= 25) {
      this.requestNewPhoto();
    }
    return newAge;
  }
}

// const user1 = new User('bob', 23);
// user1.sayHi();
// user1.requestNewPhoto();
// console.log(user1.setAge(28));
// console.log(User.createEmpty());
