import React from 'react'
import '../Styles/Footer.css'
import { SocialIcon } from 'react-social-icons'
import { Link ,NavLink} from 'react-router-dom'
function Footer() {
  return (
    <div className="footer">
       <div className='leftFoot'>
        
        <div className='footLinks'>
            <h4>Useful Links</h4>
            <div className='links'>
            <Link to="/" className="foot-link">Home</Link>
         <Link to="/about" className="foot-link">About</Link>
         <Link to="/scientificHistory" className="foot-link">Scientific History</Link>
         <Link to="/howItWorks" className="foot-link">How It Works</Link>
         <Link to="/telescopesWeHave" className="foot-link">Telescopes We Have</Link>
         <Link to="/workTimeLine" className="foot-link">Work Time Line</Link>
         <Link to="/resultsAndPublication" className="foot-link">Results and Publications</Link>
         <Link to="/events" className="foot-link">Events</Link>
         <Link to="/team" className="foot-link">Team</Link>
            </div>
        </div>
        <div className='address'>
        <h4>Address</h4>
        <div className='address-box'>
          <div className="add">
          <SocialIcon url="mailto:youremail@example.com" />
        <a  className='a' href="mailto:youremail@example.com">a@88gmail.com</a>
          </div>
          <div className="add">
          <SocialIcon url="https://instagram.com/yourusername" />
          <a  className='a' href="mailto:youremail@example.com">a@88gmail.com</a>
          </div>
          <div className="add">
          <SocialIcon url="mailto:youremail@example.com" />
        <a  className='a' href="mailto:youremail@example.com">a@88gmail.com</a>
          </div>
          <div className="add">
          <SocialIcon url="https://instagram.com/yourusername" />
          <a  className='a' href="mailto:youremail@example.com">a@88gmail.com</a>
          </div>
          
        </div>
        </div>
       </div>

       <div className='rightFoot'>
       
        <div className="form-container">
        <h3>Contact Us</h3>
        <form className="form">
          <label className="label">
            Name:
            <input type="text" name="name" className="input" />
          </label>
          <label className="label">
            Email:
            <input type="email" name="email" className="input" />
          </label>
          <label className="label">
            Message:
            <textarea name="message" rows="4" className="textarea"></textarea>
          </label>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>

       </div>
        
        </div>
  )
}

export default Footer