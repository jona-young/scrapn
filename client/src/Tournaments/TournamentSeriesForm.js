import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { handleChange } from "./tournamentFunctions.js";
import { postTournamentSeries, putTournamentSeries } from "../functions/tournamentAPI.js";
import '../General/site.css';
import '../General/template.css';


const TournamentSeriesForm = ({form, update}) => {
  const navigate = useNavigate();
  const formDel = true;
  //Sets the item that will be pushed to backend API to create court booking
  const [currentItem, setCurrentItem] = useState({
    _id: form._id ? form._id : null,
    name: form.name? form.name : "",
    startDate: form.startDate ? form.startDate : "",
    endDate: form.endDate ? form.endDate : "",
    location: form.location ? form.location : "",
    tournaments: form.tournaments ? form.tournaments : [],
    author: form.author ? form.author : "",
    authorID: form.authorID ? form.authorID : "",
    mode: update ? update : -1,
  });

  return (
      <div className="form-container">
        <span className="title">Tournament Series Form</span>
        <form
          className="form-main"
          onSubmit={(e) => update === 1 ? putTournamentSeries(e, currentItem, navigate) : postTournamentSeries(e, currentItem, navigate)}
        >
          <div className="form-questions">
            <label className="form-label">
              Name
            </label>
            <input
              onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
              className="form-field"
              name="name"
              maxLength={100}
              value={currentItem.name}
            />
            <label className="form-label">
              Start Date
            </label>
            <input
              type="date"
              onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
              className="form-field"
              name="startDate"
              value={currentItem.startDate}
              placeholder="YYYY-MM-DD"
            />
            <label className="form-label">
              End Date
            </label>
            <input
              type="date"
              onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
              className="form-field"
              name="endDate"
              value={currentItem.endDate}
              placeholder="YYYY-MM-DD"
            />
            <label className="form-label">
              Location
            </label>
            <input
              onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
              className="form-field"
              name="location"
              maxLength={65}
              value={currentItem.location}
            />
            <input id="submit" className="form-submit" type="submit" name="Add" />
          </div>
        </form>
    </div>

  );
}

export default TournamentSeriesForm;
