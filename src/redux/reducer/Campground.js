import {ADD_CAMPGROUND,LOAD_CAMPGROUND,DELETE_CAMPGROUND} from "../actionTypes"


export default (state=[] , action) => {
    switch(action.type){
        case ADD_CAMPGROUND:
            return [...action.campgrounds];
        case LOAD_CAMPGROUND:
            return[...action.campData]
            return
        case DELETE_CAMPGROUND:
            return state.filter( m => m.id !== action.CampId);
        default:
            return state 
    }
}