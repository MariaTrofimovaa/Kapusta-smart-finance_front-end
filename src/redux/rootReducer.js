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

const screenWidthPersistConfig = {
  key: "screenWidth",
  storage,
  whitelist: ["location"],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);
const persistScreenWidthReducer = persistReducer(
  screenWidthPersistConfig,
  screenWidth
);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  balance: balanceReducer,
  report: reportReducer,
  transactions,
  selectedDate: selectedDateReducer,
  screenWidth: persistScreenWidthReducer,
});

export default rootReducer;
