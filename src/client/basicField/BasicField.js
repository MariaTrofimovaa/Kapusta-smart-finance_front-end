import React from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/goBack.svg";

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

  const { transType } = useParams();

  return (
    <>
      {isPageWideMobile ? (
        <div>
          <div className={styles.returnLinkWrapper}>
            <Link to={"/mob"} className={styles.returnLink}>
              <Arrow className={styles.returnLink} />
            </Link>
          </div>
          {/* <div className={styles.dataField}> */}
          <EnterForm transType={transType} />
          {/* </div> */}
        </div>
      ) : (
        <div>
          <div className={styles.btnWrapper}>
            <BasicFieldTab text={"Расход"} link={"/expense"} key="Расход" />
            <BasicFieldTab text={"Доход"} link={"/income"} key="Доход" />
          </div>
          {isPageWideLaptop && (
            <div className={styles.dataField}>
              <div className={styles.enterFormWrapper}>
                <Calendar />
                <EnterForm transType={transType} />
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
                <Calendar />
                <EnterForm transType={transType} />

                <div className={styles.dataWrapper}>
                  <TableTransactions />
                </div>
              </div>
              <Brief />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default BasicField;

// Алена. Временный компонент, чтобы делать разметку на мобилке
// {isPageWideMobile && (
//   <div>
//     {/* <div className={styles.btnWrapper}>
//       <BasicFieldTab
//         text={"Расход"}
//         active={true}
//         link={"/expense"}
//         key="Расход"
//       />
//       <BasicFieldTab
//         text={"Доход"}
//         active={false}
//         link={"/income"}
//         key="Доход"
//       />
//     </div> */}
//     <div className={styles.dataField}>
//       {/* <Calendar /> */}
//       {/* <EnterForm transType={transType} /> */}
//       <EnterForm transType={location} />
//       {/* <div className={styles.dataWrapper}>
//         <TableTransactions />
//       </div> */}
//     </div>
//     {/* <Brief /> */}
//   </div>
// )}
