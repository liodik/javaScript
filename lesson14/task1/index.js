let mem = 0;
export function add(num) {
  mem += num;
  return mem;
}
export function decrease(num) {
  mem -= +num;
  return mem;
}
export function reset() {
  mem = 0;
  return mem;
}
export function getMemo() {
  return mem;
}

// console.log(add(5));
// console.log(decrease(2));
// console.log(reset());
// console.log(add(5));
// console.log(getMemo());
