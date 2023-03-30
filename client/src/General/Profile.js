import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, putUser } from '../functions/userAPI.js';
import { validateUser } from '../functions/userAPI.js';


const Profile = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    const [ updateView, setUpdateView ] = useState(false)
    const updateViewCheck = () => {
        const userID = JSON.parse(localStorage.getItem("BMS-nameID"))
        const priviligeLevel = JSON.parse(localStorage.getItem("BMS-privilige"))
        if (id == userID || priviligeLevel > 1)
        {
            setUpdateView(true)
        }
        else
        {
            setUpdateView(false)
        }
    }

    //Sets the item that will be pushed to backend API to update user profile
    const [currentItem, setCurrentItem] = useState({});

    const raiseRating = () => {
        setCurrentItem(curItem => ({...curItem, rating: String(parseFloat(currentItem.rating) + 0.5)}))
    }

    console.log(currentItem)

    useEffect(() => {
        getUser(id, setCurrentItem)
        updateViewCheck()
        validateUser(routeLoginChange)
    },[])

    return (
        <div id="profile">
            <h4 className="large-heading">Hello {currentItem.name},</h4>
            <div className="profile-field">
                <div>
                    <h5>Email: </h5>
                    {currentItem.email}
                </div>

            </div>
            <div className="profile-field">
                <div>
                    <h5>Rating: </h5>
                    {currentItem.rating}
                </div>
                { updateView ? 
                    <div className="update-rating">
                        <button className="profile-button" onClick={() => raiseRating()}>+</button>
                        <button className="profile-button">-</button>
                        <button className="profile-confirm" onClick={(e) => putUser(e, currentItem, navigate)}>Done</button>
                    </div>
                    :
                    ""}

            </div>
        </div>
    )


}

export default Profile;