const superRound = (num, part) => {
  return [
    Math.floor(num * 10 ** part) / 10 ** part,
    Math.round(num * 10 ** part) / 10 ** part,
    Math.ceil(num * 10 ** part) / 10 ** part,
    Math.trunc(num * 10 ** part) / 10 ** part,
    +num.toFixed(part),
  ];
};

// console.log(superRound(1.33345, 3));
