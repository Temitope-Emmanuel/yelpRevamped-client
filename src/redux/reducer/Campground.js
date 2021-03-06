import {ADD_CAMPGROUND,DELETE_CAMPGROUND} from "../actionTypes"


export default (state=[] , action) => {
    switch(action.type){
        case ADD_CAMPGROUND:
            return [...action.campgrounds];
        case DELETE_CAMPGROUND:
            return state.filter( m => m._id !== action.id);
        default:
            return state 
    }
}