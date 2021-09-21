import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./transactions.actions";

// const transactionsReducer = createReducer([], {
//   [actions.addTransactionSuccess]: (state, { payload }) => {
//     return { ...state, transactions: payload.transactions, date: payload.date };
//   },
//   [actions.deleteTransactionSuccess]: (state, { payload }) => {
//     return state.filter(({ _id }) => _id !== payload);
//   },

//   [actions.getTransactionsSuccess]: (state, { payload }) => {
//     return { ...state, transactions: payload.transactions, date: payload.date };
//   },
// });

// const balanceReducer = createReducer([], {
//   [actions.addBalanceRequest]: (state, { payload }) => {
//     return { ...state, transactions: payload.transactions, date: payload.date };
//   },
//   [actions.getBalanceSuccess]: (state, { payload }) => {
//     return { ...state, transactions: payload.transactions, date: payload.date };
//   },
// });

const transactionsReducer = createReducer([], {
  [actions.addTransactionRequest]: (state) => {
    return state
  },
  [actions.addTransactionSuccess]: (state, { payload }) => {
    return [...state, payload];
  },

  [actions.deleteTransactionSuccess]: (state, { payload }) => {
    return state.filter(({ _id }) => _id !== payload);
  },

  // [actions.deleteProductSuccess]: (state, { payload }) => ({
  //   ...state,
  //   eatenProducts: state.eatenProducts.filter(
  //     (product) => product.id !== payload.eatenProductId
  //   ),
  // }),

  // [actions.getDayInfoSuccess]: (state, { payload }) => {
  //   if (typeof payload.eatenProducts === "undefined") {
  //     return {...state, eatenProducts: []};
  //   }

  //   return {
  //     ...state,
  //     eatenProducts: payload.eatenProducts,
  //     id: payload.id,
  //   };
  // },
});

const brief = createReducer(
  {},
  // { income: [], expence: [] },
  {
    // [actions.fetchBriefRequest]: () => false,
    [actions.fetchBriefSuccess]: (state, { payload }) => payload,
    // [actions.fetchBriefSuccess]: (state, { payload }) =>
    //   Object.assign(state, payload),
    // [actions.fetchBriefError]: () => false,
  }
);

export default combineReducers({
  // balanceReducer,
  list: transactionsReducer,
  brief,
});
