import React from "react";
import { Route } from "react-router";
import Balance from "../../client/balance/Balance";
import EnterForm from "../../client/enterForm/enterForm/EnterForm";
import Calendar from "../../client/enterForm/calendar/Calendar";
import TableTransactions from "../../client/tableTransactions/TableTransactions";
import BasicFieldTab from "../../client/basicField/BasicFieldTab";
// import { useLocation, useParams } from "react-router-dom";

import styles from "./MobileHomePage.module.css";

// const MobileHomePage = ( { match }) => {
const MobileHomePage = ( props) => {
  console.log(props);
  console.log(props.match.path);

  // const location = useLocation().pathname;
  // const mainLocaiton = location.pathname === "/mob";
  // const enterFormLocation = location.pathname === "/:transType";

  return (
    <div>
      <div className={styles.inputFormMobile}>
        <Route path={props.match.path}>
        {/* <Route path={mainLocaiton}> */}
          <div className={styles.dataFieldMobile}>
            <Balance />
            <Calendar />
            <TableTransactions />
          </div>
          <div className={styles.btnWrapperMobile}>
            <BasicFieldTab text={"Расход"} link={"/expense"} key="Расход" />
            <BasicFieldTab text={"Доход"} link={"/income"} key="Доход" />
          </div>
        </Route>
        <Route path={props.match.path + ":transType"}>
        {/* <Route path={enterFormLocation}> */}
          <EnterForm />
        </Route>
      </div>
    </div>
  );
};

export default MobileHomePage;

// Здесь рендерятся компоненты только для мобильной версии залогиненого пользователя
