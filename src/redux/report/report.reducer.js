import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getAllForMonthExpenseRequest,
  getAllForMonthExpenseSuccess,
  getAllForMonthExpenseError,
  getAllForMonthIncomeRequest,
  getAllForMonthIncomeSuccess,
  getAllForMonthIncomeError,
  setActiveExpenseAction,
  setActiveIncomeAction,
  refreshExpenses,
} from "./report.actions";
import { logoutSuccess } from "../auth/auth.actions";

const handleError = (_, action) => action.payload.message;
const clearError = () => null;

const error = createReducer(null, {
  [getAllForMonthExpenseRequest]: clearError,
  [getAllForMonthExpenseError]: handleError,
  [getAllForMonthIncomeRequest]: clearError,
  [getAllForMonthIncomeError]: handleError,
});

const expenseOfMonth = createReducer([], {
  [refreshExpenses]: (state, { payload }) => payload,
  [setActiveExpenseAction]: (state, { payload }) => payload,
  [logoutSuccess]: () => [],
  [getAllForMonthExpenseSuccess]: (state, { payload }) =>
    payload.data.reduce((acc, { category, description, amount }) => {
      const curCategory = acc.find((el) => el.category === category);

      if (!curCategory) {
        if (acc.length >= 1) {
          acc.push({
            category: category,
            categorySum: amount,
            isActive: false,
            types: [
              {
                description: description,
                amount: amount,
              },
            ],
          });
          return acc;
        }
        acc.push({
          category: category,
          categorySum: amount,
          isActive: true,
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
  [setActiveIncomeAction]: (state, { payload }) => payload,
  [logoutSuccess]: () => [],
  [getAllForMonthIncomeSuccess]: (state, { payload }) =>
    payload.data.reduce((acc, { category, description, amount }) => {
      const curCategory = acc.find((el) => el.category === category);
      if (!curCategory) {
        if (acc.length >= 1) {
          acc.push({
            category: category,
            categorySum: amount,
            isActive: false,
            types: [
              {
                description: description,
                amount: amount,
              },
            ],
          });
          return acc;
        }
        acc.push({
          category: category,
          categorySum: amount,
          isActive: true,
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
