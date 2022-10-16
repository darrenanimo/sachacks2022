import React from 'react';
import '../css/Resources.css';
import { Link } from 'react-router-dom';
import TopRibbon from '../components/topribbon.jsx'

import background from "../images/website-background.png"
import person1 from "../images/lightly-person1.png"
import person2 from "../images/lightly-person2.png"
import person3 from "../images/lightly-person3.png"

function Resources() {

    return (
        <main>
            <TopRibbon />
            <div style={{ backgroundImage: `url(${background})`, height: 1000}}>
            
                <div id="resources">
                    <p class ="hotline">Hotline
                    <h2 class ="subheader">If you feel you need immediate help or advice, or simply want to talk to someone immediately, please utilize the California Warm Peer Line. Call 855-845-7415.</h2>
                    </p>
                    <p class="schedule">
                        <h1 class="header">Schedule an Appointment Now</h1>
                        <h2 class ="subheader">Meet with a licensed professional in minutes</h2>
                        <p2 class="pros">
                            <img src={person1} id="person1"/>
                            <h1 class="name">Dr. Alexandra</h1>
                            <h2 class="role">Therapist/Counselor</h2>
                            <button class="appoint">Schedule an Appointment</button>
                        </p2>
                        <p2 class="pros">
                            <img src={person2} id="person2"/>
                            <h1 class="name">Dr. Darren</h1>
                            <h2 class="role">Therapist/Counselor</h2>
                            <button class="appoint">Schedule an Appointment</button>
                        </p2>
                        <p3 class="pros">
                            <img src={person3} id="person3"/>
                            <h1 class="name">Dr. Sejal</h1>
                            <h2 class="role">Therapist/Counselor</h2>
                            <button class="appoint">Schedule an Appointment</button>
                        </p3>
                    </p>
                </div>
            </div>
        </main>
      );
    }
    
    export default Resources;