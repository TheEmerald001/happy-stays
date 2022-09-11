import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import Newlisting from './Newlisting'
import Login from './Login';
import Register from './Register';
import Home from './Home';


function NavBar() {
  return (
    <nav className='navbar'>
      <div className="navcontainer">
            <div className="companyname">Happy Stays</div>
            <div className="buttonspace">
              <BrowserRouter>
                <div>
                    <NavLink to="/listings"><button className='buttons'>Add a listing</button></NavLink>
                    <NavLink to="/register"><button className='buttons'>Log in</button></NavLink>
                    <NavLink to="/login"><button className='buttons'>Register</button></NavLink>
                </div>
                <div>
                <Routes>
                  <Route path="/listings" element={Newlisting}/>
                  <Route path="/register" element={Register}/>
                  <Route path="/login" element={Login}/>
                </Routes>
                </div>
              </BrowserRouter>  
            </div>
      </div> 
    </nav>
  );
}

export default NavBar;