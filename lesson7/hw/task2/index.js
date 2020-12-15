function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const reverseArr = arr.slice();
  return reverseArr.reverse();
}
const arr = [1, 2, 3, 4, 5, 6];
// console.log(reverseArray(arr));
