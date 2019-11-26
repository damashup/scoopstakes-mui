import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../../../redux/user/selectors/user.selectors';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Landing, SignIn, SignUp} from '../../../../pages';
import Section from '../../../section';


const MainRoutes = ({ currentUser}) => (
        <Switch>
          
          <Redirect exact from='/' to='/play' />
          <Route exact path='/play' render={() => currentUser ? <Redirect to='/dashboard' /> : <Landing /> } /> 
          <Redirect exact from='/leaderboards' to='/leaderboards/round' />
          <Redirect exact from='/battle' to='/battle/create' />
          <Route exact path='/signup' render={() => currentUser ? <Redirect to='/dashboard' />: <SignUp />} /> 
          <Redirect from='/sign-out' to='/signin' />
          <Route path='/:section'><Section currentUser={currentUser} /></Route>
          <Route exact path='/dashboard' render={() => currentUser ? <Section />: <SignIn />} />
          
        </Switch>
);


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(MainRoutes);
