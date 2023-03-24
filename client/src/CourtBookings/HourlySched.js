import React from "react";
import {
  loadingPage,
  scheduleCreator
} from "../functions/scheduleFunctions.js";
import { useNavigate } from "react-router-dom";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";

function HourlySched({ curDate, courtBookings }) {
  let timeSlots = [];
  let history = useNavigate();
  let curTime = setMinutes(setHours(curDate, 7), 0);
  let endTime = setMinutes(setHours(curDate, 22), 0);
  const rows = [];

  if (courtBookings[0] === 0) {
    loadingPage(rows);
    //If there are court bookings on the day
  } else {
    //Sets # of rows from curTime & endTime (Club's Hours of Operations)
    scheduleCreator(rows, timeSlots, curTime, endTime, courtBookings, history)
  }
  return <div id="court-schedule">{rows}</div>;
}

export default HourlySched;
