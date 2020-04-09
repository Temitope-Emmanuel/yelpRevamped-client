import {combineReducers} from "redux"
import User from "./User"
import Campground from "./Campground"
import Error from "./Error"

const rootReducers = combineReducers({
    User,
    Campground,
    Error
})

export default rootReducers