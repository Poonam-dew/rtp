import React from 'react';
import TeamMember from './TeamMember';
import '../Styles/TeamPage.css';

const TeamPage = () => {
    const professor = {
        name: 'Prof. John Doe',
        role: 'Project Supervisor',
        email: 'johndoe@university.edu',
    };

    const teams = [
        {
            title: 'Social Media Team',
            members: [
                { name: 'Alice Smith', role: 'Coordinator', email: 'alice@university.edu' },
                { name: 'Bob Johnson', role: 'Member', email: 'bob@university.edu' },
            ],
        },
        {
            title: 'Content Team',
            members: [
                { name: 'Charlie Brown', role: 'Coordinator', email: 'charlie@university.edu' },
                { name: 'Daisy Miller', role: 'Member', email: 'daisy@university.edu' },
            ],
        },
        {
            title: 'Research Team',
            members: [
                { name: 'Eve Davis', role: 'Coordinator', email: 'eve@university.edu' },
                { name: 'Frank White', role: 'Member', email: 'frank@university.edu' },
            ],
        },
    ];

    return (
        <div className="team-page">
            <h2 className="team-page-title">Project Team</h2>
            
            {/* Professor Section */}
            <div className="team-section">
                <h3 className="team-title">Professor</h3>
                <TeamMember name={professor.name} role={professor.role} email={professor.email} />
            </div>

            {/* Student Teams */}
            {teams.map((team, index) => (
                <div className="team-section" key={index}>
                    <h3 className="team-title">{team.title}</h3>
                    <div className="team-members">
                        {team.members.map((member, idx) => (
                            <TeamMember key={idx} name={member.name} role={member.role} email={member.email} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamPage;

