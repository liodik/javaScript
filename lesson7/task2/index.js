// input: array
// output:sort array

function sortDesc(arr) {
  const copyArr = arr.slice();
  return copyArr.sort((a, b) => b - a);
}

// const arr = [2, 4, 5, 6, 4, 3, 67, 9, 18];
// console.log(sortDesc(arr));
