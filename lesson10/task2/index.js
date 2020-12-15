const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));

const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));

const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));

const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));

// const arr = ['1.345sdf', 4, Infinity, 7, 'wer', 6, NaN];
// console.log(getParsedFloatsV2(arr));
