import React from 'react';
import { Route, Routes } from 'react-router-dom'

import '../App.css';
import NavBar from "./Navbar";
import Home from './Home';
import Register from './Register';
import Login from './Login';
import PostProperty from './PostProperty';
import NewListing from './Newlisting';
// import Listings from "./Listings";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar/>
      <div className='routescontainer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listings' element={<PostProperty />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/new-owner' element={<NewListing />} />
        </Routes>
      </div>
      <Footer/>
      
    </>
  );
}

export default App;
