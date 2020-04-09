import React,{Fragment,useState} from "react"
import Carousel from "../component/Carousel"
import Footer from "../component/Footer"
import {connect} from "react-redux"
import Navbar from "../component/Navbar"
import {CampgroundList} from "../component/Campground"
import Detail from "../component/Landing/Detail"
import DialogComponent from "../component/Landing/Dialog"
import SnackbarComponent from "../component/Landing/Snackbar"
import {logOut} from "../redux/action/user"

const Landing = function(props){

    const [isDialog,setIsDialog] = useState(false)
    const [isSnackbar,setIsSnackbar] = useState(false)

    const handleDialog = () => {
        setIsDialog(!isDialog)
    }
    return(
        <Fragment>
            <DialogComponent 
             {...props.user} 
             logout={props.logOut} open={isDialog} 
             handleDialog={handleDialog} />

            <SnackbarComponent open={isSnackbar} handleSnackbar={()=>setIsSnackbar(!isSnackbar)} />
            <Navbar user={props.user} handleDialog={() => setIsDialog(!isDialog)} history={props.routeProps.history} />
            <Carousel/>
            <Detail/>
            <CampgroundList/>
            <Footer/>
        </Fragment>
    )
}

function mapStateToProps(state){
    return{
        user:state.User
    }
}


export default connect(mapStateToProps,{logOut})(Landing)