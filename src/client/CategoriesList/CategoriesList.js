import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllExpenseOfMonth,
  getAllIncomeOfMonth,
} from "../../redux/report/report.operations";

import {
  allIncomeOfMonth,
  allexpenseOfMonth,
} from "../../redux/report/report.selectors";

import sprite from "../../assets/icons/sprite_categories.svg";
import css from "./CategoriesList.module.css";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const month = "09.2021";
  useEffect(() => {
    dispatch(getAllExpenseOfMonth(month));
    dispatch(getAllIncomeOfMonth(month));
  }, []); // добавить изменение по дате
  // let categories = [];
  // const array = useSelector(allexpenseOfMonth);
  // console.log(array);
  // // const abc = array.map((obj) => {
  // //   if (obj.category === "Алкоголь") {
  // //     return categories.push(obj.category);
  // //   }
  // // });

  // const summ = array.reduce((acc, obj) => {
  //   if (obj.category === "Алкоголь") {
  //     return acc + obj.amount;
  //   }
  // }, 0);
  // console.log(summ);

  return (
    <div className={css.list_wraper}>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.text}>5000</p>
          <div className={css.svg_box}>
            <svg width="50" height="50" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-techical`} />
            </svg>
          </div>
          <h3 className={css.title}>Техника</h3>
        </li>
        <li className={css.item}>
          <p className={css.text}>5000</p>
          <div className={css.svg_box}>
            <svg width="50" height="50" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-transport`} />
            </svg>
          </div>
          <h3 className={css.title}>Транспорт</h3>
        </li>
        <li className={css.item}>
          <p className={css.text}>5000</p>
          <div className={css.svg_box}>
            <svg width="50" height="50" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-products`} />
            </svg>
          </div>
          <h3 className={css.title}>Продукты</h3>
        </li>
        <li className={css.item}>
          <p className={css.text}>5000</p>
          <div className={css.svg_box}>
            <svg width="50" height="50" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-household`} />
            </svg>
          </div>
          <h3 className={css.title}>Все для дома</h3>
        </li>
        <li className={css.item}>
          <p className={css.text}>5000</p>
          <div className={css.svg_box}>
            <svg width="50" height="50" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-hobby`} />
            </svg>
          </div>
          <h3 className={css.title}>Спорт и хобби</h3>
        </li>
        <li className={css.item}>
          <p className={css.text}>5000</p>
          <div className={css.svg_box}>
            <svg width="50" height="50" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-health`} />
            </svg>
          </div>
          <h3 className={css.title}>Здоровье</h3>
        </li>
        <li className={css.item}>
          <p className={css.text}>5000</p>
          <div className={css.svg_box}>
            <svg width="50" height="50" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-entertainment`} />
            </svg>
          </div>
          <h3 className={css.title}>Развлечения</h3>
        </li>
        <li className={css.item}>
          <p className={css.text}>5000</p>
          <div className={css.svg_box}>
            <svg width="50" height="50" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-communal`} />
            </svg>
          </div>
          <h3 className={css.title}>Комуналка и связь</h3>
        </li>
        <li className={css.item}>
          <p className={css.text}>5000</p>
          <div className={css.svg_box}>
            <svg width="50" height="50" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-other`} />
            </svg>
          </div>
          <h3 className={css.title}>Прочее</h3>
        </li>
        <li className={css.item}>
          <p className={css.text}>5000</p>
          <div className={css.svg_box}>
            <svg width="50" height="50" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-alcohol`} />
            </svg>
          </div>
          <h3 className={css.title}>Алкоголь</h3>
        </li>
        <li className={css.item}>
          <p className={css.text}>5000</p>
          <div className={css.svg_box}>
            <svg width="50" height="50" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-book`} />
            </svg>
          </div>
          <h3 className={css.title}>Образование</h3>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesList;
