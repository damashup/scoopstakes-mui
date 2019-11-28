import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectNextRound } from '../../../../redux/round/selectors/round.selectors';
import NextRoundComponent from './next-round.component';

const NextRoundContainer = ({nextRound}) => {
  if(!nextRound) return 'Next round loading....';
  return <NextRoundComponent nextRound={nextRound}/>
}

const mapStateToProps = createStructuredSelector({
  nextRound: selectNextRound
})

export default connect(mapStateToProps)(NextRoundContainer);
