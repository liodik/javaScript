export const getMinSquaredNumber = arr => {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return null;
  }
  return Math.min(...arr.map(el => Math.abs(el) ** 2));
};

// const arr = 'fsdf';
// console.log(getMinSquaredNumber(arr));
