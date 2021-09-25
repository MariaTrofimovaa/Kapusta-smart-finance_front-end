import { createReducer } from "@reduxjs/toolkit";
import { setScreenWidth } from "./screenWidth.action";

 const screenWidthReducer = createReducer(0, {
  [setScreenWidth]: (state, { payload }) => payload,
});

export default screenWidthReducer;