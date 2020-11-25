function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const uniqueArray = array.filter(function (el, poss) {
    return array.indexOf(el) === poss;
  });
  return uniqueArray.length;
}
