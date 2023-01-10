import React, { useState } from "react";
import { handleChange } from "../functions/hourlySchedFunctions.js";
import { deleteBooking, postBooking } from "../functions/courtBookingAPI.js"
import { useNavigate, useLocation } from "react-router-dom";
import "./BookForm.css";

function BookForm() {
  let history = useNavigate();
  let data = useLocation();
  const formDel = true;

  //Sets the item that will be pushed to backend API to create court booking
  const [currentItem, setCurrentItem] = useState({
    id_: data.state._id ? data.state._id : null,
    date: data.state.date ? data.state.date : "",
    time: data.state.time ? data.state.time : "",
    court: data.state.court ? data.state.court : "1",
    players: data.state.players? data.state.players : ["Albert Andersen","[NAME HERE]","[NAME HERE]","[NAME HERE]"],
    author: data.state.author ? data.state.author : "",
    authorID: data.state.authorID ? data.state.authorID : "",
  });

  
  const updateItem = (e) => {
    console.log('should reup to here: ', e)
    setCurrentItem(e);
  };

  console.log('you know thats teh motto', currentItem)
  return (
    <div className="form">
      <span className="title">Court Booking Form</span>
      <form
        className="form__form"
        onSubmit={(e) => postBooking(e, currentItem, data, history)}
      >
        <label className="form__field">
          Court Date
          <br />
          <input
            type="date"
            onChange={(e) => handleChange(e, updateItem, currentItem)}
            className="form__input"
            name="date"
            value={currentItem.date}
            placeholder="YYYY-MM-DD"
          />
        </label>
        <label className="form__field">
          Court Time <br />
          <input
            onChange={(e) => handleChange(e, updateItem, currentItem)}
            className="form__input"
            name="time"
            value={currentItem.time}
          />
        </label>
        <label className="form__field">
          Court Number <br />
          <select
            onChange={(e) => handleChange(e, updateItem, currentItem)}
            className="form__input"
            name="court"
            value={currentItem.court}
          >
            <option value="1">Court 1</option>
            <option value="2">Court 2</option>
            <option value="3">Court 3</option>
            <option value="4">Court 4</option>
          </select>
        </label>
        <label className="form__field">
          Court Type
          <br />
          <select
            onChange={(e) => handleChange(e, updateItem, currentItem)}
            className="form__input"
            name="court_play"
            value={currentItem.court_play}
          >
            <option value="0">Doubles</option>
            <option value="1">Singles</option>
          </select>
        </label>
        { currentItem.players[0] ? 
        <label className="form__field">
        Player(s) <br />
        <input
        type="text"
        onChange={(e) => handleChange(e, updateItem, currentItem)}
        className="form__input"
        name="player1"
        value={currentItem.players[0]}
        />
        </label>
        : ""}
        { currentItem.players[1] ? 
        <label className="form__field">
        <input
        type="text"
        onChange={(e) => handleChange(e, updateItem, currentItem)}
        className="form__input"
        name="player2"
        value={currentItem.players[1]}
        />
        </label>
        : ""}
        { currentItem.players[2] ? 
        <label className="form__field">
        <input
        type="text"
        onChange={(e) => handleChange(e, updateItem, currentItem)}
        className="form__input"
        name="player3"
        value={currentItem.players[2]}
        />
        </label>
        : ""}
        { currentItem.players[3] ? 
        <label className="form__field">
        <input
        type="text"
        onChange={(e) => handleChange(e, updateItem, currentItem)}
        className="form__input"
        name="player4"
        value={currentItem.players[3]}
        />
        </label>
        : ""}
        <input id="submit" className="form__submit" type="submit" name="Add" />
      </form>
      <button onClick={() => deleteBooking(currentItem._id, history, formDel)}>
        Delete
      </button>
    </div>
  );
}

export default BookForm;
