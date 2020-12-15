function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(el => el * el);
}
console.log(squareArray([4, 6]));
