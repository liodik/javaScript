import { getMinSquaredNumber } from './getMinSquaredNumber';

it('should return null', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('should return null', () => {
  const result = getMinSquaredNumber('string');

  expect(result).toEqual(null);
});

it('should return min squared number', () => {
  const result = getMinSquaredNumber([2, 4, -7]);

  expect(result).toEqual(4);
});
