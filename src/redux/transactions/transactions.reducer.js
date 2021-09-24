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
    return state;
  },
  [actions.addTransactionSuccess]: (state, { payload }) => {
    console.log(">>>>", payload);
    return [...state, payload.addedTransaction]; // Света: так как после обновления транзакции в payload к нам приходят и транзакция и обновленный баланс,
    // то здесь нам нужно брать только данные по транзакции (payload.addedTransaction)
  },
  // transactions: payload.transactions.brief.expense.data,

  [actions.deleteTransactionSuccess]: (state, { payload }) => {
    return state.filter(({ _id }) => _id !== payload._id);
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
      if (state.currentYear === +payload.date.slice(6))
        state[payload.transactionType].filter(({ _id }) => _id !== payload._id);
    },

    [actions.changeActualYearForBrief]: (_, { payload }) => ({
      income: [],
      expense: [],
      currentYear: payload,
    }),
    // [actions.fetchBriefError]: () => false,
  }
);

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

const incomeOfDay = createReducer([], {
  [actions.addTransactionSuccess]: (state, { payload }) => [...state, payload],
  [actions.getIncomeOfDaySuccess]: (state, { payload }) => payload.data,
  [actions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload._id),
});

export default combineReducers({
  // balanceReducer,
  list: transactionsReducer,
  brief,
  expenseOfDay,
  incomeOfDay,
});
