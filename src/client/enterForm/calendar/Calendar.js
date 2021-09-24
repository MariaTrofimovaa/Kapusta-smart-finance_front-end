import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ReactComponent as CalendarLogo } from "../../../assets/icons/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calendar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import getSelectedDate from "../../../redux/date/date.actions";

const Calendar = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(
      getSelectedDate(
        startDate.toISOString().slice(0, 10).split("-").reverse().join(".")
      )
    );
  }, [dispatch, startDate]);

  // Сохранение даты при переходе на другую страницу
  // const date = useSelector(getSelectedDate);

  // useEffect(() => {
  //   setStartDate(date);
  // }, [date]);

  return (
    <div className={styles.box}>
      <CalendarLogo className={styles.datePickerLogo} />
      <DatePicker
        className={styles.datePicker}
        selected={startDate}
        dateFormat="dd.MM.yyyy"
        onChange={(date) => setStartDate(date)}
        // openToDate={new Date("1993/09/28")}
      />
    </div>
  );
};

export default Calendar;
