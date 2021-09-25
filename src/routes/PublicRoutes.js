import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth.selectors";

const PublicRoute = ({
  component: Component,
  redirectTo,
  redirectToMob,
  isAuthenticated,
  ...routeProps
}) => {
  const isAuth = useSelector(getIsAuth);
  const isMobileMedia = window.screen.availWidth < 767;

  return (
    <Route
      {...routeProps}
      render={
        (props) =>
          isAuth && routeProps.isRestricted ? (
            // <Redirect to={redirectTo} />
            isMobileMedia ? (
              <Redirect to={redirectToMob} />
            ) : (
              <Redirect to={redirectTo} />
            )
          ) : (
            <Component {...props} />
          )
        //         isAuth ? <Redirect to="/expense" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
