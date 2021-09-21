import React, { Suspense } from "react";
import { Switch } from "react-router";
import { mainRoutes } from "../../routes/mainRoutes";
import AppLoader from "../../shared/components/loader/Loader";
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";
import styles from "./Main.module.css";

const Main = (props) => {
  console.log(props);
  return (
    <div className={styles.main}>
      <Suspense fallback={<AppLoader />}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoutes {...route} isAuth={props.isAuth} />
            ) : (
              <PublicRoutes {...route} isAuth={props.isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
