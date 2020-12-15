'use strict';

// input: array
// output:array

// function getSpecialNumbers(arr) {
//   const filteredArr = arr.filter(function (el) {
//     if (el % 3 === 0) {
//       return true;
//     }
//   });
//   return filteredArr;
// }

const getSpecialNumbers = arr => arr.filter(el => el % 3 === 0);
const arr = [2, 4, 5, 6, 4, 3, 67, 9, 18];
// console.log(getSpecialNumbers(arr));
// console.log(arr);
