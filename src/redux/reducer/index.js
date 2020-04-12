import {combineReducers} from "redux"
import User from "./User"
import Campground from "./Campground"
import Error from "./Error"
import CampgroundComment from "./Comment"

const rootReducers = combineReducers({
    User,
    Campground,
    Error,
    CampgroundComment
})


export default rootReducers