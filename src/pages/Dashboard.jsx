import React from 'react';
import '../css/Dashboard.css';
import { Link } from 'react-router-dom';
import TopRibbon from '../components/topribbon.jsx'
import StarRating from '../components/StarRating';

import background from "../images/website-background.png"

function Dashboard() {

    return (
        <main>
            <TopRibbon />
            <div style={{ backgroundImage: `url(${background})`, height: 1000}}>
            
            <br/>

                <div id="dash">
                    <p class="howdoing">
                        How have you been doing?
                    <StarRating/>
                    </p>
                </div>
                <div>
                    <p class="journal">
                        Daily Journal Question: What's Your High Point of the Day?
                        <input class = "input">
                        </input> 
                    </p>
                </div>
                
            </div>
        </main>
      );
    }
    
    export default Dashboard;