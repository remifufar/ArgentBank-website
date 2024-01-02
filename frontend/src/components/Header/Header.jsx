import React, { useState, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import argentBankLogo from '../../assets/argentBankLogo.webp';
import { useDispatch, useSelector } from 'react-redux';
import { userService } from '../../api/api';
import { setUser } from "../../redux/reducer/userreducer";
import { FaUserCircle } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.profile.userName);
  const location = useLocation();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      userService()(token)
        .then((data) => {
          setIsLoggedIn(true);
          dispatch(setUser(data.body));
        })
    }
  }, [dispatch, location]);
  

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </NavLink>
      <div className='nav-logo'>
        {isLoggedIn ? (
          <>
        <NavLink 
          to="/Dashboard"
          className="main-nav-item">
          <FaUserCircle className='iconCo' />
          {userName}
        </NavLink>
        <NavLink
        to="/sign-in" 
        onClick={handleSignOut}>
          <PiSignOutBold className='iconCo'/>
        Sign Out
        </NavLink>
        </>
        ) : (
          <NavLink 
            className="main-nav-item" 
            to="/sign-in"
            >
            <FaUserCircle className='iconCo'/>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;