import React from 'react';
import CompanyCard from './CompanyCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const titleStyle = {
  fontFamily: 'Montserrat, sans-serif',
};

const Competition = ({ companiesData }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={titleStyle}>
        Competition
      </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {companiesData.map((company, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <CompanyCard company={company} />
        </div>
      ))}
    </Box>
    </div>
  );
};

export default Competition;
