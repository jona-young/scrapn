// GET Request for court bookings
export const initialUserLoad = async (updateUserPrefs) => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/validate', {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    if(json.user)
      {
          updateUserPrefs({ name: json.user,
                            isLoggedOn: json.isLoggedOn, 
                            privilige: json.privilige
                        })
      }
      else if (json.error === 'jwt')
      {
        console.log('s grabbing jwt error');
      }
      else 
      {
        console.log('troubleshoot HARD');
      }
}

export const validateUser = async (redirectPath) => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/validate', {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    if(json.user)
      {
        console.log('user good')
      }
      else if (json.error === 'jwt')
      {
        console.log('s grabbing jwt error');
        redirectPath();
      }
      else 
      {
        console.log('troubleshoot HARD');
      }
}

export const postSignup = async (e, loginDetails, history, errors, updateErrors, updateUserPrefs, updateLoadedData) => {
  e.preventDefault();
  updateErrors({});

  const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/signup', {
      credentials: 'include',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(loginDetails),
  })

  const json = await data.json();
  if (json.errors)
  {
      updateErrors({...errors, 
                  name: json.errors.name, 
                  email: json.errors.email, 
                  password: json.errors.password
      });
  }

  if (json.name)
  {
      updateUserPrefs({name: data.name, isLoggedOn: data.isLoggedOn,
                       privilige: data.privilige, department: data.department})
      updateLoadedData(false)

      history("/");

  }


}

export const postLogin = async (e, loginDetails, history, errors, updateErrors, updateUserPrefs, updateLoadedData) => {
  e.preventDefault();
  updateErrors({});

  const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/login', {
      credentials: 'include',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(loginDetails),
  })

  const json = await data.json();
  if (json.errors)
  {
      updateErrors({...errors, 
                  name: json.errors.name, 
                  email: json.errors.email, 
                  password: json.errors.password
      });
  }

  if (json.name)
  {
      updateUserPrefs({name: data.name, isLoggedOn: data.isLoggedOn,
                       privilige: data.privilige, department: data.department})
      updateLoadedData(false)

      history("/");
  }


}

//Delete a court booking
export const deleteBooking = async (courtBookingID, history, formDel) => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/court-bookings/' + courtBookingID, {
        credentials: 'include',
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    if (json)
    {
        if (formDel === true) {
            history.push("/tennis-book");
          } else if (formDel === false) {
            window.location.reload(false);
          }
    }
  };

export const postBooking = async (e, forms, history) => {
    e.preventDefault();
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/court-bookings', {
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

    history("/");

}

//Delete a court booking
export const putBooking = async (e, forms, history) => {
    e.preventDefault();
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/court-bookings/' + forms._id, {
        credentials: 'include',
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(forms),

    })

    const json = await data.json();

    if (json)
    {
        history("/");
    }
  };