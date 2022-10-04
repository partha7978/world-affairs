import React from 'react'
import './NewsCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import homeImage from '../../assets/image/house.webp'

export default function NewsCard() {
  return (
    <Card sx={{ maxWidth: 280 , borderRadius: '10px'}}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={homeImage}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Heading 
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read more
        </Button>
      </CardActions>
    </Card>
  )
}
