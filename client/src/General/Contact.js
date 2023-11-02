import ContactForm from './ContactForm';
import Address from "../img/address.png"
import Phone from "../img/phone.png"
import Email from "../img/email.png"
import './site.css';
import './template.css';

const Contact = () => {
    return (
        <>
            <section className="general-banner header-spacer contact-banner">
                <div className="general-heading">
                    <h1 className="form-heading general-bannertext">Get in Touch</h1>
                    <p className="form-subheading general-lightsub">Home &gt; Contact</p>
                </div>
            </section>
            <section className="form-card contact-contentbackground">
                    <div className="form-container contact-card">
                        <h2 className="form-heading">5,000+</h2>
                        <p className="contact-subheading form-lightsub ">Satisfied Customers</p>
                    </div>
            </section>
            <section className="general-contentbox">
                    <h3 className="general-statement">Do you have ideas on how we could improve? Let's make something great together.</h3>
                    <div className="flex-items">
                        {/* <div className="flex-content">
                            <img src={Address} className="general-icon" />
                            <div className="flex-item">
                                <h3 className="general-subheading">Address</h3>
                                <p className="content-lightsub">123 Website Way. A1B 2C3. Toronto, ON. Canada</p>
                            </div>
                        </div>
                        <div className="flex-content">
                            <img src={Phone} className="general-icon" />
                            <div className="flex-item">
                                <h3 className="general-subheading">Phone</h3>
                                <p className="content-lightsub">+1 (123) 456 7890</p>
                            </div>
                        </div> */}
                        <div className="flex-content">
                            <img src={Email} className="general-icon" />
                            <div className="flex-item">
                                <h3 className="general-subheading">Email</h3>
                                <p className="content-lightsub">scrapn.services@gmail.com</p>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="general-contentbox gen-remmargin">
                <div className="general-heading contact-fullwidth">
                    <h1 className="form-heading">Let's hear from you!</h1>
                    <p className="contact-subheading form-lightsub">Drop your contact information and we will get back to you shortly.</p>
                    <div className="form-container form-contrast">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;