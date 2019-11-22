import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectNextRound, selectOpenRounds } from '../../../../redux/round/selectors/round.selectors';
import NextRoundComponent from './component';

const NextRoundContainer = ({nextRound}) => {
  if(!nextRound) return 'Next round loading....';
  console.log(nextRound);
  return <NextRoundComponent nextRound={nextRound}/>
}

const mapStateToProps = createStructuredSelector({
  nextRound: selectNextRound
})

export default connect(mapStateToProps)(NextRoundContainer);
