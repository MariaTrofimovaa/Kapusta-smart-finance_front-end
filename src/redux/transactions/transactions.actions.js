import { createAction } from "@reduxjs/toolkit";

const addTransactionRequest = createAction("costs/addBalanceRequest");
const addTransactionSuccess = createAction("costs/addBalanceSuccess");
const addTransactionError = createAction("costs/addBalanceError");

const getTransactionsRequest = createAction("costs/getBalanceRequest");
const getTransactionsSuccess = createAction("costs/getBalanceSuccess");
const getTranasctionsError = createAction("costs/getBalanceError");

const transactionsActions = {
    addTransactionRequest,
    addTransactionSuccess,
    addTransactionError,
    getTransactionsRequest,
    getTransactionsSuccess,
    getTranasctionsError,
};

export default transactionsActions;