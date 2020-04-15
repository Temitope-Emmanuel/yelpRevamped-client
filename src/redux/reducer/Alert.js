import {ADD_ALERT} from "../actionTypes"


export default (state = {message:""},action) => {
    switch(action.type){
        case ADD_ALERT:
            return {...state,message:action.alert};
        default:
            return state
    }
}