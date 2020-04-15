import {combineReducers} from "redux"
import User from "./User"
import Campground from "./Campground"
import Error from "./Error"
import CampgroundComment from "./Comment"
import AllCampground from "./allCampground"
import Alert from "./Alert"

const rootReducers = combineReducers({
    User,
    Campground,
    Error,
    CampgroundComment,
    AllCampground,
    Alert
})


export default rootReducers