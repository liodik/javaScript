const reverseString = str => {
  if (typeof str !== 'string') {
    return null;
  }
  return str.split('').reverse().join('');
};

// const str = 'abcd efghjhjkhkjhkjhk;lk;l';
// console.log(reverseString(str));
