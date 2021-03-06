import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import {Rating} from "@material-ui/lab"
import {withRouter} from "react-router-dom"

const useStyles = makeStyles( theme => ({
  root:{
    position:"relative",
    display:"flex",
    height:"100%",
    width:"auto",
    alignItems:"center",
    justifyContent:"center",
    overflow:"hidden !important",
    borderRadius:".5em",
  },
  imageContainer:{
    maxHeight:"100%",
    maxWidth:"100%",
    objectFit:"cover",
  },
  overlayContainer:{
    position:"absolute",
    backgroundColor:"rgba(0,0,0,0.2)",
    height:"100%",
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
    flexDirection:"column",
    transition:"all .5s linear",
    "& .MuiAvatar-root":{
      transition:"all .4s ease"
    },
    [theme.breakpoints.up("md")]:{
      backgroundColor:"rgba(0,0,0,0.1)",
      "&:hover":{
        "& .MuiBox-root":{
          height:"65%",
          opacity:"1"
        },
        "& .MuiAvatar-root":{
          height:theme.spacing(9),
          width:theme.spacing(9)
        },
        backgroundColor:"rgba(0,0,0,.6)"
      },
    } 
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
    [theme.breakpoints.up("md")]:{
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
  }
})) 

const CampgroundCard = ({content,...props}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img alt="campground" className={classes.imageContainer} src={content.location} />
         <Box className={classes.overlayContainer}>
           <Avatar src={content.user.profileImgUrl} />
           <Box onClick={() => props.history.push(`/campground/${content._id}`)}
            className={classes.userContainer}>
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