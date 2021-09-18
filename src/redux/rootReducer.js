import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth/auth.reducer";
import balanceReducer from "./balance/balance.reducers";
import { transactionsReducer } from "./transactions/tranzactions.reducer";
// import balance from "./balance/balance.reducer"
// import transactions from "./transactions/transactions.reducer"
// import report from "./report/report.reducer";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  balance: balanceReducer,
  transactions: transactionsReducer,

  // transactions,
  // report,
});

export default rootReducer;
