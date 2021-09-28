import React, { Suspense, useEffect } from "react";
import { Switch, useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppLoader from "../../shared/components/loader/Loader";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";

import action from "../../redux/transactions/transactions.actions";

import transactionsOperations from "../../redux/transactions/transactions.operations";

import {
  getCurrLocation,
  getIsMobileMedia,
} from "../../redux/screenWidth/screenWidth.selector";
import { getSelectedDate } from "../../redux/date/date.selectors";

import styles from "./Main.module.scss";

const Main = () => {
  const isMobileMedia = useSelector(getIsMobileMedia);
  const location = useLocation();
  const history = useHistory();
  const isRegisterPage = location.pathname === "/";
  const classes = isRegisterPage ? styles.registerWrapper : styles.mainWrapper;

  const dispatch = useDispatch();

  const refreshDate = new Date();

  useEffect(() => {
    dispatch(action.changeActualYearForBrief(refreshDate.getFullYear()));
    // eslint-disable-next-line
  }, []);

  const date = useSelector(getSelectedDate);
  const currLocation = useSelector(getCurrLocation);

  // useEffect(() => {
  //   dispatch(transactionsOperations.getAllIncomeOfDate(date));
  //   dispatch(transactionsOperations.getAllExpenseOfDate(date));
  //   // eslint-disable-next-line
  // }, [date]);

  useEffect(() => {
    if (currLocation?.includes("/report")) return;

    isMobileMedia ? history.push("/main") : history.push("/expense");
    // eslint-disable-next-line
  }, [isMobileMedia]);

  return (
    <>
      <div className={classes}>
        <Suspense fallback={<AppLoader />}>
          <Switch>
            {mainRoutes.map((route) =>
              route.isPrivate ? (
                <PrivateRoutes
                  {...route}
                  redirectTo={route.redirectTo}
                  isMobileMedia={isMobileMedia}
                  key={route.name}
                />
              ) : (
                <PublicRoutes
                  {...route}
                  redirectTo={route.redirectTo}
                  isMobileMedia={isMobileMedia}
                  key={route.name}
                />
              )
            )}
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default Main;
