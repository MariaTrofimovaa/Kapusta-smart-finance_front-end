const getTransactions = (state) => state.transactions;
const getTransactionsSelector = (state) => state.transactions.list;
// const getTransactionsSelector = (state) => state.transactions;

const getBrief = (state) => state.transactions.brief;

export { getTransactionsSelector, getBrief, getTransactions };
