import React, { Suspense, useEffect } from "react";
import { Switch, useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import AppLoader from "../../shared/components/loader/Loader";
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";
import { useMediaQuery } from "../../shared/hooks/mediaRulesHook";
import styles from "./Main.module.scss";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import setSelectedDate from "../../redux/date/date.actions";
import { withSize } from "react-sizeme";
import { useSelector } from "react-redux";
import { getIsMobileMedia } from "../../redux/screenWidth/screenWidth.selector";

const Main = ({ size }) => {
  // console.log("props", props.isAuth);
  // сюда приходит undefined
  //  isAuth={props.isAuth}
  //  isMobile={props.isMobile}
  // console.log(window.screen.availHeight);
  // console.log(window.screen.availWidth);
  // console.log(window.screen.height);
  // console.log(window.screen.width);

  const location = useLocation();
  const history = useHistory();
  const isRegisterPage = location.pathname === "/";
  const classes = isRegisterPage ? styles.registerWrapper : styles.mainWrapper;

  // const isMobileMedia = useMediaQuery("(max-width: 767px)");
  const isMobileMedia = useSelector(getIsMobileMedia);
  // console.log("isMobileMedia :>> ", isMobileMedia);

  // const isMobileMedia = window.screen.availWidth < 767;
  // console.log("isMobileMedia", isMobileMedia);

  const dispatch = useDispatch();

  // const dispatch = useDispatch();

  useEffect(() => {
    const refreshDate = new Date();
    dispatch(
      setSelectedDate(
        refreshDate.toISOString().slice(0, 10).split("-").reverse().join(".")
      )
    );
  }, []);

  useEffect(() => {
    console.log("isMobileMedia :>> ", isMobileMedia);
    isMobileMedia ? history.push("/main") : history.push("/expense");
  }, [isMobileMedia]);

  return (
    <>
      {/* <div className={styles.mainWrapper}> */}
      <div className={classes}>
        <Suspense fallback={<AppLoader />}>
          <Switch>
            {mainRoutes.map((route) =>
              // console.log(isMobileMedia);
              // console.log(route.isMobile);
              // console.log(isMobileMedia === route.isMobile);
              // console.log(route.isPrivate);
              // isMobileMedia === route.isMobile &&
              route.isPrivate ? (
                // && route.isPrivate
                <PrivateRoutes
                  {...route}
                  // props={props}
                  // isAuth={props.isAuth}
                  // isMobile={isMobileMedia}
                  isMobileMedia={isMobileMedia}
                  key={route.name}
                />
              ) : (
                <PublicRoutes
                  {...route}
                  // isAuth={props.isAuth}
                  isMobileMedia={isMobileMedia}
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

export default withSize()(Main);
