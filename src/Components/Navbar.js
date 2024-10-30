import React, { useState } from 'react';
import '../Styles/Navbar.css'
import radioLogo from '../Assets/radioLogo.png';
import { Link ,NavLink} from 'react-router-dom'
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="left-section">
       <img  className="logo" src={radioLogo}/>
        <h1 className="navbar-heading">Radio Astronomy</h1>
      </div>

      <div className={isMobile ? "right-section-mobile" : "right-section"}>
      {/* <NavLink to="/" className="nav-link">Home</NavLink>
         <NavLink to="/menu" className="nav-link">Menu</NavLink> */}
         <Link to="/" className="nav-link">Home</Link>
         <Link to="/about" className="nav-link">About</Link>
         <Link to="/scientificHistory" className="nav-link">Scientific History</Link>
         <Link to="/howItWorks" className="nav-link">How It Works</Link>
         <Link to="/telescopesWeHave" className="nav-link">Telescopes We Have</Link>
         <Link to="/workTimeLine" className="nav-link">Work Time Line</Link>
         <Link to="/resultsAndPublication" className="nav-link">Results and Publications</Link>
         <Link to="/events" className="nav-link">Events</Link>
         <Link to="/team" className="nav-link">Team</Link>


         {/* <Link to="/contact" className="nav-link">Contact</NavLink> */}
        
      </div>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
