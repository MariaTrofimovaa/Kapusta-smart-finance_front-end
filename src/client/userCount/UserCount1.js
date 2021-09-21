import { useState } from "react";

const UserCount1 = () => {
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
        <div>
            <p>Текущий период :</p>
            <div><span onClick={() => changeMonth("prev")}>&lt; 
                </span>{month} {year}
                <span onClick={() => changeMonth("next")}>&gt;
                </span>
            </div>
        </div>
    );
}

export default UserCount1;