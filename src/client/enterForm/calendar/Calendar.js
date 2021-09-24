import DatePicker from "react-datepicker";
import { ReactComponent as CalendarLogo } from "../../../assets/icons/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calendar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import setSelectedDate from "../../../redux/date/date.actions";
import { getSelectedDate } from "../../../redux/date/date.selectors";

const Calendar = () => {
  const dispatch = useDispatch();

  const date = useSelector(getSelectedDate);

  const handleChangeDate = (date) => {
    dispatch(
      setSelectedDate(
        date.toISOString().slice(0, 10).split("-").reverse().join(".")
      )
    );
  };

  return (
    <div className={styles.box}>
      <div className={styles.datePickerLogo}>
        <CalendarLogo />
      </div>
      <DatePicker
        className={styles.datePicker}
        selected={
          date ? new Date(date.split(".").reverse().join("-")) : new Date()
        }
        dateFormat="dd.MM.yyyy"
        onChange={handleChangeDate}
      />
    </div>
  );
};

export default Calendar;
