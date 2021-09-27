import transactionsOperations from "../../../redux/transactions/transactions.operations";
import styles from "../enterForm/EnterForm.module.scss";
import axios from "axios";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../../../redux/auth/auth.selectors";
import { getSelectedDate } from "../../../redux/date/date.selectors";
import { ReactComponent as CalculatorLogo } from "../../../assets/icons/calculator.svg";
import { ReactComponent as ArrowDown } from "../../../assets/icons/Arrow-down.svg";
import { useHistory } from "react-router";
import { getIsMobileMedia } from "../../../redux/screenWidth/screenWidth.selector";
import { useParams } from "react-router-dom";

const EnterForm = () => {
  const token = useSelector(getAuthToken);
  const selectedDate = useSelector(getSelectedDate);
  const isMobileMedia = useSelector(getIsMobileMedia);
  const { transType } = useParams();

  const [fields, setFields] = useState({
    description: "",
    amount: "",
    category: "",
    transactionType: "",
  });

  const [selected, setSelected] = useState(null);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (event) =>
    setFields((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  let history = useHistory();

  const goBackHome = () => {
    history.push("/main");
  };

  const searchCategories = () => {
    axios

      .get(`http://localhost:4000/api/v1/categories/${transType}`)
      .then(({ data }) => {
        setCategories(() => {
          return data.data.result;
        });
      })
      .catch((error) => {
        setCategories([]);
        setSelected(null);
      });
  };

  const catMenu = useRef(null);
  const [openSlide, setopenSlide] = useState("");

  const closeOpenMenus = (e) => {
    if (catMenu.current && openSlide && !catMenu.current.contains(e.target)) {
      setopenSlide(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    dispatch(
      transactionsOperations.addTransaction(
        selectedDate,
        fields.description,
        fields.amount,
        fields.category,
        fields.transactionType
      )
    );

    setFields({ description: "", amount: "", category: "" });
    setCategories([]);
    setSelected(null);

    if (isMobileMedia) {
      history.push("/main");
    }
  };

  return (
    <div className={styles.product}>
      <button type="button" className={styles.arrowBack} onClick={goBackHome}>
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="#FF751D"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z"
            fill="#FF751D"
          />
        </svg>
      </button>
      <form
        ref={catMenu}
        className={styles.productForm}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Описание товара"
          type="text"
          name="description"
          className={styles.productDescription}
          autoComplete="off"
          autoFocus
          value={fields.description}
          onChange={handleChange}
          required
        />

        <input
          placeholder="Категория товара"
          type="text"
          name="category"
          className={styles.productCategory}
          autoComplete="off"
          autoFocus
          value={fields.category}
          onChange={()=> {}} // КОСТЫЛЬ! ПЕРЕДЕЛАТЬ НА СЕЛЕКТ
          // defaultValue={fields.category}

          onClick={searchCategories}
          required
        />
        <ArrowDown className={styles.arrowDown} />
        <ul className={styles.productResultList} id="categories">
          {!!categories.length &&
            categories.map((item) => (
              <li
                className={styles.productResultListItem}
                id={item._id}
                key={item._id}
                onClick={() => {
                  setSelected(item);
                  setFields((prevstate) => ({
                    ...prevstate,
                    category: item.category,
                    transactionType: item.transactionType,
                  }));
                  setCategories([]);
                }}
              >
                {item.category}
              </li>
            ))}
        </ul>
        <div className={styles.productAmountLabelBox}>
          <input
            className={styles.productAmountInput}
            placeholder="0.00"
            type="number"
            name="amount"
            value={fields.amount}
           
            onChange={handleChange}
            required
          />
          <div className={styles.calculatorLogoContainer}>
            <CalculatorLogo className={styles.calculatorLogo} />
          </div>
        </div>
        <br />

        <button type="submit" className={styles.btnSubmit}>
          Ввод
        </button>
        <button
          className={styles.btnClear}
          type="button"
          onClick={() => {
            setFields({
              description: "",
              amount: "",
              category: "",
            });
          }}
        >
          Очистить
        </button>
      </form>
    </div>
  );
};

export default EnterForm;
