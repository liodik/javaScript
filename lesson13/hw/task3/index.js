export const reverseArray = arr => (Array.isArray(arr) ? arr.slice().reverse() : null);
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(reverseArray(arr));
// console.log(arr);

export const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);
  return amount > balances[clientIndex] ? -1 : balances[clientIndex] - amount;
};
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

export const getAdults = obj => {
  const adults = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      Object.assign(adults, { [key]: obj[key] });
    }
  }
  return adults;
};

// const obj = { Tom: 18, 'John Doe': 18, Bob: 13 };
// console.log(getAdults(obj));
