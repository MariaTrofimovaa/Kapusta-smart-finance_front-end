import React, { Suspense, useEffect } from "react";
import { Switch, useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppLoader from "../../shared/components/loader/Loader";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";

import setSelectedDate from "../../redux/date/date.actions";
import { getIsMobileMedia } from "../../redux/screenWidth/screenWidth.selector";

import styles from "./Main.module.scss";
const Main = () => {
  const isMobileMedia = useSelector(getIsMobileMedia);
  const location = useLocation();
  const history = useHistory();
  const isRegisterPage = location.pathname === "/";
  const classes = isRegisterPage ? styles.registerWrapper : styles.mainWrapper;

  const dispatch = useDispatch();

  useEffect(() => {
    const refreshDate = new Date();
    dispatch(
      setSelectedDate(
        refreshDate.toISOString().slice(0, 10).split("-").reverse().join(".")
      )
    );
  }, []);

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
