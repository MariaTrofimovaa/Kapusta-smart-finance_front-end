import sprite from "../../assets/icons/sprite_categories.svg";
import css from "./CategoriesList.module.css";

const CategoriesList = ({ transactionType, onClick }) => {
  return (
    <ul className={css.list}>
      {transactionType?.length === 0 ? (
        <h3 className={css.title_message}>
          По данном месяцу категорий не найдено.
        </h3>
      ) : (
        transactionType?.map((obj) => (
          <li key={obj.category} className={css.item}>
            <p className={css.text}>{obj.categorySum} </p>
            <div className={obj.isActive ? css.svg_boxActive : css.svg_box}>
              <svg
                width="58"
                height="58"
                className={obj.isActive ? css.iconActive : css.icon}
                onClick={() => onClick(obj.category)}
              >
                <use xlinkHref={`${sprite}#icon-${obj.category}`} />
              </svg>
            </div>
            <h3 className={css.title}>{obj.category}</h3>
          </li>
        ))
      )}
    </ul>
  );
};

export default CategoriesList;

// {obj.isActive   (className={css.svg_box} ):className={css.svg_box}}
