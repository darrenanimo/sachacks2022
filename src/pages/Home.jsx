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
              <div class = "mission-statement">
              With rising levels of stress in both children and adults, the need for mental health resources and help become more pressing everyday. However, especially in areas like Davis with high student populations, the demand for these services has started to outpace the rate at which these services can be offered. At Lightly, we hope to bridge this gap by providing a way for those in need of help to self-reflect and practice mindfulness, reach out to professionals for aid and advice, as well as track their mental health status. Whether through daily journaling and check-ins, or communication with our mental health professionals, we aim to lighten up people’s days to help them strive for a brighter future!
              </div>
            </div>
        </main>
      );
    }
    
    export default Home;