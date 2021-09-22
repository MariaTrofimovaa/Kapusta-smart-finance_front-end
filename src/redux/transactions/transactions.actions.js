import { createAction } from "@reduxjs/toolkit";

const addBalanceRequest = createAction("costs/addBalanceRequest");
const addBalanceSuccess = createAction("costs/addBalanceSuccess");
const addBalanceError = createAction("costs/addBalanceError");

const getBalanceRequest = createAction("costs/getBalanceRequest");
const getBalanceSuccess = createAction("costs/getBalanceSuccess");
const getBalanceError = createAction("costs/getBalanceError");

const addTransactionRequest = createAction(
  "transactions/addTransactionRequest"
);
const addTransactionSuccess = createAction(
  "transactions/addTransactionSuccess"
);
const addTransactionError = createAction("transactions/addTransactionError");

const fetchBriefRequest = createAction("transaction/brief/fetchBriefRequest");
const fetchBriefSuccess = createAction("transaction/brief/fetchBriefSuccess");
const fetchBriefError = createAction("transaction/brief/fetchBriefError");

const deleteTransactionRequest = createAction(
  "transactions/deleteTransactionRequest"
);
const deleteTransactionSuccess = createAction(
  "transactions/deleteTransactionSuccess"
);
const deleteTransactionError = createAction(
  "transactions/deleteTransactionError"
);

const getSelectedDate = createAction("transactions/getSelectedDate");

const transactionsActions = {
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  fetchBriefRequest,
  fetchBriefSuccess,
  fetchBriefError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  getSelectedDate,
};
export default transactionsActions;
