import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postForgotPassword } from '../functions/userAPI.js';

const ForgotPasswordForm = () => {
    const [ credentials, setCredentials ] = useState({
        email: "",
    })

    const [ response, setResponse ] = useState({})

    // Setup redirect
    const navigate = useNavigate();
    
    //Function to update currentItem based off changes in each individual form field
    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        
        setCredentials(creds => ({...creds, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // send to function to verify data and submit to backend API
        postForgotPassword(e, credentials, setResponse, navigate)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-main">
                <div className="form-questions">
                    <div className="login-error">{ response.email }</div>
                    <input
                        id="email"
                        type="text"
                        value={credentials.email}
                        placeholder="Email"
                        className="form-field"
                        onChange={(e) => handleChange(e)}
                    />                  
                </div>
                <button type="submit" className="form-submit">
                    Request Password Reset
                </button>                                          
            </form>
        </>
    )
}

export default ForgotPasswordForm;