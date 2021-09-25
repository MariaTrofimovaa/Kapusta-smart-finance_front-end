import { createReducer } from "@reduxjs/toolkit";
import initState from "./balance.initstate";
import actions from "./balance.actions";
import transactionsActions from "../transactions/transactions.actions";
import {
  getCurrentUserSuccess,
  loginSuccess,
  logoutSuccess,
} from "../auth/auth.actions";

const balanceReducer = createReducer(initState, {
  [actions.setBalanceSuccess]: (state, { payload }) => {
    return { ...state, balance: payload.updatedBalance };
  },

  [loginSuccess]: (_, { payload }) => ({
    balance: payload.balance,
  }),
  // баланс в сторе появляется после успешной авторизации и получения данных пользователя
  [getCurrentUserSuccess]: (state, { payload }) => {
    return { ...state, balance: payload.balance };
  },
  // баланс в сторе обновляется так же при добавлении/удалении транзакций
  [transactionsActions.addTransactionSuccess]: (state, { payload }) => {
    payload.transactionType === "expense"
      ? (state.balance = state.balance - payload.amount)
      : (state.balance = state.balance + payload.amount);

    // return { ...state, balance: payload.updatedBalance};
  },
  [transactionsActions.deleteTransactionSuccess]: (state, { payload }) => {
    // console.log("balance reducer, delete transaction. Payload:", payload);
    payload.transactionType === "expense"
      ? (state.balance = state.balance + payload.amount)
      : (state.balance = state.balance - payload.amount);

    // return { ...state, balance: payload.updatedBalance };
  },

  [logoutSuccess]: (_, __) => initState,
});

export default balanceReducer;
