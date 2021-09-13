import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import auth from "./auth/auth.reducer";
// import balance from "./balance/balance.reducer"
// import tranzactions from "./tranzactions/tranzactions.reducer"
// import report from "./report/report.reducer";
// import error from "./error/error.reducer";
// import isLoading from "./isLoading/isLoading.reducer"

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(persistConfig, auth);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  // balance,
  // tranzactions,
  // report,
  // error,
  // isLoading,
});

export default rootReducer;
