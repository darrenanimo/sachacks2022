import React from 'react';
import '../css/Resources.css';
import { Link } from 'react-router-dom';
import TopRibbon from '../components/topribbon.jsx'

import background from "../images/website-background.png"

function Resources() {

    return (
        <main>
            <TopRibbon />
            <div style={{ backgroundImage: `url(${background})`, height: 1000}}>
            
                <div id="resources">
                    <p class ="hotline">Hotline</p>
                    <p class="schedule">
                        <h1 class="header">Schedule an Appointment Now</h1>
                        <h2 class ="subheader">Meet with a licensed professional in minutes</h2>
                        <p2 class="pros">
                            <h1 class="name">Dr. Alexandra</h1>
                            <h2 class="role">Therapist/Counselor</h2>
                            <button class="appointment">Schedule an Appointment</button>
                        </p2>
                        <br/>
                        <p2 class="pros">
                            <h1 class="name">Dr. Darren</h1>
                            <h2 class="role">Therapist/Counselor</h2>
                            <button class="appointment">Schedule an Appointment</button>
                        </p2>
                    </p>
                </div>
            </div>
        </main>
      );
    }
    
    export default Resources;