const getTransactions = (state) => state.transactions.transactionsReducer;
const getTransactionsSelector = (state) =>
  state.transactions.transactionsReducer.transactions;
// const getTransactionsSelector = (state) => state.transactions;


const getBrief = (state) => state.transactions.brief;

export { getTransactionsSelector, getBrief, getTransactions };
