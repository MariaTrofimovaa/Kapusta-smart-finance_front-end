import {
  addTransactionApi,
  deleteTransactionApi,
  fethcBriefApi,
} from "../../shared/services/api";
import transactionsActions from "./transactions.actions";
import axios from "axios";

const addTransaction =
  (date, description, amount, category, transactionType) => (dispatch) => {
    const transaction = {
      date,
      description,
      amount,
      category,
      transactionType,
    };

    dispatch(transactionsActions.addTransactionRequest());

    addTransactionApi(transaction)
      .then((payload) => {
        dispatch(
          transactionsActions.addTransactionSuccess(payload.addedTransaction)
        );
      })
      .catch((error) =>
        dispatch(transactionsActions.addTransactionError(error.message))
      );
  };

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const getAllExpenseOfDate = (date) => async (dispatch, getState) => {
  dispatch(transactionsActions.getExpenseOfDayRequest());
  const authToken = getState().auth.token;
  try {
    token.set(authToken);
    const { data } = await axios.get(
      `https://kapusta-smart-finance.herokuapp.com/api/v1/transactions/day/expense/${date}`
    );
    dispatch(transactionsActions.getExpenseOfDaySuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getExpenseOfDayError(error.message));
  }
};

const getAllIncomeOfDate = (date) => async (dispatch, getState) => {
  dispatch(transactionsActions.getIncomeOfDayRequest());
  const authToken = getState().auth.token;
  try {
    token.set(authToken);
    const { data } = await axios.get(
      `https://kapusta-smart-finance.herokuapp.com/api/v1/transactions/day/income/${date}`
    );
    dispatch(transactionsActions.getIncomeOfDaySuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getIncomeOfDayError(error.message));
  }
};

const deleteTransaction = (id) => (dispatch) => {
  dispatch(transactionsActions.deleteTransactionRequest());

  deleteTransactionApi(id)
    .then(({ data }) => {
      dispatch(transactionsActions.deleteTransactionSuccess(data.transaction));
    })
    .catch((error) =>
      dispatch(transactionsActions.deleteTransactionError(error.message))
    );
};

const fetchBrief = (filter) => (dispatch, getState) => {
  dispatch(transactionsActions.fetchBriefRequest());

  const authToken = getState().auth.token;
  token.set(authToken);

  fethcBriefApi(filter)
    .then((payload) => {
      dispatch(transactionsActions.fetchBriefSuccess(payload));
    })
    .catch((error) =>
      dispatch(transactionsActions.fetchBriefError(error.message))
    );
};

const transactionsOperations = {
  deleteTransaction,
  addTransaction,
  fetchBrief,
  getAllExpenseOfDate,
  getAllIncomeOfDate,
};

export default transactionsOperations;
