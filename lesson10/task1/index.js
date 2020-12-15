const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));

const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));

const getNaN = arr => arr.filter(el => Number.isNaN(el));

const getNaNV2 = arr => arr.filter(el => isNaN(el));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

// const arr = [1, 4, Infinity, 7, 'wer', 6, NaN];
// console.log(getNaNV2(arr));
