export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setName(fullName) {
    const fullNameArr = fullName.split(' ');
    this.firstName = fullNameArr[0];
    this.lastName = fullNameArr[1];
    return this;
  },
};

// user.setName('johni walker');
// console.log(user);
//console.log(user.getFullName());

// setName(fullName) {
//  const fullNameArr = fullName.split(' ');
// this.firstName =fullNameArr[0];
// this.lastName = fullNameArr[1];
// return this;
// }
