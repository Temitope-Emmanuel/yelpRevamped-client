import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Box} from "@material-ui/core"
import {green} from "@material-ui/core/colors"
import Comment from "./Comment"

const useStyles = makeStyles(theme =>({
    root:{
        height:"100%",
        width:"100%"
    }
}))


const CommentList = function(){

    const classes = useStyles()

    return(
        <Box className={classes.root}>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </Box>
    )
}

export default CommentList