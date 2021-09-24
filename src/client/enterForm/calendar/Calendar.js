import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ReactComponent as CalendarLogo } from "../../../assets/icons/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calendar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import setSelectedDate from "../../../redux/date/date.actions";
import { getSelectedDate } from "../../../redux/date/date.selectors";

const Calendar = () => {
  const dispatch = useDispatch();
  // const [startDate, setStartDate] = useState(new Date());

  // useEffect(() => {
  //   dispatch(
  //     setSelectedDate(
  //       startDate.toISOString().slice(0, 10).split("-").reverse().join(".")
  //     )
  //   );
  // }, [dispatch, startDate]);

  // Сохранение даты при переходе на другую страницу
  const date = useSelector(getSelectedDate);

  // useEffect(() => {
  //   setStartDate(date);
  // }, [date]);
  console.log(new Date());
  console.log(date);

  const handleChangeDate = (date) => {
    dispatch(setSelectedDate(date.toISOString().slice(0, 10)));
  };

  return (
    <div className={styles.box}>
      <div className={styles.datePickerLogo}>
        <CalendarLogo />
      </div>
      <DatePicker
        className={styles.datePicker}
        selected={date ? new Date(date) : new Date()}
        dateFormat="dd.MM.yyyy"
        onChange={handleChangeDate}
        // openToDate={new Date("1993/09/28")}
      />
    </div>
  );
};

export default Calendar;
