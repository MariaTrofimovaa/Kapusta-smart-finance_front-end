import { createReducer } from "@reduxjs/toolkit";
import getSelectedDate from "./date.actions";
import moment from "moment";

const currDate = moment().format("DD.MM.YYYY");

const selectedDateReducer = createReducer(
  { selectedDate: currDate },
  {
    [getSelectedDate]: (state, { payload }) => {
      return { selectedDate: payload };
    },
  }
);

export default selectedDateReducer;
