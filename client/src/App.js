import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './General/Header.js';
import Footer from './General/Footer.js';
import CourtBookings from './CourtBookings/CourtBookings.js';
import UpdateBooking from './CourtBookings/UpdateBooking.js';
import CreateBooking from './CourtBookings/CreateBooking.js';
import Login from './General/Login.js';
import Signup from './General/Signup.js';
import Home from './General/Home.js';
import { UserContext } from './functions/UserContext.js';
import { DataContext } from './functions/DataContext.js';
import { loadUserData } from './functions/userAPI.js';
import "./index.css";

function App() {
  const [ userPrefs, setUserPrefs ] = useState(() => {
    const noUser = {
      name: "",
      isLoggedOn: false,
      privilige: 0,
      bookings: []
    }
    const loggedInUser = {
      name: JSON.parse(localStorage.getItem("BMS-name")),
      isLoggedOn: JSON.parse(localStorage.getItem("BMS-isLoggedOn")),
      privilige: JSON.parse(localStorage.getItem("BMS-privilige")),
      bookings: JSON.parse(localStorage.getItem("BMS-bookings")),
    }

    return loggedInUser || noUser;
  })

  const updateUserPrefs = (value) => {
    setUserPrefs(value);
  }

  const [ loadedData, setLoadedData ] = useState(true);

  const updateLoadedData = (value) => {
    setLoadedData(value);
  }
  
  useState(() => {
    loadUserData();
  }, [userPrefs])

  return (
    <div className="App">
      <UserContext.Provider value={{userPrefs, updateUserPrefs}}>
      <DataContext.Provider value={{loadedData, updateLoadedData}}>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/court-bookings" element={<CourtBookings/>} />
              <Route path="/update-court/:id" element={<UpdateBooking/>} />
              <Route path="/create-court/:date/:time/:court" element={<CreateBooking/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
      </UserContext.Provider>
</div>
  );
}

export default App;
