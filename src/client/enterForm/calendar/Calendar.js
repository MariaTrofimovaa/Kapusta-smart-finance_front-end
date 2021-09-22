import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ReactComponent as CalendarLogo } from "../../../assets/icons/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calendar.module.css";
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

  return (
    <div className={styles.box}>
      <label className={styles.сalendar}>
        <CalendarLogo className={styles.datePickerLogo} />
        <DatePicker
          className={styles.datePicker}
          selected={startDate}
          dateFormat="dd.MM.yyyy"
          onChange={(date) => setStartDate(date)}
        />
      </label>
    </div>
  );
};

export default Calendar;
