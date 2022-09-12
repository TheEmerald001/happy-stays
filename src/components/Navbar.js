import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Newlisting from './Newlisting'
import Login from './Login';
import Register from './Register';
import Home from './Home';


function NavBar() {
  return (
    <nav className='navbar'>
      <div className="navcontainer">
          <div className="companyname"><Link className='linkings' to='/'>Happy Stays</Link></div>
          <div className="buttonspace">
            <div className='navbuttons'>
              <ul>
                <li><Link to='/listings'><button className='buttons'>List</button></Link></li>
                <li><Link to='/login'><button className='buttons'>Login</button></Link></li>
                <li><Link to='/register'><button className='buttons'>Register</button></Link></li>
              </ul>
            </div>
          </div>
      </div> 
    </nav>
  );
}

export default NavBar;