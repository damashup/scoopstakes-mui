import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../../../redux/user/selectors/user.selectors';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import {AdminTeam} from '../../../../components/app/admin';
import {AdminRound} from '../../../../components/app/admin';
import { Landing , Nanzo, } from '../../../../pages';
import { selectNextRound } from '../../../../redux/round/selectors/round.selectors';

const SectionRoutes = ({ currentUser, match,nextRound }) => {
    const nextRoundId = nextRound.uid
    console.log(match);
    return (
        
        <Switch>
          
          <Route path='/play/up-next' render={() => currentUser ? <Redirect to='/dashboard' />: <Landing />} />
          <Route path='/battle/nanzo/:roundId'  component={Nanzo}/> 
          <Redirect from='/battle/nanzo' to={`/battle/nanzo/${nextRoundId}`}/> 
          <Route path='/admin/team'  component={AdminTeam}/>
          <Route path='/admin/round'  component={AdminRound}/>
          
        </Switch>
)};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  nextRound: selectNextRound
});

export default withRouter(connect(mapStateToProps)(SectionRoutes));
