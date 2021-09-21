import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Brief.module.css";


import operation from "../../redux/transactions/transactions.operations";

// import selector from "../../redux/transactions/transactions.selectors";

const Brief = () => {
  const date = new Date();
  const [currentDate, setYear] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
  });

  const [monthsTotal, setMonthes] = useState([]);

  console.log(monthsTotal);
  const filter = {
    type: "income",
    // type: "expense",
    year: currentDate.year,
  };

  const dispatch = useDispatch();

  const transactions = useSelector(selector.getBrief)[filter.type];

  useEffect(() => {
    dispatch(operation.fetchBrief(filter));
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    let month = new Date();
    const monthesSum = Array(currentDate.month + 1)
      .fill("")
      .map((el, idx) => ({
        currentMonth: idx,
        currentAmount: transactions.reduce((acc, { date, amount }) => {
          const actualMonth = +date.split(".")[1];

          if (actualMonth - 1 === idx) {
            acc += amount;
          }
          return acc;
        }, 0),
      }));

    monthesSum.forEach((data) => {
      month.setMonth(data.currentMonth);
      data.currentMonth = month.toLocaleDateString("ru", { month: "long" });
    });

    setMonthes(monthesSum);
    // console.log(months);
  }, [transactions]);

  // const changeYear = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.title}>Сводка {currentDate.year}</div>
      <ul className={styles.list}>
        {monthsTotal.length > 0 &&
          monthsTotal.map(({ currentMonth, currentAmount }) => (
            <li key={currentMonth} className={styles.monthPoint}>
              <p>{currentMonth}</p>
              <p>{currentAmount}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Brief;

// создание массива объектов с начала года до текущего месяца с суммами
//  useEffect(() => {
//    const monthesSum = [];
//    let month = new Date();
//    for (let i = 0; i <= currentDate.month; ++i) {
//      month.setMonth(i);
//      monthesSum.push({
//        currentMonth: month.toLocaleDateString("ru", { month: "long" }),
//        currentAmount: 0,
//      });
//    }

//    transactions.forEach(({ date, amount }) => {
//      month.setMonth(Number(date.slice(3, 5)) - 1);
//      const activeMonth = month.toLocaleDateString("ru", { month: "long" });

//      monthesSum.forEach((data) => {
//        if (data.currentMonth === activeMonth) {
//          const sum = data.currentAmount + amount;
//          data.currentAmount = sum;
//        }
//      });
//    });
//    setMonthes(monthesSum);
//    console.log(months);
//  }, [transactions]);

// добавление данных с суммами по месяцам в объект где глюч - месяц, данные - объект
// function count() {
//   if (transactions) {
//     const dataBrief = transactions.reduce((acc, { date, amount }) => {
//       const month = date.slice(3, 5);
//       if (!acc.hasOwnProperty(month)) {
//         acc = { ...acc, [month]: amount };
//       } else {
//         const sum = acc[month] + amount;
//         acc = { ...acc, [month]: sum };
//       }

//       return acc;
//     }, {});
//     console.log(dataBrief);
//   }
// }
// const dataBrief = [];

// создание списка месяцев в текстовом режиме задом наперед
// const months = [];
// for (let i = 0; i < 6; ++i) {
//   let month = new Date();
//   month.setMonth(month.getMonth() - i);
//   months.push(month.toLocaleDateString("ru", { month: "long" }));
// }
