import React, { useState } from "react";
import { handleChange } from "../functions/scheduleFunctions.js";
import { deleteBooking, postBooking, putBooking } from "../functions/courtBookingAPI.js"
import { useNavigate, useLocation } from "react-router-dom";

function BookForm() {
//TODO: Need to set mode if new booking, then postBooking
// Otherwise if updating a booking, putBooking

  let history = useNavigate();
  let data = useLocation();
  const formDel = true;

  //Sets the item that will be pushed to backend API to create court booking
  const [currentItem, setCurrentItem] = useState({
    _id: data.state._id ? data.state._id : null,
    date: data.state.date ? data.state.date : "",
    time: data.state.time ? data.state.time : "",
    court: data.state.court ? data.state.court : "1",
    players: data.state.players? data.state.players : ["Albert Andersen","[NAME HERE]","[NAME HERE]","[NAME HERE]"],
    author: data.state.author ? data.state.author : "",
    authorID: data.state.authorID ? data.state.authorID : "",
  });

  return (
    <div className="form">
      <span className="title">Court Booking Form</span>
      <form
        className="form-form"
        onSubmit={(e) => data.state.mode == "update" ? putBooking(e, currentItem, history) : postBooking(e, currentItem, history)}
      >
        <label className="form-field">
          Court Date
        </label>
        <input
          type="date"
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="date"
          value={currentItem.date}
          placeholder="YYYY-MM-DD"
        />
        <label className="form-field">
          Court Time
        </label>
        <input
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="time"
          value={currentItem.time}
        />
        <label className="form-field">
          Court Number
        </label>
        <select
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="court"
          value={currentItem.court}
        >
          <option value="1">Court 1</option>
          <option value="2">Court 2</option>
          <option value="3">Court 3</option>
          <option value="4">Court 4</option>
        </select>
        <label className="form-field">
          Court Type
        </label>
        <select
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="court"
          value={currentItem.court_play}
        >
          <option value="0">Doubles</option>
          <option value="1">Singles</option>
        </select>
        <label className="form-field">
              Player(s)
        </label>
        { currentItem.players[0] ? 
            <input
            type="text"
            onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
            className="form-input"
            name="player1"
            data-key="players"
            value={currentItem.players[0]}
            />
        : ""}
        { currentItem.players[1] ? 
          <input
          type="text"
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="player2"
          data-key="players"
          value={currentItem.players[1]}
          />
        : ""}
        { currentItem.players[2] ? 
          <input
          type="text"
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="player3"
          data-key="players"
          value={currentItem.players[2]}
          />
        : ""}
        { currentItem.players[3] ? 
          <input
          type="text"
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="player4"
          data-key="players"
          value={currentItem.players[3]}
          />
        : ""}
        <input id="submit" className="form-submit" type="submit" name="Add" />
      </form>
      {data.state.mode == "update" ? 
        <button 
          className="form-delete"
          onClick={() => deleteBooking(currentItem._id, history, formDel)}>
          Delete
        </button> 
        :
        ""
      }
      
    </div>
  );
}

export default BookForm;
