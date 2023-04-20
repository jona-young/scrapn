import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-item footer-name">
                SCRAPN
            </div>
            <div className="footer-item">
                123 Rainbow Road, Toronto, ON, A1B 2C3
            </div>
            <div className="footer-item">
                <Link path="#" className="footer-link">Contact Us</Link>
            </div>
            <div className="footer-item">
                2023 BMS by jona-young
            </div>
        </div>
    )
}

export default Footer;