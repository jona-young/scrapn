import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './General/Header.js';
import Footer from './General/Footer.js';
import CourtBookings from './CourtBookings/CourtBookings.js';
import UpdateBooking from './CourtBookings/UpdateBooking.js';
import CreateBooking from './CourtBookings/CreateBooking.js';
import Login from './General/Login.js';
import Signup from './General/Signup.js';
import ForgotPassword from './General/ForgotPassword.js';
import PasswordReset from './General/PasswordReset.js';
import Profile from './General/Profile.js';
import Users from './General/Users.js';
import Home from './General/Home.js';
import Tournament from './Tournaments/Tournament.js';
import CreateTournament from './Tournaments/CreateTournament.js';
import UpdateTournament from './Tournaments/UpdateTournament.js';
import ListTournaments from './Tournaments/ListTournaments.js';
import { UserContext } from './functions/UserContext.js';
import { DataContext } from './functions/DataContext.js';
import { loadUserData } from './functions/userAPI.js';
import "./index.css";

function App() {
  const [ userPrefs, setUserPrefs ] = useState(() => {
    const noUser = {
      name: "",
      nameID: "",
      isLoggedOn: false,
      privilige: 0,
      bookings: []
    }
    const loggedInUser = {
      name: JSON.parse(localStorage.getItem("BMS-name")),
      nameID: JSON.parse(localStorage.getItem("BMS-nameID")),

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
  }, [])

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
              <Route path="/forgot-password/" element={<ForgotPassword />} />
              <Route path="/reset-password/:id/:token" element={<PasswordReset />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/users" element={<Users />} />
              <Route path="/tournament/:id" element={<Tournament />} />
              <Route path="/create-tournament" element={<CreateTournament />} />
              <Route path="/update-tournament/:id" element={<UpdateTournament />} />
              <Route path="/list-tournaments" element={<ListTournaments />} />
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
