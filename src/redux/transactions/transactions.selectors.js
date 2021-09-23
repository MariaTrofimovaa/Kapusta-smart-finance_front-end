const getTransactions = (state) => state.transactions;
const getTransactionsSelector = (state) => state.transactions.list;
const getExpenseOfDaySelector = (state) => state.transactions.expenseOfDay;
const getIncomeOfDaySelector = (state) => state.transactions.incomeOfDay;
const getBrief = (state) => state.transactions.brief;

export {
  getTransactionsSelector,
  getBrief,
  getTransactions,
  getExpenseOfDaySelector,
  getIncomeOfDaySelector,
};
