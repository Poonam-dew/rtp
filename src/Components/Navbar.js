import React, { useState } from 'react';
import '../Styles/Navbar.css'
import radioLogo from '../Assets/radioLogo.png';
import { Link ,NavLink} from 'react-router-dom'
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <n className="navbar">
      <div className="left-section">
       <img  className="logo" src={radioLogo}/>
        <h1 className="navbar-heading">Radio Astronomy</h1>
      </div>

      <div className={isMobile ? "right-section-mobile" : "right-section"}>
      {/* <NavLink to="/" className="n-link">Home</NavLink>
         <NavLink to="/menu" className="n-link">Menu</NavLink> */}
         <NavLink to="/" className="n-link "  >Home</NavLink>
         <NavLink to="/about" className="n-link" >About</NavLink>
         <NavLink to="/scientificHistory" className="n-link" >Scientific History</NavLink>
         <NavLink to="/howItWorks" className="n-link" >How It Works</NavLink>
         <NavLink to="/telescopesWeHave" className="n-link" >Telescopes We Have</NavLink>
         <NavLink to="/workTimeLine" className="n-link" >Work Time Line</NavLink>
         <NavLink to="/resultsAndPublication" className="n-link" >Results and Publications</NavLink>
         <NavLink to="/events" className="n-link" >Events</NavLink>
         <NavLink to="/team" className="n-link" >Team</NavLink>


         {/* <NavLink to="/contact" className="n-link">Contact</NavLink> */}
        
      </div>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </n>
  );
};

export default Navbar;
