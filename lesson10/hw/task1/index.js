const getTotalPrice = arr => {
  let sum = arr.reduce((acc, el) => acc + el, 0);
  const sum2 = Math.floor(sum * 100) / 100;
  return '$' + sum2;
};

const arr = [1, 4, 6, 6.159];
console.log(getTotalPrice(arr));
