import axios from "axios";
import {
  getAllForMonthExpenseRequest,
  getAllForMonthExpenseSuccess,
  getAllForMonthExpenseError,
  getAllForMonthIncomeRequest,
  getAllForMonthIncomeSuccess,
  getAllForMonthIncomeError,
  setActiveAction,
} from "./report.actions";

const expense = "Расходы";
const income = "Доходы";

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
  const authToken = getState().auth.token; /// когда будет готов аутх
  try {
    token.set(authToken); /// когда будет готов аутх
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/transactions/expense/${month}`
    );
    dispatch(getAllForMonthExpenseSuccess(data));
  } catch (error) {
    dispatch(getAllForMonthExpenseError(error));
  }
};

const getAllIncomeOfMonth = (month) => async (dispatch, getState) => {
  dispatch(getAllForMonthIncomeRequest());
  const authToken = getState().auth.token; /// когда будет готов аутх
  try {
    token.set(authToken); /// когда будет готов аутх
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/transactions/income/${month}`
    );
    dispatch(getAllForMonthIncomeSuccess(data));
  } catch (error) {
    dispatch(getAllForMonthIncomeError(error));
  }
};

const setActiveCategori = (data) => (dispatch) => {
  dispatch(setActiveAction(data));
};

export { getAllExpenseOfMonth, getAllIncomeOfMonth, setActiveCategori };
