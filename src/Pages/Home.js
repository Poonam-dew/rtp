import React from 'react'
import '../Styles/Home.css'
import Tile from '../Components/Tile.js'
const Home = () => {
  return (
    <div className="Home">
        <div className='homeContainer'>
{/* about */}

<div  className="homeContentBox">
        <h1> What is RTP ?</h1>
        <p className='homePara'>
        RTP, short for Radio Telescope Project, is a one-of-its-kind initiative undertaken by students at IIT Roorkee to promote scientific research and developments in the field of radio astronomy, focusing on research by students at educational institutions.</p>
        <p className='homePara'>
Started during the pandemic, the team has come a long way to build working models for the actual 5-metre radio telescope from scratch. The system has been tested with an Affordable Small Radio Telescope (ASRT) to ensure it meets the necessary standards for educational use. 
        </p>
    </div>

       {/* our vission */}
       <div  className="homeContentBox">
        <h1> Our Vision</h1>
        <p className='homePara'>
        To provide a platform for students to explore radio astronomy, develop practical skills, and fuel their passion for astrophysics through innovative learning and collaboration.

        </p>
    </div>
       {/* our mission */}
       <div  className="homeContentBox">
        <h1>Our Mission</h1>
        <p className='homePara'>
        The primary purpose of this project is to probe the 21-cm Hydrogen line coming from our very own Milky Way Galaxy.

        </p>
    </div>



        </div>
       
       
       
        
       
    </div>
  )
}

export default Home