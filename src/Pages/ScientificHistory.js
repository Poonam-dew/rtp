import React from "react";
import "../Styles/ScientificHistory.css";

const milestones = [
  {
    year: "1931",
    title: "Discovery of Cosmic Radio Waves",
    description:
      "Karl Jansky detected radio waves originating from the center of the Milky Way, marking the beginning of radio astronomy.",
  },
  {
    year: "1946",
    title: "Interferometry Technique Developed",
    description:
      "Martin Ryle and his team developed the radio interferometry technique, enabling more precise observations.",
  },
  {
    year: "1964",
    title: "Cosmic Microwave Background (CMB) Radiation Discovered",
    description:
      "Arno Penzias and Robert Wilson accidentally discovered CMB, supporting the Big Bang theory.",
  },
  {
    year: "2003",
    title: "Square Kilometre Array (SKA) Project Launched",
    description:
      "The SKA project began, aiming to build the world's largest radio telescope.",
  },
];

const ScientificHistory = () => {
  return (
    <div className="scientific-history">
      <h1 className="title">Scientific History of Radio Telescopes</h1>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="year">{milestone.year}</div>
            <div className="content">
              <h2 className="milestone-title">{milestone.title}</h2>
              <p className="description">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScientificHistory;
