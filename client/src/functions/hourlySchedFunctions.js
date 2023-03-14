import React from "react";
import { Link } from "react-router-dom";

export const bookACourt = (timeSlots, courtCode, courtTime, courtDate, i) => {
  timeSlots.push(
    <div className="sched__col cell" key={courtCode}>
      <Link
        className="sched__link"
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
        Book a Court!
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
    <div className="sched__col cell" key={courtCode} name={i}>
      {courtBookings[bx].players[0] ? courtBookings[bx].players[0] : "hello"}
      <br />
      {courtBookings[bx].players[1] ? courtBookings[bx].players[1] : "hello"}
      <br />
      {courtBookings[bx].players[2] ? courtBookings[bx].players[2] : "hello"}
      <br />
      {courtBookings[bx].players[3] ? courtBookings[bx].players[3] : "hello"}

      <Link
        className="sched__linkBook"
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
        Edit Booking
      </Link>
      <button
        onClick={() => deleteItem(courtBookings[bx]._id, history, formDel)}
      >
        Delete
      </button>
    </div>
  );
};


export const timeCell = (timeSlots, courtTime) => {
  timeSlots.push(
    <div className="sched__col cell coltime" key={`Time-${courtTime}`}>
      {courtTime}
    </div>
  );
};

export const timeRow = (rows, curTime, timeSlots) => {
  rows.push(
    <div className="sched__row" key={curTime}>
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
