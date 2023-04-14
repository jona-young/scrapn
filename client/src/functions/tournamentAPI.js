import { saveAs } from 'file-saver'

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
export const putTournament = async (e, forms, history) => {
    e.preventDefault()

    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/tournament/' + forms._id, {
        credentials: 'include',
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(forms),
    })

    const json = await data.json();

    if (json.errors)
    {
        console.log(json.errors);
    }

    history('/tournament/' + forms._id)
};

export const downloadDraw = (forms) => {
    console.log(forms)
    fetch(process.env.REACT_APP_DEVAPI + '/api/download-draw/', {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(forms),

    })
    .then((response) => response.blob())
    .then((res) => {
        const pdfBlob = new Blob([res], { type: 'application/pdf' });
        saveAs(pdfBlob, `draw.pdf`)
    }).catch((err)=> {
        console.log(err)
    })
}