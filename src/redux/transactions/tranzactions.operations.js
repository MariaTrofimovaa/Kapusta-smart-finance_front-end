import axios from "axios";
import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from "./tranzactions.actions";

axios.defaults.baseURL = "http://localhost:4000/api/v1/transactions";

const addTransaction = (date, description, amount, category) => (dispatch) => {
  const transaction = { date, description, amount, category };

  dispatch(addTransactionRequest());

  axios
    .post("/expense", transaction)
    .then((response) => {
      console.log(response);
      dispatch(addTransactionSuccess(response.data.data.addedExpense));
    })
    .catch((error) => dispatch(addTransactionError(error.message)));
};

export { addTransaction };
