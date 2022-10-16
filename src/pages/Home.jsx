import React from 'react';
import "../css/Home.css"
import { Link } from 'react-router-dom';
import TopRibbonHome from '../components/topribbonhome.jsx'


import background from "../images/website-background.png"


function Home() {

    return (
        <main>
          <TopRibbonHome/>
            <div style={{ backgroundImage: `url(${background})`, height: 1000}}>
              <div class = "welcome">
                Welcome to Lightly
              </div>
              <div class = "mission">
                OUR MISSION
              </div>
            </div>
        </main>
      );
    }
    
    export default Home;