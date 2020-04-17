import {LOAD_COMMENT,ADD_COMMENT,DELETE_COMMENT} from "../actionTypes"
import { apiCall } from "../../hooks/api"
import {addError,addAlert,removeError} from "./error"

export function loadCommentAction(CampgroundComment){
    return{
        type:LOAD_COMMENT,
        CampgroundComment
    }
}

export function addCommentAction(CampgroundComment){
    return{
        type:ADD_COMMENT,
        CampgroundComment
    }
}

export function deleteCommentAction(commentId){
    return {
        type:DELETE_COMMENT,
        commentId
    }
}

export function loadComment(campId){
    return dispatch => {
             removeError()
        return new Promise((resolve,reject) => {
            return apiCall("get",`/api/campground/${campId}/comment`).then(
                response => {
                    dispatch(loadCommentAction(response))
                    addAlert("")
                    resolve()
                }
            ).then(err => {
                dispatch(addError(err))
                reject(err)
            })
        })
    }
}

export function AddComment(comment){
    return (dispatch,getState) => {
        const state = getState()
        const user = {
            username:state.User.user.username,
            profileImage:state.User.user.profileImgUrl
        }
        const campId = comment.campground
        return new Promise((resolve,reject) => {
            return apiCall("post",`/api/campground/${campId}/comment`,{...comment,user,Date:Date.now()}).then(
                response => {
                    dispatch(addCommentAction(response))
                    dispatch(addAlert("Comment Successfully Added"))
                    resolve()
                }
            ).catch(err => {
                console.log(err)
                reject(err)
            }
        )
        })
    }
}

export function deleteComment(commentId){
    return (dispatch,getState) => {
        const state = getState()
        const campId = state.Campground._id
        return new Promise((resolve,reject) => {
            return apiCall("delete",`/api/campground/${campId}/comment/${commentId}`).then(
                response => {
                    dispatch(deleteCommentAction(commentId))
                    dispatch(addAlert("Comment Has Been removed"))
                    resolve(response)
                }
            ).catch(err => {
                dispatch(addError(err))
                reject(err)
            })
        })
    }
}