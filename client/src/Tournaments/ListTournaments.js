import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getTournaments } from '../functions/tournamentAPI.js';
import { listTournaments } from './tournamentFunctions.js';
import { UserContext } from '../functions/UserContext.js';


const ListTournaments = () => {
    //User Context
    const { userPrefs } = useContext(UserContext);
    const [ tournaments, setTournaments ] = useState([])
    const [ list, setList ] = useState([])

    const [loadedData, setLoadedData ] = useState(false)


    useEffect(() => {
        getTournaments(userPrefs.nameID, setTournaments, setLoadedData)

        console.log(tournaments)
        listTournaments(tournaments, setList, Link)
    }, [loadedData])

    return (
        <div>
            {list}
        </div>
    )

}

export default ListTournaments