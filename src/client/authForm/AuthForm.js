import React, { useMemo, useState } from "react";

import { useDispatch } from "react-redux";
import { login, register } from "../../redux/auth/auth.operations";
import logo from "../../assets/images/logo_google.png";
///////////////////////////////Formik, YUP /////////////////////////////////////////////////
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import css from "./AuthForm.module.css";

const initialForm = { email: "", password: "" };
const url =
  "https://Kapusta-smart-finanse_front-end.goit.com.ua/api/v1/auth/google";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(`* E-mail адрес введен неверно!`)
    .min(5, "* Минимум 5 символов")
    .required("*это обязательное поле"),
  password: Yup.string()
    .required("*это обязательное поле")
    .min(3, "* Минимум 3 символа")
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

  return (
    <div className={css.form_container}>
      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <p className={css.form_google_paragraph}>
            Вы можете авторизироваться с помощью <br />
            Google Account:
          </p>
          <a className={css.form_google_link} href={url}>
            <img
              className={css.form_google_logo}
              src={logo}
              alt="logo_google"
            />
            Google
          </a>
          <p className={css.form_paragraph}>
            Или зайти в приложение с помощью e-mail и пароля, <br />
            сперва зарегистрировавшись:
          </p>
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
