
import '../Styles/TelescopesWeHave.css'
import MyCarousel from '../Components/Carousel.js';
import React, { useState } from 'react';
import radioLogo from '../Assets/radioLogo.png';
import rtpB from '../Assets/rtpB.png';


const Telescopes = [
  {
      Heading: "Feed Horn",
      info: "A pyramidal feed horn capable of detecting the neutral hydrogen (HI) line at 1.42 GHz from the Milky Way galaxy has been designed and implemented. This specialized antenna enables the detection of galactic transits (passing of an object in front of our view of the galaxy), providing crucial data to study the galaxy's structure and motion.",
      description: "The observations help plot the galaxy's rotation curve, contributing to our understanding of its dynamics. ",
      image: rtpB,
      mechanicalH1:"Pyramidal Design",
      mechanicalPara1:"The feedhorn features a pyramidal shape optimized for maximum gain at the targeted frequency. This design enhances the collection of weak HI signals from cosmic sources",
      mechanicalH2:'Construction',
      mechanicalPara2:'Made from Stainless Steel Sheets to reduce weight while maintaining structural integrity, this feedhorn facilitates easy integration into existing telescopic setups.',
      electicalH1:'Signal Amplification',
      electricalH2:'Receiver Integration',
      electricalPara1:'Incorporates a low-noise amplifier (LNA) to boost the weak signals received by the feedhorn, improving detection sensitivity.',
      electricalPara2:'The feedhorn is connected to a Software Defined Radio (SDR) for real-time signal processing and analysis. ',
      achievement:'Successfully detected neutral hydrogen emissions from the Milky Way, contributing to data accumulation for the galaxys rotation curve analysis. ',
      applications:'This feedhorn can be utilized in radio astronomy to study the structure and dynamics of galaxies, particularly their rotation curves and dark matter distribution. ',
      futurePlans:'To further enhance its capabilities by integrating more advanced signal processing algorithms and expanding the frequency range to capture additional celestial phenomena.'
  },
  {
    Heading: "October 6, 2023",
    info: "Description of Navigate Your Career Path event... Started in 2022, the RTP(Radio Telescope Project) at the Indian Institute of Technology in collaboration with PaAC(Physics and Astronomy Club) focuses on providing students with practical experience in radio astronomy. With a 5-meter aperture radio telescope, the project enables students to learn how to detect and analyze radio signals from space.The system has been tested with an Affordable Small Radio Telescope (ASRT) to ensure it meets the necessary standards for educational use. The main goal of the project is to give students hands-on training in astronomy while encouraging curiosity about astrophysics and space exploration.",
    description: "Description of Navigate Your Career Path event... Started in 2022, the RTP(Radio Telescope Project) at the Indian Institute of Technology in collaboration with PaAC(Physics and Astronomy Club) focuses on providing students with practical experience in radio astronomy. With a 5-meter aperture radio telescope, the project enables students to learn how to detect and analyze radio signals from space.The system has been tested with an Affordable Small Radio Telescope (ASRT) to ensure it meets the necessary standards for educational use. The main goal of the project is to give students hands-on training in astronomy while encouraging curiosity about astrophysics and space exploration.",
    image: rtpB,
    mechanicalH1:'',
    mechanicalH2:'',
    mechanicalPara1:'',
    mechanicalPara2:'',
    electicalH1:'',
    electricalH2:'',
    

},
{
  Heading: "October 6, 2023",
  info: "Description of Navigate Your Career Path event... Started in 2022, the RTP(Radio Telescope Project) at the Indian Institute of Technology in collaboration with PaAC(Physics and Astronomy Club) focuses on providing students with practical experience in radio astronomy. With a 5-meter aperture radio telescope, the project enables students to learn how to detect and analyze radio signals from space.The system has been tested with an Affordable Small Radio Telescope (ASRT) to ensure it meets the necessary standards for educational use. The main goal of the project is to give students hands-on training in astronomy while encouraging curiosity about astrophysics and space exploration.",
  description: "Description of Navigate Your Career Path event... Started in 2022, the RTP(Radio Telescope Project) at the Indian Institute of Technology in collaboration with PaAC(Physics and Astronomy Club) focuses on providing students with practical experience in radio astronomy. With a 5-meter aperture radio telescope, the project enables students to learn how to detect and analyze radio signals from space.The system has been tested with an Affordable Small Radio Telescope (ASRT) to ensure it meets the necessary standards for educational use. The main goal of the project is to give students hands-on training in astronomy while encouraging curiosity about astrophysics and space exploration.",
  image: rtpB
}

  
];



const TelescopeWeHave = () => {
  return (
    <div className='TelescopesWeHave'>

      <div className='topTele'>
       <MyCarousel/> 
      </div>
      <div className='bottomTele'>
      <h1> Our Telescopes</h1>
      <div className="TelescopeContainer">
            {Telescopes.map((Telescope, index) => (
                <TelescopeCard key={index} Telescope={Telescope} />
            ))}
        </div>
      </div>    
    </div>
  )
}

const TelescopeCard = ({ Telescope }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
      setIsExpanded(!isExpanded);
  };

  return (
      <div className="Telescope-card">
        <div className='imgLeft'>
         <img src={Telescope.image} alt={Telescope.title} className="tele-image" />
        </div>
          
          <div className="Right-content">
              <h2>{Telescope.Heading}</h2>
              
              <p className="telePara">{Telescope.info}</p>
              {isExpanded && <p className="tele-description">
                
              <div className='readMore'>
              {Telescope.description}

                <h5>Mechanical contributions</h5>
                <p><b>{Telescope.mechanicalH1} : </b>{Telescope.mechanicalPara1}
                  </p>
                  <p><b>{Telescope.mechanicalH2} : </b>{Telescope.mechanicalPara2}
                  </p>

                  <h5>Electrical contributions</h5>
                <p><b>{Telescope.electicalH1} : </b>{Telescope.electricalPara1}
                  </p>
                  <p><b>{Telescope.electricalH2} : </b>{Telescope.electricalPara2}
                  </p>

                  <div className='TeleFuture'>
                    <h5>Achivements</h5>
                    <p>{Telescope.achievement}</p>
                  </div>

                  <div className='TeleFuture'>
                    <h5>Applications</h5>
                    <p>{Telescope.applications}</p>
                  </div>

                  <div className='TeleFuture'>
                    <h5>Future Plans</h5>
                    <p>{Telescope.futurePlans}</p>
                  </div>
 

              </div>
              
              
              
              </p>}
          </div>
          <div className="toggle-button-Tele" onClick={toggleDetails}>
              <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
          </div>
      </div>
  );
};

export default TelescopeWeHave