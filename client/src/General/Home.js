import { useEffect, useContext, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../functions/UserContext.js';
import { courtDashboard } from '../functions/userFunctions';
import { loadUserData } from '../functions/userAPI.js';

const Home = () => {
    //User Context
    const { userPrefs, updateUserPrefs } = useContext(UserContext);

    const [ courtBlocks, setCourtBlocks ] = useState()
    const [ availableCourts, setAvailableCourts] = useState(0);
    const [ userName, setUserName] = useState('Guest');

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }
    useMemo(() => {
        setAvailableCourts(3 - userPrefs.bookings.length)
        setUserName(userPrefs.name)
        setCourtBlocks(courtDashboard(userPrefs.bookings, Link))
    }, [userPrefs])


    useEffect(() => {
        loadUserData(updateUserPrefs, routeLoginChange)
    },[])



    return (
        <div id="home-container">
            <div className="home-headerrow">
                <div className="bookings-welcome">
                    <div className="home-heading ">Welcome Back { userName }!</div>
                </div>
                <Link className="bookings-available bookings-right" to="/court-bookings">
                        <div className="home-heading">Available Bookings</div>
                        <div className="bookings-counter bookings-right">{availableCourts}</div>
                </Link>

            </div>
            <div className="bookings-current">
                <span className="home-heading">Current Bookings</span>
                <div className="bookings-items">
                    { courtBlocks }               
                </div>
            </div>
        </div>
    )
}

export default Home;