import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getLogout } from '../functions/userAPI.js';
import { UserContext } from '../functions/UserContext.js';

const UserLoggedOn = ({ navbarToggle }) => {
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

    const handleLogout = () => {
        getLogout(routeLoginChange, setLoggedOn);
        navbarToggle();
    }

    if (loggedOn)
    {
        if (userPrefs.privilige > 50)
        {
            return (
                <>
                    <Link to={"/list-tournaments"} onClick={navbarToggle} className="nav-menuoption">List of Tournaments</Link>
                    <Link to="#" className="form-submit form-tournamentbtn form-dangerbtn" onClick={ () => {handleLogout()} }>Logout</Link>
                </> 
            )
        }
        else
        {
            return (
                <Link to="#" className="form-submit form-tournamentbtn form-dangerbtn" onClick={ () => {handleLogout()} }>Logout</Link>
                )
        }
    }
    else
    {
        return (
            <>
                <Link to={"login"} onClick={navbarToggle} className="form-submit form-tournamentbtn" >Login</Link>
                <Link to={"signup"} onClick={navbarToggle} className="form-submit form-tournamentbtn form-dangerbtn" >Signup</Link>
            </>
        )
    }

    
    
}

export default UserLoggedOn;