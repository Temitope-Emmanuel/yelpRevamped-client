import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {svg1,svg2,svg3,svg4,svg5,svg6} from "../assets/images/svg"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
    height:"100%",
    margin:".3em",
    "& img":{
      fontSize:"10em",
      // [theme.breakpoints.down("md")]:{
      //   width:"5em"
      // }
    },
    overflow:"hidden",
    "& div":{
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"contain",
      height:"100%",
      width:"100%"
    }
  }
}));

const MiniCarousel =  function() {
  const classes = useStyles();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

  return (
    <div className={classes.root}>
            <AutoPlaySwipeableViews className={classes.ImageContainer}>
                   <div style={{backgroundImage:`url(${svg1})`}} />
                   <div style={{backgroundImage:`url(${svg2})`}} />
                   <div style={{backgroundImage:`url(${svg3})`}} />
                   <div style={{backgroundImage:`url(${svg4})`}} />
                   <div style={{backgroundImage:`url(${svg5})`}} />
                   <div style={{backgroundImage:`url(${svg6})`}} />
                   {/* <img alt="carousel-1" src={svg1} />
                   <img alt="carousel-2" src={svg2} />
                   <img alt="carousel-3" src={svg3} />
                   <img alt="carousel-4" src={svg4} />
                   <img alt="carousel-5" src={svg5} />
                   <img alt="carousel-6" src={svg6} /> */}
            </AutoPlaySwipeableViews>
    </div>
  );
}



export default MiniCarousel