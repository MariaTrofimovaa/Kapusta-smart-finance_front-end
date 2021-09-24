// import axios from "axios";
// import {
//   addTransactionRequest,
//   addTransactionSuccess,
//   addTransactionError,
// } from "./tranzactions.actions";

// axios.defaults.baseURL = "http://localhost:4000/api/v1/transactions";

// const addTransaction =
//   (date, description, amount, category, transactionType) => (dispatch) => {
//     const transaction = {
//       date,
//       description,
//       amount,
//       category,
//       transactionType,
//     };

//     dispatch(addTransactionRequest());

//     axios
//       .post("/", transaction)
//       .then((response) => {
//         console.log("..........");
//         console.log(response);
//         dispatch(addTransactionSuccess(response.data.data.addedTransaction));
//       })
//       .catch((error) => dispatch(addTransactionError(error.message)));
//   };

// export { addTransaction };
