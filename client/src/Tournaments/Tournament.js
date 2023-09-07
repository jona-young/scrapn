import { useEffect, useState, useContext, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../functions/UserContext.js';
import jsPDF from 'jspdf';
import { singleElimination, roundRobin, roundRobinStandings } from '../Tournaments/tournamentFunctions.js';
import { getTournament, putTournament, getRoundRobinResults, deleteTournament } from '../functions/tournamentAPI.js';
import MatchUpdate from '../Tournaments/MatchUpdate.js';

const Tournament = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    //User Context
    const { userPrefs } = useContext(UserContext);

    const pdfRef = useRef(null);
    
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
        setLoadedData(false)

        // PUT request immediately? Will need navigate to redirect and re render the tournament
        putTournament(e, currentItem,  navigate, false);


        // then toggle pop up to remove the pop up
        togglePopUp(-1)
    }
    
    // Export tournament draws, modular for round robin & single elimination
    const exportPDF = (tournamentType, players) => {
        let orient = "l"
        let dimensions = [500, 500]
        if (tournamentType === "single-elim")
        {
            if (players >= 8 && players < 16)
            {
                dimensions = [900, 900]
            }
            else if (players >= 16 && players < 32)
            {
                orient="p"
                dimensions = [1260, 1600]
            }
            else if (players >= 32 && players < 64)
            {
                orient="p"
                dimensions = [1440, 2800]
            }
            else if (players >= 64)
            {
                orient="p"
                dimensions = [1440, 5600]
            }
        }
        else if (tournamentType === "round-robin")
        {
            if (players === 2)
            {
                dimensions = [1260, 720]
            }
            else if (players === 3)
            {
                dimensions = [1260, 1080]
            }
            else if (players === 4)
            {
                dimensions = [1260, 1260]
            }
            else if (players === 5)
            {
                orient="p"
                dimensions = [1260, 1780]
            }
            else if (players === 6)
            {
                orient="p"
                dimensions = [1440, 2060]
            }

        }

        const content = pdfRef.current;

        // jsPDF parameters (orientation, unit, page size)
        const doc = new jsPDF(orient, "px", dimensions);
        doc.html(content, {
            callback: function (doc) {
            doc.save('sample.pdf');
            }
        });
    }

    useEffect(() => { 
        getTournament(id, setCurrentItem, setLoadedData)
        if (currentItem.tournamentType === "single-elim")
        {
            singleElimination(currentItem.matches, setBracket, togglePopUp, currentItem.playerType)
        }
        else if (currentItem.tournamentType === "round-robin")
        {
            getRoundRobinResults(id, setStandingsData);
            roundRobin(currentItem.matches, setBracket, togglePopUp, currentItem.playerType)
        }
    }, [loadedData])

    useEffect(() => {
        roundRobinStandings(currentItem.players, standingsData, setStandings, loadedData)
    }, [standingsData, loadedData])



    return (
        <>
            { currentItem.author === userPrefs.nameID ? 
            <div className="tournament-header">
                <div className="tournament-header-toprow">
                    <Link to={"/update-tournament/" + id} className="tournament-button">Update</Link>
                    <button onClick={() => deleteTournament(id, navigate, true)} className="button-delete">Delete</button>    
                </div>
                <button onClick={() => exportPDF(currentItem.tournamentType, currentItem.players.length)} className="button-download">Download PDF</button>
            
            </div>
            : ""
        }
            <div className="tournament-container" ref={pdfRef}>
                {matchID !== -1 ? <MatchUpdate togglePopUp={togglePopUp} updateMatch={updateMatch} match={currentItem.matches[matchID]} players={currentItem.players} /> : null}
                {/* <button onClick={() => downloadDraw(currentItem)}>Test Download</button> */}
                <div className="tournament-banner">
                    <h1>{currentItem.name}</h1>
                    <hr className="banner-line" />
                    <h4>{currentItem.startDate}{currentItem.endDate ? " to " + currentItem.endDate : ""}</h4>
                    <h4>{currentItem.location}</h4>
                </div>
                <div className="table-scroll">
                    {standings}
                </div>
                <div className="tournament">
                    {bracket}
                </div>
            </div>
        </>
        
    )
}

export default Tournament