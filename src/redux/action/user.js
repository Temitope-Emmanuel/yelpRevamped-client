import {apiCall,setTokenHeader} from "../../hooks/api"
import {SET_CURRENT_USER} from "../actionTypes"
import {addError,removeError} from "./error"

export function addUser(newUser){
    return{
        type:SET_CURRENT_USER,
        newUser
    }
}

export function setAuthorizationHeader(token){
    setTokenHeader(token)
}

export function logOut(){
    return dispatch => {
        localStorage.clear();
        setAuthorizationHeader(false);
        dispatch(addUser({}))
    }
}



export function authUser(path,userData){
    return dispatch => {
        return new Promise((resolve,reject) => {
            return apiCall("post",`http://localhost:8081/api/auth/${path}`,userData).then(
                ({token,...user}) => {
                    localStorage.setItem("userToken",token);
                    setAuthorizationHeader(token);
                    dispatch(addUser(user))
                    dispatch(removeError())
                    resolve()
                }
            ).catch((err) => {
                dispatch(addError(err.message))
                reject()
            })
        })
    }
}