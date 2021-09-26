import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth.selectors";

const PrivateRoute = ({
  // isAuthenticated,
  component: Component,
  redirectTo,
  redirectToMob,
  isMobile,
  isMobileMedia,
  ...routeProps
}) => {
  const isAuth = useSelector(getIsAuth);

  return isMobile === isMobileMedia || isMobile === undefined ? (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  ) : null;
};

export default PrivateRoute;
