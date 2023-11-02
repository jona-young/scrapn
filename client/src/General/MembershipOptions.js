import { Link } from 'react-router-dom';

const MembershipOptions = () => {
    return (
        <>
            <div className="general-contentbox membership-backdrop">
                <h3 className="general-statement membership-align">Basic Plan</h3>
                <h4 className="general-contenttext membership-align">$10 / month</h4>
                <ul className="membership-points">
                    <li className="membership-bulletpt">5 Active Tournament Draws</li>
                    <li className="membership-bulletpt">10 Archived Tournament Draws</li>
                    <li className="membership-bulletpt">Easy PDF Export</li>
                    <li className="membership-bulletpt">24/7 Support</li>
                </ul>
                <Link to="/membership" className="form-submit membership-plan">Choose Plan</Link>

            </div>
            <div className="general-contentbox membership-backdrop">
                <h3 className="general-statement membership-align">Premium Plan</h3>
                <h4 className="general-contenttext membership-align">$25 / month</h4>
                <ul className="membership-points">
                    <li className="membership-bulletpt">10 Active Tournament Draws</li>
                    <li className="membership-bulletpt">20 Archived Tournament Draws</li>
                    <li className="membership-bulletpt">Easy PDF Export</li>
                    <li className="membership-bulletpt">24/7 Support</li>
                </ul>
                <Link to="/membership" className="form-submit membership-plan">Choose Plan</Link>
            </div>
            <div className="general-contentbox membership-backdrop">
                <h3 className="general-statement membership-align">Pro Plan</h3>
                <h4 className="general-contenttext membership-align">$50 / month</h4>
                <ul className="membership-points">
                    <li className="membership-bulletpt">100 Active Tournament Draws</li>
                    <li className="membership-bulletpt">200 Archived Tournament Draws</li>
                    <li className="membership-bulletpt">Easy PDF Export</li>
                    <li className="membership-bulletpt">24/7 Support</li>
                </ul>
                <Link to="/membership" className="form-submit membership-plan">Choose Plan</Link>
            </div>
        </>
    )
}

export default MembershipOptions;