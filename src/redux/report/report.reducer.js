import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getAllForMonthExpenseRequest,
  getAllForMonthExpenseSuccess,
  getAllForMonthExpenseError,
  getAllForMonthIncomeRequest,
  getAllForMonthIncomeSuccess,
  getAllForMonthIncomeError,
} from "./report.actions";

const handleError = (_, action) => action.payload.message;
const clearError = () => null;

const error = createReducer(null, {
  [getAllForMonthExpenseRequest]: clearError,
  [getAllForMonthExpenseError]: handleError,
  [getAllForMonthIncomeRequest]: clearError,
  [getAllForMonthIncomeError]: handleError,
});

const expenseOfMonth = createReducer([], {
  [getAllForMonthExpenseSuccess]: (state, { payload }) =>
    payload.data.reduce((acc, { category, description, amount }) => {
      const curCategory = acc.find((el) => el.category === category);

      if (!curCategory) {
        acc.push({
          category: category,
          categorySum: amount,
          types: [
            {
              description: description,
              amount: amount,
            },
          ],
        });
        return acc;
      }

      if (curCategory) {
        const idx = acc.findIndex((el) => el.category === category);
        acc[idx].categorySum += amount;
        acc[idx].types.push({
          description: description,
          amount: amount,
        });
        return acc;
      }
    }, []),
});
const incomeOfMonth = createReducer([], {
  [getAllForMonthIncomeSuccess]: (state, { payload }) =>
    payload.data.reduce((acc, { category, description, amount }) => {
      const curCategory = acc.find((el) => el.category === category);

      if (!curCategory) {
        acc.push({
          category: category,
          categorySum: amount,
          types: [
            {
              description: description,
              amount: amount,
            },
          ],
        });
        return acc;
      }

      if (curCategory) {
        const idx = acc.findIndex((el) => el.category === category);
        acc[idx].categorySum += amount;
        acc[idx].types.push({
          description: description,
          amount: amount,
        });
        return acc;
      }
    }, []),
});

export default combineReducers({
  expenseOfMonth,
  incomeOfMonth,
  error,
});
