import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CustomerSegment = ({customers}) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '45vh',
  };

  const textContainerStyle = {
    maxWidth: '600px', // Adjust the maximum width as needed
  };

  const titleStyle = {
    fontFamily: 'Montserrat, sans-serif', // Apply the Montserrat font to the title
  };

  const descriptionStyle = {
    fontFamily: 'Montserrat, sans-serif', // Apply the Montserrat font to the description
  };

  return (
    <Box sx={containerStyle}>
      <div style={textContainerStyle}>
        <Typography variant="h4" gutterBottom style={titleStyle}>
          Customer Segment
        </Typography>
        <Typography variant="body1" align="center" style={descriptionStyle}>
          {customers}
        </Typography>
      </div>
    </Box>
  );
};

export default CustomerSegment;
