import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateUser } from '../functions/userAPI.js';
import DayHeader from './DayHeader.js'
import CourtNumbers from './CourtNumbers.js'
import Schedule from './Schedule'

const CourtBookings = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    const updateDate = (dateVal) => {
      setCurrentDate(dateVal);
    };

    useEffect(() => {
        validateUser(routeLoginChange);
    },[])
    return(
        <div id="booking-container">
            <DayHeader curDate={currentDate} onDateUpdate={updateDate} />
            <CourtNumbers />
            <Schedule curDate={currentDate} />
        </div>
    )
}

export default CourtBookings;