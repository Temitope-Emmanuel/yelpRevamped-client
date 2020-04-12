import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import {Box,Paper} from "@material-ui/core"
import {green} from "@material-ui/core/colors"
import TabComponent from "./TabComponent"
import Moment from "react-moment"
import RatingComponent from "../RatingComponent"
import {Avatar} from "@material-ui/core"

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
        padding:".4em",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%",
        height:"100%"
    },
    imageContainer:{
        height:"100%",
        width:"35%",
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
            },
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
    avatarContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:theme.spacing(0,1),
    },
    panelContainer:{
        width:"65%"
    },
    larger:{
        width: theme.spacing(6),
        height: theme.spacing(6),
    }
}))




const Campground = function({routeProps,addComment,AddComment,creator,deleteComment,Campground,...props}){
    const classes = useStyles()
    
   const {username,profileImgUrl}= Campground.user || ""
   console.log(Campground)
    return(
        <Box className={classes.root}>
            <Box className={classes.CampgroundContainer}>
                <h2>{Campground.name}</h2>
                <Paper className={classes.sectionContainer} elevation={10}>
                    <Box className={classes.imageContainer}>
                       <img height="230" alt={Campground.location} src={Campground.location} />
                       <Box className={classes.userDetail}>
                           <Box className={classes.avatarContainer}>
                               <h5>
                                   Created By <span>{username}</span> 
                               </h5>
                               <Avatar alt="profile-img"
                                className={classes.larger}
                                src={profileImgUrl} />
                            </Box>
                               <p>Added on <Moment format="YYYY-MMM-DD">{Campground.Date}</Moment></p>
                       </Box>
                       <Box style={{
                           margin:"1.5em .1em"
                       }}>
                           <RatingComponent/>
                       </Box>
                    </Box>
                    <Box className={classes.panelContainer}>
                        <TabComponent
                         creator={creator}
                         addComment={AddComment}
                         deleteComment={deleteComment} 
                         comment={Campground.comments} />
                    </Box>       
                </Paper>
            </Box>
        </Box>
    )
}


export default Campground