import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UserPersona = ({problem}) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '45vh',
  };

  const textContainerStyle = {
    maxWidth: '600px',
  };

  return (
    <Box sx={containerStyle}>
      <div style={textContainerStyle}>
        <Typography variant="h4" gutterBottom style={{fontFamily: 'Montserrat, sans-serif'}}>
          User Persona
        </Typography>
        <Typography variant="body1" align="center" style={{fontFamily: 'Montserrat, sans-serif'}}>
          For us, the ideal user persona is a farmer that has seen their crops (and revenues) numbers decrease drastically in the last years. They want to keep their business alive and have heard other farmers are using "even" satellite data to look into the crops. They want to give it a try.
        </Typography>
      </div>
    </Box>
  );
};

export default UserPersona;
