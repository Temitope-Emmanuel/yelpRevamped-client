import {apiCall} from "../../hooks/api"
import {ADD_CAMPGROUND,LOAD_CAMPGROUND,DELETE_CAMPGROUND,EDIT_CAMPGROUND} from "../actionTypes"
import {addError,removeError} from "./error"

export function addCampgroundAction(campgrounds){
    return {
        type:ADD_CAMPGROUND,
        campgrounds
    }
}

export function deleteCampgroundAction(id){
    return{
        type:DELETE_CAMPGROUND,
        id
    }
}
export function editCampgroundAction(id){
    return{
        type:EDIT_CAMPGROUND,
        id
    }
}
export function loadCampgroundAction(campData){
    return {
        type:LOAD_CAMPGROUND,
        campData
    }
}


export function addNewCampground(campgroundData = {} ){
    return (dispatch,getState) => {
        const state = getState()
        removeError()
        return new Promise((resolve,reject) => {
            return apiCall("post",`http://localhost:8081/api/user/${state.User.user.id}/campground`,campgroundData).then(
                response => {
                    dispatch(addCampgroundAction(response))
                    resolve()
                }
            ).catch(err => {
                dispatch(addError(err))
                reject(err)
            })
        })
    }
}
export function editCampground(campId,campData){
        return(dispatch,getState) => {
            const state = getState()
            removeError()
            return new Promise((resolve,reject) => {
                return apiCall("put",`http://localhost:8081/api/user/${state.User.user.id}/campground/${campId}`,campData).then(
                    response => {
                        dispatch(addCampgroundAction(response))
                        resolve()
                    }
                ).catch(err => {
                    dispatch(addError(err))
                    reject(err)
                })
            })
        } 
}

export function deleteCampground(campId){
    return (dispatch,getState) => {
        const state = getState()
        removeError()
        console.log(`This is delete campground the camp id ${campId}`)
        return new Promise((resolve,reject) => {
            return apiCall("delete",`http://localhost:8081/api/user/${state.User.user.id}/campground/${campId}`).then(
                response => {
                    dispatch(deleteCampgroundAction(campId))
                    resolve()
                }
            ).catch(err => {
                dispatch(addError(err))
                reject(err)
            })
        })
    }
}
export function loadCampground(campId){
    return (dispatch) => {
        removeError()
        console.log(`successfull reaching the load api ${campId}`)
        return new Promise((resolve,reject) => {
            return apiCall("get",`http://localhost:8081/api/campground/${campId}`).then(
                response => {
                    console.log(response)
                    dispatch(loadCampgroundAction(response))
                    resolve()
                }
            ).catch(err => {
                dispatch(addError(err))
                reject(err)
            })
        })
    }   
}