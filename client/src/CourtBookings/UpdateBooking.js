import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBooking } from '../functions/courtBookingAPI.js';
import { validateUser } from '../functions/userAPI.js';
import BookForm from './BookForm.js';


const UpdateBooking = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    //Sets the item that will be pushed to backend API to update court booking
    const [currentItem, setCurrentItem] = useState({});
    const [formLoad, setFormLoad] = useState(false);

    useEffect(() => {
        validateUser(routeLoginChange);
        getBooking(id, setCurrentItem, setFormLoad)
    },[])

    if (formLoad == true)
    {
        return (
            <BookForm form={currentItem} />
        )
    }
    else
    {
        return (
            <h5>Loading...</h5>
        )
    }

}

export default UpdateBooking;