import { useState, useEffect } from 'react';

const MatchUpdate = ({ togglePopUp, updateMatch, match }) => {
    const [ matchToEdit, setMatchToEdit ] = useState({
        date: "",
        location: "",
        round: "",
        team1: "",
        team2: "",
        winner: ""
    })

    const editMatch = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (name === "bestof")
        {
            let scores1 = []
            let scores2 = []
            for (let i = 0; i < parseInt(value); i++)
            {
                scores1.push("")
                scores2.push("")

            }

            setMatchToEdit(currentObj => ({...currentObj, bestof: value, score1: scores1, score2: scores2}))
        }
        else if (name === "score1" || name === "score2")
        {
            let index = e.target.getAttribute("data-index")
            let scoreArr = matchToEdit[name]
            scoreArr[index] = value.toString()
            setMatchToEdit(currentObj => ({...currentObj, [name]: scoreArr }))
        }
        else
        {
            setMatchToEdit(currentObj => ({...currentObj, [name]: value}))
        }
    }

    const clearMatch = (e) => {
        e.preventDefault()

        const blankMatch = {
            checker: 0,
            date: "",
            location: "",
            round: matchToEdit.round,
            score1: [],
            score2: [],
            team1: "",
            team2: "",
            winner: "",
            skip: 1
        }
        
        updateMatch(e, blankMatch)
    }

    useEffect(() => {
        setMatchToEdit(match)
        setMatchToEdit(currentMatch => ({...currentMatch, checker: 1}))
    }, [match])

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="modal-close" onClick={() => togglePopUp(-1)}>
                    &times;
                </span>
                <span className="modal-remove" onClick={(e) => clearMatch(e)}>
                    Remove
                </span>
                <h4>Update Match</h4>
                <form onSubmit={(e) => updateMatch(e, matchToEdit)}>
                    <br />
                    <label className="form-field">
                    Date
                    </label>
                    <br />
                    <input
                    type="datetime-local"
                    onChange={(e) => editMatch(e)}
                    className="form-input"
                    name="date"
                    value={matchToEdit.date}
                    />
                    <br />
                    <label className="form-field">
                    Location
                    </label>
                    <br />
                    <input
                    onChange={(e) => editMatch(e)}
                    className="form-input"
                    name="location"
                    value={matchToEdit.location}
                    />
                    <br />
                    <label className="form-field">
                    Round
                    </label>
                    <br />
                    <input
                    onChange={(e) => editMatch(e)}
                    className="form-input"
                    name="round"
                    value={matchToEdit.round}
                    />
                    <br />
                    <label className="form-field">
                    Team 1
                    </label>
                    <br />
                    <input
                    onChange={(e) => editMatch(e)}
                    className="form-input"
                    name="team1"
                    value={matchToEdit.team1}
                    />
                    <br />
                    <label className="form-field">
                    Team 2
                    </label>
                    <br />
                    <input
                    onChange={(e) => editMatch(e)}
                    className="form-input"
                    name="team2"
                    value={matchToEdit.team2}
                    />
                    <br />
                    <label className="form-field">
                    Best Of Series
                    </label>
                    <br />
                    <select
                    onChange={(e) => editMatch(e)}
                    className="form-input"
                    name="bestof"
                    value={matchToEdit.bestof}
                    >
                        <option value="" disabled selected key="dis1">Choose value...</option>
                        <option value="1" key="best1">1</option>
                        <option value="2" key="best2">2</option>
                        <option value="3" key="best3">2 out of 3</option>
                        <option value="4" key="best4">4</option>
                        <option value="5" key="best5">3 out of 5</option>

                    </select>
                    <br />
                    <label className="form-field">
                    Team 1 Scores
                    </label>
                    <br />
                    <div className="form-score">
                        { matchToEdit.score1 && matchToEdit.score1.map && matchToEdit.score1.map((set, idx) => { 
                            return <div>
                                G{idx + 1} &nbsp;
                                <input
                                type="number"
                                onChange={(e) => editMatch(e)}
                                className="form-number"
                                name="score1"
                                data-index={idx}
                                value={set}
                                /> 
                            </div>
                        })}
                    </div>
                    <br />
                    <label className="form-field">
                    Team 2 Scores
                    </label>
                    <br />
                    <div className="form-score">
                        { matchToEdit.score2 && matchToEdit.score2.map && matchToEdit.score2.map((set, idx) => { 
                            return <div>
                                G{idx + 1} &nbsp;
                                <input
                                type="number"
                                onChange={(e) => editMatch(e)}
                                className="form-number"
                                name="score2"
                                data-index={idx}
                                value={set}
                                /> 
                            </div>
                        })}
                    </div>
                    <br />
                    <label className="form-field">
                    Winner
                    </label>
                    <br />
                    <select
                    onChange={(e) => editMatch(e)}
                    className="form-input"
                    name="winner"
                    value={matchToEdit.winner}
                    >
                        <option value="" disabled selected key="dis2">Choose value...</option>
                        <option value="0" key="win0">Not Decided</option>
                        <option value="1" key="win1">{matchToEdit.team1 ? matchToEdit.team1 : "Team 1"}</option>
                        <option value="2" key="win2">{matchToEdit.team2 ? matchToEdit.team2 : "Team 2"}</option>
                    </select>
                    <input id="submit" className="form-submit" type="submit" name="Add" />
                </form>
            </div>
        </div>
    )
}

export default MatchUpdate;