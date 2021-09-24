import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth.selectors";

const PublicRoute = ({
  component: Component,
  redirectTo,
  isAuthenticated,
  ...routeProps
}) => {
  const isAuth = useSelector(getIsAuth);

  return (
    <Route
      {...routeProps}
      render={
        (props) =>
          isAuth && routeProps.isRestricted ? (
            <Redirect to={redirectTo} />
          ) : (
            <Component {...props} />
          )
        //         isAuth ? <Redirect to="/expense" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
