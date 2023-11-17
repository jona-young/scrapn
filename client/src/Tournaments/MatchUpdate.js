import { useState, useEffect } from 'react';
import DialogAlert from '../functions/DialogAlert';

const MatchUpdate = ({ togglePopUp, updateMatch, match, players, tournamentType }) => {
    const [ matchToEdit, setMatchToEdit ] = useState({
        date: "",
        location: "",
        round: "",
        team1: "",
        team2: "",
        winner: ""
    })

    const [ addPlayerType1, setAddPlayerType1 ] = useState('dropdown')
    const [ addPlayerType2, setAddPlayerType2 ] = useState('dropdown')


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
        else if (name == "team1" || name == "team2")
        {
            if (value == "add-new")
            {
                if (name == "team1") {
                    setAddPlayerType1("add-new")
                }
                else
                {
                    setAddPlayerType2("add-new")

                }
            }
            else
            {
                setMatchToEdit(currentObj => ({...currentObj, [name]: value}))
            }
        }
        else
        {
            setMatchToEdit(currentObj => ({...currentObj, [name]: value}))
        }
    }

    const clearMatch = (e) => {
        console.log('hoho: ', match)
        e.preventDefault()

        let blankMatch = {}
        if (tournamentType == "single-elim")
        {
            blankMatch = {
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
        }
        else
        {
            blankMatch = match
            blankMatch.score1 = []
            blankMatch.score2 = []
            blankMatch.winner = ""
        }
        
        
        updateMatch(e, blankMatch)
    }

    useEffect(() => {
        setMatchToEdit(match)
        setMatchToEdit(currentMatch => ({...currentMatch, checker: 1}))
    }, [match])

    return (
        <div className="modal">
            <div className="modal-content modal-matchupdate">
                <div className="matchupdate-container">
                    <span className="modal-close" onClick={() => togglePopUp(-1)}>
                        <b>&times;</b>
                    </span>
                    <h4>Update Match</h4>
                    <form onSubmit={(e) => updateMatch(e, matchToEdit)}>
                        <label className="form-label">
                            Date
                        </label>
                        <input
                            type="datetime-local"
                            onChange={(e) => editMatch(e)}
                            className="form-field form-matchupdate"
                            name="date"
                            value={matchToEdit.date}
                            />
                        <label className="form-label">
                            Location
                        </label>
                        <input
                            onChange={(e) => editMatch(e)}
                            className="form-field form-matchupdate"
                            name="location"
                            value={matchToEdit.location}
                            />
                        <label className="form-label">
                            Round
                        </label>
                        <input
                            onChange={(e) => editMatch(e)}
                            className="form-field form-matchupdate"
                            name="round"
                            value={matchToEdit.round}
                            />
                        <label className="form-label">
                            Team 1
                        </label>
                        { addPlayerType1 == "dropdown" ?
                            <select
                                onChange={(e) => editMatch(e)}
                                className="form-field form-matchupdate"
                                name="team1"
                                value={matchToEdit.team1}
                                >
                                <option value="" disabled selected key="dis-player-1">Choose player...</option>
                                { players.map((player, idx) => {
                                    return <option value={player} key={"p1-" + idx}>{player}</option>
                                })}
                                <option value="add-new" key="add-new-t1">Add new player...</option>
                            </select>
                            :
                            <input
                            type="text"
                            onChange={(e) => editMatch(e)}
                            className="form-field form-matchupdate"
                            name="team1"
                            value={matchToEdit.team1}
                            placeholder="Add new player..."
                            />
                        }
                        <label className="form-label">
                            Team 2
                        </label>
                        { addPlayerType2 == "dropdown" ?
                            <select
                                onChange={(e) => editMatch(e)}
                                className="form-field form-matchupdate"
                                name="team2"
                                value={matchToEdit.team2}
                                >
                                <option value="" disabled selected key="dis-player-2">Choose player...</option>
                                { players.map((player, idx) => {
                                    return <option value={player} key={"p2-" + idx}>{player}</option>
                                })}
                                <option value="add-new" key="add-new-t2">Add new player...</option>
                            </select>
                            :
                            <input
                            type="text"
                            onChange={(e) => editMatch(e)}
                            className="form-field form-matchupdate"
                            name="team2"
                            value={matchToEdit.team2}
                            />
                        }
                        <label className="form-label">
                            Best Of Series
                        </label>
                        <select
                            onChange={(e) => editMatch(e)}
                            className="form-field form-matchupdate"
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
                        <label className="form-label">
                            Team 1 Scores
                        </label>
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
                        <label className="form-label">
                            Team 2 Scores
                        </label>
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
                        <label className="form-label">
                            Winner
                        </label>
                        <select
                            onChange={(e) => editMatch(e)}
                            className="form-field form-matchupdate"
                            name="winner"
                            value={matchToEdit.winner}
                            >
                            <option value="" disabled selected key="dis2">Choose value...</option>
                            <option value="0" key="win0">Not Decided</option>
                            <option value="1" key="win1">{matchToEdit.team1 ? matchToEdit.team1 : "Team 1"}</option>
                            <option value="2" key="win2">{matchToEdit.team2 ? matchToEdit.team2 : "Team 2"}</option>
                        </select>
                        <div className="matchupdate-buttonbox">
                            <input id="submit" className="form-submit form-tournamentbtn" type="submit" name="Add" />
                            <DialogAlert 
                                btnName="Remove"
                                handleClickAction = {(e) => clearMatch(e)} 
                                heading="Remove Match?"
                                message="Confirm you would like to delete this match!"
                                extraClass="matchupdate-height" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MatchUpdate;