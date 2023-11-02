import { useEffect, useContext, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../functions/UserContext.js';
import { tournamentDashboard } from '../functions/userFunctions';
import { validateUser } from '../functions/userAPI.js';
import { getUserTournaments, deleteTournament } from '../functions/tournamentAPI.js';
import DialogAlert from '../functions/DialogAlert.js';
import './services.css';


const Home = () => {
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
        getUserTournaments(userPrefs.nameID, setTournaments)
    }, [userPrefs])

    useEffect(() => {
        setTournamentBlocks(tournamentDashboard(tournaments, Link, deleteTournament, navigate, DialogAlert))
        console.log(tournamentBlocks)
    }, [tournaments])
    
    useEffect(() => {
        validateUser(routeLoginChange)
    },[])



    return (
        <>
            <section className="site-panel header-spacer">
                <div className="site-heading membership-header">
                    <h1 className="form-heading general-bannertext">Tournaments</h1>
                    <p className="form-subheading general-lightsub">A list of your current content.</p>
                </div>
            </section>
            <section className="membership-transition content-container">
                {tournamentBlocks}
            </section>
        </>
    )
}

export default Home;