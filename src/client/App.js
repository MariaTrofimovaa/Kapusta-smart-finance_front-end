import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/auth/auth.operations";

import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./header/Header";
import Main from "./main/Main";
import { withSize } from "react-sizeme";
import { setScreenWidth } from "../redux/screenWidth/screenWidth.action";

import "../stylesheet/main.scss";

const App = ({ size: { width } }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(setScreenWidth(width));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setScreenWidth(width));
  }, [width]);

  return (
    <div>
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
    </div>
  );
};

export default withSize()(App);
