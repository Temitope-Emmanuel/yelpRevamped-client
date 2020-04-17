import {apiCall,setTokenHeader} from "../../hooks/api"
import {SET_CURRENT_USER} from "../actionTypes"
import {addError,addAlert,removeError} from "./error"

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
        dispatch(addAlert("You have successfully logged Out, Sarabada"))
    }
}



export function authUser(path,userData){
    return dispatch => {
        return new Promise((resolve,reject) => {
            return apiCall("post",`https://yelpcamp-server.herokuapp.com/api/auth/${path}`,{...userData,Date: new Date()}).then(
                ({token,...user}) => {
                    localStorage.setItem("userToken",token);
                    setAuthorizationHeader(token);
                    dispatch(addUser(user))
                    dispatch(removeError())
                    dispatch(addAlert(`Successfully Logged In,${user.username}`))
                    resolve()
                }
            ).catch((err) => {
                dispatch(addError(err.message))
                dispatch(addAlert(err.message))
                reject()
            })
        })
    }
}