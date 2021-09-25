import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth.selectors";


const PrivateRoute = ({
  // isAuthenticated,
  component: Component,
  redirectTo,
  isMobile,
  ...routeProps
}) => {
  const isAuth = useSelector(getIsAuth);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
  // return (
  //   isMobile && (
  //     <Route
  //       {...routeProps}
  //       render={(props) =>
  //         isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
  //       }
  //     />
  //   )
  // );
};

export default PrivateRoute;
