function sum(from, to) {
 let result = 0;
  // if (from < to) {
  for (from; from <= to; from++) {
    result += from;
  }
  // }
  // else {
  //     for (from; to<=from; from--){
  // result +=from;
  // }
  // }
  return result;
}

function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  } else return false;
}
console.log(compareSums(3, 6, 1, 4));
