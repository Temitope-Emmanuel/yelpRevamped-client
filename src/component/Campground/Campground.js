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
            margin:"0 0"
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
        padding:theme.spacing(1,0.5)
        }
    },
    sectionContainer:{
        display:"flex",
        flexDirection:"row",
        padding:".4em",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            padding:"0 0"
        }
    },
    userDetail:{
        height:"100%",
        margin:theme.spacing(1,0),
        padding:theme.spacing(1),
        width:"30%",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
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
        height:"35%",
        padding:theme.spacing(1),
        }
    },
    imageContainer:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        height:"40%",
        justifyContent:"space-between",
    },
    imageDiv:{
        width:"23em",
        height:"13em",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"center",
        marginBottom:theme.spacing(1.5),
        [theme.breakpoints.down("xs")]:{
            width:"18em",
            height:"12em"
        }
    },
    avatarContainer:{
        display:"flex",
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
        }
    },
    panelContainer:{
        width:"75%",
        [theme.breakpoints.down("md")]:{
            width:"98%"
        }
    },
    larger:{
        width: theme.spacing(6),
        height: theme.spacing(6),
        [theme.breakpoints.down("md")]:{
        width:theme.spacing(8),
        height:theme.spacing(8)
        }
    },
    userContainer:{
        width:"100%",
        display:"flex",
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
                           <div className={classes.imageDiv} 
                            style={{backgroundImage:`url(${Campground.location})`}} />
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