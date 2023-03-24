import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../functions/UserContext.js';
import BookForm from './BookForm.js';

const CreateBooking = () => {
    const { date, time } = useParams();

    //User Context
    const { userPrefs, updateUserPrefs } = useContext(UserContext);

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
    return (
        <BookForm form={currentItem} />
    )
}

export default CreateBooking;