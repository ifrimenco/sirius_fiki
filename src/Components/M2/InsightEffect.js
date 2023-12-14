import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const InsightEffect = ({insightEffect}) => {
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
          Insight Effect
        </Typography>
        <Typography variant="body1" align="center" style={{fontFamily: 'Montserrat, sans-serif'}}>
          {insightEffect}
        </Typography>
      </div>
    </Box>
  );
};

export default InsightEffect;
