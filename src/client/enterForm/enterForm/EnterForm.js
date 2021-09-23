import transactionsOperations from "../../../redux/transactions/transactions.operations";
import styles from "../enterForm/EnterForm.module.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../../../redux/auth/auth.selectors";
import { getSelectedDate } from "../../../redux/date/date.selectors";

const EnterForm = ({ currentLocation }) => {
  const token = useSelector(getAuthToken);
  const selectedDate = useSelector(getSelectedDate);

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

  const searchCategories = () => {
    console.log(currentLocation);
    // if (event.target.value.length > 0) {
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios
      .get(`http://localhost:4000/api/v1/categories${currentLocation}`)
      .then(({ data }) => {
        // console.log(data.data.result);
        setCategories(() => {
          return data.data.result;
        });
      })
      .catch((error) => {
        setCategories([]);
        setSelected(null);
      });
  };

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
  };

  /* Проверить с Таней или Светой  onFormSubmit и саму функцию - дублирование*/

  // const onFormSubmit = (e) => {
  //   e.preventDefault();

  //   const transactionData = {
  //     date: new  Intl.DateTimeFormat('en-GB').format(new Date()), // пока данные календаря недоступны в редакс сторе - будем ставить текущую дату
  //     category: e.target.category.value,
  //     description: e.target.description.value,
  //     amount: e.target.cost.value,
  //     transactionType: "expense"
  //   }

  //   dispatch(transactionsOperations.addBalanceOperation(transactionData));

  // }

  return (
    <div>
      <form className={styles.productForm} onSubmit={handleSubmit}>
        <input
          placeholder="Описание товара"
          type="text"
          name="description"
          className={styles.productDescription}
          autoComplete="off"
          autoFocus
          value={fields.description}
          onChange={handleChange}
        />

        <input
          placeholder="Категория товара"
          type="text"
          name="category"
          className={styles.productCategory}
          autoComplete="off"
          autoFocus
          value={fields.category}
          onClick={searchCategories}
        />

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

        <label className={styles.productAmountLabel}>
          <input
            className={styles.productAmountInput}
            placeholder="0.00"
            type="number"
            name="amount"
            value={fields.amount}
            onChange={handleChange}
          />
        </label>
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
