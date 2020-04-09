import React from "react"
import Dashboard from "../component/Dashboard"
import {connect} from "react-redux"
import {addNewCampground,deleteCampground,editCampground} from "../redux/action/campground"

const DashboardContainer = function({routeProps,...props}){



    return(
        <React.Fragment>
            <Dashboard routeProps={routeProps} {...props} />
        </React.Fragment>
    )
}

function mapStateToProps(state){
    return{
        ...state.User,
        Campground:state.Campground
    }
}

export default connect(mapStateToProps,{addNewCampground,deleteCampground,editCampground})(DashboardContainer)