import {ADD_ERROR,ADD_ALERT,REMOVE_ERROR} from "../actionTypes"

export const addError = error => ({
    type:ADD_ERROR,
    error
})

export const removeError = () => ({
    type:REMOVE_ERROR
})
export const addAlert = alert => ({
    type:ADD_ALERT,
    alert
})