import { calc } from './calculator';

it('should return sum of numbers', () => {
  const result = calc('2 + 5');

  expect(result).toEqual('2 + 5 = 7');
});

it('should return subtraction of numbers', () => {
  const result = calc('5 - 2');

  expect(result).toEqual('5 - 2 = 3');
});

it('should return product of numbers', () => {
  const result = calc('5 * 2');

  expect(result).toEqual('5 * 2 = 10');
});

it('should return division of numbers', () => {
  const result = calc('6 / 2');

  expect(result).toEqual('6 / 2 = 3');
});

it('should return division of numbers', () => {
  const result = calc(10);

  expect(result).toEqual(null);
});
