import React from "react";
import sprite from "../../assets/icons/sprite_categories.svg";
import css from "./CategoriesList.module.css";

const CategoriesList = ({}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p className={css.text}>5000</p>
        <button type="button" className={css.btn}>
          <svg width="50" height="50" className={css.icon}>
            <use xlinkHref={`${sprite}#icon-alcohol`} />
          </svg>
        </button>
        <h3 className={css.title}>Продукты</h3>
      </li>
    </ul>
  );
};

export default CategoriesList;
