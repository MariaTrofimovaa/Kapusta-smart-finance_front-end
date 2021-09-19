const getTransactions = (state) => state.transactions;

const getBrief = (state) => state.transactions.brief;

const selectors = { getTransactions, getBrief };
export default selectors;
