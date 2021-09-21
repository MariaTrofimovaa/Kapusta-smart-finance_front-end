import { createAction } from "@reduxjs/toolkit";

const getAllForMonthExpenseRequest = createAction(
  "transactions/getAllForMonthExpenseRequest"
);
const getAllForMonthExpenseSuccess = createAction(
  "transactions/getAllForMonthExpenseSuccess"
);
const getAllForMonthExpenseError = createAction(
  "transactions/getAllForMonthExpenseError"
);

const getAllForMonthIncomeRequest = createAction(
  "transactions/getAllForMonthIncomeRequest"
);
const getAllForMonthIncomeSuccess = createAction(
  "transactions/getAllForMonthIncomeSuccess"
);
const getAllForMonthIncomeError = createAction(
  "transactions/getAllForMonthIncomeError"
);

export {
  getAllForMonthExpenseRequest,
  getAllForMonthExpenseSuccess,
  getAllForMonthExpenseError,
  getAllForMonthIncomeRequest,
  getAllForMonthIncomeSuccess,
  getAllForMonthIncomeError,
};
