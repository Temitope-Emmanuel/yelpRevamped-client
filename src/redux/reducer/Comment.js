import {ADD_COMMENT,LOAD_COMMENT,DELETE_COMMENT} from "../actionTypes"


export default (state=[],action) => {
    switch(action.type){
        case LOAD_COMMENT:
            return {...action.CampgroundComment}
        case ADD_COMMENT:
            return {...action.CampgroundComment};
        case DELETE_COMMENT:
            const filteredComment = state.comments.filter(m => m._id !== action.commentId)
            return {...state,comments:filteredComment}
        default:
            return state
    }
}