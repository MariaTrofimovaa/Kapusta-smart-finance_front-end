import { createAction } from "@reduxjs/toolkit";

export const fetchBriefRequest = createAction("transaction/brief/fetchBriefRequest");
export const fetchBriefSuccess = createAction("transaction/brief/fetchBriefSuccess");
export const fetchBriefError = createAction("transaction/brief/fetchBriefError");
