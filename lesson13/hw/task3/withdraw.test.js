import { withdraw } from './index';

it('should return -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(result).toEqual(-1);
});

it('should return 37', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should return 0', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1400);

  expect(result).toEqual(0);
});
