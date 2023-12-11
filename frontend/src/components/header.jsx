import React, { useState, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import argentBankLogo from '../assets/argentBankLogo.webp';


function Header() {
 

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </NavLink>
      <div>
         
          <NavLink 
            className="main-nav-item" 
            to="/sign-in"
            >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        
      </div>
    </nav>
  );
}

export default Header;