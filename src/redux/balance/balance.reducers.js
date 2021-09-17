import { createReducer } from "@reduxjs/toolkit";
import initState from "./balance.initstate";
import actions from "./balance.actions";

const balanceReducer = createReducer(initState, {  
  [actions.addBalanceSuccess]: (state, { payload }) => {
    return { ...state, balance: payload };
  },
  [actions.getBalanceSuccess]: (state, { payload }) => {
    return { ...state, balance: payload };
  },
});

export default balanceReducer;