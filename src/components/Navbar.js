import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from './auth';

//This Renders the Navbar with some links to the right, accessible via routes
function NavBar() {
  const auth = useAuth()
  return (
    <nav className='navbar'>      
      <Link className='companyname' to='/'>Happy Stays</Link>   
      <ul>        
        <li><Link to='/register'><button className='buttons'>Register</button></Link></li>
        { !auth.user && (<li><Link to='/login'><button className='buttons'>Login</button></Link></li>) }
        <li><Link to='/new-owner'><button className='buttons'>Owners Account</button></Link></li>
        <li><Link to='/listings'><button className='buttons'>Add a Listing</button></Link></li>
      </ul>             
    </nav>
  );
}

export default NavBar;