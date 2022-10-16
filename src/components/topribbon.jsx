import React from 'react';
import { Link } from 'react-router-dom';
import './topribbon.css'
import logo from "../images/lightly-logo.png";

function TopRibbon() {
    return (
      <div id="topribbon">
        
          <div class="navleft">
            <Link to="/dashboard"><img src={logo} id="logo"/></Link>
            
          </div>
          <div class = "navright">
          <p><Link to="/resources"> <button class="nav-links">Resources </button></Link></p>
            <p><Link to="/calendar"> <button class="nav-links">Personal Planning </button></Link></p>
            <p><Link to="/home"> <button class="nav-links">Sign Out </button> </Link></p>
          </div>
      </div>
    );
  }
  
  export default TopRibbon;