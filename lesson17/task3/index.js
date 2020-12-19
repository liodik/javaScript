export function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}!`);
//   },
// };
// const defferdHi = defer(user.sayHi, 3000);

// defferdHi.call({ name: 'Bob' });
