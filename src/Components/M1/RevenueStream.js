import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RevenueStreamCard from './RevenueStreamCard';

const RevenueStream = ({ revenueStreamData }) => {
  const containerStyle = {
    minHeight: '45vh',
  };

  const titleStyle = {
    fontFamily: 'Montserrat, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <Typography variant="h4" gutterBottom style={titleStyle}>
        Revenue Stream
      </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {revenueStreamData.map((costBranch, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <RevenueStreamCard costBranch={costBranch} />
        </div>
      ))}
    </Box>
    </div>
  );
};

export default RevenueStream;
