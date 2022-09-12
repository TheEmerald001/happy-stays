import React from 'react';
import { Link } from 'react-router-dom'

//This Renders the Navbar with some links to the right, accessible via routes
function NavBar() {
  return (
    <nav className='navbar'>      
      <Link className='companyname' to='/'>Happy Stays</Link>   
      <ul>
        <li><Link to='/listings'><button className='buttons'>Add a Listing</button></Link></li>
        <li><Link to='/login'><button className='buttons'>Login</button></Link></li>
        <li><Link to='/register'><button className='buttons'>Register</button></Link></li>
      </ul>             
    </nav>
  );
}

export default NavBar;