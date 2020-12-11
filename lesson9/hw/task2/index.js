const getTotalRevenue = dayTransactions => {
  return dayTransactions.reduce((acc, user) => acc + user.amount, 0);
};

const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

console.log(getTotalRevenue(dayTransactions));
