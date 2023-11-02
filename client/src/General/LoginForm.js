import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../functions/UserContext.js';
import { DataContext } from '../functions/DataContext.js';
import { postLogin } from '../functions/userAPI.js';



const LoginForm = () => {
    // User Contexts
    const { updateUserPrefs } = useContext(UserContext);
    const { updateLoadedData } = useContext(DataContext);

    const [ credentials, setCredentials ] = useState({
        password: "",
        email: "",
    })
    const [ errors, setErrors ] = useState({})

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
        // postLogin(credentials, errors, setErrors)
        postLogin(e, credentials, navigate, errors, setErrors, updateUserPrefs, updateLoadedData)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-main">
                <div className="form-questions">
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
                </div>
                <button type="submit" className="form-submit">
                    Login
                </button>                                          
            </form>
            <p className="general-lightsub">
                Don't have an account? 
                <Link to="/signup" className="general-link">Signup</Link>
            </p>
            <div className="divide-line">
            </div>
            <p className="general-lightsub">
                <Link to="/forgot-password" className="general-link">Forgot Password?</Link>
            </p>
        </>
    )
}

export default LoginForm;