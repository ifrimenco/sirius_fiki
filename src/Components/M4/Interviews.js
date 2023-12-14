import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';

const Interviews = ({problem}) => {
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
      <div style={textContainerStyle}>
        <Typography variant="h4" gutterBottom style={{fontFamily: 'Montserrat, sans-serif'}}>
          Interviews
        </Typography>
        <Typography variant="h5" style={{fontFamily: 'Montserrat, sans-serif'}}>
          Interview 1: Large Scale Farmer
        </Typography>

        <List style={{fontFamily: 'Montserrat, sans-serif'}}>          
          <ListItem>
            - interested in technology
          </ListItem>  
          <ListItem>
            - already uses ogor.ro
          </ListItem>          
          <ListItem>
            - said there is room for everybody to join, even with the same product as the competition 
          </ListItem>
        </List>
        

        <Typography variant="h5" style={{fontFamily: 'Montserrat, sans-serif'}}>
          Interviews 2, 3 and 4: Farmers from Obor Market
        </Typography>
        <List style={{fontFamily: 'Montserrat, sans-serif'}}>          
          <ListItem>
            - doing the things old fashioned way, did not disclose the surface they are farming
          </ListItem>  
          <ListItem>
            - going into the field to check the culture
          </ListItem>          
          <ListItem>
            - not open to any technology. When heard about the fact that one can monitor crops using a satellite one of the farmers accused the people doing this of being "lazy" 
          </ListItem>
        </List>


        <Typography variant="h5" style={{fontFamily: 'Montserrat, sans-serif'}}>
          Bonus Discussion: Entrepreneur 
        </Typography>
        <Typography variant="p" sx={{marginBottom: '50px'}}>
          On 21st of November, Alex went to <b>Empowering Women in Agrifood 2023</b>
        </Typography>
          <img src="/images/ewa.jpeg" style={{width: '600px'}}/>
        <Typography variant="p">
          There, one of the participants has a startup that provides easier access for farmers to european funds. Furthermore, we found out that they want to integrate best practices and to recommend on their platforms companies that do this. This might be an opportunity for us. 
        </Typography>
        <br/>
        <br/>
        <Typography variant="h5" style={{fontFamily: 'Montserrat, sans-serif'}}>
          Conclusions
        </Typography>

        <Typography variant="p" sx={{marginBottom: '50px'}}>
          The main conclusion is that we have to push and convince farmers they would clearly benefit from using our application. In the following years, more and more will look for alternative, modern methods to practice agriculture. Should they not, they will face huge losses.
        </Typography>
      </div>
    </Box>
  );
};

export default Interviews;
