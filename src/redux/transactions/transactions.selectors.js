// const getTransactions = (state) => state.transactions;

const getTransactionsSelector = (state) =>
  state.transactions.transactionsReducer.transactions;

const getBrief = (state) => state.transactions.brief;

export { getTransactionsSelector, getBrief };
