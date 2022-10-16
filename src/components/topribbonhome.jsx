import React from 'react';
import { Link } from 'react-router-dom';
import './topribbon.css'
import logo from "../images/lightly-logo.png";

function TopRibbonHome() {
    return (
      <div id="topribbon">
        
          <div class="navleft">
          <img src={logo} id="logo"/>
            
          </div>
          <div class = "navhome">
            <p><Link to="/dashboard"> <button class="nav-links">Sign In </button> </Link></p>
          </div>
      </div>
    );
  }
  
  export default TopRibbonHome;