import React from 'react';
//import '../css/Dashboard.css';
import { Link } from 'react-router-dom';
import TopRibbon from '../components/topribbon.jsx'

import background from "../images/website-background.png"

function Resources() {

    return (
        <main>
            <TopRibbon />
            <div style={{ backgroundImage: `url(${background})`, height: 1000}}>
            
                <div>
                    <p>Hotline</p>
                </div>
                <div>
                    <p>Talk to Someone Now</p>
                </div>
            </div>
        </main>
      );
    }
    
    export default Resources;