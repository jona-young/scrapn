import React from 'react';
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";

function DayHeader({ curDate, onDateUpdate }) {
  const dateFormat = "E, MMM d, yyyy";

  const handleOnClickPDay = () => {
    onDateUpdate(subDays(curDate, 1));
  };

  const handleOnClickNDay = () => {
    onDateUpdate(addDays(curDate, 1));
  };

  const handleDateUpdate = (e) => {
    const value = e.target.value
    console.log('the date be: ', value)

    var newDate = format(new Date(value), 'yyyy-MM-dd')
    newDate = addDays(newDate, 1)

    console.log("please: ", newDate)
    onDateUpdate();
  };


  return (
    <div id="date-box" className="date-selector">
      <div className="icon" id="select-left" onClick={handleOnClickPDay}>
        chevron_left
      </div>
      <div>
        <span className="date-header">{format(curDate, dateFormat)}</span>
        <input
            type="date"
            onChange={(e) => handleDateUpdate(e)}
            className="form__input"
            name="date"
            value={curDate}
            placeholder="YYYY-MM-DD"
          />
      </div>
        <div className="icon" id="select-right"  onClick={handleOnClickNDay}>
          chevron_right
        </div>
    </div>
  );
}

export default DayHeader;