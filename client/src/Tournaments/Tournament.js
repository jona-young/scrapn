import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { singleElimination, roundRobin, roundRobinStandings } from '../Tournaments/tournamentFunctions.js';
import { getTournament, putTournament, getRoundRobinResults } from '../functions/tournamentAPI.js';
import MatchUpdate from '../Tournaments/MatchUpdate.js';

const Tournament = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    
    const [ bracket, setBracket ] = useState([])
    const [ standings, setStandings ] = useState([])
    const [ standingsData, setStandingsData ] = useState()
    const [ currentItem, setCurrentItem ] = useState({
        matches: []
    })
    const [loadedData, setLoadedData ] = useState(false)

    // Court update window
    const [ matchID, setMatchID ] = useState(-1)

    const togglePopUp = (_matchID) => {

        if (_matchID > -1)
        {
            setMatchID(_matchID)
        }
        else
        {
            setMatchID(-1)
        }
    }

    const updateMatch = async (e, updatedMatch) => {
        e.preventDefault();
        let allMatches = currentItem.matches
        allMatches[matchID] = updatedMatch

        setCurrentItem(curItem => ({...curItem, matches: allMatches}))

        // PUT request immediately? Will need navigate to redirect and re render the tournament
        putTournament(e, currentItem,  navigate, false);


        // then toggle pop up to remove the pop up
        togglePopUp(-1)

        setLoadedData(false)
    }

    useEffect(() => { 
        getTournament(id, setCurrentItem, setLoadedData)
        if (currentItem.tournamentType === "single-elim")
        {
            singleElimination(currentItem.matches, setBracket, togglePopUp)
        }
        else if (currentItem.tournamentType === "round-robin")
        {
            getRoundRobinResults(id, setStandingsData);
            roundRobin(currentItem.matches, setBracket, togglePopUp)
        }
    }, [loadedData])

    useEffect(() => {
        roundRobinStandings(currentItem.players, standingsData, setStandings, loadedData)
    }, [standingsData, loadedData])

    return (
        <div className="tournament-container">
            <div>
                <Link to={"/update-tournament/" + id} className="tournament-button">Update</Link>
                <button onClick={() => deleteTournament(id, navigate, true)} className="button-delete">Delete</button>
            </div>

            {matchID !== -1 ? <MatchUpdate togglePopUp={togglePopUp} updateMatch={updateMatch} match={currentItem.matches[matchID]} /> : null}
            {/* <button onClick={() => downloadDraw(currentItem)}>Test Download</button> */}
            <h1>{currentItem.name}</h1>
            <h4>{currentItem.startDate}{currentItem.endDate ? " to " + currentItem.endDate : ""}</h4>
            <h4>{currentItem.location}</h4>

            {standings}
            <div className="tournament">
                {bracket}
            </div>
        </div>
    )
}

export default Tournament