import React, { useState, useEffect } from "react";
import HourlySched from "./HourlySched";
import { getBookings } from '../functions/courtBookingAPI.js';


function TimeSched({ curDate }) {
  const [courtBookings, setCourtBookings] = useState([0]);

  const onCourtBookingUpdate = (value) => {
      setCourtBookings(value);
    }

  //Every time the curDate changes or updates, run fetchBookings
  useEffect(() => {
    getBookings(curDate, onCourtBookingUpdate);
  }, [curDate]);


  return <HourlySched curDate={curDate} courtBookings={courtBookings} />;
}

export default TimeSched;

