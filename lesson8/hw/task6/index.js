function pickProps(obj, arr) {
  const filteredObj = {};
  arr.forEach(el => {
    Object.assign(filteredObj, { [el]: obj[el] });
  });
  return filteredObj;
}

pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);

// function pickProps(obj, arr) {
//   const ob = {};
//   arr.forEach(function call(el) {
//     Object.assign(ob, { [el]: obj[el] });
//   });
//   console.log(ob);
// }
