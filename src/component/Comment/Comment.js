import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Box} from "@material-ui/core"
import "./Bubble.css"
import {Avatar} from "@material-ui/core"


const useStyles = makeStyles(theme =>({
    root:{
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        "& div":{
            padding:theme.spacing(2),
            display:"flex",
            justifyContent:"flex-end",
        }
    },
    dateContainer:{
        display:"block",
        float:"right",
        fontSize:".4em",
        opacity:".6",
        alignSelf:"flex-end",
        margin:theme.spacing(.4)
    },
    larger: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}))



const Comment = function({content,user,...props}){


    const classes = useStyles()

    return(
        <Box className={classes.root}>
            <Avatar variant="rounded" className={classes.larger} alt="profile-img"
            src="data:image/jpeg;base64,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" 
            />
            <Box className={`bubble ${classes.bubbleContainer}`}>
                <Box component="span">
                This is a comment
                </Box>
                <Box component="span" 
                className={classes.dateContainer}>
                    {Date.now()}
                </Box>
            </Box>
        </Box>
    )
}

export default Comment