import { roundRobinUpdater } from "../Tournaments/tournamentFunctions.js";

// GET Request for single tournament
export const getTournament = async (id, updateData, setDataLoaded) => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + "/api/tournament/" + id, {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    if (json)
    {
        updateData(json);
        setDataLoaded(true)
    }
}

// GET Request for all user tournaments
export const getTournaments = async (id, updateData, setDataLoaded) => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + "/api/tournaments/" + id, {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    if (json)
    {
        updateData(json);
        setDataLoaded(true)
    }
}

// POST request for new tournament
export const postTournament = async (e, form, history) => {
    e.preventDefault();

    console.log(form)
    if (form.tournamentType == "round-robin")
    {
        let formattedMatches = roundRobinUpdater(form.players.length, form)
        form.matches = formattedMatches
    }

    if (form.matches.length == 0)
    {
        return console.log('Error 400: match length must be over 0')
    }

    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/tournament', {
        credentials: 'include',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form),
    })

    const json = await data.json();

    if (json.errors)
    {
        console.log(json.errors);
    }

    history("/");

}

//PUT request to update tournament
export const putTournament = async (e, form, history, changePlayerSize) => {
    e.preventDefault()

    if (form.tournamentType == "round-robin" && changePlayerSize == true)
    {
        let formattedMatches = roundRobinUpdater(form.players.length, form)
        form.matches = formattedMatches
    }

    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/tournament/' + form._id, {
        credentials: 'include',
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
    })

    const json = await data.json();

    if (json.errors)
    {
        console.log(json.errors);
    }

    history('/tournament/' + form._id)
};


//Delete a court booking
export const deleteTournament = async (id, history, formDel) => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/tournament/' + id, {
        credentials: 'include',
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    if (json)
    {
        console.log(json)
        if (formDel === true) {
            // if tournanet deleted on tournament page
            history.push("/");
          } else if (formDel === false) {
            // if tournament deleted on home page
            window.location.reload(false);
          }
    }
  };

// GET Request for all user tournaments
export const getRoundRobinResults = async (id, updateData) => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + "/api/round-robin/" + id, {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    if (json)
    {
        updateData(json)
    }
}
