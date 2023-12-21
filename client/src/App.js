import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './General/Header.js';
import Footer from './General/Footer.js';
import Login from './General/Login.js';
import Signup from './General/Signup.js';
import ForgotPassword from './General/ForgotPassword.js';
import PasswordReset from './General/PasswordReset.js';
import PageNotFound from './General/PageNotFound.js';
import Profile from './General/Profile.js';
import Users from './General/Users.js';
import Tournaments from './Tournaments/Tournaments.js';
import About from './General/About.js';
import Contact from './General/Contact.js';
import Membership from './General/Membership.js';
import Tournament from './Tournaments/Tournament.js';
import CreateTournament from './Tournaments/CreateTournament.js';
import UpdateTournament from './Tournaments/UpdateTournament.js';
import CreateTournamentSeries from './Tournaments/CreateTournamentSeries.js';
import UpdateTournamentSeries from './Tournaments/UpdateTournamentSeries.js';
import TournamentSeries from './Tournaments/TournamentSeries.js';
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
              <Route path="/" element={<About />} />
              <Route path="/tournaments" element={<TournamentSeries/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:id/:token" element={<PasswordReset />} />
              {/* <Route path="/profile/:id" element={<Profile />} /> */}
              {/* <Route path="/users" element={<Users />} /> */}
              {/* <Route path="/membership" element={<Membership />} /> */}
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/tournament/:id" element={<Tournament />} />
              <Route path="/create-tournament/:id" element={<CreateTournament />} />
              <Route path="/update-tournament/:id" element={<UpdateTournament />} />
              <Route path="/create-tournamentseries" element={<CreateTournamentSeries />} />
              <Route path="/update-tournamentseries/:id" element={<UpdateTournamentSeries />} />
              <Route path="/tournament-series/:id" element={<Tournaments />} />
              <Route path="/list-tournaments" element={<ListTournaments />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
