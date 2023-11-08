import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Advantage = ({ advantage }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '45vh',
  };

  const textContainerStyle = {
    maxWidth: '600px', // Adjust the maximum width as needed
  };

  return (
    <Box sx={containerStyle}>
      <div style={textContainerStyle}>
        <Typography variant="h4" gutterBottom style={{fontFamily: 'Montserrat, sans-serif'}}>
          Advantage
        </Typography>
        <Typography variant="body1" align="center" style={{fontFamily: 'Montserrat, sans-serif'}}>
          {advantage}
        </Typography>
      </div>
    </Box>
  );
};

export default Advantage;
