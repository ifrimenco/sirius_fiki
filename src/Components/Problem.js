import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Problem = ({problem}) => {
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
          Problem Statement
        </Typography>
        <Typography variant="body1" align="center" style={{fontFamily: 'Montserrat, sans-serif'}}>
          {problem}
        </Typography>
      </div>
    </Box>
  );
};

export default Problem;
