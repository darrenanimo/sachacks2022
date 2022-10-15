import React from 'react';
import { Link } from 'react-router-dom';
import TopRibbon from '../components/topribbon.jsx'


function Home() {

    return (
        <main>
          <TopRibbon/>
          <div>
            homepage
          </div>
            <div>
            <p><Link to="/dashboard"> <button class="nav-links">Dashboard </button></Link></p>
            </div>
        </main>
      );
    }
    
    export default Home;