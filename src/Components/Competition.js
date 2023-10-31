import React from 'react';
import CompanyCard from './CompanyCard';
import Box from '@mui/material/Box';

const Competition = ({ companiesData }) => {
  return (
    <div>
    <h1>Competition</h1>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
