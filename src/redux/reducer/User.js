import {SET_CURRENT_USER} from "../actionTypes"

const DEFAULT_STATE = {
    isAuthenticated:false, //Becomes true when logged in
    user:{} //Contains the user info
}

export default ( state =DEFAULT_STATE,action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                user:action.newUser,
                isAuthenticated:!!Object.keys(action.newUser).length
            };
            default:
                return state
    }
}