import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const containerStyle = {
  display: 'flex', 
  justifyContent: 'center', 
  flexWrap: 'wrap'
};

const titleStyle = {
  fontFamily: 'Montserrat, sans-serif',
};
const SolutionForProblem = ({ solutions }) => {
  return (
    <Box sx={containerStyle}>
      <div>
        <Typography variant="h4" gutterBottom style={titleStyle}>
          Solution for the problem
        </Typography>
        <List>
          {solutions.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                  <CheckIcon sx={{color: 'green'}}/>
              </ListItemIcon>
              <ListItemText>
                {item}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
};

export default SolutionForProblem;