// GET Request for client data
export const loadUserData = async () => {
    const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/validate', {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    if(json.user)
      {
        setLocalStorage([["BMS-name", json.user], 
                        ["BMS-nameID", json._id], 
                        ["BMS-isLoggedOn", json.isLoggedOn], 
                        ["BMS-privilige", json.privilige], 
                        ["BMS-bookings", json.bookings]
                        ])
      }
      else if (json.error === 'jwt')
      {
        // user does not have valid jwt, not logged in, redirect to login
        setLocalStorage([["BMS-name", ""], 
                          ["BMS-nameID", ""], 
                          ["BMS-isLoggedOn", false], 
                          ["BMS-privilige", 0], 
                          ["BMS-bookings", []]
                        ])
      }
      else 
      {
        console.log('Please contact your system administrator.');
      }
}

// GET Request for client data
export const validateUser = async (redirectPath) => {
  const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/validate', {
      credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
  })

  const json = await data.json();

  if(json.user)
    {
      // user is validated by backend
      setLocalStorage([["BMS-name", json.user], 
      ["BMS-nameID", json._id], 
      ["BMS-isLoggedOn", json.isLoggedOn], 
      ["BMS-privilige", json.privilige], 
      ["BMS-bookings", json.bookings]
      ])
      return 1;
    }
    else if (json.error === 'jwt')
    {
      // user does not have valid jwt, not logged in, redirect to login
      setLocalStorage([["BMS-name", ""], 
                        ["BMS-nameID", ""], 
                        ["BMS-isLoggedOn", false], 
                        ["BMS-privilige", 0], 
                        ["BMS-bookings", []]
                      ])
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
      updateUserPrefs({name: json.name, nameID: json._id, isLoggedOn: json.isLoggedOn,
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
      updateUserPrefs({name: json.name, nameID: json._id, isLoggedOn: json.isLoggedOn,
                       privilige: json.privilige, bookings: json.bookings})
                       
      updateLoadedData(false)

      history("/");
  }
}

export const getLogout = async (routeChange, updateState) => {
  const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/logout', {
      credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
  })

  const json = await data.json();

  if (json)
  {
    setLocalStorage([["BMS-name", ""], 
                      ["BMS-nameID", ""], 
                      ["BMS-isLoggedOn", false], 
                      ["BMS-privilige", 0], 
                      ["BMS-bookings", []]
                    ])

    updateState(false);
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


//GET SINGLE court booking
export const getUser = async (id, setUser) => {
  const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/user/' + id, {
      credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
  })

  let json = await data.json();

  setUser(json);
};

//Updates a user profile
export const putUser = async (e, forms, history) => {
  e.preventDefault();

  const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/user/' + forms._id, {
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

  history("/");

};

const setLocalStorage = (items) => {
  for (let i = 0; i < items.length; i++)
  {
    localStorage.setItem(items[i][0], JSON.stringify(items[i][1]))
  }
}

export const postForgotPassword = async (e, email, updateResponse, history) => {
  e.preventDefault();
  updateResponse({});

  console.log(email)
  const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/forgot-password', {
      credentials: 'include',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(email),
  })

  const json = await data.json();

  if (json.response)
  {
    // this will be the email error that it is not in the database
      updateResponse(response => ({...response, 
                  email: json.response.email, 
      }));
  }

  if (json.result)
  {
    // this will be 
    history("/");
  }
}

//Get verification on password reset 
export const getPasswordReset = async (id, token, updateState) => {
  const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/forgot-password/' + id + "/" + token, {
    credentials: 'include',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
})

let json = await data.json();

updateState(json);
}

export const postPasswordReset = async (e, form, updateErrors, history) => {
  e.preventDefault();
  updateErrors({});

  const data = await fetch(process.env.REACT_APP_DEVAPI + '/api/reset-password', {
      credentials: 'include',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
  })

  const json = await data.json();

  if (json.errors)
  {
    // this will be the email error that it is not in the database
      updateErrors(errors => ({...errors, 
                  password: json.errors.password, 
      }));
  }

  if (json.result)
  {
    // this will be 
    console.log(json.result)
    history("/");
  }
}