import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ReactComponent as CalendarLogo } from "../../../assets/icons/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calendar.module.css";
import EnterForm from "../../../client/enterForm/enterForm/EnterForm";
import { useSelector, useDispatch } from "react-redux";
import transactionsActions from "../../../redux/transactions/transactions.actions";
// import transactionsOperations from "../../../redux/transactions/transactions.operations";

const Calendar = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(
      transactionsActions.getSelectedDate(
        startDate.toISOString().slice(0, 10).split("-").reverse().join(".")
      )
    );
    // dispatch(getDayInfo(formattedDate));
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
      <EnterForm startDate={startDate} />
    </div>
  );
};

export default Calendar;
