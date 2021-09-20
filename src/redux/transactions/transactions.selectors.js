const getTransactions = (state) => state.transactions.transactionsReducer;
// const getTransactions = (state) => state.transactions;
const getTransactionsSelector = (state) => state.transactions;


const getBrief = (state) => state.transactions.brief;

const selectors = { getTransactionsSelector, getBrief };

export default selectors;
