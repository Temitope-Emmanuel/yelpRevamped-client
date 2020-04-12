import React,{useState} from "react"
import "./style/WrapperContainer.css"
import Navbar from "../component/Navbar"
import {connect} from "react-redux"
import DialogComponent from "../component/Landing/Dialog"
import SnackbarComponent from "../component/Landing/Snackbar"
import {logOut} from "../redux/action/user"
import {withRouter} from "react-router-dom"

const Page = function({children,...props}){
    const [isDialog,setIsDialog] = useState(false)
    const [isSnackbar,setIsSnackbar] = useState(false)
    const handleDialog = () => {
        setIsDialog(!isDialog)
    }
    return(
        <div>
            <Navbar user={props.user} handleDialog={() => setIsDialog(!isDialog)}
             history={props.history} />
            {children}
            <DialogComponent 
             history={props.history}
             {...props.user} 
             logout={props.logOut} open={isDialog} 
             handleDialog={handleDialog} />
            <SnackbarComponent open={isSnackbar} 
             handleSnackbar={()=>setIsSnackbar(!isSnackbar)} />
        </div>
    )
}

function mapStateToProps(state){
    return{
        user:state.User
    }
}


export default withRouter(connect(mapStateToProps,{logOut})(Page))