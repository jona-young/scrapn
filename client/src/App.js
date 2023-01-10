import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourtBookings from './CourtBookings/CourtBookings.js'
import BookForm from './CourtBookings/BookForm.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<CourtBookings/>} />
            <Route path="/tennis-form" element={<BookForm/>} />

          </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;
