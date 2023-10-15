import React, { useState } from 'react';
import './App.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from './Home';  
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage'; 
import RegistrationForm from './registrationform';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  return (

    
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <div className="registration-icon" onClick={() => setShowRegistration(true)}>
        <AccountCircleIcon />
      </div>
      {showRegistration && <RegistrationForm closeForm={() => setShowRegistration(false)} />}
    </div>
  );
}

export default App;
