import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ReactComponent as CalendarLogo } from "./svg/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calendar.module.css";
import EnterForm from "../../../client/enterForm/enterForm/EnterForm";
// import { useDispatch } from "react-redux";
// import { getSelectedDay } from "../../redux/products/products.actions";
// import { getDayInfo } from "../../redux/products/products.operations";

const Calendar = () => {
  // const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  // useEffect(() => {
  //   dispatch(getSelectedDay(startDate.toISOString().slice(0, 10)));
  //   dispatch(getDayInfo(startDate.toISOString().slice(0, 10)));
  // }, [dispatch, startDate]);

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
