import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CustomerValidationStage = ({customerValidationStage}) => {
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
          Customer Validation
        </Typography>
        <Typography variant="body1" align="center" style={{fontFamily: 'Montserrat, sans-serif'}}>
          {customerValidationStage}
        </Typography>
      </div>
    </Box>
  );
};

export default CustomerValidationStage;
