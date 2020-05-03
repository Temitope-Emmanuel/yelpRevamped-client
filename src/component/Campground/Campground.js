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
        [theme.breakpoints.down("sm")]:{
            height:"100%",
            width:"100%",
            margin:"0 0",
            display:"flex",
            justifyContent:"space-between"
        }
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
            opacity:".7",
            transition:"color .3s linear",
            textTransform:"uppercase",
            letterSpacing:".2em",
            marginBottom:theme.spacing(1),
            "&:hover":{
                color:green[700]
            }
        },
        [theme.breakpoints.down("sm")]:{
        padding:theme.spacing(1,0.5),
        alignItems:"bottom"
        }
    },
    sectionContainer:{
        display:"flex",
        flexDirection:"row",
        paddingTop:"1em",
        justifyContent:"center",
        width:"100%",
        height:"100%",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            padding:"1em 0",
            alignItems:"end",
            justifyContent:"flex-end"
        }
    },
    userDetail:{
        height:"100%",
        margin:theme.spacing(1,0),
        padding:theme.spacing(1),
        paddingTop:"0",
        width:"45%",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"flex-start",
        "& p":{
            fontSize:"1.2em",
            fontWeight:"700",
            textAlign:"center"
        },
        [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"30%",
        padding:theme.spacing(1),
        margin:theme.spacing(1.5,0)
        }
    },
    imageContainer:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        margin:theme.spacing(1.5,0),
        height:"60%",
        justifyContent:"space-between",
        [theme.breakpoints.down("md")]:{
            width:"100%",
            height:"100%"
        }
    },
    imageDiv:{
        maxHeight:"100%",
        maxWidth:"100%",
        objectFit:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"center",
        borderRadius:".3em",
        marginBottom:theme.spacing(1.5),
        [theme.breakpoints.down("xs")]:{
            width:"18em",
            height:"12em"
        }
    },
    avatarContainer:{
        display:"flex",
        margin:theme.spacing(1),
        flexDirection:"column",
        width:"100%",
        justifyContent:"space-evenly",
        alignItems:"center",
        padding:theme.spacing(0,1),
        "& h5":{
            fontSize:"1.1em",
            "&:hover":{
                "& span":{
                    transition:"color .3s ease",
                    color:green[500]
                }
            }
        },
        [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        alignItems:"center",
        margin:theme.spacing(1),
        }
    },
    panelContainer:{
        width:"55%",
        height:"auto",
        [theme.breakpoints.down("md")]:{
            width:"98%",
            marginTop:theme.spacing(1),
            height:"50%"
        }
    },
    larger:{
        width: theme.spacing(6),
        height: theme.spacing(6),
        [theme.breakpoints.down("md")]:{
        width:theme.spacing(5),
        height:theme.spacing(5)
        }
    },
    userContainer:{
        width:"100%",
        display:"flex",
        margin:theme.spacing(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        [theme.breakpoints.down("md")]:{
                width:"50%",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"flex-start",
                "& h5":{
                    marginRight:"auto"
                }
        },
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column-reverse",
            alignItems:"center",
            width:"100%",
            marginBottom:0,
            marginTop:"1em",
            "& h5":{
                margin:"0 0",
                marginTop:"1em"
            }
        }
    }
}))




const Campground = function({routeProps,addComment,AddComment,creator,deleteComment,Campground,...props}){
    const classes = useStyles()
   const {username,profileImgUrl}= Campground.user || ""
    return(
        <Box className={classes.root}>
            <Box className={classes.CampgroundContainer}>
                <h2>{Campground.name}</h2>
                <Paper className={classes.sectionContainer} elevation={10}>
                       <Box className={classes.userDetail}>
                           <Box className={classes.imageContainer}>
                           <img alt="campground-img" 
                            className={classes.imageDiv}
                            src={Campground.location} />
                           <RatingComponent size="large"/>
                           </Box>
                           <Box className={classes.avatarContainer}>
                               <Box className={classes.userContainer}>
                               <h5>
                                   Created By <span>{username}</span> 
                               </h5>
                               <Avatar alt="profile-img"
                                className={classes.larger}
                                src={profileImgUrl} />
                               </Box>
                               <p>Added on <Moment format="YYYY-MMM-DD">{Campground.Date}</Moment></p>
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