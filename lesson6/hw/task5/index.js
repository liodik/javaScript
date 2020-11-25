const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const evenArr = arr.filter(el => el % 2 === 0);
  const resultArr = evenArr.map(el => el + delta);
  return resultArr;
};

const arr = [2, 5, 6, 8, 11, 9, 4];
const delta = 20;
increaseEvenEl(arr, delta);
