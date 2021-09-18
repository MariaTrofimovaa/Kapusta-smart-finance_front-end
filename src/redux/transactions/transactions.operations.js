import axios from "axios";
import transactionsActions from "./transactions.actions";

const url = "http://localhost:3001/api/v1/transactions";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDMzMzUwZDNiNWFlNDJkNDFiMTU5YyIsImlhdCI6MTYzMTgwMjkwM30.RvxVmRp4BNM-mK-svSOrQii667zLI_51iGLlQNdLozs';

axios.default.baseURL = url;

const addTransactionOperation = (transactionData) => (dispatch) => {
  //const token=store.getState().auth.token;

  dispatch(transactionsActions.addTransactionRequest());

  const addTransactionEndpoint = transactionData.transactionType === 'income' ? 'income' : 'expense';

  axios
    .post(`${url}/${addTransactionEndpoint}`, transactionData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      dispatch(transactionsActions.addTransactionSuccess(data));
    })
    .catch((error) => {
      dispatch(transactionsActions.addTransactionError(error));
    });
};

const getTransactionsOperation = (date) => (dispatch) => {
  //const token=store.getState().auth.token;
  
  dispatch(transactionsActions.getTransactionsRequest());
  axios
    .get(`${url}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      dispatch(transactionsActions.getTransactionsSuccess(data));
    })
    .catch((error) => {
      dispatch(transactionsActions.getTranasctionsError(error));
    });
};

const fetchBrief =
  ({ type, startdate, finishdate }) =>
  // (data) =>
  (dispatch) => {
    dispatch(transactionsActions.fetchBriefRequest());

    return (
      axios
        // .get("http://localhost:3000/api/v1/transactions/brief", data)
        // .get(
        // `http://localhost:3000/api/v1/transactions/brief/?type=${type}&startdate=${startdate}&finishdate=${finishdate}`
        //)
        .get(`http://localhost:3000/api/v1/transactions/brief/?type=${type}`)
        .then((data) =>
          dispatch(
            transactionsActions.fetchBriefSuccess(data.data.data.allIncomes)
          )
        )
        .catch((error) =>
          dispatch(transactionsActions.fetchBriefError(error.message))
        )
    );
  };

const transactionsOperations = {
  addTransactionOperation,
  getTransactionsOperation,
  fetchBrief,
};

export default transactionsOperations;