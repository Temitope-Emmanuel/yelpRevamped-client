import React from 'react';
import {Box,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import "../assets/styles/animate.css"
import MiniCarousel from "./MiniCarousel"


const useStyles = makeStyles(theme => ({
    root:{
        width:"100%",
        height:"90vh",
        position:"relative",
        display:"flex",
    },
    overlay:{
        position:"absolute",
        height:"100%",
        width:"100%",
        backgroundImage:"linear-gradient(145deg,rgba(0,0,0,.1),rgba(0,0,0,.7))"
    },
    carouselContainer:{
        width:"100%",
        height:"100%",
        display:"flex",
        position:"absolute"
    },
    
    Body:{
        zIndex:5,
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        "& h1":{
            fontSize:"3.9em",
            margin:"0 .3em",
            fontWeight:"600",
            animationName:"pulse",
            animationDuration:"1.9s",
            animationIterationCount:"1",
            WebkitTextFillColor:"transparent",
            WebkitTextStroke:".3px black",      
        },
        "& p":{
            margin:".2em 1.6em",
            fontSize:"1.5em",
            lineHeight:"3em",
            letterSpacing:".15em",
            textTransform:"capitalize",
            textShadow:"0em 0em .5em green",
            animationName:"pulse",
            animationDuration:"1.5s",
            animationIterationCount:"1",
            animationDelay:".5s"
        },
        "& button":{
            width:"35%",
            alignSelf:"center",
            color:"white",
            borderRadius:"2em",
            margin:"1.9em ",
            boxShadow:`0 1.5em 5em .3em ${green[900]}`,
            animationName:"pulse",
            animationDuration:"1.7s",
            animationIterationCount:"infinite",
            animationDirection:"alternate",
            animationTimingFunction:"ease",
            animationDelay:".8s",
            "& span":{
                padding:".6em 1em",
                fontSize:"1.1em",
                letterSpacing:".15em"
            }
        }
    }
}))

const Carousel = function(props){
    const classes = useStyles()
    return(
        <Box className={classes.root}>
            <Box className={classes.overlay} />
            <Box className={classes.carouselContainer} >
                <MiniCarousel width="200" />
            </Box>
            <Box className={classes.Body}>
                <h1>
                    Welcome to Yelpcamp
                </h1>
                <p>Enjoy the Ultimate Camping experience</p>
                <Button style={{
                    backgroundColor:green["A700"]
                }} className='pulse' variant="contained">
                    Get Started
                </Button> 
            </Box>
        </Box>
    )
}

export default Carousel