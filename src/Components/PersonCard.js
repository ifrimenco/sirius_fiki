import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PersonCard = ({ person }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={person.image}
        />

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
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {person.contact}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default PersonCard;