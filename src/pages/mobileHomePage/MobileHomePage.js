import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router";
import Balance from "../../client/balance/Balance";
import EnterForm from "../../client/enterForm/enterForm/EnterForm";
import Calendar from "../../client/enterForm/calendar/Calendar";
import TableTransactions from "../../client/tableTransactions/TableTransactions";
import BasicFieldTab from "../../client/basicField/BasicFieldTab";

import styles from "./MobileHomePage.module.css";
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../../redux/screenWidth/screenWidth.action";

const MobileHomePage = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setCurrentLocation(location));
  }, []);

  return (
    <div>
      <div className={styles.inputFormMobile}>
        <Switch>
          <Route path={props.match.path + "/:transType"}>
            <EnterForm />
          </Route>

          <Route path={props.match.path}>
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
