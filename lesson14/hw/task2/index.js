const cleanTransactionsList = array => {
  // const filteredArray = array.filter(el => !isNaN(el));
  // return filteredArray.map(el => '$' + Number(el).toFixed(2));

  return array.filter(el => !isNaN(el)).map(el => '$' + Number(el).toFixed(2));
};

// const arr = ['  1.9 ', '16.4', 17, ' 1 dollar '];
// console.log(cleanTransactionsList(arr));
