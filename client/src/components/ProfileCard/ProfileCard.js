import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Profile Image"
          height="250"
          image="https://www.diningandcooking.com/wp-content/uploads/2020/07/d768mpctynd51.jpg"
          title="Profile Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bob Ross
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Cooking is a passion of mine. Much like painting!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add Chef
        </Button>
        <Button size="small" color="primary">
          Block
        </Button>
        <Button size="small" color="primary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}