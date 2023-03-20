import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../images/menu-icon.png';


const Header = () => {
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
                        <li className="nav-text"><Link to={"/"}>Courts</Link></li>
                        <li className="nav-text"><Link to={"profile"}>Profile</Link></li>

                        <li className="nav-text"><Link to={"login"}>Login</Link></li>
                        <li className="nav-text"><Link to={"signup"}>Signup</Link></li>
                    </ul>
            </nav>
        </div>
    )
}

export default Header;