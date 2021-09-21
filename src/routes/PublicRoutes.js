import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth.selectors";

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuth = useSelector(getIsAuth);
  console.log("isAuthPublic", isAuth);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/expences" />
      }
    />
  );
};

export default PublicRoute;
