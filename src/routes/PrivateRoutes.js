import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/auth/auth.selectors";
import { useMediaQuery } from "../shared/hooks/mediaRulesHook";
import MobileHomePage from "../pages/mobileHomePage/MobileHomePage";

const PrivateRoute = ({
  // isAuthenticated,
  component: Component,
  redirectTo,
  isMobile,
  ...routeProps
}) => {
  const isAuth = useSelector(getIsAuth);
  // console.log(routeProps);
  const isMobileMedia = useMediaQuery("(max-width: 767px)");
  // console.log(isMobileMedia);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
    // <Route
    //   {...routeProps}
    //   render={(props) =>
    //     isAuth ? (
    //       isMobileMedia ? (
    //         <Component props={ props}/>
    //       ) : (
    //         <Component {...props} />
    //       )
    //     ) : (
    //       <Redirect to={redirectTo} />
    //     )
    //   }
    // />
  );
};

export default PrivateRoute;

//   return (
// <Route
//   {...routeProps}
//   render={(props) =>
//     isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
//   }
// />
//   );
// };
