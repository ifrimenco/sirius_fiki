import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CompanyCard = ({ company }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={company.image}
        />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {company.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company.website}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CompanyCard;