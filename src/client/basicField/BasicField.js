import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Calendar from "../enterForm/calendar/Calendar";
import TableTransactions from "../tableTransactions/TableTransactions";
import Brief from "../brief/Brief";

import styles from "./BasicField.module.css";
import BasicFieldTab from "./BasicFieldTab";
import { useMediaQuery } from "../../shared/hooks/mediaRulesHook";
import EnterForm from "../enterForm/enterForm/EnterForm";

const BasicField = () => {
  const isPageWideLaptop = useMediaQuery("(min-width: 1280px)");
  const isPageWideMobile = useMediaQuery("(max-width: 767px)");
  const isPageWideTablet = !isPageWideLaptop && !isPageWideMobile;

  // const location = useLocation().pathname;
  const { transType } = useParams();

  return (
    <>
      {isPageWideLaptop && (
        <div>
          <div className={styles.btnWrapper}>
            <BasicFieldTab text={"Расход"} link={"/expense"} key="Расход" />
            <BasicFieldTab text={"Доход"} link={"/income"} key="Доход" />
          </div>
          <div className={styles.dataField}>
            <div className={styles.dataWrapper}>
              <Calendar />
              <EnterForm transType={transType} />
            </div>
            <div className={styles.dataWrapper}>
              <TableTransactions />
              <Brief />
            </div>
          </div>
        </div>
      )}
      {isPageWideTablet && (
        <div>
          <div className={styles.btnWrapper}>
            <BasicFieldTab text={"Расход"} link={"/expense"} key="Расход" />
            <BasicFieldTab text={"Доход"} link={"/income"} key="Доход" />
          </div>
          <div className={styles.dataField}>
            <Calendar />
            <EnterForm transType={transType} />
            <div className={styles.dataWrapper}>
              <TableTransactions />
            </div>
          </div>
          <Brief />
        </div>
      )}
      {isPageWideMobile && (
        <div>
          <div className={styles.btnWrapper}>
            <BasicFieldTab text={"Расход"} link={"/expense"} key="Расход" />
            <BasicFieldTab text={"Доход"} link={"/income"} key="Доход" />
          </div>
          <div className={styles.dataField}>
            <Calendar />
            <EnterForm transType={transType} />
            <div className={styles.dataWrapper}>
              <TableTransactions />
            </div>
          </div>
          <Brief />
        </div>
      )}
    </>
  );
};

export default BasicField;
