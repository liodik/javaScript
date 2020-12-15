//put your code here
const splitString = (text, len) => {
  if (typeof text !== 'string') {
    return null;
  }
  if (len === undefined) {
    len = 10;
  }

  const dot = '.';
  let startPos = 0;
  const strArr = [];
  while (true) {
    let chunk = text.substr(startPos, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk);
    startPos += len;
  }

  return strArr.map(el => (el.length < len ? el + dot.repeat(len - el.length) : el));
  //{
  // if (el.length < len) {
  // const rep = len - el.length;
  //      return el + dot.repeat(len - el.length);
  //  } else {
  //     return el;
  //  }
  // });
};

//console.log(splitString('abcd efghjhjkhkjhkjhk;lk;l', 5));
