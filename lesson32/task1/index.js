const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbs) => {
  return Promise.all(asyncNumbs)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

// asyncSum(Promise.resolve(1), Promise.reject(new Error('err')), Promise.resolve(10)).then(result =>
//   console.log(result)
// );
