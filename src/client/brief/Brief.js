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
