// http://localhost:4000/api/v1/transactions/Расходы/09.2021
// http://localhost:4000/api/v1/transactions/Доходы/09.2021

import axios from "axios";
import {
  getAllForMonthExpenseRequest,
  getAllForMonthExpenseSuccess,
  getAllForMonthExpenseError,
  getAllForMonthIncomeRequest,
  getAllForMonthIncomeSuccess,
  getAllForMonthIncomeError,
} from "./report.actions";

import { alertError, alertSuccess } from "../../shared/reactAlert";

const expense = "Расходы";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const getAllExpenseOfMonth = (month) => async (dispatch, getState) => {
  dispatch(getAllForMonthExpenseRequest());
  //   const authToken = getState().auth.token; /// когда будет готов аутх
  try {
    // token.set(authToken);  /// когда будет готов аутх
    token.set(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDcwNDZjNGI1ZDE0MmNjYzE3MWNjMCIsImlhdCI6MTYzMjA0NDE0OH0.IB09YIw4a7HUrrOMQ3HOyhFOTp3wz6kPox-nh2-4v_c"
    );
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/transactions/${expense}/${month}`
    );

    dispatch(getAllForMonthExpenseSuccess(data));
    // alertSuccess("данные report.expense обновились");
  } catch (error) {
    // alertError(error.message);
    dispatch(getAllForMonthExpenseError(error));
  }
};

const getAllIncomeOfMonth = (month) => async (dispatch) => {
  dispatch(getAllForMonthIncomeRequest());
  //   const authToken = getState().auth.token; /// когда будет готов аутх
  try {
    // token.set(authToken);  /// когда будет готов аутх
    token.set(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDcwNDZjNGI1ZDE0MmNjYzE3MWNjMCIsImlhdCI6MTYzMjA0NDE0OH0.IB09YIw4a7HUrrOMQ3HOyhFOTp3wz6kPox-nh2-4v_c"
    );
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/transactions/Доходы/${month}`
    );

    dispatch(getAllForMonthIncomeSuccess(data));
    // alertSuccess("данные report.income обновились");
  } catch (error) {
    // alertError(error.message);
    dispatch(getAllForMonthIncomeError(error));
  }
};

export { getAllExpenseOfMonth, getAllIncomeOfMonth };
