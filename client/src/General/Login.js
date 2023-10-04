import { useState, useContext } from 'react';
import loginImage from '../images/signup.jpg';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../functions/UserContext.js';
import { DataContext } from '../functions/DataContext.js';
import { handleChange } from '../functions/userFunctions.js';
import { postLogin } from '../functions/userAPI.js';

const Login = () => {
    //User Context
    const { updateUserPrefs } = useContext(UserContext);
    const { updateLoadedData } = useContext(DataContext);

    // Setup redirect
    const navigate = useNavigate();
    const routeSignupChange = () => {
        navigate('/signup');
    }

    const routeForgotPassword = () => {
        navigate('/forgot-password');
    }

    const [ loginDetails, setLoginDetails ] = useState({});
    const [ errors, setErrors ] = useState({})

    return (
        <div className="userauth-container" >
            <div className="login-container">
                <div className="login-image">
                    <img src={ loginImage } className="login-image" alt="Hoi Pham on Unsplash"/>
                    <p className="about-info">
                        A lightweight web application to create tournament draws for competition and sports. Best used
                        as a central point to display tournament draws with features to edit match teams, dates and times,
                        and winners.
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        You may also export the tournament draws to PDF if you need to print and post them at your tournament
                        venue!
                    </p>
                </div>
                <form className="login-box">
                    <h3 className="login-heading">Login</h3>
                    <input type="text" 
                        className="login-input" 
                        placeholder="Email" 
                        onChange={(e) => { handleChange(e, setLoginDetails, loginDetails)} }
                        data-key="email" />
                    <div className="login-error">{ errors.email }</div>
                    <input type="password" 
                        autoComplete="on"
                        name="current-password"
                        id="current-password"
                        className="login-input" 
                        placeholder="Password"
                        onChange={(e) => { handleChange(e, setLoginDetails, loginDetails)} }
                        data-key="password" />
                    <div className="login-error">{ errors.password }</div>
                    <input type="button" 
                        onClick={(e) => { postLogin(e, loginDetails, navigate, errors, setErrors, updateUserPrefs, updateLoadedData) } } 
                        value="Log In" 
                        className="login-button login-submit"/>
                    <div className="login-orbox">
                        <div className="login-line"></div>
                        <span className="login-ortext">OR</span>
                        <div className="login-line"></div>
                    </div>
                    <input type="button" 
                        onClick={ routeForgotPassword } 
                        value="Forgot Password?" 
                        className="login-button login-forgot"/>
                    <input type="button" 
                        onClick={ routeSignupChange } 
                        value="Don't have an account?" 
                        className="login-button login-submit"/>
                </form>
            </div>
        </div>
    )
}

export default Login;