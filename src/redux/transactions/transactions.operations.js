import {
  addTransactionApi,
  deleteTransactionApi,
  fethcBriefApi,
} from "../../shared/services/api";
import transactionsActions from "./transactions.actions";
import axios from "axios";

// const url = "http://localhost:4000/api/v1/transactions";

// const url = "http://localhost:3001/api/v1/transactions";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDMzMzUwZDNiNWFlNDJkNDFiMTU5YyIsImlhdCI6MTYzMTgwMjkwM30.RvxVmRp4BNM-mK-svSOrQii667zLI_51iGLlQNdLozs";

// axios.defaults.baseURL = url;

// const addBalanceOperation = (transactionData) => (dispatch) => {
//   //const token=store.getState().auth.token;

//   dispatch(transactionsActions.addBalanceRequest());

//   const addTransactionEndpoint =
//     transactionData.transactionType === "income" ? "income" : "expense";

//   axios
//     .post(`${url}/${addTransactionEndpoint}`, transactionData, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(({ data }) => {
//       dispatch(transactionsActions.addBalanceSuccess(data));
//     })
//     .catch((error) => {
//       dispatch(transactionsActions.addBalanceError(error));
//     });
// };

// const getBalanceOperation = (date) => (dispatch) => {
//   //const token=store.getState().auth.token;

//   dispatch(transactionsActions.getBalanceRequest());
//   axios
//     .get(`${url}/user`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(({ data }) => {
//       dispatch(transactionsActions.getBalanceSuccess(data));
//     })
//     .catch((error) => {
//       dispatch(transactionsActions.getBalanceError(error));
//     });
// };

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
        dispatch(transactionsActions.addTransactionSuccess(payload));
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
      `http://localhost:4000/api/v1/transactions/day/expense/${date}`
    );
    dispatch(transactionsActions.getExpenseOfDaySuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getExpenseOfDayError(error));
  }
};

const getAllIncomeOfDate = (date) => async (dispatch, getState) => {
  dispatch(transactionsActions.getIncomeOfDayRequest());
  const authToken = getState().auth.token;
  try {
    token.set(authToken);
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/transactions/day/income/${date}`
    );
    dispatch(transactionsActions.getIncomeOfDaySuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getIncomeOfDayError(error));
  }
};

const deleteTransaction = (id) => (dispatch) => {
  dispatch(transactionsActions.deleteTransactionRequest());

  deleteTransactionApi(id)
    .then(({ data }) => {
      // console.log("delete transaction operation, payload:", data);
      dispatch(transactionsActions.deleteTransactionSuccess(data));
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
  // addBalanceOperation,
  // getBalanceOperation,
  addTransaction,
  fetchBrief,
  getAllExpenseOfDate,
  getAllIncomeOfDate,
};

export default transactionsOperations;
