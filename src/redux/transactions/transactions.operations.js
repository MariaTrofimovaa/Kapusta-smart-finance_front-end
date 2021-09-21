import {
  addTransactionApi,
  deleteTransactionApi,
  fethcBriefApi,
} from "../../shared/services/api";
import transactionsActions from "./transactions.actions";

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
    // console.log(transaction);

    dispatch(transactionsActions.addTransactionRequest());

    addTransactionApi(transaction)
      .then((payload) => {
        dispatch(transactionsActions.addTransactionSuccess(payload));
      })
      .catch((error) =>
        dispatch(transactionsActions.addTransactionError(error.message))
      );
  };

const deleteTransaction = (objId) => (dispatch) => {
  // console.log('objId :>> ', objId);
  dispatch(transactionsActions.deleteTransactionRequest());

  // axios
  //   .delete(`${url}/:${objId}`)
  deleteTransactionApi(objId)
    .then(() => {
      dispatch(transactionsActions.deleteTransactionSuccess(objId));
    })
    .catch((error) =>
      dispatch(transactionsActions.deleteTransactionError(error.message))
    );
};

const fetchBrief = (filter) => (dispatch) => {
  dispatch(transactionsActions.fetchBriefRequest());

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
};

export default transactionsOperations;
