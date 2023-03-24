import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../functions/UserContext.js';
import BookForm from './BookForm.js';

const CreateBooking = () => {
    let data = useLocation();

    //User Context
    const { userPrefs, updateUserPrefs } = useContext(UserContext);

    //Sets the item that will be pushed to backend API to create court booking
    const [currentItem, setCurrentItem] = useState({
    _id: data.state._id ? data.state._id : "",
    date: data.state.date ? data.state.date : "",
    time: data.state.time ? data.state.time : "",
    court: data.state.court ? data.state.court : "1",
    type: data.state.type ? data.state.type : "Singles",
    players: data.state.players? data.state.players : [
        {
        name: "",
        nameID: ""
        },
        {
        name: "",
        nameID: ""
        }
    ],
    author: data.state.author ? data.state.author : "",
    authorID: data.state.authorID ? data.state.authorID : "",
    mode: data.state.mode ? data.state.mode : ""
    });

    useEffect(() => {
        setCurrentItem(data.state)
    },[])

    return (
        <BookForm form={currentItem} />
    )
}

export default CreateBooking;