import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth';
import '../App.css';
import NavBar from "./Navbar";
import Home from './Home';
import Register from './Register';
import Login from './Login';
import PostProperty from './PostProperty';
import NewListing from './Newlisting';
import PropertyFetch from './PropertyFetch';
import Footer from "./Footer";
import UserReservations from './UserReservations';

function App() {
  return (
    <AuthProvider>
      <NavBar/>
      <div className='routescontainer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listings' element={<PostProperty />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/new-owner' element={<NewListing />} />
          <Route path='/reserved' element={<UserReservations />} />
        </Routes>
      </div>
      <Footer/>
      
    </AuthProvider>
  );
}

export default App;
