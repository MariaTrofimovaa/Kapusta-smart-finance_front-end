import React, { Suspense } from "react";
import { Switch } from "react-router";
import { mainRoutes } from "../../routes/mainRoutes";
import AppLoader from "../../shared/components/loader/Loader";
import PrivateRoutes from "../../routes/PrivateRoutes";
// import PublicRoutes from "../../routes/PublicRoutes";
import styles from "./Main.module.css";


import NavBar from "../NavBar"; // раскомментировать при коммите
// import MainBtns from "../../shared/components/buttons/MainBtns";

const Main = () => {
  return (
    <div className={styles.main}>
      <Suspense fallback={<AppLoader />}>
        {/* Навбар и кнопок здесь не будет */}
        <NavBar />
        {/* <MainBtns /> */}

        <Switch>
          {/* Когда будет готова авторизация, поменять перебор maiRoutes
        Пока все роуты лежат в PrivateRoutes */}
          {mainRoutes.map((route) => (
            <PrivateRoutes />
          ))}

          {/* {mainRoutes.map((route) => 
            route.isPrivate ? (
              <PrivateRoutes {...route} isAuth={this.props.isAuth} />
            ) : (
              <PublicRoutes {...route} isAuth={this.props.isAuth} />
            )
          )} */}
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
