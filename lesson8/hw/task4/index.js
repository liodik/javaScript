function addPropertyV1(obj, key, value) {
  obj[key] = value;

  return obj;
}
// const user = {
//   value: 170,
// };
// const result = addPropertyV1(user, 'currency', 'USD');
// console.log(result);

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
// const user = {
//   value: 170,
// };
// const result = addPropertyV2(user, 'currency', 'USD');
// console.log(result);
// console.log(user);

function addPropertyV3(obj, key, value) {
  const newObj = Object.assign({}, obj, { [key]: value });
  return newObj;
}
// const user = {
//   value: 170,
// };
// const result = addPropertyV3(user, 'currency', 'USD');
// console.log(result);
// console.log(user);
function addPropertyV4(obj, key, value) {
  const newObj = { ...obj, [key]: value };
  return newObj;
}
// const user = {
//   value: 170,
// };
// const result = addPropertyV4(user, 'currency', 'USD');
// console.log(result);
// console.log(user);
