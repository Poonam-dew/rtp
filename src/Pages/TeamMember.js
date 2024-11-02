import React from 'react';
import '../Styles/TeamMember.css';
import radioLogo from '../Assets/radioLogo.png';


const TeamMember = ({ name, role, email }) => {
    return (
        <div className="team-member">
            <img className="team-member-image" src={radioLogo} alt={name} />
            <h4 className="team-member-name">{name}</h4>
            <p className="team-member-role">{role}</p>
            <p className="team-member-email">Email: <a href={`mailto:${email}`}>{email}</a></p>
        </div>
    );
};

export default TeamMember;
