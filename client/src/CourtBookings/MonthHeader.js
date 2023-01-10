import React from 'react';
import format from "date-fns/format";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";

const MonthHeader = ({ curDate, onDateUpdate }) => {
    const dateFormat = "MMMM yyyy";
    var todaysDate = format(curDate, dateFormat)

    const handleClickNextMonth = () => {
        onDateUpdate(addMonths(curDate, 1));
    };
    const handleClickPreviousMonth = () => {
        onDateUpdate(subMonths(curDate, 1));
    };

    return (
    <div className="schedule__header sched__row flex-middle">
        <div className="sched__colHead col-start">
        <div className="icon" onClick={handleClickPreviousMonth}>
            chevron_left
        </div>
        </div>
        <div className="sched__colHead col-center">
        <span className="text">{todaysDate}</span>
        </div>
        <div className="sched__colHead col-end">
        <div className="icon" onClick={handleClickNextMonth}>
            chevron_right
        </div>
        </div>
    </div>
    );
}

export default MonthHeader