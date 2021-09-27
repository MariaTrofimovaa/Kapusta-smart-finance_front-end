import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
  const { transType } = useParams();

  const date = new Date();

  const [monthsTotal, setMonthes] = useState([]);

  const stateYear = useSelector(getYear);

  const filter = {
    type: transType,
    year: stateYear,
  };

  const transactions = useSelector(getBrief)[filter.type];

  // useEffect(() => {
  //   dispatch(action.changeActualYearForBrief(date.getFullYear()));
  // }, []);

  useEffect(() => {
    !transactions.length && stateYear && dispatch(operation.fetchBrief(filter));
  }, [dispatch, stateYear, transType]);

  useEffect(() => {
    if (!transactions.length) {
      const monthesSum = [];
      setMonthes(monthesSum);
      return;
    }
    const monthCuantity =
      date.getFullYear() === stateYear ? date.getMonth() + 1 : 12;

    const monthesSum = Array(monthCuantity)
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
      date.setMonth(data.currentMonth);
      data.currentMonth = date.toLocaleDateString("ru", { month: "long" });

      let formatter = new Intl.NumberFormat("ru", {
        minimumFractionDigits: 2,
      });
      data.currentAmount = formatter.format(data.currentAmount);
    });

    setMonthes(monthesSum);
  }, [transactions]);

  return (
    <div className={styles.container}>
      <div className={styles.titleBlock}>
        <div className={styles.titleCont}>
          <div className={styles.btnBlock}>
            <button
              className={styles.btn}
              onClick={() => {
                dispatch(action.changeActualYearForBrief(stateYear - 1));
              }}
            >
              <svg width="10" height="15">
                <use xlinkHref={`${sprite}#icon-arrow-left`} />
              </svg>
            </button>
          </div>
          <div>
            Сводка
            <p>{stateYear}</p>
          </div>
          <div className={styles.btnBlock}>
            {stateYear < date.getFullYear() && (
              <button
                className={styles.btn}
                onClick={() => {
                  dispatch(action.changeActualYearForBrief(stateYear + 1));
                }}
              >
                <svg width="10" height="15">
                  <use xlinkHref={`${sprite}#icon-arrow-right`} />
                </svg>
              </button>
            )}
          </div>
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

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import styles from "./Brief.module.scss";

// import operation from "../../redux/transactions/transactions.operations";

// import { getBrief } from "../../redux/transactions/transactions.selectors";

// const Brief = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();

//   const date = new Date();
//   const [currentDate, setYear] = useState({
//     year: date.getFullYear(),
//     month: date.getMonth(),
//   });

//   const [monthsTotal, setMonthes] = useState([]);

//   const filter = {
//     // type: "income",
//     type: location.pathname.slice(1),
//     year: currentDate.year,
//   };

//   const transactions = useSelector(getBrief)[filter.type];

//   useEffect(() => {
//     dispatch(operation.fetchBrief(filter));
//     // eslint-disable-next-line
//   }, [dispatch]);

//   useEffect(() => {
//     let month = new Date();
//     const monthesSum = Array(currentDate.month + 1)
//       .fill("")
//       .map((_, idx) => ({
//         currentMonth: idx,
//         currentAmount: transactions.reduce((acc, { date, amount }) => {
//           const actualMonth = +date.split(".")[1];

//           if (actualMonth - 1 === idx) {
//             acc += amount;
//           }
//           return acc;
//         }, 0),
//       }));

//     monthesSum.forEach((data) => {
//       month.setMonth(data.currentMonth);
//       data.currentMonth = month.toLocaleDateString("ru", { month: "long" });
//     });

//     setMonthes(monthesSum);
//   }, [transactions]);

//   // const changeYear = () => {};

//   return (
//     <div className={styles.container}>
//       <div className={styles.title}>Сводка {currentDate.year}</div>
//       <ul className={styles.list}>
//         {monthsTotal.length > 0 &&
//           monthsTotal.map(({ currentMonth, currentAmount }) => (
//             <li key={currentMonth} className={styles.monthPoint}>
//               <p>{currentMonth}</p>
//               <p>{currentAmount}</p>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Brief;

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
