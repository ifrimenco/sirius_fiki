import React from 'react';
import PersonCard from './PersonCard';

const WikiEntry1 = ({ peopleData }) => {
  
  return (
    <div>
    {peopleData.map((person, index) => (
        <PersonCard
          person={person}
        />
      ))}
    </div>
  );
};

export default WikiEntry1;