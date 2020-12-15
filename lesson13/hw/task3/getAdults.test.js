import { getAdults } from './index';

it('should return empty object', () => {
  const result = getAdults({});

  expect(result).toEqual({});
});

it('should return empty object', () => {
  const result = getAdults({ Tom: 17, 'John Doe': 15, Bob: 13 });

  expect(result).toEqual({});
});

it('should return object of adults', () => {
  const result = getAdults({ Tom: 18, 'John Doe': 15, Bob: 21 });

  expect(result).toEqual({ Tom: 18, Bob: 21 });
});
