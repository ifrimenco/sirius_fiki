import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CustomerSegmentProcess = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '45vh',
  };

  const textContainerStyle = {
    maxWidth: '800px',
  };

  const headingStyle = {
    fontFamily: 'Montserrat, sans-serif',
  };

  const listStyle = {
    paddingLeft: '20px',
  };

  const nestedListStyle = {
    paddingLeft: '20px',
    listStylePosition: 'inside',
  };

  const parentListTitleStyle = {
    marginLeft: '10px',
    fontWeight: 'bold',
  };

  // Custom CSS styles for the green checks and question marks
  const checkStyle = {
    color: 'green',
    fontWeight: 'bold',
  };

  const questionMarkStyle = {
    color: 'orange',
    fontWeight: 'bold',
  };

  return (
    <Box sx={containerStyle}>
      <div style={textContainerStyle}>
        <Typography variant="h4" gutterBottom style={headingStyle}>
          Identifying Customer Segments & Collecting Information
        </Typography>
        <br/><br/>
        <ul style={listStyle}>
          <li>
            <Typography variant="body1" style={{ marginLeft: '-15px', fontFamily: 'Montserrat, sans-serif' }}>
              <span style={parentListTitleStyle}>Customer Segmentation:</span> We identified our primary customer segment as people who own farmland.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span style={parentListTitleStyle}>Further Segmentation:</span> We divided our farmer customers into categories based on the size of their land, including small farmers, medium-sized farmers, and industrial-scale farmers.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginLeft: '-40px', fontFamily: 'Montserrat, sans-serif' }}>
              <span style={parentListTitleStyle}>Reaching Customers:</span> To reach our customers, we primarily used the following methods:
              <ul style={nestedListStyle}>
                <li style={{...checkStyle, ...{marginLeft: '10px'}}}>✅ Visiting local marketplaces and engaging with crop providers to understand the needs of farmers.</li>
                <li style={{...checkStyle, ...{marginLeft: '35px'}}}>✅ Connecting with farmers through personal networks and friends to gather insights.</li>
              </ul>
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginLeft: '-90px', fontFamily: 'Montserrat, sans-serif' }}>
              <span style={parentListTitleStyle}>Questions Asked:</span> During the data collection process, we asked questions such as:
              <ul style={nestedListStyle}>
                <li style={{...questionMarkStyle, ...{marginLeft: '-90px'}}}>❓ What challenges do you face in managing your farmland?</li>
                <li style={{...questionMarkStyle, ...{marginLeft: '-173px'}}}>❓ What crops do you cultivate, and at what scale?</li>
                <li style={{...questionMarkStyle, ...{marginLeft: '10px'}}}>❓ How can a service like ours help you improve your farming practices?</li>
                <li style={{...questionMarkStyle, ...{marginLeft: '25px'}}}>❓ What communication channels do you prefer for updates and support?</li>
              </ul>
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span style={parentListTitleStyle}>Findings:</span> Our research revealed valuable insights, including the need for customized solutions for different farmer segments. Small farmers prioritize cost-effective solutions, while industrial-scale farmers are interested in advanced technology.
            </Typography>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default CustomerSegmentProcess;
