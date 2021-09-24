import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import sprite from "../../assets/icons/sprite_categories.svg";

import styles from "./Brief.module.scss";

import operation from "../../redux/transactions/transactions.operations";

import action from "../../redux/transactions/transactions.actions";

import {
  getBrief,
  getYear,
} from "../../redux/transactions/transactions.selectors";

const Brief = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const date = new Date();

  const [currentYear, setYear] = useState(date.getFullYear());
  const [monthsTotal, setMonthes] = useState([]);

  const filter = {
    type: location.slice(1),
    year: currentYear,
  };

  const transactions = useSelector(getBrief)[filter.type];

  const stateYear = useSelector(getYear);


  useEffect(() => {
    dispatch(action.changeActualYearForBrief(currentYear));
  }, [dispatch, currentYear]);

  useEffect(() => {
    if (
      (filter.type === "income" && !transactions.length) ||
      (filter.type === "expense" && !transactions.length)
    )
      dispatch(operation.fetchBrief(filter));
  }, [dispatch, stateYear]);


  useEffect(() => {
    let month = new Date();
    const monthesSum = Array(currentDate.month + 1)
      .fill("")
      .map((_, idx) => ({
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
  }, [transactions]);

  const changeYear = () => {};

  useEffect(() => {
    let month = new Date();

    if (!transactions.length) {
      const monthesSum = [];
      setMonthes(monthesSum);
      return;
    }
    const monthesSum = Array(date.getMonth() + 1)
      .fill("")
      .map((_, idx) => ({
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
  }, [transactions]);


  return (
    <div className={styles.container}>
      <div className={styles.titleBlock}>
        <div className={styles.titleCont}>
          <button
            className={styles.btn}
            onClick={() => {
              setYear(currentYear - 1);
            }}
          >
            <svg width="10" height="15">
              <use xlinkHref={`${sprite}#icon-arrow-left`} />
            </svg>
          </button>
          <div>
            Сводка
            <p>{currentYear}</p>
          </div>

          {currentYear < date.getFullYear() && (
            <button
              className={styles.btn}
              onClick={() => {
                setYear(currentYear + 1);
              }}
            >
              <svg width="10" height="15">
                <use xlinkHref={`${sprite}#icon-arrow-right`} />
              </svg>
            </button>
          )}
        </div>
      </div>

      <ul>
        {monthsTotal.length > 0 ? (
          monthsTotal.map(({ currentMonth, currentAmount }) => (
            <li key={currentMonth} className={styles.monthPoint}>
              <p className={styles.monthPointText}>{currentMonth}</p>
              <p className={styles.monthPointText}>{currentAmount}</p>
            </li>
          ))
        ) : (
          <div className={styles.list}> </div>
        )}
      </ul>
    </div>
  );
};

export default Brief;

// создание массива объектов с начала года до текущего месяца с суммами
//  useEffect(() => {
//    const monthesSum = [];
//    let month = new Date();
//    for (let i = 0; i <= date.getMonth(); ++i) {
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
