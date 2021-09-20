import React from "react";
import { useLocation } from "react-router-dom";
import Calendar from "../enterForm/calendar/Calendar";
import TableTransactions from "../tableTransactions/TableTransactions";
import Brief from "../brief/Brief";

import styles from "./BasicField.module.css";
import BasicFieldTab from "./BasicFieldTab";
import { useMediaQuery } from "../../shared/hooks/mediaRulesHook";

const BasicField = () => {
  const isPageWideLaptop = useMediaQuery("(min-width: 1280px)");
  const isPageWideMobile = useMediaQuery("(max-width: 767px)");
  const isPageWideTablet = !isPageWideLaptop && !isPageWideMobile;
  const location = useLocation().pathname;
  console.log(location);
  return (
    <>
      {isPageWideLaptop && (
        <div>
          <div className={styles.btnWrapper}>
            <BasicFieldTab text={"Расход"} link={"/expences"} key="Расход" />
            <BasicFieldTab text={"Доход"} link={"/income"} key="Доход" />
          </div>
          <div className={styles.dataField}>
            <div className={styles.dataWrapper}>
              <Calendar currentLocation={location} />
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
            <BasicFieldTab
              text={"Расход"}
              active={true}
              link={"/expences"}
              key="Расход"
            />
            <BasicFieldTab
              text={"Доход"}
              active={false}
              link={"/income"}
              key="Доход"
            />
          </div>
          <div className={styles.dataField}>
            <Calendar currentLocation={location} />
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
