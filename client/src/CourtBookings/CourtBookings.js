import React, { useState, useEffect } from 'react';
import DayHeader from './DayHeader.js'
import CourtNumbers from './CourtNumbers.js'
import Schedule from './Schedule'

const CourtBookings = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const updateDate = (dateVal) => {
      setCurrentDate(dateVal);
    };

    return(
        <div id="booking-container">
            <DayHeader curDate={currentDate} onDateUpdate={updateDate} />
            <CourtNumbers />
            <Schedule curDate={currentDate} />
        </div>
    )
}

export default CourtBookings;