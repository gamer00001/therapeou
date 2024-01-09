import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";

import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

const DatePickerTime = ({
  getLocalTime,
  excludeTime,
  startDate,
  selectedDates,
  handleDateSelect,
  isCurrentHighLight,
}) => {
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className={`date-picker-container`}>
      <DatePicker
        // showTimeSelect
        selected={startDate}
        onChange={getLocalTime}
        excludeTimes={excludeTime}
        highlightDates={selectedDates}
        minDate={subDays(new Date(), 0)}
        filterTime={filterPassedTime}
        // onSelect={handleDateSelect}
        inline
        // disabled
      />
    </div>
  );
};
export default DatePickerTime;

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// const DatePickerTime = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   );
// };

// export default DatePickerTime;
