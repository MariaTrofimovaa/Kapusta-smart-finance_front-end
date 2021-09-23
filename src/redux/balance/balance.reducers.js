import { createReducer } from "@reduxjs/toolkit";
import initState from "./balance.initstate";
import actions from "./balance.actions";
import transactionsActions from "../transactions/transactions.actions";


const balanceReducer = createReducer(initState, {  
  [actions.addBalanceSuccess]: (state, { payload }) => {
    return { ...state, balance: payload };
  },
  [actions.getBalanceSuccess]: (state, { payload }) => {
    return { ...state, balance: payload };
  },
  // баланс в сторе обновляется так же при добавлении/удалении транзакций
   [transactionsActions.addTransactionSuccess]: (state, { payload }) => {
    return { ...state, balance: payload.updatedBalance.balance};
  },
  [transactionsActions.deleteTransactionSuccess]: (state, { payload }) => {
    return { ...state, balance: payload.updatedBalance.balance };
  }, 
});

export default balanceReducer;