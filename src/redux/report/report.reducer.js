import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getAllForMonthExpenseRequest,
  getAllForMonthExpenseSuccess,
  getAllForMonthExpenseError,
  getAllForMonthIncomeRequest,
  getAllForMonthIncomeSuccess,
  getAllForMonthIncomeError,
  setActiveExpenseAction,
  setActiveIncomeAction,
} from "./report.actions";
import { logoutSuccess } from "../auth/auth.actions";

const handleError = (_, action) => action.payload.message;
const clearError = () => null;

const error = createReducer(null, {
  [getAllForMonthExpenseRequest]: clearError,
  [getAllForMonthExpenseError]: handleError,
  [getAllForMonthIncomeRequest]: clearError,
  [getAllForMonthIncomeError]: handleError,
});

const expenseOfMonth = createReducer([], {
  [setActiveExpenseAction]: (state, { payload }) => payload,
  [logoutSuccess]: () => [],
  [getAllForMonthExpenseSuccess]: (state, { payload }) =>
    payload.data.reduce((acc, { category, description, amount }) => {
      const curCategory = acc.find((el) => el.category === category);

      if (!curCategory) {
        if (acc.length >= 1) {
          acc.push({
            category: category,
            categorySum: amount,
            isActive: false,
            types: [
              {
                description: description,
                amount: amount,
              },
            ],
          });
          return acc;
        }
        acc.push({
          category: category,
          categorySum: amount,
          isActive: true,
          types: [
            {
              description: description,
              amount: amount,
            },
          ],
        });
        return acc;
      }

      if (curCategory) {
        const idx = acc.findIndex((el) => el.category === category);
        acc[idx].categorySum += amount;
        acc[idx].types.push({
          description: description,
          amount: amount,
        });
        return acc;
      }
    }, []),
});
const incomeOfMonth = createReducer([], {
  [setActiveIncomeAction]: (state, { payload }) => payload,
  [logoutSuccess]: () => [],
  [getAllForMonthIncomeSuccess]: (state, { payload }) =>
    payload.data.reduce((acc, { category, description, amount }) => {
      const curCategory = acc.find((el) => el.category === category);
      if (!curCategory) {
        if (acc.length >= 1) {
          acc.push({
            category: category,
            categorySum: amount,
            isActive: false,
            types: [
              {
                description: description,
                amount: amount,
              },
            ],
          });
          return acc;
        }
        acc.push({
          category: category,
          categorySum: amount,
          isActive: true,
          types: [
            {
              description: description,
              amount: amount,
            },
          ],
        });
        return acc;
      }

      if (curCategory) {
        const idx = acc.findIndex((el) => el.category === category);
        acc[idx].categorySum += amount;
        acc[idx].types.push({
          description: description,
          amount: amount,
        });
        return acc;
      }

      // if (curCategory) {
      //   const idx = acc.findIndex((el) => el.category === category);
      //   acc[idx].categorySum += amount;

      //   const idxTypes = acc[idx].types.findIndex(
      //     (el) => el.description === description
      //   );
      //   console.log(idxTypes);
      //   if (idxTypes === -1) {
      //     acc[idx].types.push({
      //       description: description,
      //       amount: amount,
      //     });
      //   }
      //   if (idxTypes === 0 && idxTypes ) {
      //     acc[idx].types[idxTypes].amount += amount;
      //     acc[idx].types[idxTypes].description = description;
      //   }

      //   return acc;
      // }
    }, []),
});

export default combineReducers({
  expenseOfMonth,
  incomeOfMonth,
  error,
});
