function checkSum(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let num of arr) {
    sum += num;
  }
  return sum > 100 ? true : false;
}
