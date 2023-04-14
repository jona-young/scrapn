import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { handleChange, addMatchRounds, updateMatchRounds, protectCurrentRounds, removeMatchRounds } from "../Tournaments/tournamentFunctions.js";
import { postTournament, putTournament } from "../functions/tournamentAPI.js";

const TournamentForm = ({form, update}) => {
  const navigate = useNavigate();
  const formDel = true;
  //Sets the item that will be pushed to backend API to create court booking
  const [currentItem, setCurrentItem] = useState({
    _id: form._id ? form._id : null,
    name: form.name? form.name : "",
    date: form.date ? form.date : "",
    location: form.location ? form.location : "",
    matches: form.matches ? form.matches : 4,
    author: form.author ? form.author : "",
    authorID: form.authorID ? form.authorID : "",
    players: form.players ? form.players : ["","","",""],
    mode: update ? update : "-1"
  });

  const [ numMatches, setNumMatches ] = useState(4)

  useEffect(() => {
    setCurrentItem(form)
    setNumMatches(form.matches.length)
  },[form])

  useEffect(() => {
    // if the purpose is to update a current tournament
    if (numMatches > currentItem.matches.length && update)
    {
      // find the matches to add to the current tournament draw
      const matchesToAdd = numMatches - currentItem.matches.length
      // protect the current matches when sending to backend so they are not overwritten
      protectCurrentRounds(currentItem.matches, setCurrentItem)
      // pass current matches with number of extra matches to add
      const matchArr = updateMatchRounds(matchesToAdd, currentItem.matches[currentItem.matches.length - 1].round)
      const combinedMatches = currentItem.matches.concat(matchArr.matches)
      const combinedPlayers = currentItem.players.concat(matchArr.players)

      // update current item
      setCurrentItem(currentObj => ({...currentObj, matches: combinedMatches, players: combinedPlayers}))
    }
    else if (numMatches < currentItem.matches.length)
    {
      // find the number of matches to remove
      const matchesToRemove = (currentItem.matches.length) - numMatches
      const matchArr = removeMatchRounds(matchesToRemove, currentItem.matches, currentItem.players)

      // removes appropriate matches and players
      setCurrentItem(currentObj => ({...currentObj, matches: matchArr.matches, players: matchArr.players}))
    }
    else if (numMatches == currentItem.matches.length)
    {
      // good to go, the ideal situation
      return
    }
    else
    {
      // a new tournament form with blank matches 
      const matchArr = addMatchRounds(numMatches)
      setCurrentItem(currentObj => ({...currentObj, matches: matchArr.matches, players: matchArr.players}))
    }
    
  }, [numMatches])

  return (
    <div className="form">
      <span className="title">Tournament Form</span>
      <form
        className="form-form"
        onSubmit={(e) => update === 1 ? putTournament(e, currentItem, navigate) : postTournament(e, currentItem, navigate)}
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
          Date
        </label>
        <input
          type="datetime-local"
          onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
          className="form-input"
          name="date"
          value={currentItem.date}
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
          Matches
        </label>
        <select
          onChange={(e) => handleChange(e, setNumMatches, numMatches)}
          className="form-input"
          name="numMatches"
          value={numMatches}
        >
          <option key="1">Select Draw</option>
          <option value="4" key="2">Single Elim - 4 Team</option>
          <option value="8" key="3">Single Elim - 8 Team</option>
          <option value="16" key="4">Single Elim - 16 Team</option>
          <option value="32" key="5">Single Elim - 32 Team</option>
          <option value="64" key="6">Single Elim - 64 Team</option>
        </select>
        <label className="form-field">
          Players
        </label>
        { currentItem && currentItem.players && 
        currentItem.players.map((player, idx) => {
            return <input
                      onChange={(e) => handleChange(e, setCurrentItem, currentItem)}
                      className="form-input"
                      name="players"
                      data-key={idx}
                      value={currentItem.players[idx]}
                    />
        })}

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
