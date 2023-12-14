import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UserFlow = ({problem}) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '45vh',
    fontFamily: 'Montserrat, sans-serif'
  };

  const textContainerStyle = {
    maxWidth: '600px',
  };

  return (
    <Box sx={containerStyle}>
      <div style={textContainerStyle} >
        <Typography variant="h4" gutterBottom style={{fontFamily: 'Montserrat, sans-serif'}}>
          User Stories
        </Typography>
        <br/>
        <br/>
        <Typography variant="h5" align="center" style={{fontFamily: 'Montserrat, sans-serif'}}>
          User story 1:
        </Typography>
        <Typography variant="p"> As a user of this application, I want to be able to see information about the overall health of my plants so that I can inspect accordingly.<br/><br/> <b>Acceptance Criteria: </b>Given the possibiity of viewing the Normalized difference vegetation index (NDVI) for the plants, when the user presses the button to see health, they will see their field painted in nuances from green (very dense vegetation) to brown (very low vegetation density)</Typography>
        <Typography variant="h5" align="center" style={{fontFamily: 'Montserrat, sans-serif'}}>     
        <br/>
        <br/>
          User story 2:
        </Typography>
        <Typography variant="p"> As a user of this application, I want to be able to see information about the overall water percentage of my plants so that I can water that region more.<br/><br/> <b>Acceptance Criteria: </b>Given the possibiity of viewing the Normalized difference water index (NDVI) for the plants, when the user presses the button to see water percentage, they will see their field painted in nuances from blue (very dense vegetation) to brown (very low vegetation density)</Typography>
        <br/>
        <br/>
        <Typography variant="h5" align="center" style={{fontFamily: 'Montserrat, sans-serif'}}>
          User story 3:
        </Typography>
        <Typography variant="p"> As a farmer that is not so familiar with technology, I want to interpret the data quickly and see what possible solutions are there<br/><br/> <b>Acceptance Criteria: </b>Given the possibiity of interpreting the data via Large Language Models (LLM), when the user views any field, An AI will automatically interpret the data and provide information & suggestions </Typography>
        <br/>
        <br/>
        <Typography variant="h5" align="center" style={{fontFamily: 'Montserrat, sans-serif'}}>
          User story 4:
        </Typography>
        <Typography variant="p"> As a farmer, I want to be able to view meteorological data for my field<br/><br/> <b>Acceptance Criteria: </b>Given the possibiity of accessing weather data, the user will have a widget containing a daily / weekly <a href="https://www.youtube.com/watch?v=pqashW66D7o">weather report</a> for their field  </Typography>
        <br/>
        <br/>
        
        <Typography variant="h5" align="center" style={{fontFamily: 'Montserrat, sans-serif'}}>
          
          User story 5:
        </Typography>
        <Typography variant="p"> As a user of this application, I want to be able to receive a daily report containing the useful information<br/><br/> <b>Acceptance Criteria: </b>Given the possibility of automatically integrating mail/text messages, when the user opts for receiving daily notifications, they will receive a daily report.</Typography>
        <Typography variant="h5" align="center" style={{fontFamily: 'Montserrat, sans-serif'}}>
          <br/>
          <br/>
          User story 6:
        </Typography>
        <Typography variant="p"> As a user of this application, I want to to be able to receive urgent notifications via phone/e-mail whenever the indices are below a threshold <br/><br/> <b>Acceptance Criteria: </b>The user can opt to receive an emergeny notification based on a recommended / defined by them treshold. When the data suggests low indices, they will receive a notification.</Typography>
        
      </div>
    </Box>
  );
};

export default UserFlow;
