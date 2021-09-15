import { createReducer } from "@reduxjs/toolkit";
import initState from "./balance.initstate";
import actions from "./balance.actions";

const balanceReducer = createReducer(initState, {
  [actions.addCostSuccess]: (state, { payload }) => {
    return {
      ...state,
      costs: [...state.costs, ...[payload.costs]],
      balance: payload.balance
    };
  },
  [actions.deleteCostSuccess]: (state, { payload }) => {
    return {
      ...state,
      costs: state.costs.filter(({ _id }) => _id !== payload.id),
      balance: payload.balance,
    };
  },
  [actions.getCostByDateSuccess]: (state, { payload }) => {
    return { ...state, costs: payload.data };
  },
  [actions.addProfitSuccess]: (state, { payload }) => {
    return {
      ...state,
      profits: [...state.profits, ...[payload.profits]],
      // profits: [...state.profits],
      balance: payload.balance
    };
  },
  [actions.deleteProfitSuccess]: (state, { payload }) => {
    return {
      ...state,
      profits: state.profits.filter(({ _id }) => _id !== payload.id),
      balance: payload.balance,
    };
  },
  [actions.getProfitByDateSuccess]: (state, { payload }) => {
    return { ...state, profits: payload.data };
  },
  [actions.addBalanceSuccess]: (state, { payload }) => {
    return { ...state, balance: +payload };
  },
  [actions.getBalanceSuccess]: (state, { payload }) => {
    return { ...state, balance: payload };
  },
});

export default balanceReducer;