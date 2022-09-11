import React from 'react';
import { BrowserRouter, Switch, Route, Navlink } from 'react-router-dom'

import '../App.css';
import NavBar from "./Navbar";
import Filter from "./Filter";
import Home from "./Home";
import Listings from "./Listings";
import Footer from "./Footer";

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
