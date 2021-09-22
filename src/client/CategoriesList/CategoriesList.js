import sprite from "../../assets/icons/sprite_categories.svg";
import css from "./CategoriesList.module.css";

const CategoriesList = ({ transactionType }) => {
  return (
    <ul className={css.list}>
      {transactionType.length === 0 ? <h3 className={css.title_message}>По данном месяцу категорий не найдено.</h3> : transactionType.map((obj, idx) => (
        <li key={idx} className={css.item}>
          <p className={css.text}>{obj.categorySum}</p>
          <div className={css.svg_box}>
            <svg width="58" height="58" className={css.icon}>
              <use xlinkHref={`${sprite}#icon-${obj.category}`} />
            </svg>
          </div>
          <h3 className={css.title}>{obj.category}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
