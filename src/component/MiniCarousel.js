import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {svg1,svg2,svg3,svg4,svg5,svg6} from "../assets/images/svg"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const useStyles = makeStyles(() => ({
  root: {
    width:"100%",
    height:"100%",
    margin:".3em",
    "& img":{
      fontSize:"10em",
    },
    overflow:"hidden"
  }
}));

const MiniCarousel =  function() {
  const classes = useStyles();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

  return (
    <div className={classes.root}>
            <AutoPlaySwipeableViews className={classes.ImageContainer}>
                   <img alt="carousel-1" src={svg1} />
                   <img alt="carousel-2" src={svg2} />
                   <img alt="carousel-3" src={svg3} />
                   <img alt="carousel-4" src={svg4} />
                   <img alt="carousel-5" src={svg5} />
                   <img alt="carousel-6" src={svg6} />
            </AutoPlaySwipeableViews>
    </div>
  );
}



export default MiniCarousel