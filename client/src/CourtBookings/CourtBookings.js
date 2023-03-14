import React, { useState, useEffect } from 'react';
import DayHeader from './DayHeader.js'
import CourtNumbers from './CourtNumbers.js'
import Schedule from './Schedule'
import './CourtBookings.css'

const CourtBookings = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const updateDate = (dateVal) => {
        console.log('attempting: ', dateVal)
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