import React from 'react';
//import '../css/Dashboard.css';
import { Link } from 'react-router-dom';
import TopRibbon from '../components/topribbon.jsx'

import background from "../images/website-background.png"

function Dashboard() {

    return (
        <main>
            <TopRibbon />
            <div style={{ backgroundImage: `url(${background})`, height: 1000}}>
            
                <div>
                    <p>How have you been doing?</p>
                    <p>
                        What is 
                    </p>
                </div>
                
            </div>
        </main>
      );
    }
    
    export default Dashboard;