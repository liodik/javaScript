function getAdults(obj) {
  const adults = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      Object.assign(adults, { [key]: obj[key] });
    }
  }
  return adults;
}

const obj = { Tom: 17, 'John Doe': 19, Bob: 18 };
console.log(getAdults(obj));
