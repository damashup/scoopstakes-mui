import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { fetchSingleRoundStart } from '../../../redux/round/actions';
import { selectActiveRound } from '../../../redux/round/selectors/round.selectors';
import { createStructuredSelector } from 'reselect';
import NanzoComponent from './nanzo.component';


const NanzoContainer = ({match, fetchSingleRound, activeRound}) => {
  const roundId = match.params.roundId;
  fetchSingleRound(roundId)

    
    if(!activeRound) return 'Loading...';
    return <NanzoComponent activeRound={activeRound[0]} />

}
    
const mapStateToProps = createStructuredSelector({
    activeRound: selectActiveRound
});
    
const mapDispatchToProps = dispatch => ({
    fetchSingleRound: roundId => dispatch(fetchSingleRoundStart(roundId)),
})
      
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NanzoContainer));
