const getTransactions = (state) => state.transactions;
const getTransactionsSelector = (state) => state.transactions.list;
// const getTransactionsSelector = (state) => state.transactions;

const getBrief = (state) => state.transactions.brief;

const getSelectedDate = (state) => state.transactions.selectedDate;

export { getTransactionsSelector, getBrief, getTransactions, getSelectedDate };
