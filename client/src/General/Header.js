import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import menuIcon from '../images/menu-icon.png';
import { getLogout } from '../functions/userAPI.js';
import { UserContext } from '../functions/UserContext.js';



const Header = () => {
    //User Context
    const { updateUserPrefs } = useContext(UserContext);

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    const [ navbar, setNavbar ] = useState(false);
    const showNavbar = () => {
        setNavbar(!navbar)
    }

    return (
        <div id="header" >
            <h3 className="header-heading">
                <Link className="header-home" to={"/"}>BOOKR</Link>
            </h3>
            <Link to="#" onClick={ showNavbar} className="menu-bars">
                <img src={menuIcon} className="header-menu" alt="menu button" />
            </Link> 
            <nav className={ navbar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={ showNavbar }>
                        <li className="navbar-toggle"><Link to="#" className="menu-bars">X</Link></li>
                        <li className="nav-text"><Link to={"/"}>Home</Link></li>
                        <li className="nav-text"><Link to={"/court-bookings"}>Courts</Link></li>
                        <li className="nav-text"><Link to={"profile"}>Profile</Link></li>
                        <li className="nav-text"><Link to={"login"}>Login</Link></li>
                        <li className="nav-text"><Link to={"signup"}>Signup</Link></li>
                        <li className="nav-text"><button onClick={ () => {getLogout(updateUserPrefs, routeLoginChange)} }>Logout</button></li>
                    </ul>
            </nav>
        </div>
    )
}

export default Header;