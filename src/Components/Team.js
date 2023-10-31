import React from 'react';
import PersonCard from './PersonCard';

const Team = ({ peopleData }) => {
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {peopleData.map((person, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <PersonCard person={person} />
        </div>
      ))}
    </div>
  );
};

export default Team;
