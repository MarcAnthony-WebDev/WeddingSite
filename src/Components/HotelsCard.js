import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function MediaCard(props) {
  return (
    <Card sx={{ height: '48rem', width: '30rem' }}>
      <CardMedia
        sx={{ height: '25rem' }}
        src={props.src}
        title='Hotel A'
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {props.title}
        </Typography>
        <Typography
          style={{ fontSize: '1.4rem' }}
          variant='body2'
          color='text.secondary'
        >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          target='_blank'
          endIcon={<ArrowRightAltIcon />}
          href={props.link}
          size='large'
        >
          Visit their site
        </Button>
      </CardActions>
    </Card>
  );
}
