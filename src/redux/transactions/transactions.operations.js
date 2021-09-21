import axios from "axios";
import { url } from "../../shared/services/api";
import transactionsActions from "./transactions.actions";

// const url = "http://localhost:3001/api/v1/transactions";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDMzMzUwZDNiNWFlNDJkNDFiMTU5YyIsImlhdCI6MTYzMTgwMjkwM30.RvxVmRp4BNM-mK-svSOrQii667zLI_51iGLlQNdLozs";

axios.defaults.baseURL = url;

const addBalanceOperation = (transactionData) => (dispatch) => {
  //const token=store.getState().auth.token;

  dispatch(transactionsActions.addBalanceRequest());

  const addTransactionEndpoint =
    transactionData.transactionType === "income" ? "income" : "expense";

  axios
    .post(`${url}/${addTransactionEndpoint}`, transactionData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      dispatch(transactionsActions.addBalanceSuccess(data));
    })
    .catch((error) => {
      dispatch(transactionsActions.addBalanceError(error));
    });
};

const getBalanceOperation = (date) => (dispatch) => {
  //const token=store.getState().auth.token;

  dispatch(transactionsActions.getBalanceRequest());
  axios
    .get(`${url}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      dispatch(transactionsActions.getBalanceSuccess(data));
    })
    .catch((error) => {
      dispatch(transactionsActions.getBalanceError(error));
    });
};

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

    axios
      .post("/", transaction)
      .then((response) => {
        console.log("..........");
        console.log(response);
        dispatch(
          transactionsActions.addTransactionSuccess(
            response.data.data.addedTransaction
          )
        );
      })
      .catch((error) =>
        dispatch(transactionsActions.addTransactionError(error.message))
      );
  };

const fetchBrief =
  ({ type, year }) =>
  (dispatch) => {
    dispatch(transactionsActions.fetchBriefRequest());
    return axios
      .get(
        `http://localhost:4000/api/v1/transactions/brief/?type=${type}&year=${year}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        const payload = { [type]: data.data.allIncomes };
        dispatch(transactionsActions.fetchBriefSuccess(payload));
      })
      .catch((error) =>
        dispatch(transactionsActions.fetchBriefError(error.message))
      );
  };

const transactionsOperations = {
  addBalanceOperation,
  getBalanceOperation,
  addTransaction,
  fetchBrief,
};

export default transactionsOperations;
