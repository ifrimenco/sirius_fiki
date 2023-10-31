import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const CostStructureCard = ({ costBranch }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {costBranch.name}
        </Typography>
        <Divider/>
        <List>
        {costBranch.items.map((item) => (
            <ListItem>
              <ListItemIcon>
                <AttachMoneyIcon sx={{color: 'red'}}/>
              </ListItemIcon>
              <ListItemText>
                {item}
              </ListItemText>
            </ListItem>
          ))}
          
        </List>
        </CardContent>

    </Card>
  );
}

export default CostStructureCard;