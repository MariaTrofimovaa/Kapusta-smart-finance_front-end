import React, { Suspense } from "react";

import { Switch } from "react-router";
import { lazy } from "react";
// import PrivateRoutes from "../../routes/PrivateRoutes";
// import PublicRoutes from "../../routes/PublicRoutes";
import AppLoader from "../../shared/loader/Loader";
import NotFound from "../../pages/notFound/NotFound";
import { Route } from "react-router-dom";
import NavBar from "../NavBar";

import styles from "./Main.module.css";
import MainBtns from "../buttons/MainBtns";

const RegisterPage = lazy(() =>
  import("../../pages/registerPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/loginPage/LoginPage"));
const ReportPage = lazy(() => import("../../pages/reportPage/ReportPage"));

const Main = () => {
  return (
    <div className={styles.main}>
      <Suspense fallback={<AppLoader />}>
        <NavBar />
        {/* <MainBtns /> */}
        <Switch>
          {/* <PublicRoutes
            exact
            path="/"
            component={HomePage}
            restricted
            redirectTo="/mainPage"
          /> */}
          <Route
            exact
            path="/"
            component={RegisterPage}
            redirectTo="/login"
            restricted
          />
          <Route
            exact
            path="/login"
            component={LoginPage}
            redirectTo="/report"
            restricted
          />

          <Route path="/report" component={ReportPage} redirectTo="/" />

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
