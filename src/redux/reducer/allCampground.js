import {LOAD_ALL_CAMPGROUND} from "../actionTypes"

export default (state=[],action) => {
    switch(action.type){
        case LOAD_ALL_CAMPGROUND:
            return [...action.campData]
        default:
            return state
      }
}