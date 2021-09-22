import { createReducer } from "@reduxjs/toolkit";
import getSelectedDate from "./date.actions";

const selectedDateReducer = createReducer(
  { selectedDate: "" },
  {
    [getSelectedDate]: (state, { payload }) => {
      return { selectedDate: payload };
    },
  }
);

export default selectedDateReducer;