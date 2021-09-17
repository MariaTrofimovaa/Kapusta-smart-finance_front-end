import IconDelete from "../../shared/iconDelete/IconDelete";
import styles from "./TableTransactions.module.css";

const allIncomes = [
  {
    _id: "61426889e1f44a09b01d6d88",
    date: "15.09.2021",
    description: "loo",
    amount: 100,
    category: "groceries",
    transactionType: "income",
  },
  // {
  //   _id: "61426b4a4bba5923045a72cc",
  //   date: "15.09.2021",
  //   description: "vcvcvcvcv",
  //   amount: 100,
  //   category: "groceries",
  //   transactionType: "income",
  // },
  {
    _id: "61426bb94bba5923045a72cf",
    date: "15.09.2021",
    description: "bounty",
    amount: 100,
    category: "groceries",
    transactionType: "income",
  },
  {
    _id: "61426c104bba5923045a72d2",
    date: "15.09.2021",
    description: "mars",
    amount: 100,
    category: "groceries",
    transactionType: "income",
  },
  {
    _id: "61426c570b6acd43b47f5794",
    date: "15.09.2021",
    description: "mars",
    amount: 100,
    category: "groceries",
    transactionType: "income",
  },
];
// const allExpenses = [
//   {
//     _id: "61426889e1f44a09b01d6d88",
//     date: "15.09.2021",
//     description: "loo",
//     amount: 100,
//     category: "groceries",
//     transactionType: " expense ",
//   },
//   {
//     _id: "61426b4a4bba5923045a72cc",
//     date: "15.09.2021",
//     description: "vcvcvcvcv",
//     amount: 100,
//     category: "groceries",
//     transactionType: " expense ",
//   },
//   {
//     _id: "61426bb94bba5923045a72cf",
//     date: "15.09.2021",
//     description: "bounty",
//     amount: 100,
//     category: "groceries",
//     transactionType: " expense ",
//   },
// ];

const TableTransactions = () => {
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadTr}>
            <th>Дата</th>
            <th>Описание</th>
            <th>Категория</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {allIncomes && !allIncomes.length && null}
          {allIncomes.map((item) => (
            <tr key={item._id} className={styles.tableTr}>
              <td className={styles.tableDate}>{item.date}</td>
              <td className={styles.tableDescription}>{item.description}</td>
              <td className={styles.tableCategory}>{item.category}</td>
              <td className={styles.tableAmount}>{item.amount}</td>
              <td className={styles.tableDelete}>
                <button
                  className={styles.deleteBtn}
                  type="button"
                  // className={styles}
                  // onClick={() => deleteProductProp(product.id, item._id)}
                >
                  <IconDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
