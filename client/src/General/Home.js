import { useEffect, useContext, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../functions/UserContext.js';
import { courtDashboard, tournamentDashboard } from '../functions/userFunctions';
import { validateUser } from '../functions/userAPI.js';
import { getTournaments, deleteTournament } from '../functions/tournamentAPI.js';
import { getBookingsByUser } from '../functions/courtBookingAPI.js';

const Home = () => {
    //User Context
    const { userPrefs, updateUserPrefs } = useContext(UserContext);

    const [ courts, setCourts ] = useState()
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
        setUserName(userPrefs.name)
        getBookingsByUser(userPrefs.nameID, setCourts)
        getTournaments(userPrefs.nameID, setTournaments, setDummy)
    }, [userPrefs])

    useEffect(() => {
        setTournamentBlocks(tournamentDashboard(tournaments, Link, deleteTournament, navigate))
    }, [tournaments])

    useEffect(() => {
        if (courts && courts.length)
        {
            setAvailableCourts(3 - courts.length)
        }
        else {setAvailableCourts(3 - 0)}
        setCourtBlocks(courtDashboard(courts, Link))
    }, [courts])
    
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
                <span className="bookings-heading">Current Bookings</span>
                { courtBlocks }               
            </div>
            <div className="bookings-current">
                <span className="bookings-heading">Current Tournaments</span>
                { tournamentBlocks }               
                <Link to="/create-tournament" className="home-button">Create New Tournament</Link>
            </div>
        </div>
    )
}

export default Home;