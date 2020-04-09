import React from "react"
import {Campground} from "../component/Campground"
import {connect} from "react-redux"


const CampgroundContainer = function(props){
    return (
        <Campground {...props} />
    )
}



function mapStateToProps(state){
    return {
        Campground:state.Campground,
    }
}

export default connect(mapStateToProps,null)(CampgroundContainer)
