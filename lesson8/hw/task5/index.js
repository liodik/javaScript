function mergeObjectsV1(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// const obj1 = { 1: 2, 3: 4 };
// const obj2 = { 1: 6, 7: 8 };
// mergeObjectsV1(obj1, obj2);

function mergeObjectsV2(obj1, obj2) {
  return Object.assign({}, obj2, obj1);
}

function mergeObjectsV3(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function mergeObjectsV4(obj1, obj2) {
  return { ...obj2, ...obj1 };
}
