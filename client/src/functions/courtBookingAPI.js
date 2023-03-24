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

//GET SINGLE court booking
export const getBooking = async (courtBookingID, setCourtBooking, history) => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/court-booking/' + courtBookingID, {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    setCourtBooking(json);
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
            history.push("/tennis-book");
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

//Delete a court booking
export const putBooking = async (e, forms, history) => {
    e.preventDefault();
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/court-booking/' + forms._id, {
        credentials: 'include',
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(forms),

    })

    const json = await data.json();

    if (json)
    {
        history("/court-bookings");
    }
  };