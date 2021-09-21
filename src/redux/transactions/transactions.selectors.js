const getTransactions = (state) => state.transactions;
const getTransactionsSelector = (state) => state.transactions.list;

const getTransactionOfDaySelector = (state) => state.transactions.expenseOfDay;

const getBrief = (state) => state.transactions.brief;

export {
  getTransactionsSelector,
  getBrief,
  getTransactions,
  getTransactionOfDaySelector,
};
