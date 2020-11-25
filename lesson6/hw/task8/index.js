function checker(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  sum = Math.min(...arr) + Math.max(...arr);
  let result = sum > 1000 ? true : false;
  return result;
}
