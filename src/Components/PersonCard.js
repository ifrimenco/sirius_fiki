import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PersonCard = ({ person }) => {
  return (
    <Card sx={{ maxWidth: 400, display: 'flex' }}>
      <CardMedia
        sx={{ width: 300, height: 200 }}
        image={person.image}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {person.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {person.role}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {person.description}
          </Typography>
        </CardContent>

        <CardContent sx={{marginTop: 3}}>
          <Typography variant="body2" color="text.secondary">
            {person.contact}
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
  );
}

export default PersonCard;