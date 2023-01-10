import React, { useState } from 'react';
import MonthHeader from './MonthHeader.js'
import DayHeader from './DayHeader.js'
import CourtNumbers from './CourtNumbers.js'
import Schedule from './Schedule'
import './CourtBookings.css'

const CourtBookings = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const updateDate = (dateVal) => {
      setCurrentDate(dateVal);
    };

    return(
        <>
            <MonthHeader curDate={currentDate} onDateUpdate={updateDate} />
            <DayHeader curDate={currentDate} onDateUpdate={updateDate} />
            <CourtNumbers />
            <Schedule curDate={currentDate} />
        </>
    )
}

export default CourtBookings;