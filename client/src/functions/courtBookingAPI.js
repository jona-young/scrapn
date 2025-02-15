import format from "date-fns/format";

// GET Request for court bookings
export const getBookings = async (currentDate, setUpdatedCourtBookings) => {
    const urlDateFormat = "yyyy-MM-d";

    const data = await fetch(process.env.REACT_APP_DEVAPI + `/api/court-bookings/${format(currentDate, urlDateFormat)}/`, {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    setUpdatedCourtBookings(json);
}

// GET Request for court bookings
export const getBookingsByUser = async (id, setUpdatedCourtBookings) => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + `/api/user-bookings/${id}`, {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    setUpdatedCourtBookings(json);
}

//GET SINGLE court booking
export const getBooking = async (courtBookingID, setCourtBooking, setLoad) => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/court-booking/' + courtBookingID, {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })

    let json = await data.json();

    let curDate = new Date(json.date)
    let courtDate = format(curDate, "yyyy-MM-d");

    setCourtBooking(json);
    setCourtBooking(curItem => ({...curItem, date: courtDate, mode: "update"}))
    setLoad(true)

  };

//Delete a court booking
export const deleteBooking = async (courtBookingID, history, formDel) => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/court-booking/' + courtBookingID, {
        credentials: 'include',
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    if (json)
    {
        console.log(json)
        if (formDel === true) {
            history("/court-bookings");
          } else if (formDel === false) {
            window.location.reload(false);
          }
    }
  };

export const postBooking = async (e, forms, history) => {
    e.preventDefault();

    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/court-booking', {
        credentials: 'include',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(forms),
    })

    const json = await data.json();
    if (json.errors)
    {
        console.log(json.errors);
    }

    history("/court-bookings");

}

//Updates a court booking
export const putBooking = async (e, forms, history) => {
    e.preventDefault();
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/court-booking/' + forms._id, {
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

    history("/court-bookings");

};

const APIOptipns = () => {
    // credentials

    // method

    // headers

    // optional body

}