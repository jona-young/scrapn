import { Link } from 'react-router-dom';
import Page404 from "../img/404.png";
import "./site.css";

const PageNotFound = () => {
    return (
        <div className="page404-panel header-spacer">
            <div className="page404-banner">
                <img src={Page404} className="page404-img" />
            </div>
            <div className="general-heading page404-expand">
                <h2 className="form-heading general-bannertext page404-heading">Oops! Page Not Found.</h2>
                <p className="form-subheading general-lightsub">The page you are looking for is not recognized. Try a different page or go to the homepage with the button below.</p>
            </div>
            <div className="general-heading page404-buttoncontainer">
                <Link to="/" className="form-submit page404-button">Go to Home</Link>
            </div>
        </div>
    )
}

export default PageNotFound