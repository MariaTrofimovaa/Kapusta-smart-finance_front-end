import styles from "../enterForm/EnterForm.module.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { isAuthenticated } from "../../redux/auth/auth.selectors";
import { addTransaction } from "../../../redux/transactions/tranzactions.operations";
// import { getSelectedDate } from "../../redux/products/products.selectors";
// import { getCurrentUser } from "../../redux/auth/auth.operations";
// import useMedia from "use-media";

const EnterForm = ({ startDate }) => {
  // const token = useSelector(isAuthenticated);
  // const selectedDate = useSelector(getSelectedDate);
  console.log(startDate);
  const [fields, setFields] = useState({
    description: "",
    amount: "",
    category: "",
    transactionType: "",
  });
  const [selected, setSelected] = useState(null);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  // const isWide = useMedia({ minWidth: "768px" });

  const handleChange = (event) =>
    setFields((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  // const handleCategoryChange = (event) =>
  //   setFields((prevState) => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }));

  const searchCategories = (event) => {
    // handleChange(event);
    // if (event.target.value.length > 0) {
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios
      .get(`http://localhost:4000/api/v1/categories/expense-categories`)
      .then(({ data }) => {
        console.log(data.data.result);
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

    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    // const date = this.props.selectedDate;

    dispatch(
      addTransaction(
        startDate,
        fields.description,
        fields.amount,
        fields.category,
        fields.transactionType
      )
    );
    console.log(fields.description);
    // dispatch(getCurrentUser());

    // if (!isWide) {
    //   closeModal();
    // }
    setFields({ description: "", amount: "", category: "" });
    setCategories([]);
    setSelected(null);
  };

  return (
    <div>
      <form className={styles.productForm} onSubmit={handleSubmit}>
        <input
          placeholder="Описание товара"
          type="text"
          name="description"
          className={styles.productInput}
          autoComplete="off"
          autoFocus
          value={fields.description}
          onChange={handleChange}
        />

        <input
          placeholder="Категория товара"
          type="text"
          name="category"
          className={styles.productInput}
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

        <label className={styles.productLabel}>
          <input
            className={styles.weightInput}
            placeholder="0.00"
            type="number"
            name="amount"
            value={fields.amount}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Ввод</button>
        <button
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
