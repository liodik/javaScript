function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((acc, el) => acc + el, 0);
}

// console.log(sum([2, 4, 5, 6, 7]));
