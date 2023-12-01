import { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../functions/UserContext.js';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DialogAlert from '../functions/DialogAlert.js';
import PDFDocument from './PDFDocument..js'; 
import { singleElimination, PDFSingleElim, roundRobin, roundRobinStandings, PDFRoundRobin, PDFRoundRobinStandings, PDFPaperSize } from '../Tournaments/tournamentFunctions.js';
import { getTournament, putTournament, getRoundRobinResults, deleteTournament } from '../functions/tournamentAPI.js';
import MatchUpdate from '../Tournaments/MatchUpdate.js';
import OpenImage from "../img/open.png"
import CloseImage from "../img/close.png"
import "../General/template.css"
import "../General/site.css";

const Tournament = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    //User Context
    const { userPrefs } = useContext(UserContext);
    
    const [ bracket, setBracket ] = useState([])
    const [ pdfBracket, setPDFBracket ] = useState([])
    const [ pdfStandings, setPDFStandings ] = useState([])
    const [ pdfPaperSize, setPDFPaperSize ] = useState("")
    const [collapseData, setCollapseData ] = useState({})
    const [ standings, setStandings ] = useState([])
    const [ standingsData, setStandingsData ] = useState()
    const [ currentItem, setCurrentItem ] = useState({
        matches: []
    })
    const [loadedData, setLoadedData ] = useState(false)

    // Court update window
    const [ matchID, setMatchID ] = useState(-1)

    const updateCollapseData = (name) => {
        let newCollapseData = collapseData
        newCollapseData[name] = !newCollapseData[name]
        setCollapseData(newCollapseData)
    }
    const expandCollapseData = () => {
        let newCollapseData = collapseData

        let flag = false
        for (const [key, value] of Object.entries(newCollapseData)) {
            if (newCollapseData[key] == true) {
                flag = true
            }
        }

        for (const [key, value] of Object.entries(newCollapseData)) {
            if (flag) {
                newCollapseData[key] = false
            } else {
                newCollapseData[key] = true
            }
        }

        setCollapseData(newCollapseData)
    }

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

    const updateMatch = async (e, updatedMatch, newPlayers) => {
        e.preventDefault();
        setLoadedData(false);

        let allMatches = currentItem.matches
        allMatches[matchID] = updatedMatch

        if (newPlayers.length > 0)
        {
            let updatedPlayers = currentItem.players
            for (var i = 0; i < newPlayers.length; i++)
            {
                updatedPlayers.push(newPlayers[i])
            }

            setCurrentItem(curItem => ({...curItem, players: updatedPlayers}))
        }


        setCurrentItem(curItem => ({...curItem, matches: allMatches}))

        // PUT request immediately? Will need navigate to redirect and re render the tournament
        putTournament(e, currentItem,  navigate, false, setLoadedData);

        // then toggle pop up to remove the pop up
        togglePopUp(-1)
    }

    useEffect(() => { 
        getTournament(id, setCurrentItem, setLoadedData, setCollapseData)

        let matchLength = currentItem.matches.length

        let paperSize = PDFPaperSize(matchLength, currentItem.tournamentType)
        setPDFPaperSize(paperSize)

        let pdfMatches = []
        let drawMatches = []
        for (var i = 0; i < matchLength; i++) {
            pdfMatches.push(currentItem.matches[i])
            drawMatches.push(currentItem.matches[i])
        }
        if (currentItem.tournamentType === "single-elim")
        {
            // PDFSingleElim(pdfMatches, currentItem.playerType, setPDFBracket)
            singleElimination(drawMatches, setBracket, togglePopUp, currentItem.playerType)
        }
        else if (currentItem.tournamentType === "round-robin")
        {
            // PDFRoundRobin(pdfMatches, currentItem.players.length, setPDFBracket)

            getRoundRobinResults(id, setStandingsData);
            roundRobin(drawMatches, setBracket, togglePopUp, currentItem.players.length, currentItem.playerType)
        }
    }, [loadedData])

    useEffect(() => {
        // PDFRoundRobinStandings(currentItem.players, standingsData, setPDFStandings)
        roundRobinStandings(currentItem.players, standingsData, setStandings, currentItem.playerType)
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
                    <Link to={"/update-tournament/" + id} className="form-submit form-tournamentbtn form-updatebtn form-bannerbtn">Update</Link>
                    <DialogAlert 
                    btnName="Delete"
                    handleClickAction = {(e) => deleteTournament(e, currentItem._id, navigate, true)} 
                    heading="Delete Tournament?"
                    message="Confirm you would like to delete this tournament!"/>
                    {/* <PDFDownloadLink document={ <PDFDocument 
                                                    badge="T1" 
                                                    name={currentItem.name} 
                                                    date={currentItem.startDate}
                                                    location={currentItem.location} 
                                                    draw={pdfBracket}
                                                    drawType={currentItem.tournamentType}
                                                    standings={ currentItem.tournamentType == "single-elim" ? "Hello": pdfStandings}
                                                    paperSize={pdfPaperSize} />

                                              } 
                                    className="form-submit form-tournamentbtn form-downloadbtn form-bannerbtn" fileName={currentItem.name+'.pdf'}>
                        {({ blob, url, loading, error }) => 
                        loading ? 'Loading document...' : 'Download!'
                        }
                    </PDFDownloadLink> */}
                </div>            
                : ""
                }
            </section>
            <div className="tournament-container">
                <div 
                className="tournament-flexcard"
                >
                    <div>
                        <span className="content-icon">T</span>
                    </div>
                    <div className="tourn-cardinfo">
                        <h4 className="tourn-spacer">{currentItem.name}</h4>
                        {currentItem.startDate ? 
                        <span className="content-badge tourn-spacer tourn-datespace">
                            {currentItem.startDate}{currentItem.endDate ? " to " + currentItem.endDate : ""}
                        </span>
                        :
                        ""
                        }

                        <p className="content-lightsub content-smallheading tourn-spacerend">{currentItem.location}</p>
                    </div>
                </div>            
                <div className="tournament-container">
                    {matchID !== -1 ? 
                        <MatchUpdate 
                            togglePopUp={togglePopUp} 
                            updateMatch={updateMatch} 
                            match={currentItem.matches[matchID]} 
                            players={currentItem.players}
                            tournamentType={currentItem.tournamentType}
                            playerType={currentItem.playerType} /> 
                    :
                    null
                    }
                    <div className="table-scroll">
                        {standings}
                    </div>
                    <div className={ "tournament"}>
                        { currentItem.tournamentType == "single-elim" ?
                        bracket
                        :
                        <div className="roundrobin-container roundrobin-matchmargin">
                            <Link to="#" onClick={() => { expandCollapseData() }} className="form-submit form-tournamentbtn form-optionbtn roundrobin-expand">
                                <p>Expand / Collapse</p>
                            </Link>
                            {bracket.map((round, i) => {
                                return (
                                    <div className="roundrobin-matchset" key={'matchset-round' + i}>
                                        <Link to="#" onClick={() => { updateCollapseData((i + 1)) }} className="roundrobin-matchsetheader">
                                            <img src={collapseData[(i + 1) ] ? CloseImage : OpenImage} className="roundrobin-icon" />
                                            <p>Round {i + 1} Matches</p>
                                        </Link>
                                        <div className={ collapseData[(i + 1)] ? "roundrobin-collapse rr-active" : "roundrobin-collapse"} >
                                            <div className="roundrobin-carousel">
                                            {round}
                                            </div>
                                        </div>
                                    </div>
                                )
                            } )}
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Tournament