function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const uniqueArray = array.filter(function (el, pos) {
    return array.indexOf(el) === pos;
  });
  return uniqueArray;
}

removeDuplicates([1, 2, 4, 5, 6, 8, 4, 4, 3, 2, 5, 6, 8]);
