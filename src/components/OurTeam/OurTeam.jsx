import React from 'react';
import './OurTeam.css';
import teamMembers from './../../Dummy-data/teamMembers' 

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="our-team-header">
        <h1>Our Excellent Team</h1>
      </div>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
              <div className="card-back">
                <p>{member.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
