import { useState, useContext } from 'react';
import signupImage from '../images/signup.jpg';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../functions/UserContext.js';
import { DataContext } from '../functions/DataContext.js';
import { handleChange } from '../functions/userFunctions.js';
import { postSignup } from '../functions/userAPI.js';

const Signup = () => {
    //User Context
    const { updateUserPrefs } = useContext(UserContext);
    const { updateLoadedData } = useContext(DataContext);

    // Setup redirect
    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    const [ loginDetails, setLoginDetails ] = useState({privilige:1});
    const [ errors, setErrors ] = useState({});

    return (
            <div className="login-container" id="login-landing">
                <img src={ signupImage } className="login-image" alt="Mario Go on Unsplash"/>
                <form className="login-box">
                    <h3 className="login-heading">Sign Up</h3>
                    <input type="text" 
                            className="login-input" 
                            placeholder="Name" 
                            onChange={(e) => { handleChange(e, setLoginDetails, loginDetails)} }
                            data-key="name" 
                            required />
                    <input type="text" 
                        className="login-input" 
                        placeholder="Email" 
                        onChange={(e) => { handleChange(e, setLoginDetails, loginDetails)} }
                        data-key="email" 
                        required />
                    <div className="login-error">{ errors.email }</div>
                    <input type="password" 
                        autoComplete="on"
                        name="new-password"
                        id="new-password"
                        className="login-input" 
                        placeholder="Password"
                        onChange={(e) => { handleChange(e, setLoginDetails, loginDetails)} }
                        data-key="password" 
                        required />
                    <div className="login-error">{ errors.password }</div>
                    <input type="button" 
                        onClick={(e) => { postSignup(e, loginDetails, navigate, errors, setErrors, updateUserPrefs, updateLoadedData) } } 
                        value="Submit" 
                        className="general-button login-button login-submit"/>
                    <div className="login-orbox">
                        <div className="login-line"></div>
                        <span className="login-ortext">OR</span>
                        <div className="login-line"></div>
                    </div>
                    <input type="button" 
                    onClick={ routeLoginChange } 
                    value="Already have an account?" 
                    className="general-button login-button login-submit"/>
                </form>
            </div>
    )
}

export default Signup;