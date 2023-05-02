import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTournaments } from '../functions/tournamentAPI.js';

const ListTournaments = () => {
    const [ tournaments, setTournaments ] = useState()
    const [ dataLoaded, setDataLoaded ] = useState(false)

    useEffect(() => {
        getTournaments(setTournaments, setDataLoaded)
    },[dataLoaded])

    if (!tournaments)
    {
        return (
            <>
                Loading page...
            </>
        )
    }
    else
    {
        return (
            <div className="bookings-current">
                <span className="bookings-heading">Current Tournaments</span>
                {Object.entries(tournaments).map(([key, values]) => {
                    return <div className="bookings-current">
                        <span className="bookings-heading">{key}</span>
                        {values.map((tournament, i) => {
                        return <div className="tournaments-item">
                                    <Link
                                    className="tournaments-link"
                                    key={i+"-tournament"}
                                    to={"/tournament/" + tournament._id}
                                    >
                                    <div className="bookings-info">
                                        {tournament.name} {tournament.location ? " at " + tournament.location : ""} {tournament.startDate ? " on " + tournament.startDate : ""}
                                        <br />
                                        {tournament.tournamentType}
                                    </div>
                                    </Link>
                                </div>



                        })}
                    </div>            

                })
                      
                }

            </div>            

        )
    }

}

export default ListTournaments;