import React from 'react';

import Landing from "./container/Landing"
import WrapperContainer from "./component/WrapperContainer"
import {Switch,Route} from "react-router-dom"
import {TransitionGroup,CSSTransition} from "react-transition-group"
import AuthForm from "./component/SignUp"
import {connect} from "react-redux"
import {authUser} from "./redux/action/user"
import DashboardContainer from "./container/DashboardContainer"
import CampgroundContainer from "./container/CampgroundContainer"

function App(props) {

  return (
    <Route render={({location,...propsRoute}) => (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
          <Switch location={location}>
            <Route exact path="/" render={(routeProps) => (
              <WrapperContainer>
                <Landing routeProps = {routeProps}  />
              </WrapperContainer>
            )}/>
            <Route exact path="/login" render={(routeProps) =>(
              <WrapperContainer>
                <AuthForm signup={false}  heading="Welcome Back !!!" routeProps={routeProps} />
              </WrapperContainer>
            )} />
            <Route exact path="/signup" render={(routeProps) =>(
              <WrapperContainer>
                <AuthForm signup heading="Sign Up to Join" routeProps={routeProps}/>
              </WrapperContainer>
            )} />
            <Route exact path="/user/:userId" render={(routeProps) =>(
              <WrapperContainer>
                <DashboardContainer routeProps={routeProps} />
              </WrapperContainer>
            )} />
            <Route exact path="/campground/:campId" render={(routeProps) => (
              <WrapperContainer>
                <CampgroundContainer routeProps={routeProps} />
              </WrapperContainer>
            )} />
            <Route render={() => (<div>Whoops this page does not exist</div>)} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
    />
  );
}

function mapStateToProps(state){
  return {
    currentUser:state
  }
}


export default connect(mapStateToProps,{authUser})(App)
