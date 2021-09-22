import { useState } from "react";
import css from "./UserCount.module.css";
import sprite from "../../assets/icons/sprite_categories.svg";

const UserCount = () => {
const [date, setDate] = useState(new Date());
const changeMonth = (action) => {
    const value = action === 'prev' ? -1 : 1;
    setDate((prevDate) => {
        const newDate = new Date(prevDate.getTime());
        const month = newDate.getMonth();
        newDate.setMonth(month + value);
        return newDate
    })
}
const year = date.getFullYear();
const month = date.toLocaleDateString("ru", { month: "long" });

    return (
        <div className={css.dataContainer}>
            <p className={css.countText}>Текущий период :</p>
            <div className={css.data}><span className={css.button} onClick={() => changeMonth("prev")}> <svg width="8" height="15">
              <use xlinkHref={`${sprite}#icon-arrow-left`} />
            </svg> 
                </span>{month} {year}
                <span className={css.button1} onClick={() => changeMonth("next")}> <svg width="8" height="15">
              <use xlinkHref={`${sprite}#icon-arrow-right`} />
            </svg>
                </span>
            </div>
        </div>
    );
}

export default UserCount;