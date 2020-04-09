import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import {Box,Paper} from "@material-ui/core"
import {CarouselImg10,} from "../../assets/images/carousel"
import {green} from "@material-ui/core/colors"
import {Rating} from "@material-ui/lab"

import TabComponent from "./TabComponent"

const useStyles = makeStyles(theme => ({
    root:{
        height:"90%",
        width:"80%",
        margin:"5% 10%",
    },
    CampgroundContainer:{
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        borderRadius:".5em",
        padding:theme.spacing(1,2),
        backgroundColor:"whitesmoke",
        "& h2":{
            textAlign:"center",
            fontSize:"1.7em",
            fontWeight:"500",
            opacity:".9",
            transition:"color .3s linear",
            textTransform:"uppercase",
            letterSpacing:".1em",
            marginBottom:theme.spacing(1),
            "&:hover":{
                color:green[700]
            }
        }
    },
    sectionContainer:{
        display:"flex",
        flexDirection:"row",
        padding:"1em",
        justifyContent:"flex-start",
        width:"100%"
    },
    imageContainer:{
        height:"100%",
        width:"25%",
        borderRadius:".2em",
        padding:theme.spacing(1.2),
        "& img":{
            marginBottom:"0 !important",
            borderRadius:".2em"
        }
    },
    userDetail:{
        margin:theme.spacing(-2,.3),
        "& h5":{
            fontSize:"1.18em",
            fontWeight:500,
            transition:"color .3s ease-in-out",
            "& span":{
                fontWeight:600,
               "&:hover":{
                    color:green[900],
                }
            }
        },
        "& p":{
            marginTop:theme.spacing(-1.5),
            marginBottom:theme.spacing(2.5),
            fontSize:"1em",
            fontWeight:"700",
            opacity:".8",
            letterSpacing:".08em"    
        }
    },
    panelContainer:{
        width:"75%"
    }
}))



const Campground = function({routeProps,loadCampground,...props}){
    const classes = useStyles()
    
   console.log(loadCampground)
    return(
        <Box className={classes.root}>
            <Box className={classes.CampgroundContainer}>
                <h2>Mystic Swamp</h2>
                <Paper className={classes.sectionContainer} elevation={10}>
                    <Box className={classes.imageContainer}>
                       <img width="200" src={CarouselImg10} />
                       <Box className={classes.userDetail}>
                               <h5>
                                   Created By <span>{"Kashakunin"}</span> 
                               </h5>
                               <p >Added on 12-02-19</p>
                       </Box>
                       <Box style={{
                           margin:"1.5em .1em"
                       }}>
                           <Rating name="campground-rating"/>
                       </Box>
                    </Box>
                    <Box className={classes.panelContainer}>
                        <TabComponent/>
                    </Box>       
                </Paper>
            </Box>
        </Box>
    )
}


export default Campground