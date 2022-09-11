import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import Newlisting from './Newlisting'
import Login from './Login';
import Register from './Register';


function NavBar() {
  return (
    <nav className='navbar'>
      <div className="navcontainer">
            <div className="companyname">Happy Stays</div>
            <div class="buttonspace">
              <BrowserRouter>
                <div>
                    <NavLink activeClassName="active" to="/listings"><button className='buttons'><a class="cursor" href="">Add a listing</a></button></NavLink>
                    <NavLink activeClassName="active" to="/register"><button className='buttons'><a class="cursor" href="#">Log in</a></button></NavLink>
                    <NavLink activeClassName="active" to="/login"><button className='buttons'><a class="cursor"  href="">Register</a></button></NavLink>
                </div>
                <Switch>
                  <Route path="/listings" component={Newlisting}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/login" component={Login}/>
                </Switch>
              </BrowserRouter>  
            </div>
      </div> 
    </nav>
  );
}

export default NavBar;