import transactionsOperations from "../../../redux/transactions/transactions.operations";
import styles from "../enterForm/EnterForm.module.css";
// import axios from "axios";
// import { useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
// import { isAuthenticated } from "../../redux/auth/auth.selectors";
// import { addProduct } from "../../redux/products/products.operations";
// import { getSelectedDate } from "../../redux/products/products.selectors";
// import { getCurrentUser } from "../../redux/auth/auth.operations";
// import useMedia from "use-media";

const EnterForm = () => {
  // const token = useSelector(isAuthenticated);
  // const selectedDate = useSelector(getSelectedDate);

  // const [fields, setFields] = useState({ searchWord: "", weight: "" });
  // const [selected, setSelected] = useState(null);
  // const [foundProducts, setFoundProducts] = useState([]);

   const dispatch = useDispatch();

  // const isWide = useMedia({ minWidth: "768px" });

  // const handleChange = (event) =>
  //   setFields((prevState) => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }));

  // const searchProducts = (event) => {
  //   handleChange(event);
  //   if (event.target.value.length > 0) {
  //     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  //     axios
  //       .get(
  //         `https://slimmom-backend.goit.global/product?search=${event.target.value}`
  //       )
  //       .then(({ data }) => {
  //         setFoundProducts(() => {
  //           return event.target.value.length > 0 ? data : [];
  //         });
  //       })
  //       .catch((error) => {
  //         setFoundProducts([]);
  //         setSelected(null);
  //       });
  //   } else {
  //     setFoundProducts([]);
  //     setSelected(null);
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  //   const date = selectedDate;

  //   dispatch(addProduct(...date, selected?._id, fields?.weight));

  //   dispatch(getCurrentUser());

  //   if (!isWide) {
  //     closeModal();
  //   }
  //   setFields({ searchWord: "", weight: "" });
  //   setFoundProducts([]);
  //   setSelected(null);
  // };

  const onFormSubmit = (e) => {
    e.preventDefault();
    
    const transactionData = {
      date: new  Intl.DateTimeFormat('en-GB').format(new Date()), // пока данные календаря недоступны в редакс сторе - будем ставить текущую дату
      category: e.target.category.value,
      description: e.target.description.value,
      amount: e.target.cost.value,
      transactionType: "expense"
    }
    
    dispatch(transactionsOperations.addTransactionOperation(transactionData));

  }

  return (
    <div>
      {/* <form className={styles.productForm} onSubmit={handleSubmit}> */}
      <form className={styles.productForm} onSubmit={onFormSubmit}>
        <input
          placeholder="Описание товара"
          type="text"
          name="description"
          className={styles.productInput}
          autoComplete="off"
          autoFocus
          // value={fields.searchWord}
          // onChange={searchProducts}
        />
        {/* <ul className={styles.productResultList} id="products">
          {!!foundProducts.length &&
            !selected &&
            foundProducts.map((item) => (
              <li
                className={styles.productResultListItem}
                id={item._id}
                key={item._id}
                onClick={() => {
                  setSelected(item);
                  setFields({
                    searchWord: item.title.ru,
                    weight: item.weight,
                  });
                }}
              >
                {item.title.ru}
              </li>
            ))}
        </ul> */}

        <select name="category" id="products">
          <option value="" disabled>
            Категория товара
          </option>
          {/* <option value="0" selected="selected">
            Категория товара
          </option> */}
          <option value="transportation">Транспорт</option>
          <option value="groceries">Продукты</option>
          <option value="fun">Развлечения</option>
          <option value="home">Все для дома</option>
          <option value="hifi">Техника</option>
          <option value="utilities">Коммуналка, связь</option>
          <option value="sportsHobby">Спорт, хобби</option>
          <option value="education">Образование</option>
          <option value="other">Прочее</option>
        </select>

        <label className={styles.productLabel}>
          <input
            className={styles.weightInput}
            placeholder="0.00"
            type="number"
            name="cost"
          />
        </label>
        <button type="submit">Ввод</button>
        <button type="reset">Очистить</button>
      </form>
    </div>
  );
};

export default EnterForm;
