import React from 'react';
import { BrowserRouter, Switch, Route, Navlink } from 'react-router-dom'

import '../App.css';
import Login from './Login';
import Register from './Register';
import NavBar from "./Navbar";
import Filter from "./Filter";
import Footer from "./Footer";
import Listings from "./Listings";

function App() {
  return (
    <>
      <NavBar/>
      <Filter/>
      {/* <Listings/>
      <Footer/> */}
    </>
  );
}

export default App;
