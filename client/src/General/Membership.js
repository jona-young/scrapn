import MembershipOptions from './MembershipOptions';
import Support from "../img/support.png"
import Secure from "../img/secure.png"
import Leave from "../img/leave.png"
import './site.css';

const Membership = () => {
    return (
        <>
            <section className="site-panel header-spacer">
                <div className="site-heading membership-header">
                    <h1 className="form-heading general-bannertext">Our Pricing</h1>
                    <p className="form-subheading general-lightsub">We offer great prices and quality service as your tournament creation tool.</p>
                </div>
            </section>
            <section className="membership-transition">
                <MembershipOptions />
            </section>
            <section>
                <div className="general-contentbox membership-removespace">
                    <div className="flex-items">
                        <div className="flex-content">
                            <img src={Support} className="general-icon" />
                            <div className="flex-item">
                                <h3 className="general-subheading">Feature Feedback</h3>
                                <p className="content-lightsub">We want your suggestions on improving our service by providing extended features. If your feature is approved, we will add it to our timeline.</p>
                            </div>
                        </div>
                        <div className="flex-content">
                            <img src={Secure} className="general-icon" />
                            <div className="flex-item">
                                <h3 className="general-subheading">Secure Payments</h3>
                                <p className="content-lightsub">We use Stripe. A secure payment processing platform used for both online payments and in-store purchases for vendors all over the world.</p>
                            </div>
                        </div>
                        <div className="flex-content">
                            <img src={Leave} className="general-icon" />
                            <div className="flex-item">
                                <h3 className="general-subheading">No Subscription</h3>
                                <p className="content-lightsub">If at any point, you feel the service is not for you, feel free to stop your service and subsequent payments. We will be sad to see you go!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Membership