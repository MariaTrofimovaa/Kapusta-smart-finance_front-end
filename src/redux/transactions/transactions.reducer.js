import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./transactions.actions";

const transactionsReducer = createReducer([], {
  [actions.addTransactionSuccess]: (state, { payload }) => {
    return { ...state, transactions: payload.transactions, date: payload.date };
  },
  [actions.getTransactionsSuccess]: (state, { payload }) => {
    return { ...state, transactions: payload.transactions, date: payload.date };
  },
});

const brief = createReducer([], {
  // [actions.fetchBriefRequest]: () => false,
  [actions.fetchBriefSuccess]: (_, { payload }) => payload,
  [actions.fetchBriefError]: () => false,
});

export default combineReducers({
  transactionsReducer,
  brief,
});
