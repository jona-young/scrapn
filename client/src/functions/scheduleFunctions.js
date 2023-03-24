import React from "react";
import { Link } from "react-router-dom";
import { deleteBooking } from "./courtBookingAPI.js";
import format from "date-fns/format";
import addHours from "date-fns/addHours";

export const bookACourt = (timeSlots, courtTime, courtDate, i) => {
  timeSlots.push(
      <Link
        className="cell cell-book court-link"
        state={{     
          edit_val: false,
          date: courtDate,
          time: courtTime,
          court: i,
          type: "Singles",
          players: [
            {
              name: "",
              nameID: ""
            },
            {
              name: "",
              nameID: ""
            }
          ],
          author: "",
          authorID:""
        }}
        to={{
          pathname: "/create-court",
        }}
      >
        Book
      </Link>
  );
};

export const bookedCourt = (
  timeSlots,
  courtCode,
  i,
  courtBookings,
  bx,
  deleteItem,
  history,
  courtDate
) => {
  const formDel = false;
  timeSlots.push(
    <span className="cell-booked" key={i}>
      <Link
      className="court-link"
      state={{
        edit_val: true,
        _id: courtBookings[bx]._id,
        date: courtDate,
        time: courtBookings[bx].time,
        type: courtBookings[bx].type,
        court: courtBookings[bx].court,
        players: courtBookings[bx].players,
        author: courtBookings[bx].author,
        authorID: courtBookings[bx].authorID,
        mode: "update"
      }}
      to={{
        pathname: "/update-court",
      }}
      >
        <div key={courtCode} name={i}>
          <div className="name-box">
            <div className="player-name">
                {courtBookings[bx].players[0] ? courtBookings[bx].players[0].name.substring(0,7) : ""}
              </div>
              <div className="player-name">
                {courtBookings[bx].players[1] ? courtBookings[bx].players[1].name.substring(0,7) : ""}
              </div>
              <div className="player-name">
                {courtBookings[bx].players[2] ? courtBookings[bx].players[2].name.substring(0,7) : ""}
              </div>
              <div className="player-name">
                {courtBookings[bx].players[3] ? courtBookings[bx].players[3].name.substring(0,7) : ""}
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

  console.log(currentItem)
  if (e.target.getAttribute("data-key") === "players")
  {
    const playerName = e.target.selectedOptions[0].text;
    const nameObject = {
      name: playerName,
      nameID: value,
    }

    let playersOnCourt = currentItem.players

    if (name === "0") {
      playersOnCourt[name] = nameObject

      updateItem(currentObj => ({...currentObj, ["players"]: playersOnCourt, author: value}))

    }
    else
    {
      playersOnCourt[name] = nameObject

      updateItem(currentObj => ({...currentObj, ["players"]: playersOnCourt }))
    }
  }
  else {
    updateItem(currentObj => ({...currentObj, [name]: value}))

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
          bookACourt(timeSlots, courtTime, courtDate, i.toString());
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
                    history,
                    courtDate
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

  //Deletes players names if they were edited in doubles, user selected singles, and moves back to doubles
  export const DoublesToSinglesSwitch = (e, setCurrentItem, currentItem) => {
    const value = e.target.value
    const formData = currentItem
    console.log(currentItem)


    if (value === "Singles")
    {
      const removals = formData.players.length - 2
      for (let i = 0; i < removals; i++)
      {
        formData.players.pop()
      }
  
      setCurrentItem(formData)
      handleChange(e, setCurrentItem, currentItem);
    }
    if (value === "Doubles")
    {
      while (formData.players.length < 4)
      {
        formData.players.push({
          name: "",
          nameID: ""
        })
      }

      setCurrentItem(formData)
      handleChange(e, setCurrentItem, currentItem)
    }
  }