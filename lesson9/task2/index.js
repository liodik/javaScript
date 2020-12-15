const copyObj = obj => {
  const copiedObj = {};
  Object.assign(copiedObj, obj);
  return copiedObj;
};

// const obj = { 'John Doe': 19, Tom: 17, Bob: 18 };
// console.log(copyObj(obj));
