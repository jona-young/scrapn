import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './General/Header.js';
import Footer from './General/Footer.js';
import CourtBookings from './CourtBookings/CourtBookings.js';
import BookForm from './CourtBookings/BookForm.js';
import Login from './General/Login.js';
import Signup from './General/Signup.js';
import { UserContext } from './functions/UserContext.js';
import { DataContext } from './functions/DataContext.js';
import { initialUserLoad } from './functions/userAPI.js';
import "./index.css";

function App() {
  const [ userPrefs, setUserPrefs ] = useState({
    name: "",
    isLoggedOn: false,
    privilige: 0,
  })

  const updateUserPrefs = (value) => {
    setUserPrefs(value);
  }

  const [ loadedData, setLoadedData ] = useState(true);

  const updateLoadedData = (value) => {
    setLoadedData(value);
  }

  useEffect(() => {
    initialUserLoad(updateUserPrefs);
  }, [])
  
  return (
    <div className="App">
      <UserContext.Provider value={{userPrefs, updateUserPrefs}}>
      <DataContext.Provider value={{loadedData, updateLoadedData}}>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<CourtBookings/>} />
              <Route path="/tennis-form" element={<BookForm/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
      </UserContext.Provider>
</div>
  );
}

export default App;
