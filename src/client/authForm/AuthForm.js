import React, { useMemo, useState } from "react";

import { useDispatch } from "react-redux";
import { login, register } from "../../redux/auth/auth.operations";

///////////////////////////////Formik, YUP /////////////////////////////////////////////////
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import css from "./AuthForm.module.scss";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { loginSuccess } from "../../redux/auth/auth.actions";

const initialForm = { email: "", password: "" };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(`* E-mail адрес введен неверно!`)
    .min(5, "* Минимум 5 символов")
    .required("*это обязательное поле"),
  password: Yup.string()
    .required("*это обязательное поле")
    .min(5, "* Минимум 6 символов")
    .max(20, "* Максимум 20 символов"),
});

export const FormControl = ({ label, ...props }) => {
  const id = useMemo(() => Math.floor(Math.random() * 99999).toString(), []);
  const [field, meta] = useField(props);

  return (
    <div className={css.form_control_container}>
      <label className={css.label} htmlFor={id}>
        {label}
        <input
          id={id}
          className={
            meta.error && meta.touched ? `${css.input_error}` : `${css.input}`
          }
          {...field}
          {...props}
        />
        <div className={css.box_error_message}>
          {meta.error && meta.touched && (
            <p className={css.error_message_text}>{meta.error}</p>
          )}
        </div>
      </label>
    </div>
  );
};

export default function AuthForm() {
  const [action, setAction] = useState("");
  console.log(action);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    if (action === "register") {
      dispatch(register(values));
    } else if (action === "login") {
      dispatch(login(values));
    }
  };
  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:4000/api/v1/auth/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      console.log("Google login success", response);
      dispatch(loginSuccess(response.data.user));
      console.log("loginSuccess", response);
    });
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className={css.form_container}>
      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.form_google_paragraph_container}>
            <p className={css.form_google_paragraph}>
              Вы можете авторизироваться с помощью <br />
              Google Account:
            </p>
          </div>
          <GoogleLogin
            clientId="98081212290-o5ci4422o4omppgvkqc2q6e9jd13ioso.apps.googleusercontent.com"
            buttonText="Google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
            className={css.form_google_container}
          />
          <div className={css.form_paragraph_container}>
            <p className={css.form_paragraph}>
              Или зайти с помощью e-mail и пароля, <br />
              предварительно зарегистрировавшись:
            </p>
          </div>
          <div className={css.form_input_area}>
            <FormControl label="Электронная почта*" name="email" type="email" />
            <FormControl label="Пароль*" type="password" name="password" />
            <div className={css.form_buttons}>
              <button
                type="submit"
                className={css.form_button}
                onClick={() => setAction("login")}
              >
                Войти
              </button>

              <button
                type="submit"
                className={css.form_button}
                onClick={() => setAction("register")}
              >
                Регистрация
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
