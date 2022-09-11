import React from 'react';
// import { BrowserRouter, Switch, Route, Navlink } from 'react-router-dom'

import '../App.css';
import NavBar from "./Navbar";
import Filter from "./Filter";
import Home from './Home';
import Register from './Register';
import Login from './Login';
import PostProperty from './PostProperty';
import NewListing from './Newlisting';
// import Listings from "./Listings";
// import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar/>
      <Filter/>
      <Home/>      
      {/* <Listings/> */}
      <Register/>
      <Login/>
      <NewListing/>
      <PostProperty/>
    </>
  );
}

export default App;
