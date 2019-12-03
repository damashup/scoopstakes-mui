import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../../../redux/user/selectors/user.selectors';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import {
        AccountDetails,
        LinkAccounts
        } from '../../../../components/app/account';

import {
        AdminMatchDay,
        AdminTeam, 
        AdminRound
      } from '../../../../components/app/admin';

      
import {
        CreateBattle, 
        OpenBattles, 
        MatchedBattles, 
        UnmatchedBattles, 
        BattlesHistory
        } from '../../../../components/app/battle';

import {
        HowToPlay,
        NextRound,
        PlaySignIn
        } from '../../../../components/app/play'; 

import { Landing , Nanzo, } from '../../../../pages';
import { selectNextRound } from '../../../../redux/round/selectors/round.selectors';


const SectionRoutes = ({ currentUser, match,nextRound }) => {
    const nextRoundId = nextRound.uid
    return (
        
        <Switch>
                {/* accounts subsection */}
                <Route path='/account/account-details'  component={AccountDetails}/>
                <Route path='/account/link-accounts'  component={LinkAccounts}/>


                {/* admin subsection */}
                <Route path='/admin/team'  component={AdminTeam}/>
                <Route path='/admin/round'  component={AdminRound}/>
                <Route path='/admin/matchday'  component={AdminMatchDay}/>

                {/* play subsection */}
                <Route exact path='/play/next-round'  component={NextRound}/>
                <Route exact path='/play/sign-in'  component={PlaySignIn}/>
                <Route exact path='/play/how-to' component={HowToPlay} />
                <Route path='/play/up-next' render={() => currentUser ? <Redirect to='/dashboard' />: <Landing />} />

                {/* battle subsection */}
                <Redirect exact from='/battle' to='/battle/create' />
                <Route path='/battle/nanzo/:roundId'  component={Nanzo}/> 
                <Redirect from='/battle/nanzo' to={`/battle/nanzo/${nextRoundId}`}/> 
                <Route exact path='/battle/create'  component={CreateBattle}/>
                <Route exact path='/battle/open'  component={OpenBattles}/> 
                <Route exact path='/battle/matched'  component={MatchedBattles}/> 
                <Route exact path='/battle/unmatched'  component={UnmatchedBattles}/>  
                <Route exact path='/battle/history'  component={BattlesHistory}/> 
          
          
          
        </Switch>
)};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  nextRound: selectNextRound
});

export default withRouter(connect(mapStateToProps)(SectionRoutes));
