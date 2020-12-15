import getSum, { getSquaredNumbers, getOddNumbers } from './calculator.js';

it('should get square numbers', () => {
  const result = getSquaredNumbers([1, 2, 3]);

  expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});

it('should get sum of numbers', () => {
  const result = getSum(4, 5);

  expect(result).toEqual(9);
});
