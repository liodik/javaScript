function withdraw(clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);
  if (balances[clientIndex] >= amount) {
    const clientBalans = balances[clientIndex] - amount;
    balances[clientIndex] = clientBalans;
    return clientBalans;
  } else return -1;
}
const clients = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];
console.log(withdraw(clients, balances, 'John', 87));
