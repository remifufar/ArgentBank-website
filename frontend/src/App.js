import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

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
