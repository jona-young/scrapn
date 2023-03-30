import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getLogout } from '../functions/userAPI.js';
import { UserContext } from '../functions/UserContext.js';

const UserLoggedOn = () => {
    //User Context
    const { userPrefs, updateUserPrefs } = useContext(UserContext);

    const [ loggedOn, setLoggedOn ] = useState(false)
    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    useEffect(() => {
        setLoggedOn(userPrefs.isLoggedOn)
    }, [userPrefs])

    if (loggedOn)
    {
        return (
            <li className="nav-text"><button onClick={ () => {getLogout(routeLoginChange, setLoggedOn)} }>Logout</button></li>
        )
    }
    else
    {
        return (
            <>
                <li className="nav-text"><Link to={"login"}>Login</Link></li>
                <li className="nav-text"><Link to={"signup"}>Signup</Link></li>
            </>
        )
    }

    
    
}

export default UserLoggedOn;