import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPasswordReset, postPasswordReset } from '../functions/userAPI.js';
import { handleChange } from '../functions/userFunctions.js';
import loginImage from '../images/signup.jpg';


//Form to handle actually resetting the password
const PasswordReset = () => {
    const { id, token } = useParams();

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }
    const routeSignupChange = () => {
        navigate('/signup');
    }

    const [ errors, setErrors ] = useState({})

    //Sets the item that will be pushed to backend API to update court booking
    const [currentItem, setCurrentItem] = useState({
        id: id,
        token: token,
        password1: "",
        password2: ""
    });

    useEffect(() => {
        getPasswordReset(id, token, setCurrentItem)
    },[])
    
    //return a form with goal to POST to backend to update password
    return (
        <div className="userauth-container" >
        <div className="login-container">
            <img src={ loginImage } className="login-image" alt="Hoi Pham on Unsplash"/>
            <form className="login-box">
                <h3 className="login-heading">Reset Password</h3>
                <label className="form-field">
                    Enter your password:
                </label>
                <input type="password" 
                    className="login-input" 
                    placeholder="Enter Password" 
                    onChange={(e) => { handleChange(e, setCurrentItem, currentItem)} }
                    data-key="password1" />
                <label className="form-field">
                    Verify your password:
                </label>
                <input type="password" 
                    className="login-input" 
                    placeholder="Verify password..." 
                    onChange={(e) => { handleChange(e, setCurrentItem, currentItem)} }
                    data-key="password2" />
                <div className="login-error">{ errors.password }</div>
                <input type="button" 
                    onClick={(e) => { postPasswordReset(e, currentItem, setErrors, navigate) } } 
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

export default PasswordReset;