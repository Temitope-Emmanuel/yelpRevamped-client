import {ADD_CAMPGROUND,LOAD_CAMPGROUND,DELETE_CAMPGROUND} from "../actionTypes"


export default (state=[] , action) => {
    switch(action.type){
        case ADD_CAMPGROUND:
            return [...action.campgrounds];
        case LOAD_CAMPGROUND:
            return state = action.campData
        case DELETE_CAMPGROUND:
            return state.filter( m => m._id !== action.id);
        default:
            return state 
    }
}