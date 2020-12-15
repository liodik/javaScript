//put your code here
const splitText = (text, len) => {
  if (typeof text !== 'string') {
    return null;
  }
  if (len === undefined) {
    len = 10;
  }
  let startPos = 0;
  const strArr = [];
  while (true) {
    let chunk = text.substr(startPos, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPos += len;
  }

  return strArr.join('\n');
};

// console.log(splitText('abcd efgh',4));
