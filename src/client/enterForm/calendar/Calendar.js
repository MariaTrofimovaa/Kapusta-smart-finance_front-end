import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ReactComponent as CalendarLogo } from "./svg/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calendar.module.css";
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
    <div>
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
