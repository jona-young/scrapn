import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { handleChange, matchAndPlayerUpdater } from "../Tournaments/tournamentFunctions.js";
import { postTournament, putTournament } from "../functions/tournamentAPI.js";
import RemoveImage from "../img/remove.png"
import '../General/site.css';
import '../General/template.css';


const TournamentForm = ({form, update}) => {
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
    drawSize: form.drawSize ? form.drawSize : 0,
    matches: form.matches ? form.matches : [],
    author: form.author ? form.author : "",
    authorID: form.authorID ? form.authorID : "",
    players: form.players ? form.players : [],
    playerType: form.playerType ? form.playerType : "Singles",
    mode: update ? update : -1,
    seeds: form.seeds ? form.seeds : 0
  });

  const addPlayers = (e) => {
    e.preventDefault()
    e.target.name="add-player"
    handleChange(e, setCurrentItem, currentItem)
  }

  useEffect(() => {
    matchAndPlayerUpdater(currentItem.drawSize, currentItem, setCurrentItem, update)
  }, [currentItem.drawSize])

  console.log(currentItem)
  return (
      <div className="form-container">
        <span className="title">Tournament Form</span>
        <form
          className="form-main"
          onSubmit={(e) => update === 1 ? putTournament(e, currentItem, navigate, true) : postTournament(e, currentItem, navigate)}
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
            <label className="form-label">
              Draw Type
            </label>
            <select
              onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
              className="form-field"
              name="tournamentType"
              value={currentItem.tournamentType}
            >
              <option key="1-dt">Select Draw</option>
              <option value="single-elim" key="2-dt">Single Elimination</option>
              <option value="round-robin" key="3-dt">Round Robin</option>
            </select>
            <label className="form-label">
              Draw Size
            </label>
            <select
              onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
              className="form-field"
              name="drawSize"
              value={currentItem.drawSize}
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
                <option value="7" key="7-rr">7 Team</option>
                <option value="8" key="8-rr">8 Team</option>
              </>
              : ""
              }
            </select>
            <label className="form-label">
              Player Type
            </label>
            <select
              onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
              className="form-field"
              name="playerType"
              value={currentItem.playerType}
            >
              <option key="1-dt">Select Player Type</option>
              <option value="Singles" key="2-dt">Singles</option>
              <option value="Doubles" key="3-dt">Doubles</option>
            </select>
            <label className="form-label">
              Players
            </label>
            { currentItem && currentItem.players && 
            currentItem.players.map((player, idx) => {
              return <div className="form-players" key={idx+{player} + "-playerdiv"}>
              {player.map((individual, idxp) => {

                  return <>
                    <b>{idxp == 0 ? idx + 1 + "." : " "}</b>
                    <input
                      onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
                      className={ currentItem.playerType == "Singles" ? "form-field" : "form-field form-playerDoubles"}
                      name="players"
                      key={idx + "-" + idxp + "-player"}
                      data-key={"["+idx+","+idxp+"]"}
                      value={currentItem.players[idx][idxp]}
                    />
                  </>
              })}
              { currentItem.tournamentType == "single-elim" && currentItem.players.length > currentItem.drawSize ?
                <div className="form-fieldIcon">
                  <img src={RemoveImage} onClick={(e) => { handleChange(e, setCurrentItem, currentItem)}} name="remove-player" data-key={idx} key={idx + "-remIcon"} className="small-icon" />
                </div>
                :
                ""
              }
              </div>
            })}
            {
              currentItem.tournamentType == "single-elim" ?
              <a href="#" onClick={addPlayers} className="form-submit form-tournamentbtn form-updatebtn">Add Player</a>
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
          </div>
        </form>
    </div>

  );
}

export default TournamentForm;
