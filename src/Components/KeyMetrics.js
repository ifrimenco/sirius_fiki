import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';

const KeyMetrics = ({ metrics }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '45vh',
  };

  const textContainerStyle = {
    maxWidth: '600px', // Adjust the maximum width as needed
    textAlign: 'center', // Center-align text
  };

  const titleStyle = {
    fontFamily: 'Montserrat, sans-serif',
  };

  const metricListStyle = {
    fontFamily: 'Montserrat, sans-serif',
    padding: 0,
    textAlign: 'left',
  };

  const metricItemStyle = {
    fontFamily: 'Montserrat, sans-serif',
    padding: 0,
    textAlign: 'left',
    margin: '0.5rem 0',
    position: 'relative',
    paddingLeft: '2.5rem', // Create space for custom bullet point
  };

  return (
    <Box sx={containerStyle}>
      <div style={textContainerStyle}>
        <Typography variant="h4" gutterBottom style={titleStyle}>
          Key Metrics
        </Typography>
        <List style={metricListStyle}>
          {metrics.map((metric, index) => (
            <ListItem key={index} style={metricItemStyle}>
              <ListItemIcon>
                <KeyIcon/>
              </ListItemIcon>
              <ListItemText>
                {metric}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
};

export default KeyMetrics;
