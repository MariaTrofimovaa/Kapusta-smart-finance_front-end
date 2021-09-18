import { createReducer } from "@reduxjs/toolkit";
import { addTransactionSuccess } from "./tranzactions.actions";

const transactionsReducer = createReducer(
  { transactions: [] },
  {
    [addTransactionSuccess]: (state, { payload }) => {
      console.log(payload);
      // const transactions = [...state.transactions, payload.addedExpense];

      //   if ("newDay" in payload) {
      //     return {
      //       ...state,
      //       id: payload.newDay.id,
      //       eatenProducts,
      //     };
      //   }
      return {
        ...state,
        transactions: [...state.transactions, payload],
      };
    },

    // [deleteProductSuccess]: (state, { payload }) => ({
    //   ...state,
    //   eatenProducts: state.eatenProducts.filter(
    //     (product) => product.id !== payload.eatenProductId
    //   ),
    // }),

    // [getDayInfoSuccess]: (state, { payload }) => {
    //   if (typeof payload.eatenProducts === "undefined") {
    //     return {...state, eatenProducts: []};
    //   }

    //   return {
    //     ...state,
    //     eatenProducts: payload.eatenProducts,
    //     id: payload.id,
    //   };
    // },
  }
);

// const selectedDateReducer = createReducer([], {
//   [getSelectedDay]: (state, { payload }) => [payload],
// });

// const getDayInfoReducer = createReducer(
//   { id: "", eatenProducts: [] },
//   {
//     [getDayInfoSuccess]: (state, { payload }) => payload,
//   }
// );

export { transactionsReducer };
