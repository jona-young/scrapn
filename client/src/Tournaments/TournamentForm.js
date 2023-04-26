import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { handleChange, matchAndPlayerUpdater } from "../Tournaments/tournamentFunctions.js";
import { postTournament, putTournament } from "../functions/tournamentAPI.js";

const TournamentForm = ({form, update}) => {
  console.log(form)
  const navigate = useNavigate();
  const formDel = true;
  //Sets the item that will be pushed to backend API to create court booking
  const [currentItem, setCurrentItem] = useState({
    _id: form._id ? form._id : null,
    name: form.name? form.name : "",
    startDate: form.startDate ? form.startDate : "",
    endDate: form.endDate ? form.endDate : "",
    location: form.location ? form.location : "",
    tournamentType: form.tournamentType ? form.tournamentType : "",
    matches: form.matches ? form.matches : 1,
    author: form.author ? form.author : "",
    authorID: form.authorID ? form.authorID : "",
    players: form.players ? form.players : [],
    mode: update ? update : "-1",
    numSeeds: form.numSeeds ? form.numSeeds : 0
  });

  const [ numMatches, setNumMatches ] = useState(form && form.players && form.players.length ? form.players.length : 4)
  useEffect(() => {
    setCurrentItem(form)
    if (form.tournamentType === "single-elim") {setNumMatches(form.players.length)}
    else {setNumMatches(form.players.length)}
  },[form])

  console.log(currentItem.players)
  useEffect(() => {
    matchAndPlayerUpdater(numMatches, currentItem, setCurrentItem, update)
  }, [numMatches])

  return (
    <div className="form">
      <span className="title">Tournament Form</span>
      <form
        className="form-form"
        onSubmit={(e) => update === 1 ? putTournament(e, currentItem, navigate, true) : postTournament(e, currentItem, navigate)}
      >
        <label className="form-field">
          Name
        </label>
        <input
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="name"
          value={currentItem.name}
        />
        <label className="form-field">
          Start Date
        </label>
        <input
          type="date"
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="startDate"
          value={currentItem.startDate}
          placeholder="YYYY-MM-DD"
        />
        <label className="form-field">
          End Date
        </label>
        <input
          type="date"
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="endDate"
          value={currentItem.endDate}
          placeholder="YYYY-MM-DD"
        />
        <label className="form-field">
          Location
        </label>
        <input
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="location"
          value={currentItem.location}
        />
                <label className="form-field">
          Draw Type
        </label>
        <select
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="tournamentType"
          value={currentItem.tournamentType}
        >
          <option key="1-dt">Select Draw</option>
          <option value="single-elim" key="2-dt">Single Elimination</option>
          <option value="round-robin" key="3-dt">Round Robin</option>

        </select>
        <label className="form-field">
          Matches
        </label>
        <select
          onChange={(e) => handleChange(e, setNumMatches, numMatches)}
          className="form-input"
          name="numMatches"
          value={numMatches}
        >
          <option key="1-nm">Select draw type first..</option>
          {currentItem.tournamentType === "single-elim" ? 
          <>
            <option value="4" key="2-se">4 Team</option>
            <option value="8" key="3-se">8 Team</option>
            <option value="16" key="4-se">16 Team</option>
            <option value="32" key="5-se">32 Team</option>
            <option value="64" key="6-se">64 Team</option>
          </>
          : ""
          }
          
          {currentItem.tournamentType === "round-robin" ? 
          <>
            <option value="2" key="2-rr">2 Team</option>
            <option value="3" key="3-rr">3 Team</option>
            <option value="4" key="4-rr">4 Team</option>
            <option value="5" key="5-rr">5 Team</option>
            <option value="6" key="6-rr">6 Team</option>
          </>
          : ""
          }
        </select>
        <label className="form-field">
          Players
        </label>
        { currentItem && currentItem.players && 
        currentItem.players.map((player, idx) => {
            return <div className="form-players" key={idx+1 + "-playerdiv"}>
                    <b>{idx + 1}. &nbsp;</b>
                    <input
                      onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
                      className="form-input"
                      name="players"
                      key={idx+1 + "-player"}
                      data-key={idx}
                      value={currentItem.players[idx]}
                    />
                   </div>
        })}
        {form.mode !== "update" ? 
              <>
                <label className="form-field">
                  Insert Seeds to Draw
                </label>
                <input type="checkbox" onClick={(e) => handleChange(e, setCurrentItem, currentItem)} name="seedDraw" value={true} />
              </>
              :
              ""
        }

        <input id="submit" className="form-submit" type="submit" name="Add" />

      {form.mode === "update" ? 
        <button 
          className="form-delete"
          onClick={() => postTournament(currentItem._id, navigate, formDel)}>
          Delete
        </button> 
        :
        ""
      }
      </form>
    </div>
  );
}

export default TournamentForm;
