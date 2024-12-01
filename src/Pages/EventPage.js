import React, { useState } from 'react';
import '../Styles/EventPage.css';
import radioLogo from '../Assets/radioLogo.png';
import rtpB from '../Assets/rtpB.png';

const events = [
    {
        date: "October 6, 2023",
        title: "Navigate Your Career Path",
        description: "Description of Navigate Your Career Path event... Started in 2022, the RTP(Radio Telescope Project) at the Indian Institute of Technology in collaboration with PaAC(Physics and Astronomy Club) focuses on providing students with practical experience in radio astronomy. With a 5-meter aperture radio telescope, the project enables students to learn how to detect and analyze radio signals from space.The system has been tested with an Affordable Small Radio Telescope (ASRT) to ensure it meets the necessary standards for educational use. The main goal of the project is to give students hands-on training in astronomy while encouraging curiosity about astrophysics and space exploration.",
        image: radioLogo
    },
    {
        date: "October 1, 2023",
        title: "Swachhta hi Sewa campaign",
        description: "IIT Roorkee with the help of team UBA in association with NSS and NCC organised awareness campaigns in its adopted Villages Meerpur and Puranpur on 1st October, 2023.",
        image: rtpB
    },
    {
        date: "August 24, 2023 - September 02, 2023",
        title: "Sociothon",
        description: "Results: Winner - SocioMonks",
        image: rtpB
    }
];

const EventPage = () => {
    return (
        <div className="event-page">
            {events.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
    );
};

const EventCard = ({ event }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
                <p className="event-date">{event.date}</p>
                <h3 className="event-title">{event.title}</h3>
                {isExpanded && <p className="event-description">{event.description}</p>}
            </div>
            <button className="toggle-button" onClick={toggleDetails}>
                <span>{isExpanded ? '▲' : '▼'}</span>
            </button>
        </div>
    );
};

export default EventPage;
