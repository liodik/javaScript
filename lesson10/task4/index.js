const getMaxAbsoluteNumber = arr => {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return null;
  }
  const absArr = arr.map(el => Math.abs(el));
  return Math.max(...absArr);
};

// const a = [];

// console.log(getMaxAbsoluteNumber(a));
