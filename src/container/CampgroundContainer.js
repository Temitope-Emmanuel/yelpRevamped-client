import React from "react"
import {Campground} from "../component/Campground"
import {connect} from "react-redux"
import {AddComment,deleteComment,loadComment} from "../redux/action/comment"

const CampgroundContainer = function(props){
    React.useEffect(
        ()=>{
            props.loadComment(props.routeProps.match.params.campId)
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

export default connect(mapStateToProps,{loadComment,AddComment,deleteComment})(CampgroundContainer)
