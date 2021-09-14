import React from "react";
import AuthForm from "../../client/authForm/AuthForm";

import styles from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <div>
      <div className={styles.inputForm}>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
