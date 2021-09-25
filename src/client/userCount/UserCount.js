import { useState, useEffect } from "react";
import css from "./UserCount.module.css";
import sprite from "../../assets/icons/sprite_categories.svg";
import {useDispatch} from 'react-redux';
import {getAllExpenseOfMonth, getAllIncomeOfMonth} from "../../redux/report/report.operations";
import moment from "moment";

const UserCount = () => {
const dispatch = useDispatch();
const [date, setDate] = useState(new Date());
const monthes = moment(date).format('MM.YYYY');

useEffect(() => {
    dispatch(getAllExpenseOfMonth(monthes));
}, [date]);
useEffect(() => {
    dispatch(getAllIncomeOfMonth(monthes));
}, [date]);

const changeMonth = (action) => {
    const value = action === 'prev' ? -1 : 1;

    setDate((prevDate) => {
        const newDate = new Date(prevDate.getTime());
        const month = newDate.getMonth();
        newDate.setMonth(month + value);
        if(newDate > new Date()){
            return prevDate
        }
        return newDate
    })
}
const year = date.getFullYear();
const month = date.toLocaleDateString("ru", { month: "long" });

    return (
        <div className={css.dataContainer}>
            <p className={css.countText}>Текущий период :</p>
            <div className={css.data}>
                <span className={css.button} onClick={() => changeMonth("prev")}>
                    <svg width="8" height="15">
                        <use xlinkHref={`${sprite}#icon-arrow-left`} />
                    </svg> 
                </span>{month} {year}
                <span className={css.button1} onClick={() => changeMonth("next")}>
                    <svg width="8" height="15">
                        <use xlinkHref={`${sprite}#icon-arrow-right`} />
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default UserCount;