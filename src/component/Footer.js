import React from "react"
import {Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Facebook from "../assets/images/footer/facebook.svg"
import Instagram from "../assets/images/footer/instagram.svg"
import Twitter from "../assets/images/footer/twitter.svg"
import Image20 from "../assets/images/footer/Image20.png"
import Image21 from "../assets/images/footer/Image21.png"
import Image22 from "../assets/images/footer/Image22.png"
import AcUnitIcon from '@material-ui/icons/AcUnit';



const useStyles = makeStyles(theme => ({
    root:{
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"column",
        alignItems:"flex-end",
        width:"100%",
    },
    downloadContainer:{
        display:"flex",
        flexDirection:"row",
        width:"90%",
        justifyContent:"center",
        alignItems:"center",
        padding:"0 2em",
        "& div":{
            width:"70%",
            "& h3":{
                fontSize:"2em",
                fontWeight:"500",
                margin:".3em 0"
            },
            "& p":{
                fontSize:"1em",
                fontWeight:"600",
                opacity:".8"
            }
        },
        [theme.breakpoints.down("sm")]:{
            padding:"0 .5em",
            flexDirection:"column",
            "& div":{
                width:"100%",
                "& p":{
                    fontSize:".9em",
                    fontWeight:"400",
                    opacity:"1",
                }
            }
        }
    },
    mainImage:{
        height:"22.5em",
        marginBottom:"-2.9em",
        zIndex:"3",
        // alignSelf:"center",
        [theme.breakpoints.down("sm")]:{
        height:"12em",
        paddingRight:"3em",
        marginBottom:"-1.5em"
    }
    },
    imageContainer:{
        display:"flex",
        width:"100%",
        margin:"1.7em 0em",
        alignItems:"center",
        "& img":{
            height:"2em",
            margin:".6em"
        },
        [theme.breakpoints.down("sm")]:{
            justifyContent:"flex-start",
            alignItems:"flex-start",
            "& img":{
                margin:".2em 1em"
            }
        }
    },
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
            color:"white",
            fontWeight:"500",
            opacity:".9",
        },
        "& svg":{
            fontSize:"1.8em",
            marginRight:".3em"
        },
    },
    listContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        padding:"0",
        alignItems:"center",
        color:"white",
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
        "& img":{
            margin:"0 1em"
        }
    }
}))


const Footer  = function(){
    const classes = useStyles()
    return(
        <Box className={classes.root}>
            <Box className={classes.downloadContainer}>
                <Box className={classes.headingContainer}>
                    <h3>
                        Download our app now!
                    </h3>
                    <p>
                        The rise of mobile devices transform the way we consume information entirely <br/>
                        and the world's most elevant channels such as Facebook
                    </p>
                    <Box className={classes.imageContainer}>
                        <img alt="playstore" src={Image20} />
                        <img alt="app store" src={Image21} />
                    </Box>
                </Box>
                    <img alt="img-svg" className={classes.mainImage} src={Image22} />
            </Box>
            <Box className={classes.socialContainer}>
                <Box className={classes.brandContainer}>
                    <AcUnitIcon/>
                    <h3>VGF Haul</h3>
                </Box>
                <Box className={classes.listContainer}>
                    <Box component="span" >Home</Box>
                    <Box component="span" >Key features</Box>
                    <Box component="span" >Pricing</Box>
                    <Box component="span" >Testimonials</Box>
                    <Box component="span" >FAQ</Box>
                </Box>
                <Box className={classes.mediaContainer}>
                    <img alt="instagram-alt" src={Instagram} />
                    <img alt="facebook-alt" src={Facebook} />
                    <img alt="twitter-alt" src={Twitter} />
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