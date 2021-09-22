import React, { useEffect } from "react";

import Header from "./header/Header";
import Main from "./main/Main";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/auth/auth.operations";

import "../stylesheet/main.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="mainContainer">
      <Header />
      <Main />
      <ToastContainer
        transition={Zoom}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
