import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TournamentSeriesForm from './TournamentSeriesForm.js';
import { validateUser } from '../functions/userAPI.js';

const CreateTournamentSeries = () => {
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
        tournaments:[],
        author: "",
    });
    
    useEffect(() => {
        validateUser(routeLoginChange);
    },[])
    
    return (
        <>
            <section className="general-banner header-spacer">
                <div className="general-heading">
                    <h1 className="form-heading general-bannertext">Tournament Series</h1>
                    <p className="form-subheading general-lightsub">Home &gt; Tournament Series</p>
                </div>
            </section>
            <div className="form-card footer-spacer">
                <TournamentSeriesForm form={currentItem} />
            </div>
        </>
    )
}

export default CreateTournamentSeries;