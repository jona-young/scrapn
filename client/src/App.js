import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './General/Header.js';
import Footer from './General/Footer.js';
import CourtBookings from './CourtBookings/CourtBookings.js'
import BookForm from './CourtBookings/BookForm.js'
import "./index.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<CourtBookings/>} />
            <Route path="/tennis-form" element={<BookForm/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
</div>
  );
}

export default App;
