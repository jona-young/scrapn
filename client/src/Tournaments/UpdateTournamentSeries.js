import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTournamentSeriesInfo } from '../functions/tournamentAPI.js';
import { validateUser } from '../functions/userAPI.js';
import TournamentSeriesForm from './TournamentSeriesForm.js';


const UpdateTournamentSeries = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const routeLoginChange = () => {
        navigate('/login');
    }

    //Sets the item that will be pushed to backend API to update court booking
    const [currentItem, setCurrentItem] = useState({});
    const [formLoad, setFormLoad] = useState(false);
    const [dummyObj, setDummyObj ] = useState();

    useEffect(() => {
        validateUser(routeLoginChange);
        getTournamentSeriesInfo(id, setCurrentItem, setFormLoad, setDummyObj)
    },[])

    if (formLoad == true)
    {
        return (
            <>
                <section className="general-banner header-spacer">
                    <div className="general-heading">
                    <h1 className="form-heading general-bannertext">Tournament Series</h1>
                    <p className="form-subheading general-lightsub">Home &gt; Tournament Series</p>
                    </div>
                </section>
                <div className="form-card footer-spacer">
                    <TournamentSeriesForm form={currentItem} update={1} />
                </div>
            </>
        )
    }
    else
    {
        return (
            <h5>Loading...</h5>
        )
    }

}

export default UpdateTournamentSeries;