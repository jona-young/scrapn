import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../functions/UserContext.js';
import { DataContext } from '../functions/DataContext.js';
import { postSignup } from '../functions/userAPI.js';

const SignupForm = () => {
    //User Context
    const { updateUserPrefs } = useContext(UserContext);
    const { updateLoadedData } = useContext(DataContext);

    // Setup redirect
    const navigate = useNavigate();

    const [ credentials, setCredentials ] = useState({
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
        privilige: 1
    })
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
        postSignup(e, credentials, navigate, errors, setErrors, updateUserPrefs, updateLoadedData)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-main">
                <div className="form-questions">
                    <input
                        id="name"
                        type="text"
                        value={credentials.name}
                        placeholder="Name"
                        className="form-field"
                        onChange={(e) => handleChange(e)}
                    />
                    <div className="login-error">{ errors.email }</div>
                    <input
                        id="email"
                        type="text"
                        value={credentials.email}
                        placeholder="Email"
                        className="form-field"
                        onChange={(e) => handleChange(e)}
                    /> 
                    <div className="login-error">{ errors.password }</div>
                    <input
                        id="password"
                        type="password"
                        value={credentials.password}
                        placeholder="Password"
                        className="form-field"
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        id="confirmPassword"
                        type="password"
                        value={credentials.confirmPassword}
                        placeholder="Confirm Password"
                        className="form-field"
                        onChange={(e) => handleChange(e)}
                    />    
                </div>
                <button type="submit" className="form-submit">
                    Sign Up
                </button>                                          
            </form>
            <p className="general-lightsub">
                Already have an account?
                <Link to="/login" className="general-link">Login</Link>
            </p>
        </>
    )
}

export default SignupForm;