import { createReducer } from "@reduxjs/toolkit";
import getChangeMonth from "./monthActions";

const changeMonthReducer = createReducer(
{ changeMonth: "" },
{
    [getChangeMonth]: (_, { payload }) => {
    return { changeMonth: payload };
    },
}
);

export default changeMonthReducer;