import { useState } from 'react';
import loginImage from '../images/signup.jpg';
import { useNavigate } from 'react-router-dom';
import { handleChange } from '../functions/userFunctions.js';
import { postForgotPassword } from '../functions/userAPI.js';

const ForgotPassword = () => {
    // Setup redirect
    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }
    const routeSignupChange = () => {
        navigate('/signup');
    }

    const [ errors, setErrors ] = useState({})
    const [ email, setEmail ] = useState()

    return (
        <div className="userauth-container" >
            <div className="login-container">
                <img src={ loginImage } className="login-image" alt="Hoi Pham on Unsplash"/>
                <form className="login-box">
                    <h3 className="login-heading">Forgot Password?</h3>
                    <input type="text" 
                        className="login-input" 
                        placeholder="Email" 
                        onChange={(e) => { handleChange(e, setEmail, email)} }
                        data-key="email" />
                    <div className="login-error">{ errors.email }</div>
                    <input type="button" 
                        onClick={(e) => { postForgotPassword(e, email, setErrors, navigate)}} 
                        value="Check Email" 
                        className="general-button login-button login-submit"/>
                    <div className="login-orbox">
                        <div className="login-line"></div>
                        <span className="login-ortext">OR</span>
                        <div className="login-line"></div>
                    </div>
                    <input type="button" 
                        onClick={ routeLoginChange } 
                        value="Login" 
                        className="general-button login-button login-forgot"/>
                    <input type="button" 
                        onClick={ routeSignupChange } 
                        value="Don't have an account?" 
                        className="general-button login-button login-submit"/>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;