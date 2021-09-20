import React from "react";
import { useState } from "react";
import Calendar from "../enterForm/calendar/Calendar";
// import EnterForm from "../enterForm/enterForm/EnterForm";
import TableTransactions from "../tableTransactions/TableTransactions";
import Brief from "../brief/Brief";

import styles from "./BasicField.module.css";
import BasicFieldTab from "./BasicFieldTab";
import { useMediaQuery } from "../../shared/hooks/mediaRulesHook";

const BasicField = () => {
  const isPageWideLaptop = useMediaQuery("(min-width: 1280px)");
  const isPageWideMobile = useMediaQuery("(max-width: 767px)");
  const isPageWideTablet = !isPageWideLaptop && !isPageWideMobile;
  const [income, setIncome] = useState(false);
  // console.log("isPageWideLaptop", isPageWideLaptop);
  // console.log("isPageWideMobile", isPageWideMobile);
  // console.log("isPageWideTablet", isPageWideTablet);

  return (
    <>
      {isPageWideLaptop && (
        <div>
          {!income ? (
            <>
              <div className={styles.btnWrapper}>
                <BasicFieldTab text={"Расход"} active={true} />
                <BasicFieldTab
                  text={"Доход"}
                  active={false}
                  tabToggle={() => setIncome(!income)}
                />
              </div>
              <div className={styles.dataField}>
                <div className={styles.dataWrapper}>
                  <Calendar />
                  {/* <EnterForm /> */}
                </div>
                <div className={styles.dataWrapper}>
                  <TableTransactions />
                  <Brief />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.btnWrapper}>
                <BasicFieldTab
                  text={"Расход"}
                  active={false}
                  tabToggle={() => setIncome(!income)}
                />
                <BasicFieldTab text={"Доход"} active={true} />
              </div>
              <div className={styles.dataField}></div>
            </>
          )}
        </div>
      )}
      {isPageWideTablet && (
        <div>
          {!income ? (
            <>
              <div className={styles.btnWrapper}>
                <BasicFieldTab text={"Расход"} active={true} />
                <BasicFieldTab
                  text={"Доход"}
                  active={false}
                  tabToggle={() => setIncome(!income)}
                />
              </div>
              <div className={styles.dataField}>
                <Calendar />
                {/* <EnterForm /> */}

                <div className={styles.dataWrapper}>
                  <TableTransactions />
                </div>
              </div>
              <Brief />
            </>
          ) : (
            <>
              <div className={styles.btnWrapper}>
                <BasicFieldTab
                  text={"Расход"}
                  active={false}
                  tabToggle={() => setIncome(!income)}
                />
                <BasicFieldTab text={"Доход"} active={true} />
              </div>
              <div className={styles.dataField}></div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default BasicField;
