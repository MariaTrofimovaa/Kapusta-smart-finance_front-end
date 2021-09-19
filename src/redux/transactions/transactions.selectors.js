const getTransactions = (state) => state.transactions.transactionsReducer;

const getBrief = (state) => state.transactions.brief;

const selectors = { getTransactions, getBrief };
export default selectors;
