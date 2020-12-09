const transformToObject = arr => {
  const obj = {};
  arr.forEach(el => {
    obj[el] = el;
  });
  return obj;
};

// const arr1 = [];
// const arr = ['a', 17.1, 'John Doe'];
// console.log(transformToObject(arr));
