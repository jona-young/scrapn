import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadUserData } from '../functions/userAPI.js';
import { UserContext } from '../functions/UserContext.js';
import DayHeader from './DayHeader.js'
import CourtNumbers from './CourtNumbers.js'
import Schedule from './Schedule'

const CourtBookings = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    //User Context
    const { userPrefs, updateUserPrefs } = useContext(UserContext);

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    const updateDate = (dateVal) => {
      setCurrentDate(dateVal);
    };

    useEffect(() => {
        loadUserData(updateUserPrefs, routeLoginChange);
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