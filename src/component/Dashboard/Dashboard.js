import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Box,Avatar,Button,ButtonGroup} from "@material-ui/core"
import {green,red} from "@material-ui/core/colors"
import AddForm from "./AddForm"
import {Collapse,Paper} from "@material-ui/core"
import Expansion from "./Expansion"


const useStyles = makeStyles(theme => ({
    root:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    },
    large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    },
    dashboardContainer:{
        backgroundColor:"whitesmoke",
        height:"70%",
        width:"90%",
        border:`solid .8px ${green["A400"]}`,
        borderRadius:".3em",
        padding:theme.spacing(2)
    },
    mainContainer:{
        backgroundColor:"white",
        padding:theme.spacing(1,2.5),
        borderRadius:".9em"
    },
    userContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    userDetail:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"25%",
        alignItems:"center",
        "& h2":{
            fontWeight:"500",
            opacity:".9",
            transition:"color .2s ease-in",
            "&:hover":{
                color:green[900],
                cursor:"pointer"
            }
        }
    },
    buttonContainer:{
        "& button":{
            margin:theme.spacing(.7),
            textTransform:"capitalize",
            color:"rgba(0,0,0,.6)",
            padding:theme.spacing(1.2,2),
            fontSize:"1em"
        }
    },
    formContainer:{
        margin:theme.spacing(1.5,0),
        padding:theme.spacing(2.5),
    },
    expansionContainer:{
        padding:theme.spacing(3),
        border:`solid 2px ${green[700]}`,
        borderRadius:"0 0 2.4em 2.4em",
        backgroundColor:"whitesmoke",
        maxHeight:"49em",
        overflowY:"auto",
        overflowX:"hidden",
        display:"flex",
        justifyContent:"center"
    }
}))



const Dashboard = function({routeProps,Campground,deleteCampground,editCampground,addNewCampground,...user}){

    const classes = useStyles()
    const [collapsed,setCollapsed] = React.useState(false)
    const handleCollapsed = () => {setCollapsed(!collapsed)}
    const {username,profileImgUrl} = user.user
    
    React.useEffect(() => {
        addNewCampground({})
    },[])
    
    return(
        <Box className={classes.root}>
            <Box className={classes.dashboardContainer}>
                <Box className={classes.mainContainer}>
                    <Box className={classes.userContainer}>
                    <Box className={classes.userDetail}>
                        <Avatar alt={username}
                        variant="rounded"
                        src={profileImgUrl} 
                        className={classes.large} />
                        <h2>{username}</h2>
                    </Box>
                        <ButtonGroup className={classes.buttonContainer}>
                        <Button style={{
                            backgroundColor:green[400],
                            borderRadius:"0 1.6em 0 1.6em"
                        }}
                        onClick={handleCollapsed} 
                        >Add Campground</Button>
                        <Button onClick={routeProps.history.goBack}  style={{
                            backgroundColor:red[400],
                            borderRadius:"1.6em 0 1.6em 0",
                            paddingRight:"2.3em",
                            paddingLeft:"2.3em"
                        }}>Go Back</Button>
                        </ButtonGroup>
                        </Box>

                        <Collapse in={collapsed} collapsedHeight={20}>
                            <Paper className={classes.formContainer} elevation={10} >
                                <AddForm 
                                 inputs={['Campground','description',"Add Image"]}
                                 addCampground={addNewCampground} 
                                 useHandleCollapsed={handleCollapsed} />
                            </Paper>
                        </Collapse>
                </Box>
            <Box className={classes.expansionContainer}>
                <Expansion
                editCampground={editCampground}
                deleteCampground={deleteCampground}
                campground={Campground} 
                />
            </Box>
            </Box>
        </Box>
    )
}


export default Dashboard