const withdraw = (clients, balances, client, amount) => {
  const remaind = balances[clients.indexOf(client)] - amount;
  if (remaind < 0) {
    return -1;
  }
  balances[clients.indexOf(client)] = remaind;
  return remaind;
};

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 100));
