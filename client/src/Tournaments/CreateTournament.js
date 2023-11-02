import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TournamentForm from './TournamentForm.js';
import { validateUser } from '../functions/userAPI.js';

const CreateTournament = () => {
    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    //Sets the item that will be pushed to backend API to create court booking
    const [currentItem, setCurrentItem] = useState({
        id: null,
        name: "",
        startDate: "",
        endDate: "",
        location: "",
        tournamentType: "",
        matches:[],
        author: "",
        players: [],
    });
    
    useEffect(() => {
        validateUser(routeLoginChange);
    },[])
    
    return (
        <>
            <section className="general-banner header-spacer">
                <div className="general-heading">
                    <h1 className="form-heading general-bannertext">Tournament</h1>
                    <p className="form-subheading general-lightsub">Home &gt; Tournament</p>
                </div>
            </section>
            <div className="form-card footer-spacer">
                <TournamentForm form={currentItem} />
            </div>
        </>
    )
}

export default CreateTournament;