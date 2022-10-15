import React from 'react';
//import '../css/Dashboard.css';
import { Link } from 'react-router-dom';
import TopRibbon from '../components/topribbon.jsx'

import background from "../images/website-background.png"

function Calendar() {

    return (
        <main>
            <TopRibbon />
            <div style={{ backgroundImage: `url(${background})`, height: 1000}}>
            
                <div>
                    <p>Calendar</p>
                </div>
                
            </div>
        </main>
      );
    }
    
    export default Calendar;