import React from "react";
import { Link } from "react-router-dom";

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
    <Link
    className="court-link cell cell-booked"
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
              {courtBookings[bx].players[0] ? courtBookings[bx].players[0].substring(0,8) : "hello"}
            </div>
            <div className="player-name">
              {courtBookings[bx].players[1] ? courtBookings[bx].players[1].substring(0,8) : "hello"}
            </div>
            <div className="player-name">
              {courtBookings[bx].players[2] ? courtBookings[bx].players[2].substring(0,8) : "hello"}
            </div>
            <div className="player-name">
              {courtBookings[bx].players[3] ? courtBookings[bx].players[3].substring(0,8) : "hello"}
            </div>
        </div>
        <button
          onClick={() => deleteItem(courtBookings[bx]._id, history, formDel)}
        >
          Delete
        </button>
      </div>
    </Link>

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
