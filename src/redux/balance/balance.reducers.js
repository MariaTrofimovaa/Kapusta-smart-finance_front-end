import { createReducer } from "@reduxjs/toolkit";
import initState from "./balance.initstate";
import actions from "./balance.actions";
import { getCurrentUserSuccess, loginSuccess } from "../auth/auth.actions";

const balanceReducer = createReducer(initState, {  
  [actions.addBalanceSuccess]: (state, { payload }) => {
    return { ...state, balance: payload };
  },
  [actions.getBalanceSuccess]: (state, { payload }) => {
    return { ...state, balance: payload };
  },
/*   [getCurrentUserSuccess]: (state, { payload }) => {
    console.log('login success, payload:', payload);
    return { ...state, loginData: payload };
  },
  [loginSuccess]: (state, { payload }) => {
    console.log('login success, payload:', payload);
    return { ...state, loginData: payload };
  }, */
});

export default balanceReducer;