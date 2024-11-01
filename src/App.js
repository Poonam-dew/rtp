import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'

import MyCarousel from './Components/Carousel.js';
import './App.css';
import About from './Pages/About.js';
import Home from './Pages/Home.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
       <Navbar/>
       
       <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>   
                
       </Routes>
       <Footer/>
       
       

       
      
  
    
      
      
     
    </div>
  );
}

export default App;
