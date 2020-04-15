import React from "react"
import Dashboard from "../component/Dashboard"
import {connect} from "react-redux"
import {addNewCampground,deleteCampground,editCampground} from "../redux/action/campground"

const DashboardContainer = function({location,history,match,...props}){



    return(
        <React.Fragment>
            <Dashboard routeProps={{location,history,match}} {...props} />
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