import React, { useEffect } from "react";

import Calendar from "../enterForm/calendar/Calendar";
import TableTransactions from "../tableTransactions/TableTransactions";
import Brief from "../brief/Brief";

import BasicFieldTab from "./BasicFieldTab";
import { useMediaQuery } from "../../shared/hooks/mediaRulesHook";
import EnterForm from "../enterForm/enterForm/EnterForm";
import setSelectedDate from "../../redux/date/date.actions";
import action from "../../redux/transactions/transactions.actions";
import { useDispatch, useSelector } from "react-redux";

import transactionsOperations from "../../redux/transactions/transactions.operations";

import { getSelectedDate } from "../../redux/date/date.selectors";


import styles from "./BasicField.module.scss";

const BasicField = () => {
  const isPageWideLaptop = useMediaQuery("(min-width: 1280px)");
  const isPageWideMobile = useMediaQuery("(max-width: 767px)");
  const isPageWideTablet = !isPageWideLaptop && !isPageWideMobile;
  const dispatch = useDispatch();
    const refreshDate = new Date();
  useEffect(() => {
    dispatch(
      setSelectedDate(
        refreshDate.toISOString().slice(0, 10).split("-").reverse().join(".")
      )
    );
  }, []);

  useEffect(() => {
    dispatch(action.changeActualYearForBrief(refreshDate.getFullYear()));
  }, []);

  const date = useSelector(getSelectedDate);
  useEffect(() => {
    dispatch(transactionsOperations.getAllIncomeOfDate(date));
    dispatch(transactionsOperations.getAllExpenseOfDate(date));
  }, [date]);

  return (
    <>
      <div>
        <div className={styles.btnWrapper}>
          <BasicFieldTab text={"Расход"} link={"/expense"} key="Расход" />
          <BasicFieldTab text={"Доход"} link={"/income"} key="Доход" />
        </div>

        {isPageWideLaptop && (
          <div className={styles.dataField}>
            <div className={styles.enterFormWrapper}>
              <Calendar />
              <EnterForm />
            </div>
            <div className={styles.dataWrapper}>
              <TableTransactions />
              <Brief />
            </div>
          </div>
        )}
        {isPageWideTablet && (
          <>
            <div className={styles.dataField}>
              <div className={styles.enterFormWrapper}>
                <Calendar />
                <EnterForm />
              </div>
              <div className={styles.dataWrapper}>
                <TableTransactions />
              </div>
            </div>
            <Brief />
          </>
        )}
      </div>
    </>
  );
};

export default BasicField;
