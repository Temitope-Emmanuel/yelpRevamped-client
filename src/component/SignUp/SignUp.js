import React from "react"
import { Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import StepperContainer from "./StepperContainer"
import {connect} from "react-redux"
import {removeError} from "../../redux/action/error"
import {authUser} from "../../redux/action/user"

const useStyles = makeStyles(theme =>({
    root:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"flex-start",
        height:"100%",
        width:"100%",
        paddingTop:"3em 4em",
    },
    formContainer:{
        width:"80%",
        height:"75%",
        backgroundColor:"whitesmoke",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        borderRadius:".3em",
        marginTop:"6em",
        "& h2":{
            fontSize:theme.typography.pxToRem(30),
            fontWeight:"500"
        }
    }
}))


const SignUp = function(props){




    const classes = useStyles()
    return(
        <Box className={classes.root}>
        <Box className={classes.formContainer} >
            <h2>{props.heading}</h2>
            <StepperContainer
             signup={props.signup}
             authUser={props.authUser}
             errorHandler={props.removeError}
             history={props.routeProps.history}/>
        </Box>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    errors:state.Error
})


export default connect(mapStateToProps,{removeError,authUser})(SignUp)