const multiRound = num => {
  let multiRoundArray = [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    +num.toFixed(2),
  ];
  return multiRoundArray;
};
const arr = -1.345;
console.log(multiRound(arr));
