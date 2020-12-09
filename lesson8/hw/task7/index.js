function filterNames(arr, text) {
  const longerFive = arr.filter(el => el.length > 5);
  return longerFive.filter(el => el.indexOf(text) !== -1);
}
// console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
