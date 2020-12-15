import { reverseArray } from './index';

it('should return null', () => {
  const result = reverseArray(10);

  expect(result).toEqual(null);
});

it('should return reverse array of string', () => {
  const result = reverseArray(['q', 'w', 'e', 'r', 't', 'y']);

  expect(result).toEqual(['y', 't', 'r', 'e', 'w', 'q']);
});

it('should return reverse array of numbers', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);

  expect(result).toEqual([5, 4, 3, 2, 1]);
});
