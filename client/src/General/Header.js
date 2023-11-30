import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../functions/UserContext.js';
import menuIcon from '../img/menu-icon.png';
import UserLoggedOn from './UserLoggedOn.js';
import './template.css';
import './site.css';

const Header = () => {
    const { userPrefs } = useContext(UserContext);
    const [ navbar, setNavbar ] = useState(false);
    const showNavbar = () => {
        setNavbar(!navbar)
    }

    const [ loggedStatus, setLoggedStatus] = useState(false);
    const [ nameIDLink, setNameIDLink] = useState()

    //why does local storage add quotation marks to string value
    useEffect(() => {
        setNameIDLink(userPrefs.nameID)
        setLoggedStatus(userPrefs.isLoggedOn)
    },[userPrefs])

    return (
        <>
            <header className="header-main">
            <div className="header-container">
                <Link to="/" className="nav-menutitle">
                    <h3>
                        SCRAPN
                    </h3>
                </Link>
                <div className="nav-rightspacing">
                    { userPrefs.isLoggedOn == true ?
                        <Link to="/tournaments" className="nav-menutitle nav-button">
                            <h5>
                                Tournaments
                            </h5>
                        </Link>
                     : 
                     <>
                        <Link to="/login" className="nav-menutitle nav-button form-updatebtn">
                            <h5>
                                Login
                            </h5>
                        </Link>
                        <Link to="/signup" className="nav-menutitle nav-button form-dangerbtn">
                            <h5>
                                Signup
                            </h5>
                        </Link>
                        </>

                     }
                    <Link to="#" onClick={ showNavbar}>
                            <img src={menuIcon} className="nav-menuicon" alt="menu button" />
                    </Link>
                </div>
            </div>
            </header>
            <nav className={ navbar ? "nav-menu active" : "nav-menu"} >
            <div className="nav-menutop">
                <h3 className="nav-menutitle nav-menuheading">
                    SCRAPN
                </h3>
                <div className="header-logo">
                    <Link to="#" onClick={ showNavbar} className="nav-closemenu">
                            x
                    </Link>
                </div>
            </div>
            <Link to="/" onClick={showNavbar} className="nav-menuoption">
                Home
            </Link>
            <Link to="/contact-us" className="nav-menuoption">
                Contact Us
            </Link>
            <Link to="/tournaments" onClick={showNavbar} className="nav-menuoption">
                Tournaments
            </Link>
            <UserLoggedOn navbarToggle={showNavbar} />
            {/* <Link to={"/profile/" + nameIDLink} className="nav-menuoption">
                Profile
            </Link> */}
            {/* <Link to="/membership" className="nav-menuoption">
                Membership Plans
            </Link> */}
            <div className="nav-contactbottom">
                <p className="nav-contactinfo">
                    scrapn.services@gmail.com
                </p>
                {/* <p className="nav-contactinfo">
                    +1 (123) 456 7890
                </p> */}
            </div>
            </nav>
            <Link to="#" onClick={ showNavbar } className={ navbar ? "nav-backdrop" : "" }></Link>
        </>
    )
}

export default Header;