const getTransactions = (state) => state.transactions;
const getTransactionsSelector = (state) => state.transactions.list;
const getTransactionOfDaySelector = (state) => state.transactions.expenseOfDay;
const getBrief = (state) => state.transactions.brief;
const getYear = (state) => state.transactions.brief.currentYear;

export {
  getTransactionsSelector,
  getBrief,
  getTransactions,
  getTransactionOfDaySelector,
  getYear,
};
