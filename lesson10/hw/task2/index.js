const getRandomNumbers = (len, start, end) => {
  let randomNumbers = [];
  if (end - start < 1) {
    return null;
  }
  for (let i = 0; i < len; i++) {
    let number = start + Math.random() * (end - start);
    if (number > 0) {
      randomNumbers.push(Math.floor(number));
    } else if (number < 0) {
      randomNumbers.push(Math.ceil(number));
    } else {
      return null;
    }
  }
  return randomNumbers;
};

console.log(getRandomNumbers(10, 0, 0.4));
