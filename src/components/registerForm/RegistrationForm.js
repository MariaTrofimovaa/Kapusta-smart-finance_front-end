import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth.operations";
import { FormControl } from "../loginForm/LoginForm";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import css from "./RegistrationForm.module.css";
import logo from "../../images/google-symbol 1.png";
const url =
  "https://Kapusta-smart-finanse_front-end.goit.com.ua/api/v1/auth/google";

const initialForm = { username: "", email: "", password: "" };

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("*это обязательное поле")
    .min(2, "* Минимум 2 символa"),
  email: Yup.string()
    .email(`* E-mail адрес введен неверно!`)
    .min(5, "* Минимум 5 символов")
    .required("*это обязательное поле"),
  password: Yup.string()
    .required("*это обязательное поле")
    .min(3, "* Минимум 3 символа")
    .max(20, "* Максимум 20 символов"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const onRegister = (state) => dispatch(register(state));

  const handleSubmit = (values) => {
    onRegister(values);
  };

  return (
    <div className={css.form_container}>
      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
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
            <FormControl label="Имя*" type="text" name="username" />
            <FormControl label="Электронная почта*" name="email" type="email" />
            <FormControl label="Пароль*" type="password" name="password" />
            <div className={css.form_buttons}>
              <button type="submit" className={css.form_button}>
                Регистрация
              </button>
              <Link to="/login" exact>
                {" "}
                <button type="button" className={css.secondary_form_button}>
                  Вход
                </button>
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
