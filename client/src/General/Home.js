import { useEffect, useContext, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../functions/UserContext.js';
import { courtDashboard, tournamentDashboard } from '../functions/userFunctions';
import { validateUser } from '../functions/userAPI.js';
import { getTournaments, deleteTournament } from '../functions/tournamentAPI.js';

const Home = () => {
    //User Context
    const { userPrefs, updateUserPrefs } = useContext(UserContext);

    const [ courtBlocks, setCourtBlocks ] = useState()
    const [tournaments, setTournaments] = useState([])
    const [ tournamentBlocks, setTournamentBlocks ] = useState()
    const [ dummy, setDummy ] = useState()
    const [ availableCourts, setAvailableCourts] = useState(0);
    const [ userName, setUserName] = useState('Guest');

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    useEffect(() => {
        if (userPrefs && userPrefs.bookings && userPrefs.bookings.length)
        {
            setAvailableCourts(3 - userPrefs.bookings.length)
        }
        else {setAvailableCourts(3 - 0)}
        setUserName(userPrefs.name)
        setCourtBlocks(courtDashboard(userPrefs.bookings, Link))
        getTournaments(userPrefs.nameID, setTournaments, setDummy)
    }, [userPrefs])

    useEffect(() => {
        setTournamentBlocks(tournamentDashboard(tournaments, Link, deleteTournament, navigate))
    }, [tournaments])
    
    useEffect(() => {
        validateUser(routeLoginChange)
    },[])



    return (
        <div id="home-container">
            <div className="home-headerrow">
                <div className="bookings-welcome">
                    <div className="home-heading ">Welcome Back { userName }!</div>
                </div>
                <Link className="bookings-available content-right" to="/court-bookings">
                        <div className="home-heading">Available Bookings</div>
                        <div className="bookings-counter content-right">{availableCourts}</div>
                </Link>

            </div>
            <div className="bookings-current">
                <span className="home-heading">Current Bookings</span>
                <div className="bookings-items">
                    { courtBlocks }               
                </div>
            </div>
            <div className="bookings-current">
                <span className="home-heading">Current Tournaments</span>
                <div className="bookings-items">
                    { tournamentBlocks }               
                </div>
                <Link to="/create-tournament" className="home-button">Create New Tournament</Link>
            </div>
        </div>
    )
}

export default Home;