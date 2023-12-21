import { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../functions/UserContext.js';
import { tournamentSeriesDashboard } from '../functions/userFunctions.js';
import { validateUser } from '../functions/userAPI.js';
import { getUserTournamentSeries, deleteTournamentSeries } from '../functions/tournamentAPI.js';
import DialogAlert from '../functions/DialogAlert.js';
import '../General/services.css';


const TournamentSeries = () => {
    //User Context
    const { userPrefs, updateUserPrefs } = useContext(UserContext);
    const [tournaments, setTournaments] = useState([])
    const [ tournamentBlocks, setTournamentBlocks ] = useState()
    const [ userName, setUserName] = useState('Guest');

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    useEffect(() => {
        setUserName(userPrefs.name)
        getUserTournamentSeries(userPrefs.nameID, setTournaments)
    }, [userPrefs])

    useEffect(() => {
        setTournamentBlocks(tournamentSeriesDashboard(tournaments, Link, deleteTournamentSeries, navigate, DialogAlert))
    }, [tournaments])
    
    useEffect(() => {
        validateUser(routeLoginChange)
    },[])
    return (
        <>
            <section className="site-panel header-spacer">
                <div className="site-heading membership-header">
                    <h1 className="form-heading general-bannertext">{userName ? userName + "'s Tournaments Series" : "Your Tournament Series"}</h1>
                    <p className="form-subheading general-lightsub">A list of all your tournament series.</p>
                </div>
            </section>
            <section className="membership-transition content-container">
                {tournamentBlocks}
            </section>
            <div className="home-create">
                <Link to="/create-tournamentseries" className="form-submit form-tournamentbtn">Create Tournament Event</Link>
            </div>
        </>
    )
}

export default TournamentSeries;