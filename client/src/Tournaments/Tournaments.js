import { useEffect, useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../functions/UserContext.js';
import { tournamentDashboard } from '../functions/userFunctions.js';
import { validateUser } from '../functions/userAPI.js';
import { getTournamentSeries, deleteTournament } from '../functions/tournamentAPI.js';
import DialogAlert from '../functions/DialogAlert.js';
import '../General/services.css';

const Tournaments = () => {
    const { id } = useParams();

    //User Context
    const { userPrefs, updateUserPrefs } = useContext(UserContext);
    const [tournaments, setTournaments] = useState([])
    const [ tournamentBlocks, setTournamentBlocks ] = useState()

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    useEffect(() => {
        getTournamentSeries(id, setTournaments)
    }, [id])

    useEffect(() => {
        setTournamentBlocks(tournamentDashboard(tournaments.tournaments, Link, deleteTournament, navigate, DialogAlert))
    }, [tournaments])
    
    useEffect(() => {
        validateUser(routeLoginChange)
    },[])

    return (
        <>
            <section className="site-panel header-spacer">
                <div className="site-heading membership-header">
                    <h1 className="form-heading general-bannertext">{tournaments && tournaments.name ? tournaments.name : "Your Ind"}</h1>
                    <Link to={"/tournaments"} className="form-submit form-tournamentbtn form-centerbtn">Back to Home</Link>
                </div>
            </section>
            <section className="membership-transition content-container">
                {tournamentBlocks}
            </section>
            <div className="home-create">
                <Link to={"/create-tournament/" + id} className="form-submit form-tournamentbtn">Create Tournament</Link>
            </div>
        </>
    )
}

export default Tournaments;