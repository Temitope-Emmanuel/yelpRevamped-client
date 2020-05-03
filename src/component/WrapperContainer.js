import React,{useState} from "react"
import "./style/WrapperContainer.css"
import Navbar from "../component/Navbar"
import {connect} from "react-redux"
import {makeStyles} from "@material-ui/core/styles"
import DialogComponent from "../component/Landing/Dialog"
import SnackbarComponent from "../component/Landing/Snackbar"
import {logOut} from "../redux/action/user"
import {withRouter} from "react-router-dom"
import {addAlert} from "../redux/action/error"

const useStyles = makeStyles(theme =>({
    root:{
        overflowX:"hidden"
    }
}))

const Page = function({children,...props}){
    const [isDialog,setIsDialog] = useState(false)
    const handleDialog = () => {
        setIsDialog(!isDialog)
    }

    const classes = useStyles()
    return(
        <div className="page">
            <Navbar user={props.user} handleDialog={() => setIsDialog(!isDialog)}
             history={props.history} />
            {children}
            <DialogComponent 
             history={props.history}
             {...props.user} 
             logout={props.logOut} open={isDialog} 
             handleDialog={handleDialog} />
            <SnackbarComponent alert={props.Alert.message} addAlert={props.addAlert} />
        </div>
    )
}

function mapStateToProps(state){
    return{
        user:state.User,
        Alert:state.Alert
    }
}


export default withRouter(connect(mapStateToProps,{logOut,addAlert})(Page))