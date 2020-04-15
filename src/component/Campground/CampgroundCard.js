import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { useNeumorphShadowStyles } from '@mui-treasury/styles/shadow/neumorph';
import {Rating} from "@material-ui/lab"
import {withRouter} from "react-router-dom"

const useStyles = makeStyles( theme => ({
  root:{
    height:"15em",
    // maxWidth:"23%",
    margin:"1%",
    padding:theme.spacing(2),
    position:"relative",
    overflow:"hidden",
    display:"flex",
    alignItems:"center",
    overflow:"hidden !important",
    borderRadius:".5em",
    [theme.breakpoints.down("lg")]:{
      width:"22.8%",
    },
    [theme.breakpoints.down("md")]:{
      width:"30%",
      height:"12em",
    },
    [theme.breakpoints.down("sm")]:{
      width:"55%",
      height:"13.5em",
    },
   
  },
  cardContainer:{
    height:"100%",
    width:"100%",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
  },
  overlayContainer:{
    position:"absolute",
    height:"90%",
    width:"90%",
    top:"10%",
    bottom:"0",
    right:"5%",
    left:"5%",
    backgroundColor:"rgba(0,0,0,0.01)",
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
    flexDirection:"column",
    transition:"all .5s linear",
    "& .MuiAvatar-root":{
      transition:"all .4s ease"
    },
    "&:hover":{
      "& .MuiBox-root":{
        height:"55%",
        opacity:"1"
      },
      "& .MuiAvatar-root":{
        height:theme.spacing(9),
        width:theme.spacing(9)
      },
      backgroundColor:"rgba(0,0,0,.3)"
    },
  },
  userContainer:{
    display:"flex",
    opacity:"0",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"flex-start",
    width:"100%",
    color:"white",
    height:"17%",
    cursor:"pointer",
    transition:"all .3s linear",
    [theme.breakpoints.down("sm")]:{
      height:"65%",
      opacity:"8"
    },
    "&:hover":{
      "& h4,p":{
        opacity:"1"
      }
    },
    "& h4":{
      fontSize:"2em",
      fontWeight:"400",
      opacity:".7",
      margin:".5em 0"
    },
    "& p":{
      fontSize:"1.2em",
      opacity:".7",
      margin:".3em 0"
    },
  }
})) 

const CampgroundCard = ({content,...props}) => {
  const classes = useStyles();
  const neomorphStyles = useNeumorphShadowStyles()
  return (
    <Box className={cx(classes.root,neomorphStyles.root)}>
        <Box className={classes.cardContainer}
          style={{backgroundImage:`url(${content.location})`}}
         />
         <Box className={classes.overlayContainer}>
           <Avatar src={content.user.profileImgUrl} />
           <Box onClick={() => props.history.push(`/campground/${content._id}`)} className={classes.userContainer}>
           <h4>
             {content.name}
           </h4>
           <p>{content.description} </p>
           <Rating defaultValue={3} readOnly name="campground-rating" />
           </Box>
         </Box>  
    </Box>
      );
};

export default withRouter(CampgroundCard);