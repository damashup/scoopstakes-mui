import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../../redux/user/selectors/user.selectors';

import Splash from './splash-nav/splash';

const Challenge = ({round, currentUser, roundId}) => (

    <div>
      {currentUser
      ? <Splash roundId={roundId} entrant={currentUser.steemUsername} round={round}/>
      : 'loading...'
      }          
    </div>
  );

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Challenge);