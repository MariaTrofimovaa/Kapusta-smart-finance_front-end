import { createAction } from "@reduxjs/toolkit";

const getAllForMonthExpenseRequest = createAction(
  "report/getAllForMonthExpenseRequest"
);
const getAllForMonthExpenseSuccess = createAction(
  "report/getAllForMonthExpenseSuccess"
);
const getAllForMonthExpenseError = createAction(
  "report/getAllForMonthExpenseError"
);

const getAllForMonthIncomeRequest = createAction(
  "report/getAllForMonthIncomeRequest"
);
const getAllForMonthIncomeSuccess = createAction(
  "report/getAllForMonthIncomeSuccess"
);
const getAllForMonthIncomeError = createAction(
  "report/getAllForMonthIncomeError"
);
const setActiveAction = createAction(
  "report/setActive"
);

export {
  getAllForMonthExpenseRequest,
  getAllForMonthExpenseSuccess,
  getAllForMonthExpenseError,
  getAllForMonthIncomeRequest,
  getAllForMonthIncomeSuccess,
  getAllForMonthIncomeError,
  setActiveAction
};
