import React from "react"
import {Campground} from "../component/Campground"
import {connect} from "react-redux"
import {AddComment,deleteComment,loadComment} from "../redux/action/comment"
import {withRouter } from "react-router-dom"

const CampgroundContainer = function({location,history,match,...props}){
    React.useEffect(
        ()=>{
            props.loadComment(match.params.campId)
        },
        []
    )
    return (
        <Campground {...props} />
    )
}



function mapStateToProps(state){
    return {
        Campground:state.CampgroundComment,
        creator:state.User.user.username
    }
}

export default withRouter(connect(mapStateToProps,{loadComment,AddComment,deleteComment})(CampgroundContainer))
