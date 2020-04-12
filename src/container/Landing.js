import React,{Fragment} from "react"
import Carousel from "../component/Carousel"
import Footer from "../component/Footer"
import {CampgroundList} from "../component/Campground"
import Detail from "../component/Landing/Detail"
import {loadAllCampground} from "../redux/action/campground"
import {connect} from "react-redux"

const Landing = function(props){

    React.useEffect(()=>{
        props.loadAllCampground()
    },[])
    return(
        <Fragment>
            <Carousel/>
            <Detail/>
            <CampgroundList campground={props.campground} />
            <Footer/>
        </Fragment>
    )
}

function mapStateToProps(state){
    return {
        campground:state.Campground
    }
}

export default connect(mapStateToProps,{loadAllCampground})(Landing)