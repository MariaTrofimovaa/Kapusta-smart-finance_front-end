import React from "react";
import { Route } from "react-router-dom";
// import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { isAuthenticated } from "../redux/auth/auth.selectors";

// ************ Этого здесь не будет
import { lazy } from "react";
// import NotFound from "../pages/notFound/NotFound";
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const ReportPage = lazy(() => import("../pages/reportPage/ReportPage"));
const AuthPage = lazy(() => import("../pages/authPage/AuthPage"));
// ************

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  // const isAuth = useSelector(isAuthenticated); // возможно поменяется селектор. Обратить внимание

  return (
    // <Route
    //   {...routeProps}
    //   render={(props) =>
    //     isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
    //   }
    // />

    <>
      <Route
        exact
        path="/"
        component={HomePage}
        restricted
        redirectTo="/mainPage"
      />
      <Route
        exact
        path="/auth"
        component={AuthPage}
        restricted
        redirectTo="/authPage"
      />
      <Route path="/report" component={ReportPage} redirectTo="/" />
      {/* <Route component={NotFound} /> */}
    </>
  );
};

export default PrivateRoute;
