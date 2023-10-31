import React from 'react';
import PersonCard from './PersonCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Team = ({ peopleData }) => {

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  };
  const wrapperStyle = {
  }

  return (
    <Box sx={ wrapperStyle }>
      <Typography variant="h4" gutterBottom style={{fontFamily: 'Montserrat, sans-serif'}}>
          The team
      </Typography>
      <div style = {containerStyle}>
      {peopleData.map((person, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <PersonCard person={person} />
        </div>
      ))}
      </div>
    </Box>
  );
};

export default Team;
