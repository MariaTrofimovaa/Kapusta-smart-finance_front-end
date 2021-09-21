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
  [getAllForMonthExpenseSuccess]: (state, { payload }) => payload.data,
});
const incomeOfMonth = createReducer([], {
  [getAllForMonthIncomeSuccess]: (state, { payload }) => payload.data,
});

export default combineReducers({
  expenseOfMonth,
  incomeOfMonth,
  error,
});
