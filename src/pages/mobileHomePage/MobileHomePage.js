import React from "react";
import Balance from "../../client/balance/Balance";
// import BasicField from "../../client/basicField/BasicField";
import EnterForm from "../../client/enterForm/enterForm/EnterForm";
import Calendar from "../../client/enterForm/calendar/Calendar";
import TableTransactions from "../../client/tableTransactions/TableTransactions";

import styles from "./MobileHomePage.module.css";
import BasicFieldTab from "../../client/basicField/BasicFieldTab";

const MobileHomePage = () => {
  return (
    <div>
      <div className={styles.inputFormMobile}>
        {/* <Balance /> */}
        {/* <BasicField /> */}

        <div className={styles.dataFieldMobile}>
          <div className={styles.btnWrapper}>
            <BasicFieldTab text={"Расход"} link={"/expense"} key="Расход" />
            <BasicFieldTab text={"Доход"} link={"/income"} key="Доход" />
          </div>
          <Balance />
          <Calendar />
          <EnterForm />
          <TableTransactions />
        </div>
      </div>
    </div>
  );
};

export default MobileHomePage;

// Здесь рендерятся компоненты только для мобильной версии залогиненого пользователя
