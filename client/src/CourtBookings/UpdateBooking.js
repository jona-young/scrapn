import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBooking } from '../functions/courtBookingAPI.js';
import BookForm from './BookForm.js';


const UpdateBooking = () => {
    const { id } = useParams();

    //Sets the item that will be pushed to backend API to update court booking
    const [currentItem, setCurrentItem] = useState({});
    const [formLoad, setFormLoad] = useState(false);

    useEffect(() => {
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