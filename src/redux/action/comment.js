import {add_Comment,edit_Comment,delete_Comment} from "../actionTypes"


export function addComment(newcomment){
    return{
        type:add_Comment,
        newcomment
    }
}
export function editComment(id){
    return {
        type:edit_Comment,
        id
    }
}
export function deleteComment(id){
    return {
        type:delete_Comment,
        id
    }
}