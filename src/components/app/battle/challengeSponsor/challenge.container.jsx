import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Challenge from './challenge.component'
import { selectNextRound } from '../../../../redux/round/selectors/round.selectors';



const ChallengeContainer = ({roundId, selectNextRound, nanzo, path }) => {
    return(  
        roundId ?
        ('placeholder - grab the round ID and use it to return round details ')
        : (<Challenge round={selectNextRound}/>)

    )};

const mapStateToProps = createStructuredSelector ({
    selectNextRound: selectNextRound,
    });
    
export default connect(mapStateToProps)(ChallengeContainer);