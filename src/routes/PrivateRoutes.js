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

  // return (
  //   <Route
  //     {...routeProps}
  //     render={(props) =>
  //       isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
  //     }
  //   />
  // );
  // console.log(' isMobile === isMobileMedia :>> ', isMobile === isMobileMedia);
  // console.log('isMobile :>> ', isMobile);
  // console.log("isMobileMedia :>> ", isMobileMedia);
  
  return isMobile === isMobileMedia || isMobile === undefined ? (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  ) : null;
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
