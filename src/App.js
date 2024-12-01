import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'

import MyCarousel from './Components/Carousel.js';
import './App.css';
import About from './Pages/About.js';
import Home from './Pages/Home.js';
import TeamPage from './Pages/TeamPage.js';
import EventPage from './Pages/EventPage.js';
import StarryBackground from './Pages/StarryBackground.js';
import ResultsPublications from './Pages/ResultsPublications.js';
import ScientificHistory from './Pages/ScientificHistory.js';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TelescopeWeHave from './Pages/TelescopesWeHave.js';

function App() {
  return (
    <div className="App">
      
       <Navbar/>
       <StarryBackground/>
       
       <Routes>
       <Route path="/" element={<Home/>}/>
        
        <Route path="/telescopesWeHave" element={<TelescopeWeHave/>}/>   
        <Route path="/about" element={<About/>}/>   
        <Route path="/team" element={<TeamPage/>}/>   
        <Route path="/events" element={<EventPage/>}/>
        <Route path="/resultsAndPublication" element={<ResultsPublications/>}/>
                
       </Routes>
       <Footer/>
       
       

       
      
  
    
      
      
     
    </div>
  );
}

export default App;
