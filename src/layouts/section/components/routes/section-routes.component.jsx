import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../../../redux/user/selectors/user.selectors';
import { Switch, Route, withRouter } from 'react-router-dom';
import Subsection from '../../../subsection';

const SectionRoutes = ({ currentUser, match}) => (
        <Switch>
          
          <Route path={`${match.path}/:subsection`}><Subsection currentUser={currentUser}/></Route>
          
        </Switch>
);


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(SectionRoutes));
