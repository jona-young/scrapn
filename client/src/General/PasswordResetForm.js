import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPasswordReset, postPasswordReset } from '../functions/userAPI.js';

const PasswordResetForm = () => {
    const { id, token } = useParams();

    const [ credentials, setCredentials ] = useState({
        id: id,
        token: token,
        password1: "",
        password2: ""
    })

    // Setup redirect
    const navigate = useNavigate();
    
    const [ errors, setErrors ] = useState({})

    //Function to update currentItem based off changes in each individual form field
    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        
        setCredentials(creds => ({...creds, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // send to function to verify data and submit to backend API
        postPasswordReset(e, credentials, setErrors, navigate)
    }

    useEffect(() => {
        getPasswordReset(id, token, setCredentials)
    },[])

    return (
        <>
            <form onSubmit={handleSubmit} className="form-main">
                <div className="form-questions">
                    <div className="login-error">{ errors.password }</div>
                    <input
                        id="password1"
                        type="password"
                        value={credentials.email}
                        placeholder="Password"
                        className="form-field"
                        onChange={(e) => handleChange(e)}
                    />    
                    <input
                        id="password2"
                        type="password"
                        value={credentials.email}
                        placeholder="Confirm Password"
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

export default PasswordResetForm;