import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CostStructureCard from './CostStructureCard';

const CostStructure = ({ costStructureData }) => {
  const containerStyle = {
    minHeight: '45vh',
  };

  const titleStyle = {
    fontFamily: 'Montserrat, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <Typography variant="h4" gutterBottom style={titleStyle}>
        Cost Structure
      </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {costStructureData.map((costBranch, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <CostStructureCard costBranch={costBranch} />
        </div>
      ))}
    </Box>
    </div>
  );
};

export default CostStructure;
