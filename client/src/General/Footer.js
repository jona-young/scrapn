import { Link } from 'react-router-dom';

const Footer = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        // submission of contact information form
        
    }

    return (
        <footer className="footer-main">
            <div className="footer-container">
            <div className="footer-contentbox">
                    <h1 className="footer-heading">SCRAPN</h1>
                    {/* <p className="content-lightsub">2023 Website. All rights reserved.</p> */}
                </div>
                <div className="footer-contentbox">
                    <h1 className="footer-heading">Get in Touch</h1>
                    {/* <p className="content-lightsub footer-spacing">123 Website Way. A1B 2C3. Toronto, ON, Canada.</p> */}
                    <p className="content-lightsub footer-spacing">scrapn.services@gmail.com</p>
                    {/* <p className="content-lightsub footer-spacing">+1 (123) 456 7890</p> */}
                </div>
                <div className="footer-contentbox">
                    <h1 className="footer-heading">Learn More</h1>
                    <Link to="/" className="nav-menuoption footer-link content-lightsub">
                        Home
                    </Link>
                    <Link to="/about" className="nav-menuoption footer-link content-lightsub">
                        About
                    </Link>
                    {/* <Link to="/contact-us" className="nav-menuoption footer-link content-lightsub">
                        Contact Us
                    </Link> */}
                    {/* <Link to="/pricing" className="nav-menuoption footer-link content-lightsub">
                        Pricing
                    </Link> */}
                </div>
                {/* <div className="footer-contentbox">
                    <h1 className="footer-heading">Our Newsletter</h1>
                    <p className="content-lightsub">Subscribe to our newsletter to get our news & deals delivered to you.</p>
                </div>
                <div className="footer-contentbox">
                    <form onSubmit={handleSubmit} className="footer-subscribebox">
                    <input type="text" placeholder="Email Address" className="form-field footer-subscribetext"></input>
                    <button type="submit" className=" form-field footer-subscribe">
                        Login
                    </button>                                          
                    </form>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer;