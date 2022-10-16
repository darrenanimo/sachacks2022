import React from 'react';
import { Link } from 'react-router-dom';
import './topribbon.css'

function TopRibbonHome() {
    return (
      <div id="topribbon">
        
          <div class="navleft">
            <Link to="/dashboard"><button class="logo">lightly</button></Link>
            
          </div>
          <div class = "navright">
          <p><Link to="/resources"> <button class="nav-links">Resources </button></Link></p>
            <p><Link to="/calendar"> <button class="nav-links">Personal Planning </button></Link></p>
            <p><Link to="/dashboard"> <button class="nav-links">Sign In </button> </Link></p>
          </div>
      </div>
    );
  }
  
  export default TopRibbonHome;