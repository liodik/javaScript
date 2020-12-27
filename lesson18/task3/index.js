// const sumOfSquares = (...args) => {
//   return args.reduce((acc, el) => acc + el * el, 0);
// };

// console.log(sumOfSquares(1, 3, 4));

export function sumOfSquares() {
  return [].reduce.call(
    arguments,
    (acc, el) => {
      return acc + el * el;
    },
    0
  );
}
// console.log(sumOfSquares(1, 2, 4));
