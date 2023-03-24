// GET Request for client data
export const loadUserData = async (updateUserPrefs, redirectPath) => {
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
                          privilige: json.privilige,
                          bookings: json.bookings 
                      })
      }
      else if (json.error === 'jwt')
      {
        // user does not have valid jwt, not logged in, redirect to login
        redirectPath();
      }
      else 
      {
        console.log('Please contact your system administrator.');
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
      updateUserPrefs({name: json.name, isLoggedOn: json.isLoggedOn,
                       privilige: json.privilige, bookings: json.bookings })
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
      updateUserPrefs({name: json.name, isLoggedOn: json.isLoggedOn,
                       privilige: json.privilige, bookings: json.bookings})
      updateLoadedData(false)

      history("/");
  }
}

export const getLogout = async (updateUserPrefs, routeChange) => {
  const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/logout', {
      credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
  })

  const json = await data.json();

  if (json)
  {
    updateUserPrefs({name: "", isLoggedOn: false})
    routeChange();
  }
}

// GET Request for user list
export const getUsers = async (updateState) => {
  const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/users', {
      credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
  })

  const json = await data.json();

  if(json)
    {
      updateState(json)
    }
    else if (json.error === 'jwt')
    {
      // the user does not have a valid jwt, not logged in
      return
    }
    else 
    {
      console.log('Please contact your system administrator.');
    }
}