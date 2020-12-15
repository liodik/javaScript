const countOccurrences = (str, substr) => {
  if (substr.length === 0) {
    return null;
  }
  return str.split(substr).length - 1;
};

// const str = 'fsjyakhfkjyasayayahfkyalsjfklya';
// const substr = '';
// console.log(countOccurrences(str, substr));
// console.log(str.split('ya'));
