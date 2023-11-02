import { useEffect, useState, useContext, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../functions/UserContext.js';
import jsPDF from 'jspdf';
import { singleElimination, roundRobin, roundRobinStandings } from '../Tournaments/tournamentFunctions.js';
import { getTournament, putTournament, getRoundRobinResults } from '../functions/tournamentAPI.js';
import MatchUpdate from '../Tournaments/MatchUpdate.js';
import "../General/template.css"
import "../General/site.css";

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
        setLoadedData(false);

        let allMatches = currentItem.matches
        allMatches[matchID] = updatedMatch

        // Looks through all matches and adds any new players to the players 
        for (var i = 1; i < 3; i++) {
            if (currentItem.players.indexOf(updatedMatch["team" + i]) == -1)
            {
                if (updatedMatch["team" + i] !== undefined)
                {
                    let newPlayers = currentItem.players
                    newPlayers.push(updatedMatch["team" + i])
    
                    setCurrentItem(curItem => ({...curItem, players: newPlayers}))
                }
            }
        }

        setCurrentItem(curItem => ({...curItem, matches: allMatches}))

        // PUT request immediately? Will need navigate to redirect and re render the tournament
        putTournament(e, currentItem,  navigate, false, setLoadedData);

        // then toggle pop up to remove the pop up
        togglePopUp(-1)
    }
    
    // Export tournament draws, modular for round robin & single elimination
    const exportPDF = (tournamentType, matches) => {
        let orient = "p"
        let dimensions = [900, 900]
        if (tournamentType === "single-elim")
        {
            if (matches >= 8 && matches < 16)
            {
                dimensions = [900, 900]
            }
            else if (matches >= 16 && matches < 32)
            {
                orient="p"
                dimensions = [1260, 1600]
            }
            else if (matches >= 32 && matches < 64)
            {
                orient="p"
                dimensions = [1440, 2800]
            }
            else if (matches >= 64)
            {
                orient="p"
                dimensions = [2040, 5600]
            }
        }
        else if (tournamentType === "round-robin")
        {
            if (matches === 2)
            {
                dimensions = [1260, 720]
            }
            else if (matches === 3)
            {
                dimensions = [1260, 1080]
            }
            else if (matches === 4)
            {
                dimensions = [1260, 1260]
            }
            else if (matches === 5)
            {
                orient="p"
                dimensions = [1260, 1780]
            }
            else if (matches === 6)
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
            doc.save('tournament.pdf');
            }
        });
    }

    useEffect(() => { 
        getTournament(id, setCurrentItem, setLoadedData)

        if (currentItem.tournamentType === "single-elim")
        {
            singleElimination(currentItem.matches, setBracket, togglePopUp, currentItem.playerType)
            // createDraw();
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
            <section className="site-panel header-spacer">
                <div className="site-heading tournament-topbanner">
                    <h1 className="form-heading general-bannertext">Tournament</h1>
                    <p className="form-subheading general-lightsub">Your tournament draw (below).</p>
                </div>
                { currentItem.author === userPrefs.nameID ? 
                <div className="tournament-header-toprow">
                    <Link to={"/update-tournament/" + id} className="form-submit form-tournamentbtn form-updatebtn">Update</Link>
                    <Link to="#" onClick={() => exportPDF(currentItem.tournamentType, currentItem.matches.length)} className="form-submit form-tournamentbtn form-downloadbtn">Download PDF</Link>
                </div>            
                : ""
                }
            </section>
            <div className="tournament-container" ref={pdfRef}>
                <div 
                className="tournament-flexcard"
                >
                    <div>
                        <span className="content-icon">T1</span>
                    </div>
                    <div className="tourn-cardinfo">
                        <h4 className="tourn-spacer">{currentItem.name}</h4>
                        <span className="content-badge tourn-spacer tourn-datespace">
                            {currentItem.startDate}{currentItem.endDate ? " to " + currentItem.endDate : ""}
                        </span>
                        <p className="content-lightsub content-smallheading tourn-spacerend">{currentItem.location}</p>
                    </div>
                </div>            
                <div className="tournament-container" ref={pdfRef}>
                    {matchID !== -1 ? 
                        <MatchUpdate 
                            togglePopUp={togglePopUp} 
                            updateMatch={updateMatch} 
                            match={currentItem.matches[matchID]} 
                            players={currentItem.players} /> 
                    :
                    null
                    }
                    <div className="table-scroll">
                        {standings}
                    </div>
                    <div className="tournament">
                        {bracket}
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Tournament