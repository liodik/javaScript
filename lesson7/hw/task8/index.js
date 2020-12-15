function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sum = arr.reduce((acc, el) => acc + el, 0);

  return sum / arr.length;
}

// console.log(arrAverage([2, 5, 6, 3]));
