import React from "react"
import {Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {green} from "@material-ui/core/colors"
import TerrainRoundedIcon from '@material-ui/icons/TerrainRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles(theme => ({
    root:{
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"column",
        alignItems:"flex-end",
        width:"100%",
        marginTop:theme.spacing(3)
    },
    // imageContainer:{
    //     display:"flex",
    //     width:"100%",
    //     margin:"1.7em 0em",
    //     alignItems:"center",
    //     "& img":{
    //         height:"2em",
    //         margin:".6em"
    //     },
    //     [theme.breakpoints.down("sm")]:{
    //         justifyContent:"flex-start",
    //         alignItems:"flex-start",
    //         "& svg":{
    //             margin:".2em 1em"
    //         }
    //     }
    // },
    socialContainer:{
        width:"100%",
        padding:"2em 0",
        backgroundImage:"linear-gradient(to bottom, #517c63, #517c63, #517c63, #517c63, #517c63, #4e8163, #4c8662, #498b61, #43965e, #3fa059, #3bab53, #39b54a)",
        "& p":{
            textAlign:"center",
            color:"white",
            opacity:".5",
            fontWeight:"400",
            fontSize:".7em" 
        },
        [theme.breakpoints.down("sm")]:{
            padding:"0"
        }
   },
    brandContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        "& h3":{
            fontSize:"1.75em",
            fontWeight:"500",
            opacity:".9",
        },
        "& svg":{
            fontSize:"4.7em",
            marginRight:".1em",
            color:green[400]
        },
    },
    listContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        padding:"0",
        alignItems:"center",
        "& span":{
            margin:".5em"
        },[theme.breakpoints.down("sm")]:{
            flexDirection:"column"
        }
    },
    mediaContainer:{
        display:"flex",
        flexDirection:"row",
        margin:"2.7em 0em",
        justifyContent:"center",
        "& svg":{
            margin:"0 1em",
            fontSize:"2.5em"
        }
    }
}))


const Footer  = function(){
    const classes = useStyles()
    return(
        <Box className={classes.root}>
            <Box className={classes.socialContainer}>
                <Box className={classes.brandContainer}>
                    <TerrainRoundedIcon/>
                    <h3>Yelpcamp</h3>
                </Box>
                <Box className={classes.listContainer}>
                    <Box component="span" >Home</Box>
                    <Box component="span" >Key features</Box>
                    <Box component="span" >Pricing</Box>
                    <Box component="span" >Testimonials</Box>
                    <Box component="span" >FAQ</Box>
                </Box>
                <Box className={classes.mediaContainer}>
                    <GitHubIcon/>
                    <LinkedInIcon/>
                    <WhatsAppIcon/>
                </Box>
                <p>
                    Copyright Temitope Emmanuel Ojo 2020.
                    All rights reserved
                </p>
            </Box>
        </Box>
    )
}

export default Footer