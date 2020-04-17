import React from "react"
import {Route,Redirect} from "react-router-dom"
import WrapperContainer from "../component/WrapperContainer"

const PrivateRoute = ({ component: Component,...rest }) => {
    return(
    <Route {...rest} render={(props) => (
        rest.user.isAuthenticated
        ?<WrapperContainer><Component {...props} /></WrapperContainer>
        : <Redirect to='/login' />
    )} />)
    }

  export default PrivateRoute