import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth.selectors";
import { getCurrLocation } from "../redux/screenWidth/screenWidth.selector";

const PrivateRoute = ({
  component: Component,
  redirectTo,
  isMobile,
  isMobileMedia,
  ...routeProps
}) => {
  const isAuth = useSelector(getIsAuth);
  const currLocation = useSelector(getCurrLocation);
  console.log(currLocation);

  return isMobile === isMobileMedia || isMobile === undefined ? (
    <Route
      {...routeProps}
      render={(props) => {
        // if (isMobile) {
        //   console.log("mob")
        //   return isAuth  ? (
        //     <Component {...props} />
        //   ) : (
        //     <Redirect to={redirectTo} />
        //   );
        // }
        // console.log("home")
        return isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />;
      }}
    />
  ) : null;
};

export default PrivateRoute;
