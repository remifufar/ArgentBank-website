import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './pages/Signin/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';

function App()  {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/Dashboard" element={<Dashboard />} />

        </Routes>
     <Footer />
    </Router> 


  );
}

export default App;
