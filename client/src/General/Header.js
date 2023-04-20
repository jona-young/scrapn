import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import menuIcon from '../images/menu-icon.png';
import UserLoggedOn from './UserLoggedOn.js';



const Header = () => {
    const [ navbar, setNavbar ] = useState(false);
    const showNavbar = () => {
        setNavbar(!navbar)
    }

    const [ nameIDLink, setNameIDLink] = useState()

    //why does local storage add quotation marks to string value
    useEffect(() => {
        const value = localStorage.getItem("BMS-nameID")
        setNameIDLink(JSON.parse(value))
    },[nameIDLink])

    return (
        <div id="header" >
            <h3 className="header-heading">
                <Link className="header-home" to={"/"}>SCRAPN</Link>
            </h3>
            <Link to="#" onClick={ showNavbar} className="menu-bars">
                <img src={menuIcon} className="header-menu" alt="menu button" />
            </Link> 
            <nav className={ navbar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={ showNavbar }>
                    <li className="navbar-toggle"><Link to="#" className="menu-bars">X</Link></li>
                    <li className="nav-text"><Link to={"/"}>Home</Link></li>
                    <li className="nav-text"><Link to={"/court-bookings"}>Courts</Link></li>
                    <li className="nav-text"><Link to={"/tournaments"}>Tournaments</Link></li>
                    <li className="nav-text"><Link to={"/profile/" + nameIDLink}>Profile</Link></li>
                    <li className="nav-text"><Link to={"/users"}>Users</Link></li>

                    <UserLoggedOn />
                </ul>
            </nav>
        </div>
    )
}

export default Header;