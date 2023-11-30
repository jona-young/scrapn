import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postContactUs } from '../functions/userAPI.js'

const ContactForm = () => {
    const navigate = useNavigate();

    const [ contact, setContact ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",

    })
    const [ errors, setErrors ] = useState({})

    //Function to update currentItem based off changes in each individual form field
    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        
        setContact(contactinfo => ({...contactinfo, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // send to function to verify data and submit to backend API
        postContactUs(e, contact, navigate)
        
        //CURRENTLY NOT WORKING
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-main">
                <div className="form-questions">
                    <input
                        id="firstName"
                        type="text"
                        value={contact.firstName}
                        placeholder="First Name"
                        className="form-field"
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        id="lastName"
                        type="text"
                        value={contact.lastName}
                        placeholder="Last Name"
                        className="form-field"
                        onChange={(e) => handleChange(e)}
                    />                  
                    <input
                        id="email"
                        type="email"
                        value={contact.email}
                        placeholder="Email"
                        className="form-field"
                        onChange={(e) => handleChange(e)}
                    />
                    <textarea id="message" className="form-field form-textarea" placeholder="Message" onChange={(e) => handleChange(e)}></textarea>
                </div>
                <button type="submit" className="form-submit">
                    Send
                </button>                                          
            </form>
        </>
    )
}

export default ContactForm;