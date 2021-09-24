import React, { Suspense } from "react";
import { Switch } from "react-router";
import { useLocation } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import AppLoader from "../../shared/components/loader/Loader";
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";

import styles from "./Main.module.scss";

const Main = (props) => {
  // console.log(props)
  // сюда приходит undefined
  //  isAuth={props.isAuth}
  //  isMobile={props.isMobile}

  const location = useLocation();
  const isRegisterPage = location.pathname === "/";
  const classes = isRegisterPage ? styles.registerWrapper : styles.mainWrapper;

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
                  // props={props}
                  isAuth={props.isAuth}
                  isMobile={props.isMobile}
                  key={route.name}
                />
              ) : (
                <PublicRoutes
                  {...route}
                  isAuth={props.isAuth}
                  key={route.name}
                />
              )
            )}
          </Switch>
        </Suspense>
      </div>

      {/* {!isAuth && (
        <div className={styles.mainWrapperRegister}>
          <Suspense fallback={<AppLoader />}>
            <Switch>
              {mainRoutes.map((route) =>
                route.isPrivate ? (
                  <PrivateRoutes
                    {...route}
                    isAuth={props.isAuth}
                    key={route.name}
                  />
                ) : (
                  <PublicRoutes
                    {...route}
                    isAuth={props.isAuth}
                    key={route.name}
                  />
                )
              )}
            </Switch>
          </Suspense>
        </div>
      )} */}
    </>
  );
};

export default Main;
