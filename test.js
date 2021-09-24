









const expenseOfDay = createReducer([], {
  [actions.addTransactionSuccess]: (state, { payload }) => [
    ...state,
    payload,
    console.log(">>>>>", payload.addedTransaction),
  ],
    [actions.getExpenseOfDaySuccess]: (state, { payload }) => payload.data,
  
  [actions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload._id),
});
