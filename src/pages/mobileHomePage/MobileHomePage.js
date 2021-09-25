import React from "react";
import { Route, Switch } from "react-router";
import Balance from "../../client/balance/Balance";
import EnterForm from "../../client/enterForm/enterForm/EnterForm";
import Calendar from "../../client/enterForm/calendar/Calendar";
import TableTransactions from "../../client/tableTransactions/TableTransactions";
import BasicFieldTab from "../../client/basicField/BasicFieldTab";
// import { useLocation, useParams } from "react-router-dom";
// import { getIsMobileMedia } from "../../redux/screenWidth/screenWidth.selector";

import styles from "./MobileHomePage.module.css";
import { useSelector } from "react-redux";
import { getIsMobileMedia } from "../../redux/screenWidth/screenWidth.selector";
import { SwishSpinner } from "react-spinners-kit";

// const MobileHomePage = ( { match }) => {
const MobileHomePage = (props) => {
  console.log(props);
  console.log(props.match.path);

  const isMobileMedia = useSelector(getIsMobileMedia);

  // const location = useLocation().pathname;
  // const mainLocaiton = location.pathname === "/mob";
  // const enterFormLocation = location.pathname === "/:transType";

  return (
    <div>
      <div className={styles.inputFormMobile}>
        <Switch>
          <Route path={props.match.path + "/:transType"}>
            {/* <Route path={enterFormLocation}> */}
            <EnterForm />
          </Route>
          
          <Route path={props.match.path}>
            {/* <Route path={mainLocaiton}> */}
            <div className={styles.dataFieldMobile}>
              <Balance />
              <Calendar />
              <TableTransactions />
            </div>
            <div className={styles.btnWrapperMobile}>
              <BasicFieldTab
                text={"Расход"}
                link={props.match.url + "/expense"}
                key="Расход"
              />
              <BasicFieldTab
                text={"Доход"}
                link={props.match.url + "/income"}
                key="Доход"
              />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MobileHomePage;

// Здесь рендерятся компоненты только для мобильной версии залогиненого пользователя
