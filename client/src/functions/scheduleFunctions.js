import React from "react";
import { Link } from "react-router-dom";
import { deleteBooking } from "./courtBookingAPI.js";
import format from "date-fns/format";
import addHours from "date-fns/addHours";

export const bookACourt = (timeSlots, courtCode, courtTime, courtDate, i) => {
  timeSlots.push(
    <div className="cell cell-book" key={courtCode}>
      <Link
        className="court-link"
        state={{            
          edit_val: false,
          date: courtDate,
          time: courtTime,
          court: i,
        }}
        to={{
          pathname: "/tennis-form",
        }}
      >
        Book
      </Link>
    </div>
  );
};

export const bookedCourt = (
  timeSlots,
  courtCode,
  i,
  courtBookings,
  bx,
  deleteItem,
  history
) => {
  const formDel = false;
  timeSlots.push(
    <span className="cell-booked">
      <Link
      className="court-link"
      state={{
        edit_val: true,
        _id: courtBookings[bx]._id,
        date: courtBookings[bx].date,
        time: courtBookings[bx].time,
        court: courtBookings[bx].court,
        players: courtBookings[bx].players,
        author: courtBookings[bx].author,
        mode: "update"
      }}
      to={{
        pathname: "/tennis-form",
      }}
      >
        <div key={courtCode} name={i}>
          <div className="name-box">
            <div className="player-name">
                {courtBookings[bx].players[0] ? courtBookings[bx].players[0].substring(0,7) : "hello"}
              </div>
              <div className="player-name">
                {courtBookings[bx].players[1] ? courtBookings[bx].players[1].substring(0,7) : "hello"}
              </div>
              <div className="player-name">
                {courtBookings[bx].players[2] ? courtBookings[bx].players[2].substring(0,7) : "hello"}
              </div>
              <div className="player-name">
                {courtBookings[bx].players[3] ? courtBookings[bx].players[3].substring(0,7) : "hello"}
              </div>
          </div>
        </div>
      </Link>
      <button
        className="court-delete"
        onClick={() => deleteItem(courtBookings[bx]._id, history, formDel)}
      >
        Delete
      </button>
  </span>
  );
};


export const timeCell = (timeSlots, courtTime) => {
  timeSlots.push(
    <div className="cell-time" key={`Time-${courtTime}`}>
      {courtTime}
    </div>
  );
};

export const timeRow = (rows, curTime, timeSlots) => {
  rows.push(
    <div className="schedule-row" key={curTime}>
      {timeSlots}
    </div>
  );
};

//Function to update currentItem based off changes in each individual form field
export const handleChange = (e, updateItem, currentItem) => {
  const name = e.target.name;
  const value = e.target.value;
 
  if (e.target.getAttribute("data-key") === "players")
  {
    let playersOnCourt = currentItem.players

    if (name === "player1") {
      playersOnCourt[0] = value
  
      updateItem({ ...currentItem, ["players"]: playersOnCourt, author: value });
    }
    else if (name === "player2") {
      playersOnCourt[1] = value
  
      updateItem({ ...currentItem, ["players"]: playersOnCourt });
    }
    else if (name === "player3") {
      playersOnCourt[2] = value
  
      updateItem({ ...currentItem, ["players"]: playersOnCourt });
    }
    else if (name === "player4") {
      playersOnCourt[3] = value
  
      updateItem({ ...currentItem, ["players"]: playersOnCourt });
    }
  }

  else {
    updateItem({...currentItem, [name]: value});
  }
};


export const loadingPage = (rows) => {
  return rows.push(
      <div className="sched__bodyLogin" key="loginText">
        <h2>Courts loading...please wait!</h2>
      </div>
  )
}

export const scheduleCreator = (rows, timeSlots, curTime, endTime, courtBookings, history) => {
  while (curTime <= endTime) {
    const courtTime = format(curTime, "p");
    const courtDate = format(curTime, "yyyy-MM-d");
    
    //Sets # of columns, in this case 5 for time and 4 courts
    for (let i = 0; i < 5; i++) {
      //First column is the time
      if (i === 0) {
        timeCell(timeSlots, courtTime);
      } else {
        const courtNum = i.toString();
        const courtCode = courtNum + "--" + courtTime;
        //If no court bookings on the day, fill every cell with bookACourt
        if (courtBookings.length === 0) {
          bookACourt(timeSlots, courtCode, courtTime, courtDate, i.toString());
        } 
        else 
        {
          //Cycles through each court booking to match to time and court cell
          for (let bx = 0; bx < courtBookings.length; bx++) {
            let book = courtBookings[bx];
            //If courtBooking object is same time as row's time
            if (courtTime === book.time) {
              //If courtBooking object has same time and court number as row
              if (courtNum === book.court) {
                bookedCourt(
                    timeSlots,
                    courtCode,
                    i.toString(),
                    courtBookings,
                    bx,
                    deleteBooking,
                    history
                );
                break;
                //If courtBooking object has same time but not same court number
              } else if (courtNum !== book.court_number) {
                //If the object has the right time, wrong court number, and is last object in array
                if (bx === courtBookings.length - 1) {
                  bookACourt(timeSlots, courtCode, courtTime, courtDate, i);
                  break;
                }
                continue;
              }
              //If cycles through last object in courtBooking & no courtTime match
            } else if (bx === courtBookings.length - 1) {
              bookACourt(timeSlots, courtCode, courtTime, courtDate, i);
              break;
              //Makes sure to cycle through whole courtBooking array for match
            } else {
              continue;
            }
          }
        }
      }
    }
    timeRow(rows, curTime, timeSlots);

    //Resets time slots
    timeSlots = [];
    curTime = addHours(curTime, 1);
  }
}