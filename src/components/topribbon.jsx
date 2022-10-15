import React from 'react';
import { Link } from 'react-router-dom';
import './topribbon.css'

function TopRibbon() {
    return (
      <div id="topribbon">
        
          <div class="nav">
            <Link to="/dashboard"><button class="logo">Lightly</button></Link>
            <p><Link to="/home"> <button class="nav-links">Resources </button></Link></p>
            <p><Link to="/home"> <button class="nav-links">Personal Planning </button></Link></p>
            <p><Link to="/home"> <button class="nav-links">Sign Out </button> </Link></p>
          </div>
      </div>
    );
  }
  
  export default TopRibbon;