import { createAction } from "@reduxjs/toolkit";

const addTransactionRequest = createAction("costs/addBalanceRequest");
const addTransactionSuccess = createAction("costs/addBalanceSuccess");
const addTransactionError = createAction("costs/addBalanceError");

const getTransactionsRequest = createAction("costs/getBalanceRequest");
const getTransactionsSuccess = createAction("costs/getBalanceSuccess");
const getTranasctionsError = createAction("costs/getBalanceError");

const fetchBriefRequest = createAction("transaction/brief/fetchBriefRequest");
const fetchBriefSuccess = createAction("transaction/brief/fetchBriefSuccess");
const fetchBriefError = createAction("transaction/brief/fetchBriefError");

const transactionsActions = {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  getTransactionsRequest,
  getTransactionsSuccess,
  getTranasctionsError,
  fetchBriefRequest,
  fetchBriefSuccess,
  fetchBriefError,
};
export default transactionsActions;
