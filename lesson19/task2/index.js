// export const vehicle = {
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };
// export const ship = {
//   name: 'Argo',

//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     this.move();
//   },

//   stopMachine() {
//     this.stop();
//     console.log(`${this.name} lifting anchor down`);
//   },

//   __proto__: vehicle,
// };
export function getOwnProps(obj) {
  const arrOfOwnProps = [];
  for (let prop in obj) {
    // console.log(typeof obj[prop]);
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      arrOfOwnProps.push(prop);
    }
  }
  return arrOfOwnProps;
}
// console.log(getOwnProps(ship));
