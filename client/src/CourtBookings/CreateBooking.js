import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { validateUser } from '../functions/userAPI.js';
import BookForm from './BookForm.js';

const CreateBooking = () => {
    const { date, time } = useParams();

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    //Sets the item that will be pushed to backend API to create court booking
    const [currentItem, setCurrentItem] = useState({
        id: null,
        date: date,
        time: time,
        players: [
            {
            name: "",
            nameID: ""
            },
            {
            name: "",
            nameID: ""
            }
        ],
        author: "",
        authorID: ""
    });

    useEffect(() => {
        validateUser(routeLoginChange);
    },[])
    return (
        <BookForm form={currentItem} />
    )
}

export default CreateBooking;