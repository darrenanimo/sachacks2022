import React from 'react';
import { Link } from 'react-router-dom';

import TopRibbon from '../components/topribbon.jsx'

function Dashboard() {

    return (
        <main>
            <TopRibbon />
            <div>
                welcome to dashboard
            </div>
            
            <div>
            <p><Link to="/home"> <button class="nav-links">Home </button></Link></p>
            </div>
        </main>
      );
    }
    
    export default Dashboard;