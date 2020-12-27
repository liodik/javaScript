export const wallet = {
  transactions: [1, 4, 8, 9, 5, 34, 554],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};
// console.log(wallet.getMax());
// console.log(wallet.getMin());
