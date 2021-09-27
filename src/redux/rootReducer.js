import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth/auth.reducer";
import balanceReducer from "./balance/balance.reducers";
import reportReducer from "./report/report.reducer";
import selectedDateReducer from "./date/dateReducer";
import transactions from "./transactions/transactions.reducer";
import screenWidth from "./screenWidth/screenWidth.reducer";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  balance: balanceReducer,
  report: reportReducer,
  transactions,
  selectedDate: selectedDateReducer,
  screenWidth,
});

export default rootReducer;
