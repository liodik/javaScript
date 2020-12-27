/* eslint-disable max-classes-per-file */
export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    Object.freeze(users);
    this._users = users;
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this.users.map(el => el.name);
  }

  getUserIds() {
    return this.users.map(el => el.id);
  }

  getUserNameById(userId) {
    return this.users.filter(el => el.id === userId).map(el => el.name)[0];
  }
}

// const user1 = new User('324', 'Bob', 'sdfa');
// console.log(user1.id);
// console.log(user1.name);
// // user1.name = 'tom';
// console.log(user1);
// const arrUsers2 = [
//   { id: '1', name: 'Bob', sessionId: 'qqq' },
//   { id: '2', name: 'Tom', sessionId: 'www' },
//   { id: '3', name: 'Jack', sessionId: 'eee' },
// ];

// const users2 = new UserRepository(arrUsers2);
// console.log(users2);
// console.log(users2.getUserNames());
// console.log(users2.getUserNameById('2'));
