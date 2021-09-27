import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./transactions.actions";
import balanceActions from "../balance/balance.actions";
import { logoutSuccess } from "../auth/auth.actions";

const brief = createReducer(
  { income: [], expense: [], currentYear: "" },
  {
    [actions.fetchBriefSuccess]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),

    [actions.addTransactionSuccess]: (state, { payload }) => {
      if (state.currentYear === +payload.date.slice(6))
        state[payload.transactionType].push(payload);
    },

    [actions.deleteTransactionSuccess]: (state, { payload }) => {
      state[payload.transactionType] = state[payload.transactionType].filter(
        ({ _id }) => _id !== payload._id
      );
    },

    [actions.changeActualYearForBrief]: (_, { payload }) => ({
      income: [],
      expense: [],
      currentYear: payload,
    }),

    [logoutSuccess]: (_, __) => ({
      income: [],
      expense: [],
      currentYear: "",
    }),
  }
);

const expenseOfDay = createReducer([], {
  [actions.addTransactionSuccess]: (state, { payload }) => {
    payload.transactionType === "expense" && state.push(payload);
  },

  [actions.getExpenseOfDaySuccess]: (_, { payload }) => payload.data,

  [balanceActions.setBalanceSuccess]: (state, { payload }) =>
    payload.addedTransaction.transactionType === "expense"
      ? [...state, payload.addedTransaction]
      : [...state],

  [actions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload._id),
});

const incomeOfDay = createReducer([], {
  [actions.addTransactionSuccess]: (state, { payload }) => {
    payload.transactionType === "income" && state.push(payload);
  },

  [actions.getIncomeOfDaySuccess]: (_, { payload }) => payload.data,

  [balanceActions.setBalanceSuccess]: (state, { payload }) => {
    return payload.addedTransaction.transactionType === "income"
      ? [...state, payload.addedTransaction]
      : [...state];
  },

  [actions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload._id),
});

export default combineReducers({
  brief,
  expenseOfDay,
  incomeOfDay,
});
