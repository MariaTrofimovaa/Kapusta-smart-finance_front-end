import React from "react";
// import Brief from "../../client/brief/Brief";
// import Calendar from "../../client/enterForm/calendar/Calendar";
// import EnterForm from "../../client/enterForm/enterForm/EnterForm";
import Balance from "../../client/balance/Balance";
import BasicField from "../../client/basicField/BasicField";
import styles from "./HomePage.module.css";
import { useMediaQuery } from "../../shared/hooks/mediaRulesHook";

// import TableTransactions from "../../client/tableTransactions/TableTransactions";

const HomePage = () => {
  const isPageWideMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      {!isPageWideMobile ? (
        <div>
          <div className={styles.inputForm}>
            <Balance />
            <BasicField />
            {/* <Calendar /> */}
            {/* <img src="./calendar 1.svg" alt="" />
          <svg width="18" height="20">
            <use href="./symbol-defs.svg.svg#calendar"></use>
          </svg> */}
            {/* <Brief /> */}
          </div>
          {/* <div className="">
        <TableTransactions />
      </div> */}
        </div>
      ) : (
        <div>
          <div className={styles.inputForm}>
            <BasicField />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
