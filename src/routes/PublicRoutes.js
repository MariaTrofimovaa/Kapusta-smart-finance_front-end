import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth.selectors";

const PublicRoute = ({
  component: Component,
  redirectTo,
  redirectToMob,
  isAuthenticated,
  isMobileMedia,
  ...routeProps
}) => {
  const isAuth = useSelector(getIsAuth);
  console.log('isAuth :>> ', isAuth);
  // const isMobileMedia = window.screen.availWidth < 768;
  // console.log('isMobileMedia :>> ', isMobileMedia);

  // console.log('isMobileMediaPublic :>> ', isMobileMedia)
  return (
    <Route
      {...routeProps}
      render={(props) =>
        //  routeProps.isRestricted &&
        // <Redirect to={redirectTo} />
        //   isMobileMedia ? (
        //     <Redirect to={redirectToMob} />
        //   ) : (
        //     <Redirect to={redirectTo} />
        //   )
        // ) : (
        //   <Component {...props} />
        // )
        // isAuth ? <Redirect to="/expense" /> : <Component {...props} />
        isAuth ? (
          <Redirect to={isMobileMedia ? "/main" : "/expense"} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
