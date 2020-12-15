function flatArray(arr) {
  return arr.reduce((acc, el) => acc.concat(el), []);
}
// const arr = [1, 3, 5, [3, 2, 4], 4];
// console.log(flatArray(arr));
// console.log(arr);
