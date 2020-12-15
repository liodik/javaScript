function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice();
}
// console.log(cloneArr([2, 5, 6, 8, 11, 9, 4]));
