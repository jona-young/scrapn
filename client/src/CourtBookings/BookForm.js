import React, { useState, useEffect } from "react";
import { handleChange, DoublesToSinglesSwitch } from "../functions/scheduleFunctions.js";
import { deleteBooking, postBooking, putBooking } from "../functions/courtBookingAPI.js"
import { getUsers } from "../functions/userAPI.js";
import { useNavigate,  } from "react-router-dom";

function BookForm({form}) {
  let history = useNavigate();
  const formDel = true;

  //Sets the item that will be pushed to backend API to create court booking
  const [currentItem, setCurrentItem] = useState({
    _id: form._id ? form._id : null,
    date: form.date ? form.date : "",
    time: form.time ? form.time : "",
    court: form.court ? form.court : "1",
    type: form.type ? form.type : "Singles",
    players: form.players? form.players : [
      {
        name: "",
        nameID: ""
      },
      {
        name: "",
        nameID: ""
      }
    ],
    author: form.author ? form.author : "",
    authorID: form.authorID ? form.authorID : ""
  });


  const [ userFields, setUserFields ] = useState([])
  //TODO: Store this in global state. Currently it will ping backend API every form load
  useEffect(() => {
    getUsers(setUserFields)
  },[userFields.length])

  useEffect(() => {
    setCurrentItem(form)
  },[form])

  return (
    <div className="form">
      <span className="title">Court Booking Form</span>
      <form
        className="form-form"
        onSubmit={(e) => form.mode === "update" ? putBooking(e, currentItem, history) : postBooking(e, currentItem, history)}
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
          <option value="1" key="1">Court 1</option>
          <option value="2" key="2">Court 2</option>
          <option value="3" key="3">Court 3</option>
          <option value="4" key="4">Court 4</option>
        </select>
        <label className="form-field">
          Court Type
        </label>
        <select
          onChange={(e) => DoublesToSinglesSwitch(e, setCurrentItem, currentItem)}
          className="form-input"
          name="type"
          value={currentItem.type}
        >
          <option value="Singles" key="1">Singles</option>
          <option value="Doubles" key="2">Doubles</option>
        </select>
        <label className="form-field">
              Player(s)
        </label>

        <select
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="0"
          data-key="players"
          value={currentItem.players[0].nameID}
          >
            <option value="">Select a Player...</option>
            { userFields.map((record) => {
              return(<option value={record.nameID}>{record.name}</option>)
            })}
        </select>

        <select
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="1"
          data-key="players"
          value={currentItem.players[1].nameID}
          >
            <option value="">Select a Player...</option>
            { userFields.map((record) => {
              return(<option value={record.nameID}>{record.name}</option>)
            })}
          </select>

        { currentItem.type === "Doubles" ? 
          <select
            onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
            className="form-input"
            name="2"
            data-key="players"
            value={currentItem.players[2].nameID}
            >
            <option value="">Select a Player...</option>
            { userFields.map((record) => {
              return(<option value={record.nameID}>{record.name}</option>)
            })}
          </select>
        : ""}
        { currentItem.type === "Doubles" ? 
          <select
            onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
            className="form-input"
            name="3"
            data-key="players"
            value={currentItem.players[3].nameID}
            >
            <option value="">Select a Player...</option>
            { userFields.map((record) => {
              return(<option value={record.nameID}>{record.name}</option>)
            })}
          </select>
        : ""}
        <input id="submit" className="form-submit" type="submit" name="Add" />
      </form>
      {form.mode === "update" ? 
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
