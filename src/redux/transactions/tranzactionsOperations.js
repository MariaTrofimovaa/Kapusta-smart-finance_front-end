import axios from "axios";

import {
  fetchBriefRequest,
  fetchBriefSuccess,
  fetchBriefError,
} from "./tranzactionsActions";

export const fetchBrief =
  ({ type, startdate, finishdate }) =>
  // (data) =>
  (dispatch) => {
    dispatch(fetchBriefRequest());

    return (
      axios
        // .get("http://localhost:3000/api/v1/transactions/brief", data)
        // .get(
        // `http://localhost:3000/api/v1/transactions/brief/?type=${type}&startdate=${startdate}&finishdate=${finishdate}`
        //)
        .get(`http://localhost:3000/api/v1/transactions/brief/?type=${type}`)
        .then((data) => dispatch(fetchBriefSuccess(data.data.data.allIncomes)))
        .catch((error) => dispatch(fetchBriefError(error.message)))
    );
  };
