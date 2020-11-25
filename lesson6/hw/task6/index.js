function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let reversedArr = arr.slice();
  return reversedArr.reverse();
}
