import React, { Suspense, useEffect } from "react";
import { Switch, useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppLoader from "../../shared/components/loader/Loader";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";

import setSelectedDate from "../../redux/date/date.actions";
import action from "../../redux/transactions/transactions.actions";

import transactionsOperations from "../../redux/transactions/transactions.operations";

import { getIsMobileMedia } from "../../redux/screenWidth/screenWidth.selector";
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
    dispatch(
      setSelectedDate(
        refreshDate.toISOString().slice(0, 10).split("-").reverse().join(".")
      )
    );
  }, []);

  useEffect(() => {
    dispatch(action.changeActualYearForBrief(refreshDate.getFullYear()));
  }, []);

  const date = useSelector(getSelectedDate);
  useEffect(() => {
    dispatch(transactionsOperations.getAllIncomeOfDate(date));
    dispatch(transactionsOperations.getAllExpenseOfDate(date));
  }, [date]);

  useEffect(() => {
    isMobileMedia ? history.push("/main") : history.push("/expense");
  }, [isMobileMedia]);

  return (
    <>
      {/* <div className={styles.mainWrapper}> */}
      <div className={classes}>
        <Suspense fallback={<AppLoader />}>
          <Switch>
            {mainRoutes.map((route) =>
              route.isPrivate ? (
                <PrivateRoutes
                  {...route}
                  isMobileMedia={isMobileMedia}
                  key={route.name}
                />
              ) : (
                <PublicRoutes
                  {...route}
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
