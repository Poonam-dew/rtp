import React, { useState } from 'react';
import '../Styles/EventPage.css';
import radioLogo from '../Assets/radioLogo.png';

const events = [
    {
        date: "October 6, 2023",
        title: "Navigate Your Career Path",
        description: "Description of Navigate Your Career Path event...",
        image: {radioLogo}
    },
    {
        date: "October 1, 2023",
        title: "Swachhta hi Sewa campaign",
        description: "IIT Roorkee with the help of team UBA in association with NSS and NCC organised awareness campaigns in its adopted Villages Meerpur and Puranpur on 1st October, 2023.",
        image: "path/to/swachhta-campaign-image.jpg"
    },
    {
        date: "August 24, 2023 - September 02, 2023",
        title: "Sociothon",
        description: "Results: Winner - SocioMonks",
        image: "path/to/sociothon-image.jpg"
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
